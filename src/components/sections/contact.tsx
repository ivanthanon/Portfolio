"use client";

import { useI18n } from "@/lib/i18n-context";
import { Reveal } from "@/components/ui/reveal";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  const { t } = useI18n();
  const { contact } = t;

  return (
    <section id="contact" className="border-t border-border">
      <div className="section-container text-center">
        <Reveal>
          <h2 className="section-title mb-6">{contact.title}</h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-muted">{contact.description}</p>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:ivanthanonmoreno@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg shadow-accent-25"
            >
              <Mail className="h-4 w-4" />
              {contact.email}
            </a>
            <a
              href="https://linkedin.com/in/ivanthanon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors border-accent-40 hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
              {contact.linkedin}
            </a>
            <a
              href="https://github.com/ivanthanon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors border-accent-40 hover:text-accent"
            >
              <Github className="h-4 w-4" />
              {contact.github}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
