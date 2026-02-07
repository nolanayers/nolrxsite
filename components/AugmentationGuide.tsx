import React, { useMemo } from 'react';
import { AugmentationStrategy } from '../types';
import { AUGMENTATION_STRATEGIES } from '../data';
import { TrendingUp, Zap } from 'lucide-react';

interface AugmentationGuideProps {
  searchQuery?: string;
}

const AugmentationGuide: React.FC<AugmentationGuideProps> = ({ searchQuery = '' }) => {
  
  const filteredStrategies = useMemo(() => {
    if (!searchQuery) return AUGMENTATION_STRATEGIES;
    const lowerQuery = searchQuery.toLowerCase();
    return AUGMENTATION_STRATEGIES.filter(strategy => 
      strategy.agent.toLowerCase().includes(lowerQuery) ||
      strategy.type.toLowerCase().includes(lowerQuery) ||
      strategy.notes.toLowerCase().includes(lowerQuery)
    );
  }, [searchQuery]);

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {filteredStrategies.length === 0 ? (
        <div className="text-center py-20 text-stone-400 font-light">
          <p className="text-xl tracking-wide">No strategies found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredStrategies.map((strategy) => (
            <div key={strategy.id} className="bg-white rounded-[2.5rem] p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] md:hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 border border-stone-100 md:hover:border-[#1A2521]/20 transform md:hover:-translate-y-1">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-normal text-stone-800 flex items-center tracking-tight">
                  {strategy.evidenceLevel === 'High' ? <TrendingUp className="text-[#1A2521] mr-3" size={20} strokeWidth={1.5} /> : <Zap className="text-stone-300 mr-3" size={20} strokeWidth={1.5} />}
                  {strategy.agent}
                </h3>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest 
                  ${strategy.evidenceLevel === 'High' ? 'bg-[#1A2521] text-[#FAF8F5] border border-[#1A2521] shadow-sm' : 'bg-stone-50 text-stone-400 border border-stone-100'}`}>
                  {strategy.evidenceLevel}
                </span>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#F5F5F4]/50 p-4 rounded-2xl border border-stone-100 shadow-sm">
                    <span className="block text-[10px] font-bold text-stone-400 uppercase mb-2 tracking-widest">Dosing</span>
                    <span className="font-light text-sm text-stone-700 leading-snug block">{strategy.dosing}</span>
                  </div>
                  <div className="bg-[#F5F5F4]/50 p-4 rounded-2xl border border-stone-100 shadow-sm">
                    <span className="block text-[10px] font-bold text-stone-400 uppercase mb-2 tracking-widest">Type</span>
                    <span className="font-light text-sm text-stone-700 leading-snug block">{strategy.type}</span>
                  </div>
                </div>

                <div className="px-1">
                   <span className="block text-[10px] font-bold text-stone-400 uppercase mb-2 tracking-widest">Monitoring</span>
                   <p className="text-sm text-stone-600 font-light">{strategy.monitoring}</p>
                </div>

                 <div className="pt-6 border-t border-stone-100">
                   <p className="text-sm text-stone-500 font-light italic leading-relaxed">"{strategy.notes}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AugmentationGuide;