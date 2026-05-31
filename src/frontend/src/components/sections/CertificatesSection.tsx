import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Theme } from "@/types";
import {
  BookOpen,
  Building2,
  Calendar,
  ExternalLink,
  Smartphone,
  Trophy,
} from "lucide-react";
import { type ElementType, useEffect, useRef, useState } from "react";

interface CertificatesSectionProps {
  theme: Theme;
}

interface Certificate {
  id: string;
  title: string;
  subtitle?: string;
  org: string;
  platform?: string;
  instructor?: string;
  date: string;
  details?: string;
  certNo?: string;
  teamBadge?: string;
  verifyUrl?: string;
  hue: number;
  Icon: ElementType;
}

const CERTIFICATES: Certificate[] = [
  {
    id: "tit-srijan-2026",
    title: "Certificate of Participation",
    subtitle: "TIT Srijan 2026 — 24 Hours National Level Hackathon",
    org: "Technocrats Institute of Technology, Bhopal",
    platform: "Organised via Unstop",
    date: "2026",
    details: "Participated in Screening Round: Idea Submission",
    teamBadge: "Team: Tech Elite",
    hue: 45,
    Icon: Trophy,
  },
  {
    id: "cisco-apply-ai",
    title: "Apply AI: Analyze Customer Reviews",
    org: "Cisco Networking Academy",
    platform: "Sagar Group of Institutions — SISTec",
    instructor: "Instructor: Amit Swami",
    date: "27 Dec 2025",
    hue: 210,
    Icon: BookOpen,
  },
  {
    id: "sdt-mobile-dev",
    title: "Mobile Application Development",
    subtitle: "1 Week Value Addition Course (VAC)",
    org: "Saksham Digital Technology",
    platform: "12 Jan 2026 – 16 Jan 2026",
    date: "January 2026",
    certNo: "SDT01280",
    verifyUrl: "https://sakshamdigitaltechnology.com/certificate",
    hue: 150,
    Icon: Smartphone,
  },
];

export function CertificatesSection({ theme }: CertificatesSectionProps) {
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
      id="certificates"
      ref={sectionRef}
      className="py-20 bg-background"
      data-ocid="certificates.section"
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
              <Trophy className="w-3 h-3 mr-1.5" />
              Certifications & Achievements
            </Badge>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-foreground">
              My <span className="gradient-text">Certificates</span>
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md mx-auto text-base">
              3 certificates earned — hackathons, industry courses &
              professional training.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES.map(
              (
                {
                  id,
                  title,
                  subtitle,
                  org,
                  platform,
                  instructor,
                  date,
                  details,
                  certNo,
                  teamBadge,
                  verifyUrl,
                  hue,
                  Icon,
                },
                i,
              ) => (
                <div
                  key={id}
                  className={`transition-all duration-700 ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${120 + i * 100}ms` }}
                  data-ocid={`certificates.item.${i + 1}`}
                >
                  <Card
                    className="card-elevated h-full flex flex-col p-5 rounded-2xl group hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
                    style={{
                      boxShadow: isColorful
                        ? `0 0 0 1px oklch(0.72 0.18 ${hue} / 0.18)`
                        : undefined,
                    }}
                  >
                    {/* Icon + Date row */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: isColorful
                            ? `linear-gradient(135deg, oklch(0.72 0.22 ${hue} / 0.22) 0%, oklch(0.65 0.20 ${(hue + 60) % 360} / 0.18) 100%)`
                            : "oklch(var(--primary) / 0.13)",
                          border: `1px solid oklch(0.72 0.20 ${hue} / 0.30)`,
                        }}
                      >
                        <Icon
                          className="w-5 h-5"
                          style={{
                            color: isColorful
                              ? `oklch(0.72 0.22 ${hue})`
                              : "oklch(var(--primary))",
                          }}
                        />
                      </div>
                      <Badge
                        variant="outline"
                        className="text-xs flex items-center gap-1 flex-shrink-0"
                        style={{
                          color: `oklch(0.72 0.20 ${hue})`,
                          borderColor: `oklch(0.72 0.20 ${hue} / 0.40)`,
                          background: `oklch(0.72 0.20 ${hue} / 0.08)`,
                        }}
                      >
                        <Calendar className="w-3 h-3" />
                        {date}
                      </Badge>
                    </div>

                    {/* Title */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-base text-foreground leading-snug mb-1">
                        {title}
                      </h3>
                      {subtitle && (
                        <p className="text-xs text-muted-foreground/80 leading-snug mb-2">
                          {subtitle}
                        </p>
                      )}

                      {/* Org */}
                      <div className="flex items-start gap-1.5 text-xs text-muted-foreground mb-1">
                        <Building2 className="w-3 h-3 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{org}</span>
                      </div>

                      {/* Platform / period */}
                      {platform && (
                        <p className="text-xs text-muted-foreground/70 mb-1 pl-4.5">
                          {platform}
                        </p>
                      )}

                      {/* Instructor */}
                      {instructor && (
                        <p className="text-xs text-muted-foreground/60 mb-1 pl-4.5 italic">
                          {instructor}
                        </p>
                      )}

                      {/* Details */}
                      {details && (
                        <p className="text-xs text-muted-foreground/70 mt-1.5">
                          {details}
                        </p>
                      )}

                      {/* Team badge */}
                      {teamBadge && (
                        <span
                          className="inline-flex items-center mt-2 text-[11px] font-semibold px-2 py-0.5 rounded-full"
                          style={{
                            color: `oklch(0.72 0.22 ${hue})`,
                            background: `oklch(0.72 0.20 ${hue} / 0.12)`,
                            border: `1px solid oklch(0.72 0.20 ${hue} / 0.30)`,
                          }}
                        >
                          🏆 {teamBadge}
                        </span>
                      )}

                      {/* Cert No */}
                      {certNo && (
                        <p className="text-xs text-muted-foreground/60 font-mono mt-2">
                          Cert No: {certNo}
                        </p>
                      )}
                    </div>

                    {/* Action */}
                    {verifyUrl ? (
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 w-full gap-1.5 text-xs group-hover:border-primary/60 transition-colors duration-200"
                        asChild
                        data-ocid={`certificates.verify_button.${i + 1}`}
                      >
                        <a
                          href={verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Verify Certificate
                        </a>
                      </Button>
                    ) : (
                      <div
                        className="mt-4 w-full text-center text-xs py-1.5 rounded-lg"
                        style={{
                          color: `oklch(0.72 0.18 ${hue})`,
                          background: `oklch(0.72 0.18 ${hue} / 0.08)`,
                          border: `1px solid oklch(0.72 0.18 ${hue} / 0.22)`,
                        }}
                      >
                        ✓ Certificate Earned
                      </div>
                    )}
                  </Card>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
