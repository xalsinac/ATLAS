
import React, { useState, useMemo, useEffect } from 'react';
import WorldMap from './components/WorldMap.tsx';
import InterventionCard from './components/InterventionCard.tsx';
import { HISTORICAL_DATA } from './constants.ts';
import { Intervention } from './types.ts';

const App: React.FC = () => {
  // Estado inicial null garantiza que se muestren TODOS al cargar
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedIntervention, setSelectedIntervention] = useState<Intervention | null>(null);

  // Mapeo de años con eventos para el slider (sin años vacíos)
  const availableYears = useMemo(() => {
    const years = new Set<number>();
    HISTORICAL_DATA.forEach(item => {
      item.years.forEach(y => years.add(y));
    });
    return Array.from(years).sort((a, b) => a - b);
  }, []);

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = parseInt(e.target.value);
    setSelectedYear(availableYears[index]);
    setSelectedIntervention(null);
  };

  const handleShowAll = () => {
    setSelectedYear(null);
    setSelectedIntervention(null);
  };

  const currentYearIndex = selectedYear === null ? -1 : availableYears.indexOf(selectedYear);

  return (
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden flex flex-col font-sans select-none">
      <header className="absolute top-0 left-0 right-0 z-20 p-6 md:p-10 flex flex-col gap-1 pointer-events-none">
        <h1 className="text-xl md:text-3xl font-black text-white tracking-tighter uppercase pointer-events-auto inline-block">
          <span className="bg-red-600 px-2 py-0.5 mr-1 italic">ATLAS</span> HISTÓRICO
        </h1>
        <p className="text-slate-500 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase pointer-events-auto">
          Intervenciones y Conflictos Globales
        </p>
      </header>

      <main className="flex-1 w-full h-full relative">
        <WorldMap 
          data={HISTORICAL_DATA} 
          currentYear={selectedYear}
          onSelectCountry={(item) => setSelectedIntervention(item)}
          selectedId={selectedIntervention?.id || null}
        />
      </main>

      <footer className="absolute bottom-0 left-0 right-0 z-30 p-6 md:p-12 pointer-events-none flex flex-col items-center gap-6 pb-16 md:pb-20">
        
        <div className="flex items-center gap-3 pointer-events-auto">
          <button 
            onClick={handleShowAll}
            className={`px-10 py-4 rounded-full font-black text-[10px] md:text-xs transition-all shadow-[0_0_30px_rgba(220,38,38,0.3)] tracking-[0.2em] border-2 flex items-center gap-3 backdrop-blur-3xl ${
              selectedYear === null 
                ? 'bg-red-600 text-white border-red-400 scale-105' 
                : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:border-red-600 hover:text-white'
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${selectedYear === null ? 'bg-white animate-pulse' : 'bg-slate-600'}`}></div>
            VISTA GLOBAL ({HISTORICAL_DATA.length} EVENTOS)
          </button>
        </div>

        <div className="max-w-xl w-full flex items-center gap-6 bg-slate-900/95 backdrop-blur-3xl p-5 md:p-7 rounded-[3.5rem] border border-white/5 shadow-[0_30px_60px_rgba(0,0,0,0.6)] pointer-events-auto">
          <div className="flex-1 flex flex-col gap-3">
            <input 
              type="range"
              min="0"
              max={availableYears.length - 1}
              step="1"
              value={currentYearIndex === -1 ? 0 : currentYearIndex}
              onChange={handleYearChange}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-600 transition-all"
            />
            <div className="flex justify-between px-2">
               <span className="text-[9px] font-bold text-slate-600 tracking-widest">{availableYears[0]}</span>
               <div className="text-[9px] font-bold text-red-500/50 uppercase tracking-[0.3em] text-center hidden md:block">Cronología de Hitos</div>
               <span className="text-[9px] font-bold text-slate-600 tracking-widest">{availableYears[availableYears.length - 1]}</span>
            </div>
          </div>
          
          <div className={`flex items-center justify-center min-w-[90px] h-12 md:h-14 px-5 rounded-2xl font-black text-base md:text-lg transition-all border-2 shadow-2xl ${
            selectedYear ? 'bg-red-600 text-white border-red-500' : 'bg-slate-950 text-slate-800 border-slate-900'
          }`}>
            {selectedYear || 'TODOS'}
          </div>
        </div>
      </footer>

      <InterventionCard 
        intervention={selectedIntervention}
        onClose={() => setSelectedIntervention(null)}
      />
    </div>
  );
};

export default App;
