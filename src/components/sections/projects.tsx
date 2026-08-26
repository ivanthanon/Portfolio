"use client";

import { useI18n } from "@/lib/i18n-context";
import { Reveal } from "@/components/ui/reveal";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const { t } = useI18n();
  const { projects } = t;
  const { featured } = projects;

  return (
    <section id="projects" className="border-t border-border">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title mb-12">{projects.title}</h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="card group relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/5 transition-transform group-hover:scale-150" />

            <div className="relative">
              <div className="mb-4 flex items-center gap-2">
                <span className="rounded-md bg-accent-10 px-2 py-1 font-mono text-xs font-semibold text-accent">
                  TS
                </span>
                <span className="rounded-md bg-green-500/10 px-2 py-1 font-mono text-xs font-semibold text-green-600 dark:text-green-400">
                  NestJS
                </span>
              </div>

              <h3 className="mb-2 text-xl font-bold">{featured.name}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted">{featured.description}</p>

              <div className="mb-6 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors border-accent-30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-semibold transition-all border-accent-40 hover:text-accent"
              >
                {featured.cta}
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
