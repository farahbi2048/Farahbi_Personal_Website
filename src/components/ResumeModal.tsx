import React, { useState } from 'react';
import { PERSONAL_INFO, PROJECTS, TIMELINE_ITEMS, AWARDS, SKILL_CATEGORIES } from '../data/portfolioData';
import { X, Printer, Download, Copy, Check, FileText } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, darkMode }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${PERSONAL_INFO.name.toUpperCase()}
Bachelor of ICT (Artificial Intelligence) Student
Hobart, Tasmania | ${PERSONAL_INFO.phone} | ${PERSONAL_INFO.email} | ${PERSONAL_INFO.linkedin} | ${PERSONAL_INFO.github}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.summary}

EDUCATION
University of Tasmania | Hobart, Tasmania
Bachelor of Information and Communication Technology (Major in AI) | July 2025 - Present
GPA: 6.67 / 7.0

TECHNICAL SKILLS
Programming: Python, Java, SQL, TypeScript
Web & Framework: React 19, FastAPI, Tailwind CSS, Vite
Data & ML: pandas, NumPy, MySQL, Machine Learning fundamentals
Cloud & DevOps: AWS (API Gateway, Bedrock, DynamoDB), GitHub Actions, Splunk Enterprise, Git

TECHNICAL PROJECTS
1. AuraWatch - AI Air Quality Anomaly Detection (2026 - In Development)
2. Early Feasibility Screening Prototype - TasNetworks Open Innovation Hackathon (2026)
3. Prescription Writer BD - Independent Project (2026)

EMPLOYMENT EXPERIENCE
- Library Assistant | University of Tasmania (May 2026 – Present)
- Team Member | Woolworths (Aug 2025 – Present)

AWARDS
- Silver Medal (2021 & 2023) - The Queen's Commonwealth Essay Competition
- Team Leader, Best Team - International Asteroid Search Campaign
- Gold Award - Duke of Edinburgh's International Award
- Best Delegate - Dhaka University NMUN 2021
- Finalist - International Climate Science Olympiad 2023
- Winner - GSG National Essay Competition 2021
    `;
    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static">
      <div
        className={`relative w-full max-w-4xl my-8 rounded-3xl border shadow-2xl overflow-hidden print:shadow-none print:border-none print:my-0 print:w-full ${
          darkMode ? 'bg-[#12141a] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Action Bar (Hidden when printing) */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800/60 bg-amber-500/5 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-500" />
            <span className="font-bold font-mono text-sm">Curriculum Vitae / Resume</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-700 hover:border-amber-500 text-xs font-mono transition-all"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Export PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Formatted Resume Body */}
        <div className="p-8 sm:p-12 space-y-6 max-h-[80vh] overflow-y-auto print:max-h-none print:overflow-visible print:p-0 text-slate-900 bg-white">
          {/* Header */}
          <div className="text-center pb-4 border-b-2 border-slate-900">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase text-slate-950">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-bold text-slate-800 mt-0.5">
              Bachelor of ICT (Artificial Intelligence) Student
            </p>
            <p className="text-xs text-slate-600 mt-1">
              Hobart, Tasmania | {PERSONAL_INFO.phone} | {PERSONAL_INFO.email} |{' '}
              <a href={PERSONAL_INFO.linkedin} className="underline text-amber-700">LinkedIn</a> |{' '}
              <a href={PERSONAL_INFO.github} className="underline text-amber-700">GitHub</a>
            </p>
          </div>

          {/* Professional Summary */}
          <section>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs leading-relaxed text-slate-800">
              {PERSONAL_INFO.summary}
            </p>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
              EDUCATION
            </h2>
            <div className="flex justify-between items-start text-xs font-bold text-slate-900">
              <div>
                <span>University of Tasmania</span>
                <p className="font-normal text-slate-800">
                  Bachelor of Information and Communication Technology (Major in Artificial Intelligence)
                </p>
                <p className="font-semibold text-slate-700">GPA: {PERSONAL_INFO.gpa}</p>
              </div>
              <div className="text-right">
                <span>Hobart, Tasmania</span>
                <p className="font-normal text-slate-700">July 2025 – Present</p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
              TECHNICAL SKILLS
            </h2>
            <div className="text-xs space-y-1 text-slate-800">
              <p><strong className="text-slate-950">Programming:</strong> Python, Java, SQL, TypeScript</p>
              <p><strong className="text-slate-950">Web & Framework:</strong> React 19, FastAPI, Tailwind CSS, Vite</p>
              <p><strong className="text-slate-950">Data & ML:</strong> pandas, NumPy, MySQL, Machine Learning fundamentals</p>
              <p><strong className="text-slate-950">Cloud & DevOps:</strong> AWS (API Gateway, Bedrock, DynamoDB), GitHub Actions, Splunk Enterprise, Git</p>
            </div>
          </section>

          {/* Technical Projects */}
          <section>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
              TECHNICAL PROJECTS
            </h2>
            <div className="space-y-3">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="flex justify-between font-bold text-slate-950">
                    <span>{proj.title} – {proj.subtitle}</span>
                    <span>{proj.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 mt-1 text-slate-800 pl-1">
                    {proj.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Leadership & Engagement */}
          <section>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
              LEADERSHIP & COMMUNITY ENGAGEMENT
            </h2>
            <div className="space-y-3">
              {TIMELINE_ITEMS.filter((t) => t.type === 'leadership').map((item) => (
                <div key={item.id} className="text-xs">
                  <div className="flex justify-between font-bold text-slate-950">
                    <span>{item.title} | {item.organization}</span>
                    <span>{item.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 mt-1 text-slate-800 pl-1">
                    {item.bulletPoints.map((bp, i) => (
                      <li key={i}>{bp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Employment Experience */}
          <section>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
              EMPLOYMENT EXPERIENCE
            </h2>
            <div className="space-y-3">
              {TIMELINE_ITEMS.filter((t) => t.type === 'employment').map((item) => (
                <div key={item.id} className="text-xs">
                  <div className="flex justify-between font-bold text-slate-950">
                    <span>{item.title} | {item.organization}</span>
                    <span>{item.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-0.5 mt-1 text-slate-800 pl-1">
                    {item.bulletPoints.map((bp, i) => (
                      <li key={i}>{bp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
              AWARDS
            </h2>
            <ul className="list-disc list-inside text-xs space-y-1 text-slate-800 pl-1">
              {AWARDS.map((award) => (
                <li key={award.id}>
                  <strong className="text-slate-950">{award.title}</strong> – {award.issuer} ({award.year})
                </li>
              ))}
            </ul>
          </section>

          {/* Referees */}
          <section>
            <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2">
              REFEREES
            </h2>
            <p className="text-xs text-slate-800">To be provided upon request.</p>
          </section>
        </div>
      </div>
    </div>
  );
};
