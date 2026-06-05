"use client";

import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { ArrowDown, FileText } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const { name, title, tagline } = resumeData.personalInfo;

  return (
    <section className="relative pt-24 pb-32 flex items-center justify-center overflow-hidden min-h-[90vh]">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
              {name}, <span className="text-blue-700">{title}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl font-light">
              {tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#experience"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View Experience
                <ArrowDown className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="/cv-placeholder.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-slate-300 text-base font-medium rounded-md text-slate-700 bg-transparent hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
              >
                Download CV
                <FileText className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-teal-100 rounded-full shadow-2xl overflow-hidden ring-4 ring-white">
                <Image
                  src="/profile.jpg"
                  alt={`${name} Profile`}
                  fill
                  className="object-cover"
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
