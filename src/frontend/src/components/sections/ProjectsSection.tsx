import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import type { Theme } from "@/types";
import { useEffect, useRef, useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
  category: string;
  firstPrize?: boolean;
}

interface ProjectsSectionProps {
  theme: Theme;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AgroHub – Smart Crop Information & Disease Management Platform",
    description:
      "Developed a comprehensive platform that provides detailed crop-related information to farmers. Identifies crop diseases using symptoms and images, suggests treatments and best farming practices to minimize crop losses.",
    techStack: ["Python", "Machine Learning", "React", "HTML/CSS"],
    githubLink: "#",
    category: "AI & Agriculture",
  },
  {
    id: 2,
    title: "Crowdsourced Civic Issue Reporting System",
    description:
      "Built a citizen-driven platform where users can report civic issues like potholes, garbage dumps, and water leakages with location data. Helps municipal authorities track, prioritize, and resolve complaints efficiently.",
    techStack: ["React", "Maps API", "Node.js", "Database"],
    githubLink: "#",
    category: "Civic Tech",
  },
  {
    id: 3,
    title: "Remote Controlled Robot for Hazardous Working Conditions",
    description:
      "Wireless remote-controlled surveillance robot designed for industrial hazardous environments. Features real-time camera feed, obstacle detection, and wireless control. Won first prize for innovation and execution.",
    techStack: ["Embedded C", "Arduino", "Wireless", "Robotics"],
    githubLink: "#",
    category: "Robotics",
    firstPrize: true,
  },
];

export function ProjectsSection({ theme }: ProjectsSectionProps) {
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
      { threshold: 0.08 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-background"
      data-ocid="projects.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
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
              🚀 Projects
            </Badge>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-foreground mb-3">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm sm:text-base">
              Real projects built with passion — from agriculture AI and civic
              tech to award-winning robotics, each solving a genuine real-world
              problem.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <div
                key={project.id}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(32px)",
                  transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
                }}
              >
                <ProjectCard project={project} theme={theme} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
