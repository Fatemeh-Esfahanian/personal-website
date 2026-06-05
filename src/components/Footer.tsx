"use client";

import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { data, t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const { name, title } = data.personalInfo;

  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-white/5 py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-serif text-xl font-bold text-slate-900 dark:text-white transition-colors">
            {name}, {title}
          </span>
          <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 transition-colors">
            {t('providingCare')}
          </p>
        </div>
        
        <div className="text-slate-500 dark:text-slate-500 text-sm transition-colors">
          &copy; {currentYear} {name}. {t('allRightsReserved')}
        </div>
      </div>
    </footer>
  );
}
