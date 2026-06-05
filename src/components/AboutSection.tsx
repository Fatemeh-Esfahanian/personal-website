"use client";

import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { HeartPulse, Stethoscope, Users } from "lucide-react";

export default function AboutSection() {
  const { about } = resumeData.personalInfo;
  
  const philosophyItems = [
    {
      icon: <Stethoscope className="h-6 w-6 text-blue-700" />,
      title: "Evidence-Based",
      desc: "Applying the latest medical research to clinical practice.",
    },
    {
      icon: <Users className="h-6 w-6 text-teal-600" />,
      title: "Patient-Centered",
      desc: "Prioritizing individual patient needs and shared decision-making.",
    },
    {
      icon: <HeartPulse className="h-6 w-6 text-rose-500" />,
      title: "Compassionate Care",
      desc: "Treating every patient with dignity, empathy, and respect.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-white/5">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20 [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-widest text-emerald-400 uppercase"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-white sm:text-4xl"
          >
            Medical Philosophy & Background
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
            <div className="prose prose-lg prose-slate text-slate-300 font-light leading-relaxed">
              <p>{about}</p>
            </div>
            
            <div className="mt-10">
              <h3 className="text-2xl font-serif font-bold text-white mb-6">Core Competencies & Skills</h3>
              <div className="flex flex-col gap-3">
                {resumeData.skills.map((skill, index) => {
                  const parts = skill.split(':');
                  return (
                    <span 
                      key={index} 
                      className="px-5 py-3 rounded-xl text-sm font-medium bg-slate-900/60 backdrop-blur-md text-slate-300 border border-white/10 text-left leading-relaxed shadow-lg hover:border-white/30 transition-colors"
                    >
                      {parts.length > 1 ? (
                        <>
                          <strong className="text-white">{parts[0]}:</strong> {parts.slice(1).join(':')}
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
                className={`p-8 bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(79,70,229,0.2)] hover:-translate-y-1 transition-all duration-300 ${index === 2 ? 'sm:col-span-2 sm:w-[calc(50%-0.75rem)] sm:mx-auto' : ''}`}
              >
                <div className="w-14 h-14 inline-flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-inner mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
