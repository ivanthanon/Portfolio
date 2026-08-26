"use client";

import { useI18n } from "@/lib/i18n-context";
import { Reveal } from "@/components/ui/reveal";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const { t } = useI18n();

  return (
    <section className="section-container flex min-h-[90vh] flex-col items-center justify-center text-center">
      <Reveal>
        <p className="mb-4 font-mono text-sm tracking-wider text-accent">{t.hero.greeting}</p>
      </Reveal>

      <Reveal delay={100}>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{t.hero.name}</h1>
      </Reveal>

      <Reveal delay={200}>
        <p className="mt-3 font-mono text-lg text-muted sm:text-xl">{t.hero.role}</p>
      </Reveal>

      <Reveal delay={250}>
        <p className="mt-2 font-mono text-xs tracking-wider text-muted/80 sm:text-sm">
          {t.hero.craftsperson}
        </p>
      </Reveal>

      <Reveal delay={300}>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {t.hero.tagline}
        </p>
      </Reveal>

      <Reveal delay={400}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:ivanthanonmoreno@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-hover hover:shadow-lg shadow-accent-25"
          >
            <Mail className="h-4 w-4" />
            {t.hero.cta}
          </a>
          <a
            href="https://github.com/ivanthanon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors border-accent-40 hover:text-accent"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/ivanthanon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold transition-colors border-accent-40 hover:text-accent"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </div>
      </Reveal>

      <Reveal delay={500}>
        <a
          href="#about"
          className="mt-20 text-muted transition-colors hover:text-accent"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </Reveal>
    </section>
  );
}
