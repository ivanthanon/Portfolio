"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { getTranslations } from "@/lib/i18n";

type I18nContextValue = {
  locale: Locale;
  t: ReturnType<typeof getTranslations>;
  toggleLocale: () => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "portfolio-locale";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && (saved === "en" || saved === "es")) {
      setLocale(saved);
    }
    setMounted(true);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "en" ? "es" : "en";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  if (!mounted) {
    const t = getTranslations("en");
    return <I18nContext.Provider value={{ locale: "en", t, toggleLocale }}>{children}</I18nContext.Provider>;
  }

  const t = getTranslations(locale);

  return <I18nContext.Provider value={{ locale, t, toggleLocale }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
