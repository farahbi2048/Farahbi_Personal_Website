import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, PORTFOLIO_STATS } from '../data/portfolioData';
import {
  MapPin,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Award,
  Code,
  Terminal,
  ExternalLink
} from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onOpenResume, onOpenContact }) => {
  const [terminalTextIndex, setTerminalTextIndex] = useState(0);
  const terminalLines = [
    'i develop AI pipelines & machine learning systems',
    'building full-stack prototypes with React 19 & FastAPI',
    'cloud architecture with AWS Bedrock, API Gateway & DynamoDB',
    'student ambassador & AI researcher in Hobart, Tasmania'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTerminalTextIndex((prev) => (prev + 1) % terminalLines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-500 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping"></span>
              <span>Hobart, Tasmania</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-300 dark:text-slate-300 font-sans">Open for Software & AI Roles</span>
            </div>

            {/* Main Heading inspired by image */}
            <div className="space-y-3">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Hey, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 underline decoration-amber-500/30 decoration-wavy underline-offset-8">
                  Md. Farahbi Ishrak Famous
                </span>
              </h1>
              <p className={`text-xl sm:text-2xl font-medium ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                a Software Engineer & AI Student from Hobart
              </p>
            </div>

            {/* Terminal Typing Line (inspired by # i develop tools for dashboards in reference image) */}
            <div className={`p-3.5 rounded-xl border font-mono text-sm flex items-center gap-3 transition-all ${
              darkMode
                ? 'bg-[#14161d] border-slate-800 text-emerald-400 shadow-inner'
                : 'bg-slate-900 text-emerald-400 border-slate-800'
            }`}>
              <Terminal className="w-4 h-4 text-amber-500 shrink-0" />
              <div className="flex-1 overflow-hidden whitespace-nowrap text-ellipsis">
                <span className="text-amber-500 mr-2">#</span>
                <span className="transition-all duration-300">
                  {terminalLines[terminalTextIndex]}
                </span>
              </div>
              <span className="w-2 h-4 bg-emerald-400 animate-pulse inline-block"></span>
            </div>

            {/* Short Bio */}
            <p className={`text-base leading-relaxed ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {PERSONAL_INFO.summary}
            </p>

            {/* CTAs & Socials */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 shadow-lg shadow-amber-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Hire Me / Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenResume}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold border transition-all ${
                  darkMode
                    ? 'border-slate-800 bg-slate-900 text-slate-200 hover:border-amber-500/50 hover:text-amber-400'
                    : 'border-slate-300 bg-white text-slate-800 hover:border-amber-500 shadow-xs'
                }`}
              >
                <Download className="w-4 h-4 text-amber-500" />
                <span>Download Resume</span>
              </button>

              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl border transition-all ${
                    darkMode
                      ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-amber-400 hover:border-amber-500/40'
                      : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-amber-600'
                  }`}
                  title="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl border transition-all ${
                    darkMode
                      ? 'border-slate-800 bg-slate-900/60 text-slate-300 hover:text-amber-400 hover:border-amber-500/40'
                      : 'border-slate-200 bg-slate-100 text-slate-700 hover:text-amber-600'
                  }`}
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Visual Card (Stylized portrait frame with stats badge) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-3xl opacity-20 blur-lg"></div>

              <div className={`relative rounded-3xl p-6 border shadow-2xl overflow-hidden ${
                darkMode ? 'bg-[#14161d] border-slate-800' : 'bg-white border-slate-200'
              }`}>
                {/* Visual Avatar Card */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-4/5 flex flex-col justify-between p-6 border border-slate-800 shadow-inner group">
                  {/* Subtle Grid Lines Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20"></div>

                  {/* Top Badge inside card */}
                  <div className="relative z-10 flex justify-between items-center">
                    <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-extrabold flex items-center justify-center text-xl shadow-lg">
                      MF
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono">
                      UTAS AI Major
                    </span>
                  </div>

                  {/* Center Graphic Illustration */}
                  <div className="relative z-10 my-auto text-center py-6">
                    <div className="relative inline-block">
                      <div className="w-28 h-28 mx-auto rounded-2xl bg-gradient-to-br from-amber-500/20 via-slate-800 to-slate-900 border-2 border-amber-500/40 flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-500">
                        <Code className="w-12 h-12 text-amber-400" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 rounded-lg p-1.5 shadow-md">
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="mt-4 text-white font-bold text-lg tracking-wide">
                      Md. Farahbi Ishrak Famous
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-1">
                      Hobart, Tasmania | GPA 6.67
                    </p>
                  </div>

                  {/* Bottom Quick Badges */}
                  <div className="relative z-10 pt-4 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-900/80 rounded-lg p-2 text-center border border-slate-800">
                      <span className="text-amber-400 font-bold block">Python & ML</span>
                      <span className="text-[10px] text-slate-400">Anomaly Detection</span>
                    </div>
                    <div className="bg-slate-900/80 rounded-lg p-2 text-center border border-slate-800">
                      <span className="text-amber-400 font-bold block">AWS & Bedrock</span>
                      <span className="text-[10px] text-slate-400">Serverless AI</span>
                    </div>
                  </div>
                </div>

                {/* Additional Education Pill */}
                <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-500 font-medium">
                  <GraduationCap className="w-5 h-5 shrink-0" />
                  <div>
                    <span className="font-bold text-slate-200 dark:text-slate-200 block">
                      Bachelor of ICT (AI Major)
                    </span>
                    <span className="text-amber-400">University of Tasmania (2025–Present)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATS HIGHLIGHT BAR (Directly matching the screenshot stats box!) */}
        <div className="mt-16">
          <div className={`rounded-2xl border p-6 sm:p-8 shadow-xl ${
            darkMode
              ? 'bg-[#14161d] border-slate-800 text-slate-100'
              : 'bg-slate-900 border-slate-800 text-white'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
              {/* Stat 1 */}
              <div className="pt-2 md:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">
                  {PORTFOLIO_STATS.gpa}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                  Academic GPA (UTAS)
                </div>
                <div className="text-[11px] text-amber-500/80 font-mono mt-0.5">
                  ICT (AI Major)
                </div>
              </div>

              {/* Stat 2 */}
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">
                  {PORTFOLIO_STATS.projectsCount}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                  Key Technical Projects
                </div>
                <div className="text-[11px] text-amber-500/80 font-mono mt-0.5">
                  ML, Cloud & Web Apps
                </div>
              </div>

              {/* Stat 3 */}
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">
                  {PORTFOLIO_STATS.awardsCount}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                  Global & National Awards
                </div>
                <div className="text-[11px] text-amber-500/80 font-mono mt-0.5">
                  Essay, Climate & MUN
                </div>
              </div>

              {/* Stat 4 */}
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 tracking-tight">
                  {PORTFOLIO_STATS.leadershipCount}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1">
                  Community & Civic Roles
                </div>
                <div className="text-[11px] text-amber-500/80 font-mono mt-0.5">
                  Hobart Ambassador & Rep
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
