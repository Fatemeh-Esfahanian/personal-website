"use client";

import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const { experience } = resumeData;

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wide text-blue-700 dark:text-blue-400 uppercase"
          >
            Career
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl transition-colors"
          >
            Clinical Experience
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline connecting line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-white/10 transition-colors" aria-hidden="true"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <motion.div 
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-4 top-1.5 w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-full border-4 border-white dark:border-slate-950 shadow-sm flex items-center justify-center transition-colors">
                  <Briefcase className="w-4 h-4 text-blue-700 dark:text-blue-400" />
                </div>

                <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl shadow-sm dark:shadow-md border border-slate-100 dark:border-white/5 hover:shadow-md dark:hover:shadow-lg transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white transition-colors">{job.role}</h3>
                      <p className="text-blue-700 dark:text-blue-400 font-medium transition-colors">{job.institution}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 transition-colors">
                        {job.duration}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-light text-sm md:text-base transition-colors">
                    {job.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
