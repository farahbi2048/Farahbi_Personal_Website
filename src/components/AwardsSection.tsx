import React from 'react';
import { AWARDS } from '../data/portfolioData';
import { Award as AwardIcon, Trophy, Sparkles, Crown, Globe, Feather } from 'lucide-react';

interface AwardsSectionProps {
  darkMode: boolean;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ darkMode }) => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return AwardIcon;
      case 'Trophy':
        return Trophy;
      case 'Sparkles':
        return Sparkles;
      case 'Crown':
        return Crown;
      case 'Globe':
        return Globe;
      case 'Feather':
        return Feather;
      default:
        return AwardIcon;
    }
  };

  return (
    <section id="awards" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS & RECOGNITION</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Awards & Global Competitions
          </h2>
          <p className={`text-base ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Recognized internationally and nationally for essay writing, diplomacy, data analysis, and community sustainability.
          </p>
        </div>

        {/* Awards Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AWARDS.map((award) => {
            const Icon = getIconComponent(award.icon);
            return (
              <div
                key={award.id}
                className={`p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  darkMode
                    ? 'bg-[#14161d] border-slate-800 hover:border-amber-500/40 hover:shadow-xl'
                    : 'bg-white border-slate-200 hover:border-amber-500 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-amber-500/10 text-amber-400">
                      {award.year}
                    </span>
                  </div>

                  <h3 className={`text-lg font-bold tracking-tight mb-1 ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    {award.title}
                  </h3>
                  <p className="text-xs text-amber-500 font-mono font-medium mb-3">
                    {award.issuer}
                  </p>

                  <p className={`text-xs leading-relaxed ${
                    darkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {award.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Category</span>
                  <span className="text-amber-500 font-semibold">{award.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
