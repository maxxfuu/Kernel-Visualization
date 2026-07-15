import { Globe } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";

const LINKS = [
  { href: "https://github.com/maxxfuu", label: "GitHub", icon: GithubIcon },
  { href: "https://linkedin.com/in/maxxfuu", label: "LinkedIn", icon: LinkedinIcon },
  { href: "https://maxxfuu.com", label: "maxxfuu.com", icon: Globe },
];

export function LandingFooter() {
  return (
    <footer className="bg-background">
      <Separator />
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            Kernel Visualization - built by{" "}
            <a
              href="https://maxxfuu.com"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-foreground hover:underline"
            >
              maxxfuu
            </a>
          </p>
          <div className="flex items-center gap-5 text-sm text-muted-foreground">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <link.icon className="size-4" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          © 2026 Visual Kernels.
        </p>
      </div>
    </footer>
  );
}
