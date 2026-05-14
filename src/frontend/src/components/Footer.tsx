import type { Theme } from "@/types";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";

interface FooterProps {
  theme: Theme;
}

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/laxmanpatel", icon: Github },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/laxmanpatel",
    icon: Linkedin,
  },
  { label: "Email", href: "mailto:laxman@example.com", icon: Mail },
];

export function Footer({ theme }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const isColorful = theme === "colorful";

  const scrollTo = (href: string) => {
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border/60" data-ocid="footer">
      {/* Top gradient accent bar */}
      <div
        className={`h-0.5 w-full ${
          isColorful
            ? "bg-gradient-to-r from-primary via-accent to-chart-4"
            : "bg-gradient-to-r from-primary/50 to-accent/50"
        }`}
      />

      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold font-display text-primary-foreground ${
                  isColorful
                    ? "bg-gradient-to-br from-primary via-accent to-chart-4"
                    : "bg-primary"
                }`}
              >
                LP
              </div>
              <div>
                <p className="font-display font-bold text-foreground">
                  Laxman Patel
                </p>
                <p className="text-xs text-muted-foreground">
                  B.Tech CS Student
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Passionate about building software solutions. Currently studying
              at{" "}
              <span className="text-foreground/70 font-medium">
                SISTec GN, Bhopal
              </span>
              . Learning every day to become a better engineer.
            </p>
            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium w-fit border ${
                isColorful
                  ? "bg-primary/10 border-primary/20 text-primary"
                  : "bg-muted border-border/60 text-muted-foreground"
              }`}
              data-ocid="footer.theme_indicator"
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  isColorful
                    ? "bg-gradient-to-r from-primary to-accent"
                    : "bg-primary/70"
                }`}
              />
              {isColorful ? "Colorful Mode" : "Dark Mode"}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(href)}
                    data-ocid={`footer.quick_link.${label.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary transition-smooth" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  data-ocid={`footer.social_link.${label.toLowerCase()}`}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-smooth group w-fit"
                >
                  <span className="w-8 h-8 rounded-lg flex items-center justify-center transition-smooth border border-border/60 group-hover:border-primary/30 bg-muted/40 group-hover:bg-primary/10">
                    <Icon className="w-4 h-4" />
                  </span>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {currentYear} Laxman Patel · Sagar Institute of Science and
            Technology (SISTec GN), Bhopal
          </p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-primary transition-smooth"
            data-ocid="footer.caffeine_link"
          >
            Built with love using caffeine.ai
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
