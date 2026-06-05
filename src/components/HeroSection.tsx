"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

export default function HeroSection() {
  const { data, t } = useLanguage();
  const { name, title, tagline } = data.personalInfo;

  return (
    <section className="relative pt-24 pb-32 flex items-center justify-center overflow-hidden min-h-[90vh] bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-indigo-200/50 dark:bg-indigo-600/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-60 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-blue-200/50 dark:bg-blue-500/30 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-[30rem] h-[30rem] bg-teal-100/50 dark:bg-emerald-500/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-60 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 dark:text-white mb-6 tracking-tight drop-shadow-sm dark:drop-shadow-2xl transition-colors">
              {name}, <br className="hidden md:block" /><span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-teal-600 dark:from-blue-400 dark:via-indigo-400 dark:to-emerald-400 bg-clip-text text-transparent">{title}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl font-light leading-relaxed transition-colors">
              {tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <a
                href="#experience"
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:hover:from-blue-500 dark:hover:to-indigo-500 shadow-md dark:shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] hover:-translate-y-1 transition-all duration-300"
              >
                {t('viewExperience')}
                <ArrowDown className="ml-2 -mr-1 h-5 w-5 animate-bounce" aria-hidden="true" />
              </a>
              <a
                href="/cv-placeholder.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-slate-300 dark:border-white/20 text-lg font-medium rounded-full text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-white/5 backdrop-blur-md hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-400 dark:hover:border-white/40 shadow-sm dark:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {t('downloadCV')}
                <FileText className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-[28rem] md:h-[28rem] group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-indigo-400 to-teal-300 dark:from-blue-500 dark:via-indigo-500 dark:to-emerald-400 rounded-full shadow-xl dark:shadow-[0_0_50px_rgba(79,70,229,0.3)] group-hover:shadow-2xl dark:group-hover:shadow-[0_0_70px_rgba(79,70,229,0.6)] transition-all duration-700 animate-pulse"></div>
              <div className="absolute inset-[3px] bg-white dark:bg-slate-900 rounded-full overflow-hidden border-2 border-white dark:border-white/10 z-10 transition-colors">
                <Image
                  src="/profile.jpg"
                  alt={`${name} Profile`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
