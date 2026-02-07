import React, { useState, useMemo, useEffect } from 'react';
import { Drug, DrugClass } from '../types';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface CategoryListProps {
  drugs: Drug[];
  onSelect: (drug: Drug) => void;
  searchQuery: string;
}

const CategoryList: React.FC<CategoryListProps> = ({ drugs, onSelect, searchQuery }) => {
  const groupedDrugs = useMemo(() => {
    const groups: Partial<Record<DrugClass, Drug[]>> = {};
    drugs.forEach(drug => {
      if (!groups[drug.class]) {
        groups[drug.class] = [];
      }
      groups[drug.class]?.push(drug);
    });
    return groups;
  }, [drugs]);

  const sortedClasses = Object.keys(groupedDrugs) as DrugClass[];
  const [expandedClasses, setExpandedClasses] = useState<string[]>([]);

  useEffect(() => {
    if (searchQuery) {
      setExpandedClasses(Object.keys(groupedDrugs));
    } else {
      setExpandedClasses([]); 
    }
  }, [searchQuery, groupedDrugs]);

  const toggleClass = (cls: string) => {
    setExpandedClasses(prev => 
      prev.includes(cls) 
        ? prev.filter(c => c !== cls) 
        : [...prev, cls]
    );
  };

  if (drugs.length === 0) {
    return (
      <div className="text-center py-20 text-stone-400 font-light">
        <p className="text-xl tracking-wide">No medications found.</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {sortedClasses.map(cls => {
        const classDrugs = groupedDrugs[cls] || [];
        const isExpanded = expandedClasses.includes(cls);

        return (
          <div key={cls} className={`bg-white rounded-3xl transition-all duration-300 overflow-hidden ${isExpanded ? 'shadow-[0_12px_40px_rgb(0,0,0,0.08)] border border-[#1A2521]/10 ring-1 ring-[#1A2521]/5' : 'shadow-[0_8px_24px_rgb(0,0,0,0.03)] border border-stone-100 md:hover:border-[#1A2521]/30 md:hover:shadow-md'}`}>
            <button
              onClick={() => toggleClass(cls)}
              className="w-full flex items-center justify-between p-6 md:hover:bg-stone-50/50 transition-colors text-left"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full transition-all duration-300 ${isExpanded ? 'bg-[#1A2521] text-[#FAF8F5] rotate-90 shadow-lg' : 'bg-stone-100 text-stone-400'}`}>
                   <ChevronRight size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className={`font-normal text-xl tracking-wide transition-colors ${isExpanded ? 'text-[#1A2521]' : 'text-stone-800'}`}>{cls}</h3>
                  <p className="text-xs text-stone-400 font-light mt-0.5 tracking-wider uppercase">{classDrugs.length} Medication{classDrugs.length !== 1 ? 's' : ''}</p>
                </div>
              </div>
            </button>

            {isExpanded && (
              <div className="px-6 pb-6 pt-0 animate-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {classDrugs.map(drug => (
                  <div 
                    key={drug.id} 
                    onClick={() => onSelect(drug)}
                    className="p-5 rounded-2xl bg-white md:hover:bg-stone-50 transition-all cursor-pointer group flex items-center justify-between border border-stone-100 shadow-[0_2px_12px_rgba(0,0,0,0.04)] md:hover:shadow-lg md:hover:-translate-y-0.5"
                  >
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <span className="font-medium text-stone-800 text-lg md:group-hover:text-[#1A2521] transition-colors">
                          {drug.genericName}
                        </span>
                        <span className="text-sm text-stone-500 font-light">
                          {drug.name}
                        </span>
                      </div>
                      <div className="mt-1 text-sm text-stone-400 font-light">
                        {drug.dosing.therapeutic}
                      </div>
                    </div>
                    <div className="text-stone-300 md:group-hover:text-[#1A2521]/60 transition-colors">
                      <ChevronRight size={18} strokeWidth={1.5} />
                    </div>
                  </div>
                ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;