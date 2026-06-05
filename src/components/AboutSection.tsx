"use client";

import { motion } from "framer-motion";
import { HeartPulse, Stethoscope, Users } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function AboutSection() {
  const { data, t, lang } = useLanguage();
  const { about } = data.personalInfo;
  
  const philosophyItems = [
    {
      icon: <Stethoscope className="h-6 w-6 text-blue-700" />,
      title: lang === 'fa' ? "مبتنی بر شواهد" : "Evidence-Based",
      desc: lang === 'fa' ? "به‌کارگیری جدیدترین تحقیقات پزشکی در عمل بالینی." : "Applying the latest medical research to clinical practice.",
    },
    {
      icon: <Users className="h-6 w-6 text-teal-600" />,
      title: lang === 'fa' ? "بیمار محور" : "Patient-Centered",
      desc: lang === 'fa' ? "اولویت دادن به نیازهای فردی بیمار و تصمیم‌گیری مشترک." : "Prioritizing individual patient needs and shared decision-making.",
    },
    {
      icon: <HeartPulse className="h-6 w-6 text-rose-500" />,
      title: lang === 'fa' ? "مراقبت دلسوزانه" : "Compassionate Care",
      desc: lang === 'fa' ? "درمان هر بیمار با کرامت، همدلی و احترام." : "Treating every patient with dignity, empathy, and respect.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950 relative border-t border-slate-100 dark:border-white/5 transition-colors duration-300">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5 dark:opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-widest text-blue-700 dark:text-emerald-400 uppercase"
          >
            {t('aboutMe')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-colors"
          >
            {t('medicalPhilosophy')}
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="prose prose-lg prose-slate text-slate-600 dark:text-slate-300 font-light leading-relaxed transition-colors">
              <p>{about}</p>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white mb-6 transition-colors">{t('coreCompetencies')}</h3>
              <div className="flex flex-col gap-3">
                {data.skills.map((skill, index) => {
                  const parts = skill.split(':');
                  return (
                    <span 
                      key={index} 
                      className="px-5 py-3 rounded-xl text-sm font-medium bg-slate-50 dark:bg-slate-900/60 backdrop-blur-md text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 text-left leading-relaxed shadow-sm dark:shadow-lg hover:border-slate-300 dark:hover:border-white/30 transition-colors"
                    >
                      {parts.length > 1 ? (
                        <>
                          <strong className="text-slate-900 dark:text-white">{parts[0]}:</strong> {parts.slice(1).join(':')}
                        </>
                      ) : (
                        skill
                      )}
                    </span>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {philosophyItems.map((item, index) => (
              <div 
                key={index} 
                className={`p-8 bg-white dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-slate-100 dark:border-white/10 shadow-sm dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-md dark:hover:shadow-[0_8px_30px_rgba(79,70,229,0.2)] hover:-translate-y-1 transition-all duration-300 ${index === 2 ? 'sm:col-span-2 sm:w-[calc(50%-0.75rem)] sm:mx-auto' : ''}`}
              >
                <div className="w-14 h-14 inline-flex items-center justify-center rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/10 shadow-sm dark:shadow-inner mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
