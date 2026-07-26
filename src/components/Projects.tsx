import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { Sparkles, ArrowUpRight, Cpu, Layers, Activity, Code } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
  onSelectProject: (p: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ darkMode, onSelectProject }) => {
  const [activeTab, setActiveTab] = useState<'All' | 'AI & ML' | 'Web & Cloud' | 'Full Stack'>('All');

  const filteredProjects =
    activeTab === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/10 text-amber-500 border border-amber-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL PROJECTS</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Software & AI Builds
          </h2>
          <p className={`text-base ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Practical machine learning systems, cloud architectures, and full-stack software built to solve real-world problems.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {(['All', 'AI & ML', 'Web & Cloud', 'Full Stack'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : darkMode
                    ? 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group relative rounded-3xl p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5 ${
                darkMode
                  ? 'bg-[#14161d] border-slate-800/80 hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10'
                  : 'bg-white border-slate-200 hover:border-amber-500 hover:shadow-xl'
              }`}
            >
              <div>
                {/* Header Badge & Period */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-500/10 text-amber-500 border border-amber-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">{project.period}</span>
                </div>

                {/* Project Title */}
                <h3 className={`text-xl font-bold tracking-tight mb-1 group-hover:text-amber-400 transition-colors ${
                  darkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {project.title}
                </h3>
                <p className="text-xs text-amber-500 font-medium mb-3">
                  {project.subtitle}
                </p>

                {/* Short Description */}
                <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${
                  darkMode ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {project.shortDescription}
                </p>
              </div>

              {/* Bottom Tech Tags & Action */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono ${
                        darkMode
                          ? 'bg-slate-900 text-slate-300 border border-slate-800'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="text-[10px] text-amber-500 font-mono py-1 px-1">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs font-bold font-mono text-amber-500 group-hover:text-amber-400">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    Launch Live Prototype
                  </span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
