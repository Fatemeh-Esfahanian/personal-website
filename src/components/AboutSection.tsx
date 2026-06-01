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
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold tracking-wide text-blue-700 uppercase"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-slate-900 sm:text-4xl"
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
            <div className="prose prose-lg prose-slate text-slate-600 font-light leading-relaxed">
              <p>{about}</p>
            </div>
            
            <div className="mt-10">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">Core Competencies & Skills</h3>
              <div className="flex flex-col gap-3">
                {resumeData.skills.map((skill, index) => {
                  const parts = skill.split(':');
                  return (
                    <span 
                      key={index} 
                      className="px-5 py-3 rounded-xl text-sm font-medium bg-slate-100 text-slate-700 border border-slate-200 text-left leading-relaxed"
                    >
                      {parts.length > 1 ? (
                        <>
                          <strong className="text-slate-900">{parts[0]}:</strong> {parts.slice(1).join(':')}
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
                className={`p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow ${index === 2 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto' : ''}`}
              >
                <div className="w-12 h-12 inline-flex items-center justify-center rounded-xl bg-white shadow-sm mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
