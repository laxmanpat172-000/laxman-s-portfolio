import { Button } from "@/components/ui/button";
import type { Theme } from "@/types";
import { ChevronDown, ExternalLink, Github, Mail } from "lucide-react";
import { useState } from "react";

interface HeroSectionProps {
  theme: Theme;
}

export function HeroSection({ theme }: HeroSectionProps) {
  const isColorful = theme === "colorful";
  const [imgError, setImgError] = useState(false);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      data-ocid="hero.section"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-hero-bg" />
      <div className="absolute inset-0 bg-grid-subtle opacity-25" />

      {/* Orbs */}
      <div
        className="absolute top-1/4 -left-32 w-96 h-96 rounded-full blur-3xl opacity-25 animate-pulse"
        style={{ background: "oklch(0.72 0.22 280)" }}
      />
      <div
        className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ background: "oklch(0.68 0.20 190)", animationDelay: "1.2s" }}
      />
      {isColorful && (
        <>
          <div
            className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-30"
            style={{ background: "oklch(0.60 0.25 320)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[80px] opacity-25"
            style={{ background: "oklch(0.70 0.22 30)" }}
          />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12 max-w-6xl mx-auto">
          {/* LEFT: Text */}
          <div className="flex-1 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
            {/* Status badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-medium"
              style={{
                background: isColorful
                  ? "linear-gradient(90deg, oklch(0.72 0.22 280 / 0.18), oklch(0.68 0.20 190 / 0.15))"
                  : "oklch(0.72 0.22 280 / 0.12)",
                borderColor: "oklch(0.72 0.22 280 / 0.35)",
                color: "oklch(0.88 0.10 280)",
              }}
              data-ocid="hero.status_badge"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available for Opportunities
            </div>

            {/* Name */}
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-none">
              <span className="gradient-text">Laxman</span>
              <br />
              <span className="text-foreground/95">Patel</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-foreground/80 font-display font-semibold">
              B.Tech Computer Science{" "}
              <span className="text-muted-foreground font-normal">|</span>{" "}
              <a
                href="https://www.sistecgn.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-2 hover:decoration-solid hover:text-foreground transition-colors duration-200"
                data-ocid="hero.college_link.subtitle"
              >
                SISTec GN, Bhopal
              </a>
            </p>

            {/* Description */}
            <p className="max-w-lg text-base text-muted-foreground leading-relaxed">
              Passionate about C, C++, Python, and Web Development. Building
              real-world projects that solve problems and demonstrate strong
              software engineering fundamentals.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <Button
                type="button"
                size="lg"
                className="gap-2 px-8 font-semibold glow-purple min-w-[160px]"
                onClick={() => scrollTo("projects")}
                data-ocid="hero.view_projects_button"
              >
                View Projects
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="gap-2 px-6 font-semibold border-border/60 hover:border-primary/50"
                asChild
                data-ocid="hero.github_button"
              >
                <a
                  href="https://github.com/laxmanpatel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
                </a>
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="lg"
                className="gap-2 px-6 font-semibold"
                onClick={() => scrollTo("contact")}
                data-ocid="hero.contact_button"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
            </div>
          </div>

          {/* RIGHT: Profile photo */}
          <div
            className="flex-shrink-0 flex flex-col items-center gap-4"
            data-ocid="hero.photo_container"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className={`absolute -inset-2 rounded-full blur-xl opacity-50 ${isColorful ? "bg-gradient-to-br from-primary via-accent to-chart-4" : "bg-primary/40"}`}
              />
              {/* Ring border */}
              <div
                className={`relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-1 ${isColorful ? "bg-gradient-to-br from-primary via-accent to-chart-4" : "bg-gradient-to-br from-primary/80 to-accent/60"}`}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  {!imgError ? (
                    <img
                      src="/assets/profile-photo.jpg"
                      alt="Laxman Patel — B.Tech CS Student"
                      className="w-full h-full object-cover object-top"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    /* Fallback: gradient circle with initials */
                    <div
                      className="w-full h-full rounded-full flex items-center justify-center text-4xl font-black font-display text-primary-foreground"
                      style={{
                        background: isColorful
                          ? "linear-gradient(135deg, oklch(0.55 0.25 280) 0%, oklch(0.60 0.22 190) 50%, oklch(0.65 0.22 320) 100%)"
                          : "linear-gradient(135deg, oklch(0.45 0.22 280) 0%, oklch(0.35 0.18 260) 100%)",
                      }}
                    >
                      LP
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* College name badge below photo */}
            <div
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border text-xs font-medium backdrop-blur-sm"
              style={{
                background: "oklch(0.08 0.01 280 / 0.5)",
                borderColor: "oklch(0.72 0.22 280 / 0.25)",
                color: "oklch(0.80 0.08 280)",
              }}
            >
              <a
                href="https://www.sistecgn.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-2 hover:decoration-solid transition-colors duration-200"
                style={{ color: "inherit" }}
                data-ocid="hero.college_link.badge"
              >
                SISTec GN, Bhopal
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground/50 hover:text-muted-foreground transition-smooth focus-ring rounded-lg px-3 py-1"
        onClick={() => scrollTo("about")}
        aria-label="Scroll to about section"
        data-ocid="hero.scroll_button"
      >
        <span className="text-xs tracking-wider uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  );
}
