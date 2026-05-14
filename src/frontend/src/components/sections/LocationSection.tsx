import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Theme } from "@/types";
import { ExternalLink, MapPin, Navigation, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface LocationSectionProps {
  theme: Theme;
}

export function LocationSection({ theme }: LocationSectionProps) {
  const isColorful = theme === "colorful";
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const iconBg = isColorful
    ? "linear-gradient(135deg, oklch(0.72 0.22 280 / 0.18), oklch(0.68 0.20 190 / 0.18))"
    : "oklch(var(--primary) / 0.12)";

  return (
    <section
      id="location"
      ref={sectionRef}
      className="py-20 bg-background"
      data-ocid="location.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <MapPin className="w-3 h-3 mr-1.5" />
              Location
            </Badge>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-foreground mb-3">
              College <span className="gradient-text">Location</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-base">
              Pursuing B.Tech at one of Bhopal's premier engineering institutes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
            {/* Map iframe */}
            <div
              className={`lg:col-span-3 card-elevated rounded-2xl overflow-hidden transition-all duration-700 delay-100 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              data-ocid="location.map_card"
            >
              <iframe
                title="SISTec GN Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.3!2d77.4126!3d23.2599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4280b57dc43b%3A0x50b2756af1c6b2c4!2sSagar%20Institute%20of%20Science%20%26%20Technology%20(SISTec%20GN)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="360"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full min-h-[260px] sm:min-h-[320px] lg:min-h-[360px]"
              />
            </div>

            {/* Info panel */}
            <div
              className={`lg:col-span-2 flex flex-col gap-4 transition-all duration-700 delay-200 ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              {/* College name */}
              <div
                className="card-elevated rounded-xl p-5 flex items-start gap-4"
                data-ocid="location.college_card"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: iconBg,
                    border: "1px solid oklch(var(--primary) / 0.25)",
                  }}
                >
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-1">
                    Institution
                  </p>
                  <a
                    href="https://www.sistecgn.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-foreground hover:text-primary transition-smooth leading-snug block underline decoration-dotted underline-offset-2 hover:decoration-solid"
                    data-ocid="location.college_link"
                  >
                    Sagar Institute of Science and Technology (SISTec GN)
                  </a>
                  <p className="text-xs text-muted-foreground mt-1">
                    B.Tech — Computer Science
                  </p>
                </div>
              </div>

              {/* Address */}
              <div
                className="card-elevated rounded-xl p-5 flex items-start gap-4"
                data-ocid="location.address_card"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: iconBg,
                    border: "1px solid oklch(var(--primary) / 0.25)",
                  }}
                >
                  <Navigation className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-1">Address</p>
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    Airport Road, Gandhi Nagar
                  </p>
                  <p className="text-sm text-muted-foreground leading-snug">
                    Bhopal, Madhya Pradesh 462036
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div
                className="card-elevated rounded-xl p-5 flex items-start gap-4"
                data-ocid="location.phone_card"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: iconBg,
                    border: "1px solid oklch(var(--primary) / 0.25)",
                  }}
                >
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground mb-1">Phone</p>
                  <a
                    href="tel:+917554029999"
                    className="text-sm font-semibold text-foreground hover:text-primary transition-smooth block"
                    data-ocid="location.phone_link"
                  >
                    +91 755 402 9999
                  </a>
                </div>
              </div>

              {/* Get Directions button */}
              <Button
                asChild
                className={`w-full gap-2 font-semibold mt-auto ${
                  isColorful ? "" : "glow-purple"
                }`}
                data-ocid="location.directions_button"
              >
                <a
                  href="https://www.google.com/maps/search/Sagar+Institute+of+Science+and+Technology+SISTec+GN+Bhopal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>
              </Button>

              {/* Visit college site */}
              <Button
                asChild
                variant="outline"
                className="w-full gap-2 font-semibold"
                data-ocid="location.college_site_button"
              >
                <a
                  href="https://www.sistecgn.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit College Website
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
