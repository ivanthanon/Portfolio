import { useI18n } from "@/lib/i18n-context";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          {t.footer.madeWith} · © {year} Iván Thanon Moreno
        </p>
        <p className="text-xs text-muted">{t.footer.rights}</p>
      </div>
    </footer>
  );
}
