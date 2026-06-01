import { resumeData } from "../data/resume";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { name, title } = resumeData.personalInfo;

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-serif text-xl font-bold text-white">
            {name}, {title}
          </span>
          <p className="text-slate-400 text-sm mt-2">
            Providing compassionate clinical care.
          </p>
        </div>
        
        <div className="text-slate-500 text-sm">
          &copy; {currentYear} {name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
