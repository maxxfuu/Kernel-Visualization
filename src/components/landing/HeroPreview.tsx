import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Safari } from "@/components/ui/safari";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/github";

export function HeroPreview() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
      <div className="relative">
        <Safari
          imageSrc="/images/kernel-viz-preview-light.png"
          imageSrcDark="/images/kernel-viz-preview-dark.png"
          className="w-full drop-shadow-sm"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent sm:h-36" />
      </div>

      <div className="mt-10 flex items-center justify-center gap-2">
        <Button>
          <GithubIcon data-icon="inline-start" className="size-4" />
          View on GitHub
        </Button>
        <Button
          variant="outline"
          className="dark:border-border dark:bg-background dark:hover:bg-muted"
          render={<Link href="/workspace" />}
          nativeButton={false}
        >
          Get Started
          <ArrowUpRight data-icon="inline-end" className="size-4" />
        </Button>
      </div>
    </section>
  );
}
