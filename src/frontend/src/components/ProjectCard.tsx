import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project, Theme } from "@/types";
import { Github } from "lucide-react";

const TECH_COLORS: Record<string, string> = {
  C: "oklch(0.70 0.20 30)",
  "C++": "oklch(0.72 0.22 280)",
  Python: "oklch(0.72 0.18 150)",
  HTML: "oklch(0.68 0.22 40)",
  CSS: "oklch(0.66 0.22 220)",
  CLI: "oklch(0.60 0.15 280)",
  API: "oklch(0.65 0.18 190)",
  "File I/O": "oklch(0.62 0.16 320)",
  Sockets: "oklch(0.68 0.20 150)",
  Networking: "oklch(0.64 0.18 190)",
};

const PROJECT_EMOJIS: Record<number, string> = {
  1: "🖩",
  2: "✅",
  3: "🌦️",
  4: "💰",
  5: "💬",
};

const CATEGORY_ACCENT: Record<string, string> = {
  C: "oklch(0.70 0.20 30)",
  "C++": "oklch(0.72 0.22 280)",
  Python: "oklch(0.72 0.18 150)",
  Web: "oklch(0.68 0.22 40)",
};

interface ProjectCardProps {
  project: Project;
  theme: Theme;
  index: number;
}

export function ProjectCard({ project, theme, index }: ProjectCardProps) {
  const isColorful = theme === "colorful";
  const accent = CATEGORY_ACCENT[project.category] ?? "oklch(0.72 0.22 280)";
  const emoji = PROJECT_EMOJIS[project.id] ?? "📁";

  return (
    <div
      className="card-elevated rounded-2xl overflow-hidden flex flex-col group"
      data-ocid={`projects.item.${index + 1}`}
    >
      {/* Gradient top bar */}
      <div
        className="h-1 w-full flex-shrink-0"
        style={{
          background: isColorful
            ? `linear-gradient(90deg, ${accent}, oklch(0.65 0.20 190), oklch(0.64 0.22 320))`
            : `linear-gradient(90deg, ${accent}, oklch(0.65 0.18 190))`,
        }}
      />

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Icon + category */}
        <div className="flex items-start justify-between gap-2">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 border"
            style={{
              background: isColorful
                ? `linear-gradient(135deg, ${accent}20, oklch(0.65 0.18 190)/0.15)`
                : `${accent}12`,
              borderColor: `${accent}30`,
            }}
          >
            {emoji}
          </div>
          <Badge
            variant="outline"
            className="text-xs h-5 px-2 flex-shrink-0"
            style={{ borderColor: `${accent}50`, color: accent }}
          >
            {project.category}
          </Badge>
        </div>

        {/* Title + description */}
        <div className="flex-1">
          <h3 className="font-display font-bold text-foreground text-base leading-snug mb-2 group-hover:gradient-text transition-smooth">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => {
            const tagColor = TECH_COLORS[tech] ?? "oklch(0.65 0.15 280)";
            return (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-full text-xs font-medium border"
                style={{
                  background: isColorful ? `${tagColor}15` : `${tagColor}10`,
                  borderColor: `${tagColor}35`,
                  color: tagColor,
                }}
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* GitHub button */}
        <div className="pt-1">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid={`projects.github_link.${index + 1}`}
          >
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs h-8 w-full transition-smooth hover:border-primary/50"
            >
              <Github className="w-3.5 h-3.5" />
              View on GitHub
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
