"use client";

import { motion } from "framer-motion";
import { resumeData } from "../data/resume";
import { Mail, MapPin, Globe, CalendarClock } from "lucide-react";

export default function ContactSection() {
  const { email, linkedin, clinicLocation, bookingLink } = resumeData.personalInfo;

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
            <div className="p-10 md:p-16 flex flex-col justify-between">
              <div>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-serif font-bold text-white mb-4"
                >
                  Get in Touch
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-slate-400 font-light mb-10 max-w-sm"
                >
                  Whether you have a medical inquiry or want to schedule an appointment, my team and I are here to help.
                </motion.p>

                <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-4 text-slate-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                      {email}
                    </a>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-4 text-slate-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      LinkedIn Profile
                    </a>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start gap-4 text-slate-300"
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <p className="max-w-[200px] leading-relaxed">
                      {clinicLocation}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-10 md:p-16 flex flex-col justify-center items-center text-center relative overflow-hidden">
              {/* Decorative background circle */}
              <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/20">
                  <CalendarClock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-4">
                  Schedule a Visit
                </h3>
                <p className="text-blue-100 mb-8 max-w-xs mx-auto font-light">
                  New patients are welcome. Book your consultation online for convenience.
                </p>
                <a 
                  href={bookingLink}
                  className="inline-block px-8 py-4 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:bg-slate-50 hover:scale-105 transition-all duration-300"
                >
                  Book Appointment
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
