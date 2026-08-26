"use client";

import { useI18n } from "@/lib/i18n-context";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  const { t } = useI18n();
  const { about } = t;

  return (
    <section id="about" className="border-t border-border">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title mb-8">{about.title}</h2>
        </Reveal>

        <Reveal delay={50}>
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
            {about.intro}
          </p>
        </Reveal>

        <div className="space-y-8">
          {about.blocks.map((block, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="card">
                <h3 className="mb-2 text-base font-semibold">{block.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{block.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={500}>
          <p className="mt-10 max-w-3xl text-base italic leading-relaxed text-muted sm:text-lg">
            {about.closing}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
