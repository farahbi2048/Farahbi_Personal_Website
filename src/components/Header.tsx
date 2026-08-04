import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { FileText, Sun, Moon, Menu, X, Sparkles, Send } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
  onOpenResume,
  onOpenContact,
  activeSection
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Skills', href: '#skills' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Awards', href: '#awards' },
    { name: 'Gallery', href: '#memories' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-[#0f1115]/90 backdrop-blur-md border-b border-amber-500/10 shadow-lg shadow-black/20 py-3'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#about"
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-lg shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform">
              MF
            </div>
            <div>
              <span className={`font-bold tracking-tight text-lg block leading-tight ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}>
                {PERSONAL_INFO.shortName}
              </span>
              <span className="text-xs text-amber-500 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block"></span>
                AI & Software Student
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? darkMode
                        ? 'text-amber-400 bg-amber-500/10 font-semibold'
                        : 'text-amber-600 bg-amber-50 font-semibold'
                      : darkMode
                      ? 'text-slate-300 hover:text-amber-400 hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-amber-600 hover:bg-slate-100'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Actions Right */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900 text-amber-400 hover:border-amber-500/40'
                  : 'border-slate-200 bg-slate-100 text-slate-700 hover:border-amber-400'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                darkMode
                  ? 'border-slate-800 bg-slate-900/80 text-slate-200 hover:border-amber-500/50 hover:text-amber-400'
                  : 'border-slate-300 bg-white text-slate-800 hover:border-amber-500 hover:text-amber-600 shadow-xs'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-amber-500" />
              <span>Resume PDF</span>
            </button>

            {/* Hire Me / Contact CTA */}
            <button
              onClick={onOpenContact}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 text-slate-950 hover:bg-amber-400 shadow-md shadow-amber-500/25 transition-all active:scale-95"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg border ${
                darkMode ? 'border-slate-800 bg-slate-900 text-amber-400' : 'border-slate-200 text-slate-700'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg ${
                darkMode ? 'text-slate-200 hover:bg-slate-800' : 'text-slate-800 hover:bg-slate-100'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div
            className={`sm:hidden mt-3 p-4 rounded-2xl border shadow-xl ${
              darkMode ? 'bg-[#14161d] border-slate-800 text-slate-200' : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex flex-col space-y-2 mb-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-3 py-2 rounded-lg font-medium hover:bg-amber-500/10 hover:text-amber-500 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-700/30 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-700 font-medium text-sm"
              >
                <FileText className="w-4 h-4 text-amber-500" />
                View Full Resume
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm"
              >
                <Send className="w-4 h-4" />
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
