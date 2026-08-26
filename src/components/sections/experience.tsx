"use client";

import { useI18n } from "@/lib/i18n-context";
import { Reveal } from "@/components/ui/reveal";
import { Briefcase } from "lucide-react";

export function Experience() {
  const { t } = useI18n();
  const { experience } = t;

  return (
    <section id="experience" className="border-t border-border">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title mb-12">{experience.title}</h2>
        </Reveal>

        <div className="relative space-y-0">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 hidden w-px bg-border md:block" />

          {experience.roles.map((role, i) => (
            <Reveal key={i} delay={i * 150}>
              <div className="group relative flex gap-6 pb-10 last:pb-0">
                {/* Timeline dot */}
                <div className="relative z-10 mt-1 hidden md:block">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface-raised transition-colors border-accent-50">
                    <Briefcase className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
                  </div>
                </div>

                <div className="card mb-6 w-full">
                  <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold">{role.title}</h3>
                      <p className="text-sm font-medium text-accent">{role.company}</p>
                    </div>
                    <span className="font-mono text-xs text-muted">{role.period}</span>
                  </div>

                  <ul className="space-y-2">
                    {role.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm leading-relaxed text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-50" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
