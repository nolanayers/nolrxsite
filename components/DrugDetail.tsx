import React from 'react';
import { Drug } from '../types';
import { X, AlertTriangle, Activity, Thermometer, ShieldAlert, BookOpen, Clock } from 'lucide-react';

interface DrugDetailProps {
  drug: Drug | null;
  onClose: () => void;
}

const DrugDetail: React.FC<DrugDetailProps> = ({ drug, onClose }) => {
  if (!drug) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 font-sans">
      <div 
        className="absolute inset-0 bg-stone-200/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      <div className="relative bg-[#FCFCFB] rounded-[2.5rem] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.2)] w-full max-w-4xl max-h-[90vh] overflow-y-auto flex flex-col border border-white">
        {/* Header */}
        <div className="sticky top-0 bg-[#FCFCFB]/95 backdrop-blur-md border-b border-stone-100 px-8 py-6 flex justify-between items-start z-10 shadow-sm">
          <div>
            <h2 className="text-3xl font-light text-[#1A2521] tracking-tight">{drug.genericName}</h2>
            <div className="flex items-center mt-2 space-x-3">
               <span className="text-stone-500 font-light">{drug.name}</span>
               <span className="w-1 h-1 rounded-full bg-stone-300"></span>
               <span className="text-[#FAF8F5] font-normal text-sm bg-[#1A2521] px-3 py-1 rounded-full shadow-sm">{drug.class}</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-white md:hover:bg-stone-100 rounded-full transition-colors shadow-md border border-stone-100"
          >
            <X size={20} className="text-stone-400 stroke-2" />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 space-y-10">
          
          {/* Clinical Thought / Intro */}
          {drug.clinicalThought && (
            <div className="mb-2 p-6 bg-[#F3EEE7]/50 rounded-2xl border border-[#1A2521]/5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
              <p className="text-lg font-light text-[#1A2521] leading-relaxed">
                {drug.clinicalThought}
              </p>
            </div>
          )}

          {/* Dosing Section */}
          <section>
            <h3 className="text-sm font-medium text-stone-400 uppercase tracking-widest mb-6 flex items-center">
              <Activity className="mr-2 text-[#1A2521]" size={16} strokeWidth={1.5} /> Dosing Guidelines
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Starting', value: drug.dosing.starting, color: 'bg-white border border-stone-100' },
                { label: 'Therapeutic', value: drug.dosing.therapeutic, color: 'bg-stone-50 border border-stone-100' },
                { label: 'Max Dose', value: drug.dosing.max, color: 'bg-stone-100 border border-stone-200' }
              ].map((item, idx) => (
                 <div key={idx} className={`${item.color} p-6 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.03)] md:hover:shadow-md transition-shadow`}>
                  <span className="block text-[10px] text-stone-500 font-bold uppercase tracking-widest mb-2">{item.label}</span>
                  <span className="text-lg font-normal text-stone-800 leading-snug">{item.value}</span>
                </div>
              ))}
            </div>
            {drug.dosing.notes && (
              <p className="mt-4 text-sm text-stone-500 italic font-light ml-2">Note: {drug.dosing.notes}</p>
            )}
          </section>

          {/* Mechanism & Indications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <section>
              <h3 className="text-sm font-medium text-stone-400 uppercase tracking-widest mb-4 flex items-center">
                <BookOpen className="mr-2 text-[#1A2521]" size={16} strokeWidth={1.5} /> Clinical Profile
              </h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-[0_6px_24px_rgba(0,0,0,0.04)] border border-stone-100">
                  <span className="text-xs font-semibold text-[#1A2521]/50 block mb-2 uppercase tracking-wide">Mechanism</span>
                  <p className="text-stone-700 font-light leading-relaxed">{drug.mechanism}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-stone-400 block mb-3 uppercase tracking-wide">Indications</span>
                  <div className="flex flex-wrap gap-2">
                    {drug.fdaIndications.map(ind => (
                      <span key={ind} className="px-3 py-1.5 bg-stone-50 border border-stone-200 text-stone-700 rounded-lg text-xs font-medium tracking-wide shadow-sm">{ind}</span>
                    ))}
                  </div>
                </div>
                 <div>
                  <span className="text-xs font-semibold text-stone-400 block mb-3 uppercase tracking-wide">Off-Label</span>
                   <div className="flex flex-wrap gap-2">
                    {drug.offLabelIndications.length > 0 ? drug.offLabelIndications.map(ind => (
                      <span key={ind} className="px-3 py-1.5 bg-white border border-stone-200 text-stone-500 rounded-lg text-xs font-light tracking-wide shadow-sm">{ind}</span>
                    )) : <span className="text-stone-300 italic font-light">None listed</span>}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-sm font-medium text-stone-400 uppercase tracking-widest mb-4 flex items-center">
                <Clock className="mr-2 text-[#1A2521]" size={16} strokeWidth={1.5} /> Pharmacokinetics
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-stone-100 flex justify-between items-center">
                  <span className="text-stone-500 font-light">Half-Life</span>
                  <span className="text-stone-800 font-medium">{drug.pharmacokinetics.halfLife}</span>
                </div>
                <div className="bg-white p-5 rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.03)] border border-stone-100 flex justify-between items-center">
                  <span className="text-stone-500 font-light">Metabolism</span>
                  <span className="text-stone-800 font-medium">{drug.pharmacokinetics.metabolism}</span>
                </div>
              </div>
            </section>
          </div>

          {/* Side Effects & Contraindications */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <section>
              <h3 className="text-sm font-medium text-stone-400 uppercase tracking-widest mb-4 flex items-center">
                <Thermometer className="mr-2 text-[#1A2521]" size={16} strokeWidth={1.5} /> Side Effects
              </h3>
              <div className="space-y-6 bg-white p-6 rounded-3xl shadow-[0_6px_24px_rgba(0,0,0,0.04)] border border-stone-100">
                <div>
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wide">Common</span>
                  <ul className="text-sm text-stone-600 mt-2 space-y-1 font-light">
                    {drug.sideEffects.common.map(se => <li key={se} className="flex items-start"><span className="mr-2 text-[#1A2521]">•</span>{se}</li>)}
                  </ul>
                </div>
                <div className="pt-4 border-t border-stone-50">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-wide">Serious / Rare</span>
                   <ul className="text-sm text-stone-600 mt-2 space-y-1 font-light">
                    {drug.sideEffects.serious.map(se => <li key={se} className="flex items-start"><span className="mr-2 text-[#1A2521] font-bold">!</span>{se}</li>)}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-sm font-medium text-stone-400 uppercase tracking-widest mb-4 flex items-center">
                <ShieldAlert className="mr-2 text-[#1A2521]" size={16} strokeWidth={1.5} /> Contraindications
              </h3>
              <div className="bg-[#F3EEE7]/50 p-6 rounded-3xl border border-[#1A2521]/5 shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)]">
                 <ul className="space-y-2">
                 {drug.contraindications.map(c => (
                   <li key={c} className="text-sm text-stone-600 font-light flex items-start">
                     <span className="mr-2 text-[#1A2521]">×</span> {c}
                   </li>
                 ))}
                 </ul>
              </div>
            </section>
          </div>

          {/* Pearls - Now with dark green accent */}
          <section className="bg-[#F3EEE7]/30 rounded-3xl p-8 border border-stone-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
            <h3 className="text-lg font-normal text-[#1A2521] mb-4 tracking-tight flex items-center">
               <SparklesIcon className="w-4 h-4 mr-2 text-[#1A2521]" /> Clinical Pearls
            </h3>
            <ul className="space-y-3">
              {drug.clinicalPearls.map((pearl, i) => (
                <li key={i} className="flex items-start text-stone-700 font-light leading-relaxed">
                  <span className="mr-3 text-[#1A2521] font-bold text-lg leading-none">•</span>
                  {pearl}
                </li>
              ))}
            </ul>
          </section>

          {/* Boxed Warning - No Red, using Dark Block */}
          {drug.blackBoxWarning && (
            <div className="mt-8 pt-8 border-t border-stone-100">
              <div className="flex items-start bg-[#1A2521] border border-[#1A2521] p-6 rounded-2xl text-[#FAF8F5] shadow-[0_10px_30px_-5px_rgba(26,37,33,0.3)]">
                <AlertTriangle className="text-[#FAF8F5] mr-4 mt-0.5 flex-shrink-0" size={18} strokeWidth={1.5} />
                <div>
                  <h3 className="text-[#FAF8F5] font-medium text-xs uppercase tracking-widest mb-1">Boxed Warning</h3>
                  <p className="text-[#FAF8F5]/90 text-sm font-light leading-relaxed">{drug.blackBoxWarning}</p>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

// Helper for the sparkles icon which wasn't imported in original props
const SparklesIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
);

export default DrugDetail;