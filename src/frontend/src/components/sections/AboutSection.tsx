import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { Theme } from "@/types";
import {
  Award,
  BookOpen,
  Briefcase,
  Code2,
  GraduationCap,
  MapPin,
  User,
} from "lucide-react";
import { useState } from "react";

interface AboutSectionProps {
  theme: Theme;
}

const ACHIEVEMENTS = [
  {
    icon: Award,
    label: "CGPA",
    value: "8.6+",
    desc: "Current Academic GPA",
    hue: 280,
  },
  {
    icon: Code2,
    label: "Projects",
    value: "5+",
    desc: "Completed academic projects",
    hue: 190,
  },
  {
    icon: BookOpen,
    label: "Skills",
    value: "5",
    desc: "Programming languages & tools",
    hue: 150,
  },
  {
    icon: Briefcase,
    label: "Year",
    value: "2nd",
    desc: "B.Tech Computer Science",
    hue: 320,
  },
];

export function AboutSection({ theme }: AboutSectionProps) {
  const isColorful = theme === "colorful";
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="about"
      className="py-20 gradient-section-alt"
      data-ocid="about.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <User className="w-3 h-3 mr-1.5" />
              About Me
            </Badge>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-foreground">
              Who Am I?
            </h2>
          </div>

          {/* Main two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start mb-12">
            {/* LEFT: Profile photo + college card */}
            <div className="flex flex-col items-center gap-6">
              {/* Photo */}
              <div className="relative" data-ocid="about.photo_container">
                <div
                  className={`absolute -inset-3 rounded-full blur-2xl opacity-40 ${isColorful ? "bg-gradient-to-br from-primary via-accent to-chart-4" : "bg-primary/30"}`}
                />
                <div
                  className={`relative w-48 h-48 rounded-full p-1.5 ${isColorful ? "bg-gradient-to-br from-primary via-accent to-chart-4" : "bg-gradient-to-br from-primary/80 to-accent/60"}`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-card">
                    {!imgError ? (
                      <img
                        src="/assets/profile-photo.jpg"
                        alt="Laxman Patel"
                        className="w-full h-full object-cover object-top"
                        onError={() => setImgError(true)}
                      />
                    ) : (
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

              {/* College Card */}
              <Card
                className="card-elevated w-full max-w-sm p-6 rounded-2xl"
                data-ocid="about.college_card"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${isColorful ? "bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30" : "bg-primary/12 border border-primary/25"}`}
                  >
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex flex-col gap-1 min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                      Current Institution
                    </p>
                    <p className="font-display font-bold text-foreground text-sm leading-snug">
                      <a
                        href="https://www.sistecgn.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-dotted underline-offset-2 hover:decoration-solid hover:text-primary transition-colors duration-200"
                        data-ocid="about.college_link.card"
                      >
                        Sagar Institute of Science and Technology (SISTec GN)
                      </a>
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        Bhopal, Madhya Pradesh
                      </span>
                    </div>
                    <Badge variant="secondary" className="mt-2 w-fit text-xs">
                      B.Tech Computer Science
                    </Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* RIGHT: Bio text */}
            <div className="flex flex-col gap-5 justify-center">
              <h3 className="font-display font-bold text-2xl text-foreground">
                Hi, I'm <span className="gradient-text">Laxman Patel</span> 👋
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                I'm a passionate{" "}
                <strong className="text-foreground">
                  B.Tech Computer Science student
                </strong>{" "}
                at{" "}
                <strong className="text-foreground">
                  <a
                    href="https://www.sistecgn.ac.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-dotted underline-offset-2 hover:decoration-solid hover:text-primary transition-colors duration-200"
                    data-ocid="about.college_link.bio"
                  >
                    Sagar Institute of Science and Technology (SISTec GN),
                    Bhopal
                  </a>
                </strong>
                . I love turning complex problems into simple, elegant solutions
                through code.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                My journey started with C programming in first year, and since
                then I've expanded into C++, Python, HTML, and CSS. I enjoy
                building projects that have real-world impact — from calculator
                apps to full-featured web applications.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                When I'm not coding, I participate in college tech events, read
                about new technologies, and work on personal projects to sharpen
                my skills.
              </p>

              {/* Quick info grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-2 p-5 bg-card/50 rounded-xl border border-border/40">
                {(
                  [
                    { label: "Name", value: "Laxman Patel" },
                    { label: "Course", value: "B.Tech CS" },
                    { label: "Year", value: "2nd Year" },
                    { label: "Location", value: "Bhopal, MP" },
                    { label: "College", value: "SISTec GN", isLink: true },
                    { label: "CGPA", value: "8.6+" },
                  ] as { label: string; value: string; isLink?: boolean }[]
                ).map(({ label, value, isLink }) => (
                  <div key={label} className="flex flex-col gap-0.5">
                    <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">
                      {label}
                    </span>
                    <span className="text-sm font-semibold text-foreground">
                      {isLink ? (
                        <a
                          href="https://www.sistecgn.ac.in/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-dotted underline-offset-2 hover:decoration-solid hover:text-primary transition-colors duration-200"
                          data-ocid="about.college_link.grid"
                        >
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements grid */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            data-ocid="about.achievements_grid"
          >
            {ACHIEVEMENTS.map(({ icon: Icon, label, value, desc, hue }, i) => (
              <Card
                key={label}
                className="card-elevated p-5 flex flex-col gap-3 rounded-xl text-center items-center"
                data-ocid={`about.achievement.${i + 1}`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: isColorful
                      ? `linear-gradient(135deg, oklch(0.72 0.22 ${hue} / 0.20) 0%, oklch(0.65 0.20 ${(hue + 50) % 360} / 0.15) 100%)`
                      : "oklch(var(--primary) / 0.12)",
                    border: "1px solid oklch(var(--primary) / 0.25)",
                  }}
                >
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-3xl font-black font-display gradient-text leading-none">
                    {value}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    {label}
                  </p>
                  <p className="text-xs text-muted-foreground">{desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
