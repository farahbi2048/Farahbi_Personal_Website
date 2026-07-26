import React from 'react';
import { TIMELINE_ITEMS } from '../data/portfolioData';
import { Users, MapPin, Globe, Sparkles, CheckCircle2 } from 'lucide-react';

interface LeadershipSectionProps {
  darkMode: boolean;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ darkMode }) => {
  const leadershipItems = TIMELINE_ITEMS.filter((item) => item.type === 'leadership');

  return (
    <section id="leadership" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <Users className="w-3.5 h-3.5" />
            <span>CIVIC & COMMUNITY IMPACT</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Leadership & Engagement
          </h2>
          <p className={`text-base ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Empowering youth through advocacy, civic diplomacy, STEM mentorship, and student welfare initiatives.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadershipItems.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-[#14161d] border-slate-800 hover:border-amber-500/30'
                  : 'bg-white border-slate-200 hover:border-amber-500'
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-amber-500/10 text-amber-500">
                    {item.period}
                  </span>
                  <h3 className={`text-xl font-bold tracking-tight mt-2 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-sm font-semibold text-amber-500 font-mono mt-0.5">
                    {item.organization} • {item.location}
                  </p>
                </div>
              </div>

              <p className={`text-sm mb-4 leading-relaxed ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {item.shortSummary}
              </p>

              <div className="space-y-2 mb-6">
                {item.bulletPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-800/60">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-mono ${
                      darkMode
                        ? 'bg-slate-900 text-slate-300 border border-slate-800'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
