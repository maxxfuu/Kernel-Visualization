'use client'

import { useCallback, useEffect, useRef, useSyncExternalStore } from 'react'
import { cn } from '@/lib/utils'


// ─── Config ───────────────────────────────────────────────────────────────────
const SPACING = 20     // px between dot centres
const RADIUS  = 130    // px -hover influence radius
const BASE_A  = 0.13   // resting dot opacity
const PEAK_A  = 0.92   // fully-lit dot opacity

export default function InteractiveDotGrid({
  showLabel = true,
  colors,
  className,
}: {
  showLabel?: boolean
  // Optional theme override. Omit it and the component keeps its original look
  // (faint white dots on near-black in dark mode). `dot`/`highlight` are "r,g,b"
  // strings; each dot interpolates from `dot` (resting) to `highlight` (fully
  // lit near the cursor) -pass only `dot` for a single-colour grid.
  colors?: {
    background?: string
    dot?: string
    highlight?: string
    baseAlpha?: number
    peakAlpha?: number
  }
  className?: string
} = {}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef    = useRef<HTMLCanvasElement>(null)
  const mouseRef     = useRef<{ x: number; y: number } | null>(null)
  // Latest theme override, read by the RAF loop without re-subscribing it.
  const colorsRef    = useRef(colors)
  colorsRef.current  = colors
  const isDarkRef = useRef(false)

  // ── Theme detection ────────────────────────────────────────────────────────
  // useSyncExternalStore (not useState+effect) so the server/first-client-paint
  // snapshot always agrees (both `false`) -avoids a hydration mismatch when the
  // theme-init script has already applied `dark` to <html> before this mounts.
  const subscribeDark = useCallback((onChange: () => void) => {
    const card = containerRef.current?.closest('[data-card-theme]')
    const observer = new MutationObserver(onChange)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    if (card) observer.observe(card, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])
  const getDarkSnapshot = useCallback(() => {
    const card = containerRef.current?.closest('[data-card-theme]')
    return card ? card.classList.contains('dark') : document.documentElement.classList.contains('dark')
  }, [])
  const getServerDarkSnapshot = useCallback(() => false, [])
  const isDark = useSyncExternalStore(subscribeDark, getDarkSnapshot, getServerDarkSnapshot)
  isDarkRef.current = isDark

  // ── Pointer tracking ───────────────────────────────────────────────────────
  // Listens at the window level so the cursor is tracked even when the
  // dot grid is rendered behind other elements (e.g. as a background under
  // a `pointer-events: none` wrapper). Only writes to a ref -no React
  // state, no re-renders. Listeners are passive so the browser never
  // blocks scroll/touch on this handler.
  useEffect(() => {
    const updateFromClient = (clientX: number, clientY: number) => {
      const canvas = canvasRef.current
      if (!canvas) return
      // getBoundingClientRect is fast on a stable layout -modern browsers
      // serve it from the cached layout box without triggering reflow.
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: clientX - rect.left, y: clientY - rect.top }
    }

    const onMouseMove = (e: MouseEvent) => updateFromClient(e.clientX, e.clientY)
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) updateFromClient(t.clientX, t.clientY)
    }
    const clearPointer = () => { mouseRef.current = null }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', clearPointer, { passive: true })
    window.addEventListener('touchcancel', clearPointer, { passive: true })
    // Fires when the cursor leaves the browser viewport entirely.
    document.addEventListener('mouseleave', clearPointer)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', clearPointer)
      window.removeEventListener('touchcancel', clearPointer)
      document.removeEventListener('mouseleave', clearPointer)
    }
  }, [])

  // ── Canvas render loop ─────────────────────────────────────────────────────
  useEffect(() => {
    const canvas: HTMLCanvasElement = canvasRef.current!
    const ctx = canvas.getContext('2d')!

    type Dot = { x: number; y: number; b: number }
    let dots: Dot[] = []
    let animId = 0
    let alive  = true
    let cw = 0, ch = 0

    function build() {
      const dpr  = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      cw = rect.width
      ch = rect.height
      if (!cw || !ch) return
      canvas.width  = Math.round(cw * dpr)
      canvas.height = Math.round(ch * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      dots = []
      const cols = Math.floor(cw / SPACING) + 2
      const rows = Math.floor(ch / SPACING) + 2
      const ox   = (cw % SPACING) / 2
      const oy   = (ch % SPACING) / 2
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ x: ox + c * SPACING, y: oy + r * SPACING, b: 0 })
        }
      }
    }

    function frame() {
      if (!alive) return
      ctx.clearRect(0, 0, cw, ch)

      const mx      = mouseRef.current?.x ?? -99999
      const my      = mouseRef.current?.y ?? -99999
      const r2      = RADIUS * RADIUS

      // Resting + lit colours (and opacities), from the theme override when
      // given, else the original dark/light defaults. Parsed once per frame.
      const ov      = colorsRef.current
      const dark    = isDarkRef.current
      const restRGB = ov?.dot ?? (dark ? '255,255,255' : '10,10,10')
      const litRGB  = ov?.highlight ?? restRGB
      const baseA   = ov?.baseAlpha ?? (dark ? BASE_A : 0.16)
      const peakA   = ov?.peakAlpha ?? PEAK_A
      const [r0, g0, b0] = restRGB.split(',').map(Number)
      const [r1, g1, b1] = litRGB.split(',').map(Number)

      for (const d of dots) {
        const dx    = d.x - mx
        const dy    = d.y - my
        const dist2 = dx * dx + dy * dy
        const tgt   = dist2 < r2 ? Math.pow(1 - Math.sqrt(dist2) / RADIUS, 1.5) : 0

        // Fast attack, slow release -feels organic
        d.b += (tgt > d.b ? 0.16 : 0.07) * (tgt - d.b)
        if (d.b < 0.004) d.b = 0

        const alpha = baseA + (peakA - baseA) * d.b
        const sz    = 1 + d.b * 1.2   // grow slightly when lit (1px → 2.2px max)
        // Interpolate rest → lit by illumination (a no-op when litRGB === restRGB).
        const r = Math.round(r0 + (r1 - r0) * d.b)
        const g = Math.round(g0 + (g1 - g0) * d.b)
        const b = Math.round(b0 + (b1 - b0) * d.b)
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha.toFixed(2)})`
        ctx.fillRect(d.x - sz / 2, d.y - sz / 2, sz, sz)
      }

      animId = requestAnimationFrame(frame)
    }

    build()
    frame()

    const ro = new ResizeObserver(build)
    ro.observe(canvas.parentElement!)

    return () => {
      alive = false
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  const bg        = colors?.background ?? (isDark ? '#0a0a0a' : '#ffffff')
  const labelColor = isDark ? 'rgba(255,255,255,0.45)' : 'rgba(10,10,10,0.45)'
  const hintColor  = isDark ? 'rgba(255,255,255,0.18)' : 'rgba(10,10,10,0.22)'

  return (
    <div
      ref={containerRef}
      className={cn('absolute inset-0 -z-10 overflow-hidden', className)}
      style={{ background: bg }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{ width: '100%', height: '100%' }}
      />
      {showLabel && (
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2">
          <span style={{ color: labelColor, fontSize: 22, fontWeight: 700, letterSpacing: '-0.02em' }}>
            Dot Grid
          </span>
          <span style={{ color: hintColor, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            hover to illuminate
          </span>
        </div>
      )}
    </div>
  )
}
