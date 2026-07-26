import React, { useState } from 'react';
import { Project } from '../types';
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Activity,
  Zap,
  FileText,
  Brain,
  Sliders,
  RefreshCw,
  AlertTriangle,
  Send,
  Cpu,
  Layers,
  Sparkles,
  Calculator
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  darkMode: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, darkMode }) => {
  if (!project) return null;

  // State for AuraWatch interactive simulator
  const [selectedCity, setSelectedCity] = useState<'Hobart' | 'Launceston' | 'Devonport'>('Hobart');
  const [trafficLevel, setTrafficLevel] = useState<number>(45);
  const [industrialSpike, setIndustrialSpike] = useState<boolean>(false);

  // State for TasNetworks simulator
  const [solarCapacity, setSolarCapacity] = useState<number>(6.6);
  const [batteryCapacity, setBatteryCapacity] = useState<number>(10);
  const [evCharger, setEvCharger] = useState<string>('Level 2 (7kW)');
  const [screeningResult, setScreeningResult] = useState<string | null>(null);

  // State for Prescription Writer BD simulator
  const [patientWeight, setPatientWeight] = useState<number>(70);
  const [patientHeight, setPatientHeight] = useState<number>(175);
  const [patientAge, setPatientAge] = useState<number>(35);
  const [drugSearch, setDrugSearch] = useState<string>('Paracetamol');

  // Calculated values for AuraWatch
  const baseAQI = selectedCity === 'Hobart' ? 24 : selectedCity === 'Launceston' ? 38 : 30;
  const simulatedAQI = baseAQI + Math.round(trafficLevel * 0.3) + (industrialSpike ? 85 : 0);
  const isAnomaly = industrialSpike || simulatedAQI > 80;

  // Prescription Calculations
  const heightM = patientHeight / 100;
  const bmi = (patientWeight / (heightM * heightM)).toFixed(1);
  const bmr = Math.round(10 * patientWeight + 6.25 * patientHeight - 5 * patientAge + 5);

  const handleRunScreening = () => {
    const totalKW = solarCapacity + (evCharger.includes('11kW') ? 11 : 7);
    if (totalKW > 15) {
      setScreeningResult('HIGH RISK: Local grid transformer capacity check required before approval.');
    } else if (totalKW > 10) {
      setScreeningResult('MEDIUM RISK: Automated phase-balancing required. Fast-track approval granted.');
    } else {
      setScreeningResult('LOW RISK: Instant connection approved via AWS Bedrock automated brief.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div
        className={`relative w-full max-w-4xl my-8 rounded-3xl border shadow-2xl overflow-hidden transition-all ${
          darkMode ? 'bg-[#12141a] border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800/60 bg-amber-500/5">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500 text-slate-950">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 font-mono">{project.period}</span>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-xl border transition-all ${
              darkMode
                ? 'border-slate-800 hover:bg-slate-800 text-slate-400 hover:text-white'
                : 'border-slate-200 hover:bg-slate-100 text-slate-600'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Title & Role */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-amber-400">
              {project.title}
            </h2>
            <p className="text-base sm:text-lg font-medium text-slate-300 mt-1">
              {project.subtitle}
            </p>
            <p className="text-xs text-amber-500 font-mono mt-2 flex items-center gap-1.5">
              <Cpu className="w-4 h-4" /> Role: {project.role}
            </p>
          </div>

          {/* Full Description */}
          <div className={`p-4 rounded-2xl border text-sm leading-relaxed ${
            darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
          }`}>
            {project.fullDescription}
          </div>

          {/* Interactive Prototype Simulator */}
          <div className={`p-6 rounded-2xl border shadow-inner ${
            darkMode ? 'bg-[#0b0c10] border-amber-500/30' : 'bg-slate-950 text-white border-amber-500'
          }`}>
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                <h3 className="font-bold text-base text-amber-400 font-mono">
                  Interactive Live Prototype Simulation
                </h3>
              </div>
              <span className="text-[11px] font-mono bg-amber-500/10 text-amber-400 px-2.5 py-1 rounded-md border border-amber-500/30">
                {project.demoType.toUpperCase()}
              </span>
            </div>

            {/* DEMO 1: AuraWatch Anomaly Detection */}
            {project.demoType === 'aurawatch' && (
              <div className="space-y-6 text-slate-200">
                <p className="text-xs text-slate-400">
                  Simulate urban air quality sensor telemetry and test the ML anomaly detection logic in real time:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                  <div>
                    <label className="block text-slate-400 mb-1">Tasmanian Region:</label>
                    <select
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.target.value as any)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                    >
                      <option value="Hobart">Hobart CBD</option>
                      <option value="Launceston">Launceston Basin</option>
                      <option value="Devonport">Devonport Port</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Simulated Traffic Index: {trafficLevel}%</label>
                    <input
                      type="range"
                      min="10"
                      max="100"
                      value={trafficLevel}
                      onChange={(e) => setTrafficLevel(Number(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1">Simulate Industrial Spike:</label>
                    <button
                      onClick={() => setIndustrialSpike(!industrialSpike)}
                      className={`w-full py-2 px-3 rounded-lg border transition-all text-xs font-bold ${
                        industrialSpike
                          ? 'bg-rose-500 text-white border-rose-400'
                          : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                      }`}
                    >
                      {industrialSpike ? '⚠️ Spike Active (+85 AQI)' : 'Inject Pollution Spike'}
                    </button>
                  </div>
                </div>

                {/* Live Output Card */}
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center font-bold font-mono text-lg ${
                      simulatedAQI > 100
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                        : simulatedAQI > 50
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                        : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                    }`}>
                      <span>{simulatedAQI}</span>
                      <span className="text-[9px] uppercase font-sans">AQI</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-white">
                        Live Sensor Metric – {selectedCity}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono mt-0.5">
                        PM2.5: {(simulatedAQI * 0.35).toFixed(1)} µg/m³ | NO2: {(simulatedAQI * 0.22).toFixed(1)} ppb
                      </p>
                    </div>
                  </div>

                  <div className={`px-4 py-2 rounded-xl text-xs font-mono font-bold border ${
                    isAnomaly
                      ? 'bg-rose-500/10 border-rose-500/40 text-rose-400 animate-pulse'
                      : 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400'
                  }`}>
                    {isAnomaly
                      ? '🚨 ML FLAG: UNEXPLAINED ANOMALY'
                      : '✅ ML STATUS: NORMAL TRAFFIC/WEATHER'}
                  </div>
                </div>
              </div>
            )}

            {/* DEMO 2: TasNetworks Feasibility Screener */}
            {project.demoType === 'tasnetworks' && (
              <div className="space-y-6 text-slate-200">
                <p className="text-xs text-slate-400">
                  Simulate residential grid connection screening with AWS Bedrock risk assessment:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                  <div>
                    <label className="block text-slate-400 mb-1">Rooftop Solar (kW):</label>
                    <input
                      type="number"
                      step="0.5"
                      value={solarCapacity}
                      onChange={(e) => setSolarCapacity(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Battery Storage (kWh):</label>
                    <input
                      type="number"
                      step="1"
                      value={batteryCapacity}
                      onChange={(e) => setBatteryCapacity(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">EV Charger Spec:</label>
                    <select
                      value={evCharger}
                      onChange={(e) => setEvCharger(e.target.value)}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                    >
                      <option>Level 2 (7kW)</option>
                      <option>Level 2 (11kW Three-Phase)</option>
                      <option>Level 1 (3.6kW Trickle)</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleRunScreening}
                  className="w-full py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs font-mono hover:bg-amber-400 transition-all flex items-center justify-center gap-2"
                >
                  <Zap className="w-4 h-4" />
                  <span>Run AWS Bedrock Risk Triage & Design Brief</span>
                </button>

                {screeningResult && (
                  <div className="p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-xs font-mono text-amber-300">
                    <span className="font-bold block text-white mb-1">⚡ AWS Bedrock Generated Brief Result:</span>
                    {screeningResult}
                  </div>
                )}
              </div>
            )}

            {/* DEMO 3: Prescription Writer BD */}
            {project.demoType === 'prescription' && (
              <div className="space-y-6 text-slate-200">
                <p className="text-xs text-slate-400">
                  Test the clinical calculation module (BMI, BMR & Dosage Estimator):
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
                  <div>
                    <label className="block text-slate-400 mb-1">Patient Weight (kg):</label>
                    <input
                      type="number"
                      value={patientWeight}
                      onChange={(e) => setPatientWeight(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Patient Height (cm):</label>
                    <input
                      type="number"
                      value={patientHeight}
                      onChange={(e) => setPatientHeight(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Patient Age (years):</label>
                    <input
                      type="number"
                      value={patientAge}
                      onChange={(e) => setPatientAge(Number(e.target.value))}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-mono uppercase">Calculated BMI</span>
                    <span className="text-lg font-bold text-amber-400 font-mono">{bmi}</span>
                    <span className="text-[10px] text-slate-400 block">
                      {Number(bmi) < 18.5 ? 'Underweight' : Number(bmi) < 25 ? 'Normal' : 'Overweight'}
                    </span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="text-[10px] text-slate-400 block font-mono uppercase">Estimated BMR</span>
                    <span className="text-lg font-bold text-amber-400 font-mono">{bmr} kcal</span>
                    <span className="text-[10px] text-slate-400 block">Basal Metabolic Rate</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-slate-400 block font-mono uppercase">Maintenance Fluid</span>
                    <span className="text-lg font-bold text-amber-400 font-mono">{patientWeight * 35} mL/day</span>
                    <span className="text-[10px] text-slate-400 block">Standard Clinical Hydration</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Key Achievements Bullet List */}
          <div>
            <h3 className="text-sm font-bold tracking-wide uppercase font-mono text-amber-500 mb-3">
              Key Technical Highlights
            </h3>
            <div className="space-y-2">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h3 className="text-sm font-bold tracking-wide uppercase font-mono text-amber-500 mb-3">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium border ${
                    darkMode
                      ? 'bg-slate-900 border-slate-800 text-amber-400'
                      : 'bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 border-t border-slate-800/60 bg-amber-500/5 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            Designed by Md. Farahbi Ishrak Famous
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
