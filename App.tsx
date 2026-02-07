import React, { useState, useMemo } from 'react';
import { ANTIDEPRESSANTS, ANXIOLYTICS, ANTIPSYCHOTICS, AUGMENTATION_STRATEGIES } from './data';
import { Drug } from './types';
import DrugDetail from './components/DrugDetail';
import CategoryList from './components/CategoryList';
import AugmentationGuide from './components/AugmentationGuide';
import { Search, Filter, ArrowLeft, X, ShieldAlert } from 'lucide-react';

type View = 'home' | 'browse' | 'anxiolytics' | 'antipsychotics' | 'augmentation' | 'search';

const CATEGORIES = [
  { id: 'browse', label: 'Antidepressants', desc: 'SSRI, SNRI, TCA, MAOI & Atypical' },
  { id: 'anxiolytics', label: 'Anxiolytics', desc: 'Benzodiazepines, Gabapentinoids & more' },
  { id: 'antipsychotics', label: 'Antipsychotics', desc: 'First & Second Generation Antipsychotics' },
  { id: 'augmentation', label: 'Augmentation', desc: 'Strategies for Treatment Resistance' },
];

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedDrug, setSelectedDrug] = useState<Drug | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('All');
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  // Navigation Helper
  const goHome = () => {
    setCurrentView('home');
    setSearchQuery('');
    setSelectedClass('All');
  };

  // Determine active dataset based on view
  let activeDataset = ANTIDEPRESSANTS;
  if (currentView === 'anxiolytics') activeDataset = ANXIOLYTICS;
  else if (currentView === 'antipsychotics') activeDataset = ANTIPSYCHOTICS;
  else if (currentView === 'search') activeDataset = [...ANTIDEPRESSANTS, ...ANXIOLYTICS, ...ANTIPSYCHOTICS];
  
  // Filter Logic
  const filteredDrugs = useMemo(() => {
    return activeDataset.filter(drug => {
      const matchesSearch = drug.genericName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            drug.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesClass = selectedClass === 'All' || drug.class === selectedClass;
      return matchesSearch && matchesClass;
    });
  }, [searchQuery, selectedClass, activeDataset, currentView]);

  // Derive classes for dropdown
  const availableClasses = useMemo(() => {
    const classes = new Set(activeDataset.map(d => d.class));
    return Array.from(classes).sort();
  }, [activeDataset]);

  // Derive augmentation groups
  const augmentationGroups = useMemo(() => {
    if (currentView !== 'augmentation') return [];
    const types = new Set(AUGMENTATION_STRATEGIES.map(s => s.type));
    return Array.from(types).sort();
  }, [currentView]);

  const handleQuickSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (!value) return;

    if (currentView === 'augmentation') {
      setSearchQuery(value);
      e.target.value = "";
      return;
    }

    const drug = activeDataset.find(d => d.id === value);
    if (drug) {
      setSelectedDrug(drug);
      e.target.value = ""; 
    }
  };

  const getPageTitle = () => {
    switch (currentView) {
      case 'browse': return 'Antidepressants';
      case 'anxiolytics': return 'Anxiolytics';
      case 'antipsychotics': return 'Antipsychotics';
      case 'augmentation': return 'Augmentation';
      case 'search': return 'Medication Search';
      default: return '';
    }
  };

  const getSubtitle = () => {
    switch (currentView) {
      case 'augmentation': return 'Strategies for partial response or treatment resistance.';
      case 'search': return 'Search across all medication categories.';
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] font-sans flex flex-col">
      
      {/* Header */}
      <header className="sticky top-0 z-30 bg-[#FAF8F5]/90 backdrop-blur-md px-4 py-4 md:px-8 md:py-6 border-b border-stone-100 flex items-center justify-between shadow-[0_4px_30px_rgba(0,0,0,0.03)]">
        <div className="flex items-center">
          {currentView !== 'home' && (
             <button 
               onClick={goHome}
               className="mr-4 p-2 -ml-2 text-stone-400 md:hover:text-[#1A2521] transition-colors rounded-full md:hover:bg-stone-100"
             >
               <ArrowLeft size={24} strokeWidth={1.5} />
             </button>
          )}
          <button onClick={goHome} className="flex-shrink-0 focus:outline-none">
            <img 
              src="https://i.ibb.co/PzGBMFCz/nolrx-jpeg-001-png-001.png" 
              alt="nolrx" 
              className="h-8 md:h-10 w-auto object-contain drop-shadow-sm"
            />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative">
        
        {/* VIEW: HOME */}
        {currentView === 'home' && (
          <div className="flex-1 flex flex-col p-4 md:p-8 animate-in fade-in duration-500">
            <div className="w-full max-w-2xl mx-auto flex flex-col">
              
              <div className="flex-1 flex flex-col justify-center space-y-5 md:space-y-6">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCurrentView(cat.id as View)}
                    className="w-full group relative overflow-hidden bg-white md:hover:bg-[#1A2521] border border-stone-100 md:hover:border-[#1A2521] rounded-[2rem] p-8 md:p-10 text-left transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transform md:hover:-translate-y-1 active:scale-[0.98]"
                  >
                    <div className="relative z-10 flex justify-between items-center">
                      <div>
                        <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#1A2521] md:group-hover:text-[#FAF8F5] transition-colors">
                          {cat.label}
                        </h2>
                        <p className="text-stone-400 md:group-hover:text-stone-300 font-light text-sm md:text-base mt-3 transition-colors">
                          {cat.desc}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-8 md:mt-12">
                <button 
                  onClick={() => setCurrentView('search')}
                  className="w-full py-5 rounded-2xl border border-[#1A2521] bg-white text-[#1A2521] md:hover:bg-[#1A2521] md:hover:text-[#FAF8F5] transition-all duration-300 font-medium text-lg uppercase tracking-widest flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] md:hover:shadow-xl active:scale-[0.98]"
                >
                  <Search className="mr-3" size={20} strokeWidth={2} />
                  Search Medications
                </button>
                
                <div className="pt-8 text-center pb-8">
                   <button 
                     onClick={() => setShowDisclaimer(true)}
                     className="text-[10px] text-stone-300 font-light tracking-widest uppercase hover:text-stone-500 transition-colors"
                   >
                     Educational Use Only • © 2026 nolrx
                   </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: CATEGORY / SEARCH */}
        {currentView !== 'home' && (
          <div className="w-full max-w-5xl mx-auto p-4 md:p-10 animate-in slide-in-from-right-4 duration-300">
            
            <div className="space-y-6 md:space-y-8">
              {/* Page Title */}
              <div className="text-center sm:text-left">
                <h2 className="text-3xl font-light text-[#1A2521] tracking-tight">
                  {getPageTitle()}
                </h2>
                {getSubtitle() && (
                  <p className="text-stone-500 font-light text-sm tracking-wide mt-2">
                    {getSubtitle()}
                  </p>
                )}
              </div>

              {/* Controls */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                {/* Search Bar */}
                <div className="relative group">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400 group-focus-within:text-[#1A2521] transition-colors" size={18} />
                  <input 
                    type="text" 
                    placeholder={currentView === 'augmentation' ? "Search strategies..." : "Search medications..."}
                    value={searchQuery}
                    autoFocus={currentView === 'search'}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-2xl border border-stone-200 bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] focus:shadow-[0_8px_30px_rgb(0,0,0,0.06)] focus:border-[#1A2521]/20 outline-none transition-all placeholder:text-stone-400 font-light text-stone-700"
                  />
                </div>

                {/* Quick Select */}
                <div className="relative group">
                   <select 
                     id="quick-select"
                     onChange={handleQuickSelect}
                     defaultValue=""
                     className="block w-full pl-4 pr-10 py-4 text-base border border-stone-200 rounded-2xl bg-white shadow-[0_4px_20px_rgb(0,0,0,0.03)] md:hover:shadow-md focus:outline-none focus:border-[#1A2521]/20 cursor-pointer appearance-none font-light text-stone-700 transition-all"
                   >
                     <option value="" disabled>Quick select...</option>
                     {currentView === 'augmentation' ? (
                       augmentationGroups.map(type => (
                         <optgroup key={type} label={type}>
                            {AUGMENTATION_STRATEGIES.filter(s => s.type === type).map(s => (
                               <option key={s.id} value={s.agent}>{s.agent}</option>
                            ))}
                         </optgroup>
                       ))
                     ) : (
                       availableClasses.map(cls => (
                         <optgroup key={cls} label={cls}>
                           {activeDataset.filter(d => d.class === cls).map(d => (
                             <option key={d.id} value={d.id}>
                               {d.genericName}
                             </option>
                           ))}
                         </optgroup>
                       ))
                     )}
                   </select>
                   <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                     <Filter size={16} className="text-stone-400" />
                   </div>
                </div>
              </div>

              {/* Content Body */}
              <div className="mt-8 md:mt-0 pb-20">
                {currentView === 'augmentation' ? (
                  <AugmentationGuide searchQuery={searchQuery} />
                ) : (
                  <CategoryList 
                      drugs={filteredDrugs} 
                      onSelect={setSelectedDrug} 
                      searchQuery={searchQuery}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Detail Modal */}
      {selectedDrug && (
        <DrugDetail 
          drug={selectedDrug} 
          onClose={() => setSelectedDrug(null)} 
        />
      )}

      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 font-sans">
          <div 
            className="absolute inset-0 bg-stone-200/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setShowDisclaimer(false)}
          ></div>
          <div className="relative bg-white rounded-[2rem] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)] w-full max-w-md p-8 border border-white animate-in zoom-in-95 duration-200">
             <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                   <ShieldAlert className="text-[#1A2521] mr-3" size={24} strokeWidth={1.5} />
                   <h3 className="text-xl font-light text-[#1A2521]">Disclaimer</h3>
                </div>
                <button 
                  onClick={() => setShowDisclaimer(false)} 
                  className="p-2 -mr-2 -mt-2 text-stone-400 hover:text-[#1A2521] bg-transparent hover:bg-stone-50 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
             </div>
             <div className="space-y-4 text-stone-600 font-light text-sm leading-relaxed">
               <p>
                 <strong>nolrx</strong> is an educational tool designed exclusively for psychiatry residents and medical professionals.
               </p>
               <p>
                 The information provided is for reference purposes only and does not constitute medical advice, diagnosis, or treatment. It is not a substitute for professional clinical judgment.
               </p>
               <p>
                 Prescribing decisions must be based on individual patient assessment, current FDA-approved product labeling, and institutional guidelines. The creators assume no liability for errors, omissions, or outcomes related to the use of this application.
               </p>
             </div>
             <div className="mt-8">
               <button 
                 onClick={() => setShowDisclaimer(false)}
                 className="w-full py-3 bg-[#1A2521] text-[#FAF8F5] rounded-xl text-sm font-medium tracking-wide hover:bg-[#2A3531] transition-colors"
               >
                 I Understand
               </button>
             </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;