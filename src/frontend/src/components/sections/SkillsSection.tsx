import { SkillBar, type SkillBarData } from "@/components/SkillBar";
import { Badge } from "@/components/ui/badge";
import type { Theme } from "@/types";
import { useEffect, useRef, useState } from "react";

interface SkillsSectionProps {
  theme: Theme;
}

const PRIMARY_SKILLS: SkillBarData[] = [
  {
    name: "C",
    percentage: 85,
    color: "oklch(0.70 0.20 30)",
    colorGradientEnd: "oklch(0.68 0.22 40)",
    emoji: "⚙️",
    level: "Advanced",
  },
  {
    name: "C++",
    percentage: 80,
    color: "oklch(0.72 0.22 280)",
    colorGradientEnd: "oklch(0.65 0.18 190)",
    emoji: "🔷",
    level: "Advanced",
  },
  {
    name: "Python",
    percentage: 78,
    color: "oklch(0.72 0.18 150)",
    colorGradientEnd: "oklch(0.68 0.20 160)",
    emoji: "🐍",
    level: "Intermediate",
  },
  {
    name: "HTML",
    percentage: 88,
    color: "oklch(0.68 0.22 40)",
    colorGradientEnd: "oklch(0.70 0.20 30)",
    emoji: "🌐",
    level: "Advanced",
  },
  {
    name: "CSS",
    percentage: 82,
    color: "oklch(0.65 0.22 220)",
    colorGradientEnd: "oklch(0.62 0.20 240)",
    emoji: "🎨",
    level: "Advanced",
  },
];

interface SecondarySkill {
  name: string;
  percentage: number;
  color: string;
  emoji: string;
  description: string;
}

const SECONDARY_SKILLS: SecondarySkill[] = [
  {
    name: "Data Structures",
    percentage: 70,
    color: "oklch(0.64 0.22 320)",
    emoji: "🗂️",
    description: "Arrays, Linked Lists, Trees, Graphs",
  },
  {
    name: "Algorithms",
    percentage: 68,
    color: "oklch(0.68 0.20 280)",
    emoji: "🔁",
    description: "Sorting, Searching, Dynamic Programming",
  },
  {
    name: "OOP",
    percentage: 75,
    color: "oklch(0.70 0.18 190)",
    emoji: "🧩",
    description: "Classes, Inheritance, Polymorphism",
  },
];

function SecondarySkillCard({
  skill,
  theme,
  visible,
  index,
}: {
  skill: SecondarySkill;
  theme: Theme;
  visible: boolean;
  index: number;
}) {
  const isColorful = theme === "colorful";
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setFilled(true), index * 100 + 200);
    return () => clearTimeout(t);
  }, [visible, index]);

  return (
    <div
      className="card-elevated rounded-xl p-4 flex flex-col gap-3"
      data-ocid={`skills.secondary.item.${index + 1}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">{skill.emoji}</span>
          <div>
            <p className="text-sm font-semibold text-foreground leading-tight">
              {skill.name}
            </p>
            <p className="text-xs text-muted-foreground">{skill.description}</p>
          </div>
        </div>
        <span
          className="text-sm font-bold tabular-nums"
          style={{ color: skill.color }}
        >
          {skill.percentage}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-muted/70 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: filled ? `${skill.percentage}%` : "0%",
            transition: "width 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
            background: isColorful
              ? `linear-gradient(90deg, ${skill.color}, oklch(0.65 0.18 190))`
              : skill.color,
          }}
        />
      </div>
    </div>
  );
}

export function SkillsSection({ theme }: SkillsSectionProps) {
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
      id="skills"
      ref={sectionRef}
      className="py-20 gradient-section-alt"
      data-ocid="skills.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div
            className="text-center mb-14"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <Badge variant="outline" className="mb-4 px-4 py-1 text-xs">
              ⚡ Technical Skills
            </Badge>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-foreground mb-3">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm sm:text-base">
              Core programming languages and computer science concepts I've
              mastered during my B.Tech journey at SISTec GN Bhopal.
            </p>
          </div>

          {/* Primary skills — horizontal progress bars */}
          <div
            className="bg-card border border-border/50 rounded-2xl p-6 sm:p-8 mb-8"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}
          >
            <h3 className="font-display font-bold text-foreground text-lg mb-6 flex items-center gap-2">
              <span className="text-xl">💻</span>
              Programming Languages
            </h3>
            <div className="flex flex-col gap-5">
              {PRIMARY_SKILLS.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  theme={theme}
                  index={i}
                  animate={visible}
                />
              ))}
            </div>
          </div>

          {/* Secondary skills — cards */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.7s ease 0.25s, transform 0.7s ease 0.25s",
            }}
          >
            <h3 className="font-display font-bold text-foreground text-base mb-4 flex items-center gap-2">
              <span className="text-xl">🎓</span>
              Core CS Concepts
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SECONDARY_SKILLS.map((skill, i) => (
                <SecondarySkillCard
                  key={skill.name}
                  skill={skill}
                  theme={theme}
                  visible={visible}
                  index={i}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
