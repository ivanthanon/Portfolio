"use client";

import { useI18n } from "@/lib/i18n-context";
import { Reveal } from "@/components/ui/reveal";
import { Layers, ShieldCheck, TestTube2, Settings, BookOpen } from "lucide-react";

const CATEGORY_ICONS = [Layers, BookOpen, ShieldCheck, Settings, Settings];

export function Skills() {
  const { t } = useI18n();
  const { skills } = t;

  return (
    <section id="skills" className="border-t border-border">
      <div className="section-container">
        <Reveal>
          <h2 className="section-title mb-12">{skills.title}</h2>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((cat, i) => {
            const Icon = CATEGORY_ICONS[i] ?? Layers;
            return (
              <Reveal key={i} delay={i * 80}>
                <div className="card group h-full">
                  <div className="mb-4 flex items-center gap-2">
                    <Icon className="h-4 w-4 text-accent transition-transform group-hover:scale-110" />
                    <h3 className="text-sm font-semibold">{cat.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-border px-2.5 py-1 text-xs font-medium text-muted transition-colors border-accent-30"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
