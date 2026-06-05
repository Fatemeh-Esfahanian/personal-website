"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { resumeDataEn } from "../data/resumeEn";
import { resumeDataFa } from "../data/resumeFa";

type Lang = "en" | "fa";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  data: typeof resumeDataEn;
  t: (key: string) => string;
};

const dictionaries = {
  en: {
    about: "About",
    experience: "Experience",
    education: "Education",
    publications: "Publications",
    contact: "Contact",
    bookAppointment: "Book Appointment",
    career: "Career",
    clinicalExperience: "Clinical Experience",
    academic: "Academic",
    educationAndCertifications: "Education & Certifications",
    membershipsAndCourses: "Memberships & Courses",
    certifications: "Certifications",
    research: "Research",
    publicationsAndPresentations: "Publications & Presentations",
    getInTouch: "Get in Touch",
    scheduleAVisit: "Schedule a Visit",
    viewExperience: "View Experience",
    downloadCV: "Download CV",
    providingCare: "Providing compassionate clinical care.",
    allRightsReserved: "All rights reserved.",
    contactText: "Whether you have a medical inquiry or want to schedule an appointment, my team and I are here to help.",
    linkedinProfile: "LinkedIn Profile",
    scheduleText: "New patients are welcome. Book your consultation online for convenience.",
    medicalPhilosophy: "Medical Philosophy & Background",
    aboutMe: "About Me",
    coreCompetencies: "Core Competencies & Skills"
  },
  fa: {
    about: "درباره من",
    experience: "تجربیات",
    education: "تحصیلات",
    publications: "مقالات",
    contact: "تماس",
    bookAppointment: "رزرو نوبت",
    career: "مسیر شغلی",
    clinicalExperience: "تجربیات بالینی",
    academic: "آکادمیک",
    educationAndCertifications: "تحصیلات و گواهینامه‌ها",
    membershipsAndCourses: "عضویت‌ها و دوره‌ها",
    certifications: "گواهینامه‌ها",
    research: "پژوهش",
    publicationsAndPresentations: "مقالات و ارائه‌ها",
    getInTouch: "ارتباط با من",
    scheduleAVisit: "تعیین وقت ویزیت",
    viewExperience: "مشاهده تجربیات",
    downloadCV: "دانلود رزومه",
    providingCare: "ارائه مراقبت‌های بالینی دلسوزانه.",
    allRightsReserved: "تمامی حقوق محفوظ است.",
    contactText: "چه سوال پزشکی داشته باشید و چه بخواهید وقت ویزیت رزرو کنید، من و تیمم اینجا هستیم تا به شما کمک کنیم.",
    linkedinProfile: "پروفایل لینکدین",
    scheduleText: "بیماران جدید پذیرفته می‌شوند. برای راحتی خود می‌توانید مشاوره را آنلاین رزرو کنید.",
    medicalPhilosophy: "فلسفه پزشکی و سوابق",
    aboutMe: "درباره من",
    coreCompetencies: "صلاحیت‌های کلیدی و مهارت‌ها"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Lang;
    if (savedLang === "fa" || savedLang === "en") {
      setLangState(savedLang);
      document.documentElement.dir = savedLang === "fa" ? "rtl" : "ltr";
      document.documentElement.lang = savedLang;
    }
    setMounted(true);
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("lang", newLang);
    document.documentElement.dir = newLang === "fa" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  const data = lang === "fa" ? resumeDataFa : resumeDataEn;
  const t = (key: string) => dictionaries[lang][key as keyof typeof dictionaries["en"]] || key;

  return (
    <LanguageContext.Provider value={{ lang, setLang, data, t }}>
      <div style={{ visibility: mounted ? "visible" : "hidden" }}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
