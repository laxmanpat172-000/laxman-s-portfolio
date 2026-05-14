import { Button } from "@/components/ui/button";
import type { Theme } from "@/types";
import { Menu, Moon, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export function Header({ theme, onToggleTheme }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        "contact",
        "location",
        "projects",
        "skills",
        "about",
        "home",
      ];
      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sec);
          return;
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsMenuOpen(false);
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const isColorful = theme === "colorful";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? "bg-card/90 backdrop-blur-xl border-b border-border/60 shadow-subtle"
          : "bg-transparent"
      }`}
      data-ocid="header"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Initials */}
          <button
            type="button"
            onClick={() => scrollTo("#home")}
            className="flex items-center gap-2.5 group focus-ring rounded-lg px-1"
            data-ocid="header.logo_link"
          >
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold font-display text-primary-foreground transition-smooth shadow-md ${
                isColorful
                  ? "bg-gradient-to-br from-primary via-accent to-chart-4"
                  : "bg-primary"
              } group-hover:scale-110`}
            >
              LP
            </div>
            <span className="hidden sm:block font-display font-semibold text-foreground/90 group-hover:text-foreground transition-smooth">
              Laxman Patel
            </span>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-0.5"
            data-ocid="header.nav"
          >
            {navLinks.map(({ label, href }) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  type="button"
                  key={href}
                  onClick={() => scrollTo(href)}
                  data-ocid={`header.nav_link.${sectionId}`}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-smooth focus-ring ${
                    isActive
                      ? isColorful
                        ? "bg-primary/20 text-primary"
                        : "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle pill */}
            <button
              type="button"
              onClick={onToggleTheme}
              data-ocid="header.theme_toggle"
              aria-label={`Switch to ${isColorful ? "dark" : "colorful"} theme`}
              className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-smooth focus-ring border ${
                isColorful
                  ? "bg-gradient-to-r from-primary/15 via-accent/15 to-chart-4/15 border-primary/30 text-primary hover:from-primary/25 hover:via-accent/25 hover:to-chart-4/25"
                  : "bg-muted/60 border-border/60 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {/* Track */}
              <span
                className={`relative w-9 h-5 rounded-full transition-smooth flex items-center ${
                  isColorful
                    ? "bg-gradient-to-r from-primary to-accent"
                    : "bg-muted-foreground/30"
                }`}
              >
                <span
                  className={`absolute w-3.5 h-3.5 rounded-full bg-white shadow-sm transition-smooth ${
                    isColorful ? "translate-x-4" : "translate-x-0.5"
                  }`}
                />
              </span>
              {isColorful ? (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Colorful</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Dark</span>
                </>
              )}
            </button>

            {/* Mobile menu */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-9 h-9"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-ocid="header.mobile_menu_button"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border/60"
          data-ocid="header.mobile_menu"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map(({ label, href }) => {
              const sectionId = href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <button
                  type="button"
                  key={href}
                  onClick={() => scrollTo(href)}
                  data-ocid={`header.mobile_nav_link.${sectionId}`}
                  className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-smooth ${
                    isActive
                      ? "bg-primary/15 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
