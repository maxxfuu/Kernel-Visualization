export function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-4 pt-16 pb-10 text-center sm:px-6 sm:pt-24">
      <h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-6xl md:text-7xl">
        Step through{" "}
        <span className="inline-block rotate-3 bg-blue-200 px-2 dark:bg-blue-900/70">
          kernels
        </span>{" "}
        not print statements
      </h1>
      <p className="mt-5 text-base text-balance text-muted-foreground sm:text-lg">
        Turns your C/CUDA kernels into a live, steppable 3D view
        of your buffers. Watch every thread, loop, and buffer update as it happens.
      </p>
    </section>
  );
}
