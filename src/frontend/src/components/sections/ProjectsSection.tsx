import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import type { Project, Theme } from "@/types";
import { useEffect, useRef, useState } from "react";

interface ProjectsSectionProps {
  theme: Theme;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Calculator App",
    description:
      "A command-line calculator built in C that supports basic and scientific operations. Handles arithmetic, trigonometry, and power functions with a clean CLI interface.",
    techStack: ["C", "CLI"],
    githubLink: "#",
    demoLink: "#",
    category: "C",
  },
  {
    id: 2,
    title: "Todo Application",
    description:
      "A web-based task manager with add, edit, and delete functionality and local storage. Built with Python backend and HTML/CSS frontend for a seamless experience.",
    techStack: ["Python", "HTML", "CSS"],
    githubLink: "#",
    demoLink: "#",
    category: "Web",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Displays real-time weather data using API integration with beautiful visual output. Fetches live data and presents temperature, humidity, and forecasts at a glance.",
    techStack: ["Python", "API", "CSS"],
    githubLink: "#",
    demoLink: "#",
    category: "Python",
  },
  {
    id: 4,
    title: "Expense Tracker",
    description:
      "Console app for tracking daily expenses with budget alerts and monthly summaries. Uses C++ file I/O to persist records and provides category-wise breakdown.",
    techStack: ["C++", "File I/O"],
    githubLink: "#",
    demoLink: "#",
    category: "C++",
  },
  {
    id: 5,
    title: "Chat System",
    description:
      "Simple socket-based chat application supporting multiple client connections. Built in Python using sockets and threading to enable real-time messaging between users.",
    techStack: ["Python", "Sockets", "Networking"],
    githubLink: "#",
    demoLink: "#",
    category: "Python",
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
              Real projects built with passion — from C programs to web apps,
              each solving a genuine problem and showcasing core CS skills.
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
