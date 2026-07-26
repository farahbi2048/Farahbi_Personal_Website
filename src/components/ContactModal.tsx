import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Send, Mail, Phone, MapPin, Copy, Check, Linkedin, Github } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, darkMode }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [sentMessage, setSentMessage] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity / Collaboration Inquiry',
    message: ''
  });

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSentMessage(true);
    setTimeout(() => {
      setSentMessage(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div
        className={`relative w-full max-w-2xl my-8 rounded-3xl border shadow-2xl overflow-hidden transition-all ${
          darkMode ? 'bg-[#12141a] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800/60 bg-amber-500/5">
          <div className="flex items-center gap-2">
            <Send className="w-5 h-5 text-amber-500" />
            <h3 className="font-bold font-mono text-base text-amber-400">Get In Touch with Farahbi</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl border border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Quick Contact Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              onClick={handleCopyEmail}
              className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all ${
                darkMode ? 'bg-slate-900/80 border-slate-800 hover:border-amber-500/40' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block">Email Address</span>
                  <span className="text-xs font-bold font-mono">{PERSONAL_INFO.email}</span>
                </div>
              </div>
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-500" />}
            </button>

            <button
              onClick={handleCopyPhone}
              className={`p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all ${
                darkMode ? 'bg-slate-900/80 border-slate-800 hover:border-amber-500/40' : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono block">Phone Number</span>
                  <span className="text-xs font-bold font-mono">{PERSONAL_INFO.phone}</span>
                </div>
              </div>
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-500" />}
            </button>
          </div>

          {/* Direct Form */}
          {sentMessage ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
              <Check className="w-12 h-12 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-emerald-400 text-lg">Message Delivered!</h4>
              <p className="text-xs text-slate-300 font-mono">
                Thank you for reaching out. Farahbi will respond to your email promptly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full p-3 rounded-xl border text-sm font-sans transition-all focus:ring-2 focus:ring-amber-500 focus:outline-none ${
                      darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full p-3 rounded-xl border text-sm font-sans transition-all focus:ring-2 focus:ring-amber-500 focus:outline-none ${
                      darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`w-full p-3 rounded-xl border text-sm font-sans transition-all focus:ring-2 focus:ring-amber-500 focus:outline-none ${
                    darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Hello Farahbi, we would love to discuss a software engineering role or project collaboration..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={`w-full p-3 rounded-xl border text-sm font-sans transition-all focus:ring-2 focus:ring-amber-500 focus:outline-none ${
                    darkMode ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
                  }`}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-sm hover:bg-amber-400 shadow-lg shadow-amber-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Direct Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
