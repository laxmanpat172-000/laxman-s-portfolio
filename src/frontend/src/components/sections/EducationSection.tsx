import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Theme } from "@/types";
import { BookOpen, GraduationCap, MapPin, School } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface EducationSectionProps {
  theme: Theme;
}

const EDUCATION = [
  {
    icon: GraduationCap,
    level: "B.Tech — Computer Science",
    institution: "Sagar Institute of Science and Technology (SISTec GN)",
    location: "Bhopal, Madhya Pradesh",
    years: "2023 – Present",
    status: "Ongoing",
    statusHue: 150,
    description:
      "Pursuing Bachelor of Technology in Computer Science. Currently in 2nd year with a CGPA of 8.6+. Actively participating in tech fests, coding competitions, and project-based learning.",
    href: "https://www.sistecgn.ac.in/",
    hue: 280,
  },
  {
    icon: School,
    level: "12th / Higher Secondary (H.S.C.)",
    institution: "Vidhya Bharti H.Sec School",
    location: "Dwarka Nagar, Bhopal, Madhya Pradesh",
    years: "2021 – 2023",
    status: "Completed",
    statusHue: 190,
    description:
      "Completed Higher Secondary education with focus on Science stream (Physics, Chemistry, Mathematics). Built strong analytical and problem-solving foundations that drive my passion for Computer Science.",
    href: "https://www.google.com/maps/search/Vidhya+Bharti+H.Sec+School+Dwarka+Nagar+Bhopal",
    hue: 190,
  },
];

export function EducationSection({ theme }: EducationSectionProps) {
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

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-20 gradient-section-alt"
      data-ocid="education.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div
            className={`text-center mb-14 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <BookOpen className="w-3 h-3 mr-1.5" />
              Education
            </Badge>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-foreground">
              Academic <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-base">
              Building knowledge brick by brick — from school foundations to
              engineering excellence.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className={`absolute left-6 sm:left-8 top-4 bottom-4 w-0.5 transition-all duration-1000 ${
                visible ? "opacity-100" : "opacity-0"
              } ${isColorful ? "bg-gradient-to-b from-primary via-accent to-chart-4" : "bg-gradient-to-b from-primary/60 to-primary/20"}`}
            />

            <div className="flex flex-col gap-8">
              {EDUCATION.map(
                (
                  {
                    icon: Icon,
                    level,
                    institution,
                    location,
                    years,
                    status,
                    statusHue,
                    description,
                    href,
                    hue,
                  },
                  i,
                ) => (
                  <div
                    key={institution}
                    className={`relative flex gap-6 sm:gap-8 transition-all duration-700 ${
                      visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${150 + i * 180}ms` }}
                    data-ocid={`education.item.${i + 1}`}
                  >
                    {/* Timeline dot */}
                    <div
                      className="relative z-10 flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: isColorful
                          ? `linear-gradient(135deg, oklch(0.72 0.22 ${hue} / 0.22) 0%, oklch(0.65 0.20 ${(hue + 60) % 360} / 0.18) 100%)`
                          : "oklch(var(--primary) / 0.13)",
                        border: "1px solid oklch(var(--primary) / 0.28)",
                      }}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>

                    {/* Card */}
                    <Card
                      className="card-elevated flex-1 p-5 sm:p-6 rounded-2xl min-w-0"
                      data-ocid={`education.card.${i + 1}`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div className="min-w-0">
                          <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium mb-1">
                            {level}
                          </p>
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-display font-bold text-lg text-foreground hover:text-primary transition-colors duration-200 underline decoration-dotted underline-offset-2 hover:decoration-solid leading-snug block"
                            data-ocid={`education.link.${i + 1}`}
                          >
                            {institution}
                          </a>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <Badge
                            variant="outline"
                            className="text-xs whitespace-nowrap"
                            style={{
                              color: `oklch(0.72 0.22 ${statusHue})`,
                              borderColor: `oklch(0.72 0.22 ${statusHue} / 0.40)`,
                              background: `oklch(0.72 0.22 ${statusHue} / 0.08)`,
                            }}
                          >
                            {status}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-3">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          {location}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                          {years}
                        </span>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {description}
                      </p>
                    </Card>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
