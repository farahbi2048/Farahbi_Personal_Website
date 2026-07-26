import React, { useState } from 'react';
import { TIMELINE_ITEMS } from '../data/portfolioData';
import { TimelineItem } from '../types';
import {
  Briefcase,
  GraduationCap,
  Users,
  Award,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Building
} from 'lucide-react';

interface TimelineSectionProps {
  darkMode: boolean;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ darkMode }) => {
  const [selectedId, setSelectedId] = useState<string>(TIMELINE_ITEMS[0].id);

  const activeItem = TIMELINE_ITEMS.find((item) => item.id === selectedId) || TIMELINE_ITEMS[0];

  const getTypeBadge = (type: TimelineItem['type']) => {
    switch (type) {
      case 'education':
        return { label: 'Education', icon: GraduationCap, color: 'text-amber-400 bg-amber-500/10 border-amber-500/30' };
      case 'employment':
        return { label: 'Employment', icon: Briefcase, color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30' };
      case 'leadership':
        return { label: 'Leadership & Civic', icon: Users, color: 'text-sky-400 bg-sky-500/10 border-sky-500/30' };
      default:
        return { label: 'Achievement', icon: Award, color: 'text-purple-400 bg-purple-500/10 border-purple-500/30' };
    }
  };

  const activeBadge = getTypeBadge(activeItem.type);
  const BadgeIcon = activeBadge.icon;

  return (
    <section id="timeline" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title inspired by reference image ("My Timeline") */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            My Timeline
          </h2>
          <p className={`text-sm sm:text-base mt-2 ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Academic milestones, employment history, and community leadership roles.
          </p>
        </div>

        {/* INSPIRATION TIMELINE NAV PILLS (Directly matching the LeapThought pill selector in the image!) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {TIMELINE_ITEMS.map((item) => {
            const isSelected = item.id === selectedId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all border transform active:scale-95 ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/25 scale-105'
                    : darkMode
                    ? 'bg-[#14161d] text-slate-300 border-slate-800 hover:border-amber-500/40 hover:text-white'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-amber-500'
                }`}
              >
                {item.organization}
              </button>
            );
          })}
        </div>

        {/* ACTIVE TIMELINE DETAIL DISPLAY CARD */}
        <div className={`max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 border shadow-xl transition-all duration-300 ${
          darkMode ? 'bg-[#14161d] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}>
          {/* Top Header of Selected Item */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/60">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`px-3 py-1 rounded-full text-[11px] font-mono font-bold border flex items-center gap-1.5 ${activeBadge.color}`}>
                  <BadgeIcon className="w-3.5 h-3.5" />
                  {activeBadge.label}
                </span>
                <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-500" />
                  {activeItem.location}
                </span>
              </div>
              <h3 className={`text-2xl font-extrabold tracking-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {activeItem.title}
              </h3>
              <p className="text-sm font-semibold text-amber-500 font-mono mt-1">
                {activeItem.organization}
              </p>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-mono font-bold self-start sm:self-auto">
              <Calendar className="w-4 h-4" />
              <span>{activeItem.period}</span>
            </div>
          </div>

          {/* Short Summary */}
          <p className={`mt-6 text-sm font-medium leading-relaxed italic p-3.5 rounded-xl border ${
            darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
          }`}>
            "{activeItem.shortSummary}"
          </p>

          {/* Bullet Points */}
          <div className="mt-6 space-y-3">
            <h4 className="text-xs font-mono font-bold text-amber-500 uppercase tracking-wider">
              Responsibilities & Key Impact:
            </h4>
            {activeItem.bulletPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-3 text-sm">
                <ChevronRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Skills Badges */}
          <div className="mt-8 pt-6 border-t border-slate-800/60">
            <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mb-3">
              Skills & Tools Applied:
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeItem.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono ${
                    darkMode
                      ? 'bg-slate-900 text-amber-400 border border-slate-800'
                      : 'bg-slate-100 text-slate-800 border border-slate-200'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
