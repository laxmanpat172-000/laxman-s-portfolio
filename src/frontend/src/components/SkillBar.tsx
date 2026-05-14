import type { Theme } from "@/types";
import { useEffect, useRef, useState } from "react";

export interface SkillBarData {
  name: string;
  percentage: number;
  color: string; // raw oklch() string
  colorGradientEnd?: string;
  emoji: string;
  level: "Beginner" | "Intermediate" | "Advanced";
}

interface SkillBarProps {
  skill: SkillBarData;
  theme: Theme;
  index: number;
  /** When true the bar fills immediately (parent controls visibility) */
  animate?: boolean;
}

export function SkillBar({
  skill,
  theme,
  index,
  animate = false,
}: SkillBarProps) {
  const [filled, setFilled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isColorful = theme === "colorful";
  const gradEnd = skill.colorGradientEnd ?? "oklch(0.65 0.18 190)";

  useEffect(() => {
    if (animate) {
      const t = setTimeout(() => setFilled(true), index * 80 + 100);
      return () => clearTimeout(t);
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setFilled(true), index * 80 + 100);
          observer.disconnect();
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animate, index]);

  const levelColor: Record<string, string> = {
    Advanced: "text-primary",
    Intermediate: "text-accent",
    Beginner: "text-muted-foreground",
  };

  return (
    <div
      ref={ref}
      className="flex flex-col gap-2"
      data-ocid={`skills.item.${index + 1}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span
            className="text-lg leading-none"
            role="img"
            aria-label={skill.name}
          >
            {skill.emoji}
          </span>
          <span className="text-sm font-semibold text-foreground">
            {skill.name}
          </span>
          <span
            className={`text-xs font-medium ${levelColor[skill.level]} hidden sm:inline`}
          >
            · {skill.level}
          </span>
        </div>
        <span
          className="text-sm font-bold tabular-nums"
          style={{ color: skill.color }}
        >
          {skill.percentage}%
        </span>
      </div>

      {/* Track */}
      <div className="h-2.5 rounded-full bg-muted/70 overflow-hidden relative">
        {/* Shimmer overlay */}
        <div
          className="h-full rounded-full relative overflow-hidden"
          style={{
            width: filled ? `${skill.percentage}%` : "0%",
            transition: "width 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
            background: isColorful
              ? `linear-gradient(90deg, ${skill.color}, ${gradEnd})`
              : skill.color,
          }}
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
              animation: filled ? "shimmer 2s ease-in-out infinite" : "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}
