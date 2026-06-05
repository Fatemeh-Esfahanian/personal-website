"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpenCheck } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

export default function EducationSection() {
  const { data, t } = useLanguage();
  const { education, certifications, membershipsAndCourses } = data as any;

  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wide text-teal-600 dark:text-teal-400 uppercase"
          >
            {t('academic')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-colors"
          >
            {t('educationAndCertifications')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Education Column */}
          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-teal-50 dark:bg-teal-900/30 rounded-lg transition-colors">
                  <GraduationCap className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white transition-colors">{t('education')}</h3>
              </div>
              
              <div className="space-y-8">
                {education.map((item: any, index: number) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-teal-100 dark:hover:border-teal-500/30 transition-colors"
                  >
                    <div className="flex justify-between items-start mb-2 flex-col sm:flex-row gap-2">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white transition-colors">{item.degree}</h4>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 px-2 py-1 rounded shadow-sm whitespace-nowrap transition-colors">
                        {item.duration}
                      </span>
                    </div>
                    <p className="text-teal-700 dark:text-teal-400 font-medium mb-3 transition-colors">{item.institution}</p>
                    <p className="text-slate-600 dark:text-slate-300 text-sm font-light transition-colors">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {membershipsAndCourses && membershipsAndCourses.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-blue-50 dark:bg-blue-900/30 rounded-lg transition-colors">
                    <BookOpenCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white transition-colors">{t('membershipsAndCourses')}</h3>
                </div>
                
                <div className="space-y-6">
                  {membershipsAndCourses.map((item: any, index: number) => (
                    <motion.div 
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-5 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-blue-400 dark:bg-blue-500"></div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-bold text-slate-900 dark:text-white leading-tight transition-colors">{item.name}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 transition-colors">
                          {item.type} &bull; <span className="text-slate-400 dark:text-slate-500">{item.date}</span>
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Certifications Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-amber-50 dark:bg-amber-900/30 rounded-lg transition-colors">
                <Award className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-slate-900 dark:text-white transition-colors">{t('certifications')}</h3>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert: any, index: number) => (
                <motion.div 
                  key={cert.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-amber-400 dark:bg-amber-500"></div>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white transition-colors">{cert.name}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 transition-colors">
                      {cert.issuer} &bull; <span className="text-slate-400 dark:text-slate-500">{cert.year}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
