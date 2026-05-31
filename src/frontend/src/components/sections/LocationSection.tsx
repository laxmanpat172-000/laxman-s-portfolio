import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Theme } from "@/types";
import {
  ExternalLink,
  GraduationCap,
  MapPin,
  Navigation,
  Phone,
  School,
} from "lucide-react";
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
              My <span className="gradient-text">Locations</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-base">
              From school roots to engineering excellence — both institutions
              that shaped my journey in Bhopal.
            </p>
          </div>

          {/* ── COLLEGE ROW ── */}
          <div
            className={`mb-10 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* College sub-heading */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: iconBg,
                  border: "1px solid oklch(var(--primary) / 0.25)",
                }}
              >
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">
                College
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
              {/* College map */}
              <div
                className="lg:col-span-3 card-elevated rounded-2xl overflow-hidden"
                data-ocid="location.college_map_card"
              >
                <iframe
                  title="SISTec GN Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.3!2d77.4126!3d23.2599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4280b57dc43b%3A0x50b2756af1c6b2c4!2sSagar%20Institute%20of%20Science%20%26%20Technology%20(SISTec%20GN)!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full min-h-[220px] sm:min-h-[280px] lg:min-h-[300px]"
                />
              </div>

              {/* College info */}
              <div className="lg:col-span-2 flex flex-col gap-3">
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
                    <p className="text-xs text-muted-foreground mb-1">
                      Address
                    </p>
                    <p className="text-sm font-semibold text-foreground leading-snug">
                      Airport Road, Gandhi Nagar
                    </p>
                    <p className="text-sm text-muted-foreground leading-snug">
                      Bhopal, Madhya Pradesh 462036
                    </p>
                  </div>
                </div>

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

                <div className="flex gap-2 mt-auto">
                  <Button
                    asChild
                    className={`flex-1 gap-1.5 font-semibold text-xs ${
                      isColorful ? "" : "glow-purple"
                    }`}
                    data-ocid="location.college_directions_button"
                  >
                    <a
                      href="https://www.google.com/maps/search/Sagar+Institute+of+Science+and+Technology+SISTec+GN+Bhopal"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      Directions
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 gap-1.5 font-semibold text-xs"
                    data-ocid="location.college_site_button"
                  >
                    <a
                      href="https://www.sistecgn.ac.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Website
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className={`border-t border-border/30 mb-10 transition-all duration-700 delay-200 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* ── SCHOOL ROW ── */}
          <div
            className={`transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* School sub-heading */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: isColorful
                    ? "linear-gradient(135deg, oklch(0.72 0.22 190 / 0.18), oklch(0.68 0.20 150 / 0.18))"
                    : "oklch(var(--primary) / 0.12)",
                  border: "1px solid oklch(var(--primary) / 0.25)",
                }}
              >
                <School className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground">
                School
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
              {/* School map */}
              <div
                className="lg:col-span-3 card-elevated rounded-2xl overflow-hidden"
                data-ocid="location.school_map_card"
              >
                <iframe
                  title="Vidhya Bharti School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8!2d77.3853!3d23.2532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42f0e3ef1e5d%3A0x1a2b3c4d5e6f7a8b!2sDwarka%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full min-h-[220px] sm:min-h-[280px] lg:min-h-[300px]"
                />
              </div>

              {/* School info */}
              <div className="lg:col-span-2 flex flex-col gap-3">
                <div
                  className="card-elevated rounded-xl p-5 flex items-start gap-4"
                  data-ocid="location.school_card"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: isColorful
                        ? "linear-gradient(135deg, oklch(0.72 0.22 190 / 0.18), oklch(0.68 0.20 150 / 0.18))"
                        : "oklch(var(--primary) / 0.12)",
                      border: "1px solid oklch(var(--primary) / 0.25)",
                    }}
                  >
                    <School className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground mb-1">School</p>
                    <a
                      href="https://www.google.com/maps/search/Vidhya+Bharti+H.Sec+School+Dwarka+Nagar+Bhopal"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-foreground hover:text-primary transition-smooth leading-snug block underline decoration-dotted underline-offset-2 hover:decoration-solid"
                      data-ocid="location.school_link"
                    >
                      Vidhya Bharti H.Sec School
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">
                      12th / Higher Secondary
                    </p>
                  </div>
                </div>

                <div
                  className="card-elevated rounded-xl p-5 flex items-start gap-4"
                  data-ocid="location.school_address_card"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: isColorful
                        ? "linear-gradient(135deg, oklch(0.72 0.22 190 / 0.18), oklch(0.68 0.20 150 / 0.18))"
                        : "oklch(var(--primary) / 0.12)",
                      border: "1px solid oklch(var(--primary) / 0.25)",
                    }}
                  >
                    <Navigation className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground mb-1">
                      Address
                    </p>
                    <p className="text-sm font-semibold text-foreground leading-snug">
                      Dwarka Nagar
                    </p>
                    <p className="text-sm text-muted-foreground leading-snug">
                      Bhopal, Madhya Pradesh
                    </p>
                  </div>
                </div>

                <Button
                  asChild
                  className={`w-full gap-2 font-semibold mt-auto ${
                    isColorful ? "" : "glow-purple"
                  }`}
                  data-ocid="location.school_directions_button"
                >
                  <a
                    href="https://www.google.com/maps/search/Vidhya+Bharti+H.Sec+School+Dwarka+Nagar+Bhopal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MapPin className="w-4 h-4" />
                    Find School on Maps
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
