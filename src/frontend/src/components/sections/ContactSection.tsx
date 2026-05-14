import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Theme } from "@/types";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactSectionProps {
  theme: Theme;
}

interface FormState {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Bhopal, Madhya Pradesh",
    sub: "Sagar Institute of Science and Technology (SISTec GN)",
    href: undefined,
  },
  {
    icon: Mail,
    label: "Email",
    value: "laxman.patel@example.com",
    sub: undefined,
    href: "mailto:laxman.patel@example.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/laxmanpatel",
    sub: undefined,
    href: "https://github.com/laxmanpatel",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/laxmanpatel",
    sub: undefined,
    href: "https://linkedin.com/in/laxmanpatel",
  },
];

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.fullName.trim()) errors.fullName = "Full name is required.";
  if (!form.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.message.trim()) errors.message = "Message is required.";
  return errors;
}

export function ContactSection({ theme }: ContactSectionProps) {
  const isColorful = theme === "colorful";

  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormState, boolean>>
  >({});
  const [sending, setSending] = useState(false);

  function handleBlur(field: keyof FormState) {
    setTouched((t) => ({ ...t, [field]: true }));
    const newErrors = validate({ ...form });
    setErrors(newErrors);
  }

  function handleChange(field: keyof FormState, value: string) {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) {
      setErrors(validate(updated));
    }
  }

  async function handleSubmit() {
    const allTouched: Partial<Record<keyof FormState, boolean>> = {
      fullName: true,
      email: true,
      subject: true,
      message: true,
    };
    setTouched(allTouched);
    const newErrors = validate(form);
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setSending(true);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      toast.success("Message sent! I'll get back to you soon. 🎉", {
        duration: 5000,
      });
      setForm({ fullName: "", email: "", subject: "", message: "" });
      setTouched({});
      setErrors({});
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  const iconBg = isColorful
    ? "linear-gradient(135deg, oklch(0.72 0.22 280 / 0.18), oklch(0.68 0.20 190 / 0.18))"
    : "oklch(var(--primary) / 0.12)";

  return (
    <section
      id="contact"
      className="py-20 gradient-section-alt"
      data-ocid="contact.section"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-14">
            <Badge variant="outline" className="mb-4 px-4 py-1">
              <Mail className="w-3 h-3 mr-1.5" />
              Contact
            </Badge>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-foreground mb-3">
              Get <span className="gradient-text">In Touch</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-base">
              Got a project idea, internship opportunity, or just want to say
              hi? I'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
            {/* Contact info cards */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {CONTACT_INFO.map(({ icon: Icon, label, value, sub, href }) => (
                <div
                  key={label}
                  className="card-elevated rounded-xl p-4 flex items-start gap-4"
                  data-ocid={`contact.info.${label.toLowerCase()}`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{
                      background: iconBg,
                      border: "1px solid oklch(var(--primary) / 0.25)",
                    }}
                  >
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-foreground hover:text-primary transition-smooth truncate block"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-semibold text-foreground break-words leading-snug">
                        {value}
                      </p>
                    )}
                    {sub && (
                      <a
                        href="https://www.sistecgn.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-muted-foreground mt-0.5 leading-snug block underline decoration-dotted underline-offset-2 hover:decoration-solid hover:text-primary transition-colors duration-200"
                        data-ocid="contact.college_link"
                      >
                        {sub}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact form */}
            <Card
              className="lg:col-span-3 card-elevated rounded-2xl p-6 md:p-8 flex flex-col gap-5"
              data-ocid="contact.form"
            >
              {/* Full Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="contact-fullname" className="text-sm">
                    Full Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contact-fullname"
                    placeholder="Rahul Sharma"
                    value={form.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    onBlur={() => handleBlur("fullName")}
                    data-ocid="contact.name_input"
                    className="bg-muted/40"
                    aria-invalid={!!errors.fullName}
                  />
                  {touched.fullName && errors.fullName && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="contact.name_input.field_error"
                    >
                      {errors.fullName}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="contact-email" className="text-sm">
                    Email Address <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="rahul@example.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    data-ocid="contact.email_input"
                    className="bg-muted/40"
                    aria-invalid={!!errors.email}
                  />
                  {touched.email && errors.email && (
                    <p
                      className="text-xs text-destructive"
                      data-ocid="contact.email_input.field_error"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-subject" className="text-sm">
                  Subject
                </Label>
                <Input
                  id="contact-subject"
                  placeholder="Internship Opportunity / Project Collaboration"
                  value={form.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  onBlur={() => handleBlur("subject")}
                  data-ocid="contact.subject_input"
                  className="bg-muted/40"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-message" className="text-sm">
                  Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell me about your project, opportunity, or just say hello..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  onBlur={() => handleBlur("message")}
                  data-ocid="contact.message_textarea"
                  className="bg-muted/40 resize-none"
                  aria-invalid={!!errors.message}
                />
                {touched.message && errors.message && (
                  <p
                    className="text-xs text-destructive"
                    data-ocid="contact.message_textarea.field_error"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <Button
                type="button"
                className="gap-2 font-semibold w-full sm:w-auto glow-purple"
                onClick={handleSubmit}
                disabled={sending}
                data-ocid="contact.submit_button"
              >
                {sending ? (
                  <>
                    <span
                      className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
                      data-ocid="contact.loading_state"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
