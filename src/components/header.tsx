"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import { Moon, Sun, Menu, X } from "lucide-react";

const NAV_LINKS = ["about", "experience", "projects", "skills", "contact"] as const;

export function Header() {
  const { t, toggleLocale, locale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-border bg-surface-80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a href="#" className="font-mono text-sm font-semibold tracking-tight hover:text-accent transition-colors">
          {"<IT />"}
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <button
            onClick={toggleLocale}
            className="rounded-lg px-3 py-2 text-xs font-semibold tracking-wide text-muted transition-colors hover:text-foreground"
            aria-label="Toggle language"
          >
            {t.langSwitch}
          </button>

          <button
            onClick={() => {
              const html = document.documentElement;
              html.classList.toggle("dark");
            }}
            className="relative flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:text-foreground"
            aria-label="Toggle theme"
          >
            <Sun className="absolute h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-muted transition-colors hover:text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-surface-95 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col items-center gap-2 pt-12">
            {NAV_LINKS.map((key) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-6 py-3 text-lg font-medium text-muted transition-colors hover:text-foreground"
                >
                  {t.nav[key]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
