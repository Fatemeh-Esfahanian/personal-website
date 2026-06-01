"use client";

import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { BookOpen, ExternalLink } from "lucide-react";

export default function PublicationsSection() {
  const { publications } = resumeData;

  if (!publications || publications.length === 0) return null;

  return (
    <section id="publications" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wide text-indigo-600 uppercase"
          >
            Research
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Publications & Presentations
          </motion.p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <ul className="divide-y divide-slate-100">
            {publications.map((pub, index) => (
              <motion.li 
                key={pub.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 sm:p-8 hover:bg-slate-50/50 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <BookOpen className="w-5 h-5 text-indigo-400 group-hover:text-indigo-600 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-900 leading-tight mb-2">
                      {pub.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                      <span className="font-medium text-slate-700">{pub.journal}</span>
                      <span>&bull;</span>
                      <span>{pub.year}</span>
                    </div>
                  </div>
                  {pub.link && pub.link !== "#" && (
                    <a 
                      href={pub.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
                      aria-label="Read publication"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
