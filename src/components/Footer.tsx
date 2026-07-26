import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ darkMode, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 border-t transition-colors ${
      darkMode ? 'bg-[#0b0c10] border-slate-800 text-slate-400' : 'bg-slate-900 text-slate-400 border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Left Brand */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-extrabold flex items-center justify-center text-lg shadow-md">
              MF
            </div>
            <div>
              <span className="font-bold text-white block text-base">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs text-amber-500 font-mono">
                Software Developer & AI Student • Hobart, Tasmania
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800/60 text-slate-300 hover:text-amber-400 hover:bg-slate-800 transition-colors"
              title="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-800/60 text-slate-300 hover:text-amber-400 hover:bg-slate-800 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <button
              onClick={onOpenContact}
              className="p-2.5 rounded-xl bg-slate-800/60 text-slate-300 hover:text-amber-400 hover:bg-slate-800 transition-colors"
              title="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 text-amber-400 text-xs font-mono font-bold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs font-mono text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} Md. Farahbi Ishrak Famous. Built with React 19, TypeScript & Tailwind CSS.
          </span>
          <span className="text-amber-500/80">
            University of Tasmania (GPA 6.67 / 7.0)
          </span>
        </div>
      </div>
    </footer>
  );
};
