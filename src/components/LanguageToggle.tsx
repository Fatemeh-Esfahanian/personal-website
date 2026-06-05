"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "fa" : "en")}
      className="px-3 py-1.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors shadow-sm text-sm font-medium"
      aria-label="Toggle language"
    >
      {lang === "en" ? "FA" : "EN"}
    </button>
  );
}
