import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Layout, Brain, Cloud, Search, CheckCircle2, Sparkles } from 'lucide-react';

interface SkillsSectionProps {
  darkMode: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return Code;
      case 'Layout':
        return Layout;
      case 'Brain':
        return Brain;
      case 'Cloud':
        return Cloud;
      default:
        return Code;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <Brain className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & Tech Stack
          </h2>
          <p className={`text-base ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Proficiencies across programming languages, machine learning libraries, web frameworks, and serverless cloud tools.
          </p>

          {/* Search Box */}
          <div className="relative max-w-md mx-auto pt-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-5" />
            <input
              type="text"
              placeholder="Search skills (e.g. Python, AWS, React, SQL)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                darkMode
                  ? 'bg-[#14161d] border-slate-800 text-slate-100 placeholder-slate-500'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat) => {
            const Icon = getCategoryIcon(cat.iconName);
            const filteredSkills = cat.skills.filter(
              (s) =>
                s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (s.description && s.description.toLowerCase().includes(searchTerm.toLowerCase()))
            );

            if (searchTerm && filteredSkills.length === 0) return null;

            return (
              <div
                key={cat.category}
                className={`rounded-3xl p-6 sm:p-8 border shadow-lg transition-all ${
                  darkMode ? 'bg-[#14161d] border-slate-800' : 'bg-white border-slate-200'
                }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/60">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold tracking-tight ${
                      darkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      {cat.category}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {cat.skills.length} core technologies
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`p-3.5 rounded-2xl border transition-all ${
                        skill.featured
                          ? darkMode
                            ? 'bg-amber-500/5 border-amber-500/30'
                            : 'bg-amber-50/50 border-amber-200'
                          : darkMode
                          ? 'bg-slate-900/60 border-slate-800/80'
                          : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-bold text-sm ${
                          darkMode ? 'text-slate-100' : 'text-slate-900'
                        }`}>
                          {skill.name}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-500 font-semibold">
                          {skill.level}
                        </span>
                      </div>
                      {skill.description && (
                        <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
