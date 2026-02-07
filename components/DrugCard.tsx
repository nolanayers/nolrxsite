import React from 'react';
import { Drug } from '../types';
import { Pill, AlertTriangle, ArrowRight } from 'lucide-react';

interface DrugCardProps {
  drug: Drug;
  onClick: (drug: Drug) => void;
}

const DrugCard: React.FC<DrugCardProps> = ({ drug, onClick }) => {
  return (
    <div 
      onClick={() => onClick(drug)}
      className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 hover:shadow-md hover:border-blue-400 transition-all cursor-pointer group flex flex-col justify-between h-full"
    >
      <div>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
              {drug.genericName}
            </h3>
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              {drug.name}
            </span>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium 
            ${drug.class === 'SSRI' ? 'bg-blue-100 text-blue-700' : 
              drug.class === 'SNRI' ? 'bg-purple-100 text-purple-700' :
              drug.class === 'TCA' ? 'bg-amber-100 text-amber-700' :
              drug.class === 'MAOI' ? 'bg-red-100 text-red-700' :
              'bg-emerald-100 text-emerald-700'}`}>
            {drug.class}
          </span>
        </div>
        
        <div className="space-y-2 mt-4">
          <div className="flex items-center text-sm text-slate-600">
            <Pill size={14} className="mr-2 text-slate-400" />
            <span>Target: {drug.dosing.therapeutic}</span>
          </div>
          {drug.blackBoxWarning && (
            <div className="flex items-start text-xs text-red-600 bg-red-50 p-2 rounded">
              <AlertTriangle size={12} className="mr-1 mt-0.5 flex-shrink-0" />
              <span className="line-clamp-2">{drug.blackBoxWarning}</span>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-end">
        <span className="text-sm font-medium text-blue-600 flex items-center group-hover:underline">
          View Details <ArrowRight size={14} className="ml-1" />
        </span>
      </div>
    </div>
  );
};

export default DrugCard;