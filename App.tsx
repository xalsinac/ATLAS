
import React, { useState, useMemo } from 'react';
import WorldMap from './components/WorldMap';
import InterventionCard from './components/InterventionCard';
import { HISTORICAL_DATA } from './constants';
import { Intervention } from './types';

const App: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedIntervention, setSelectedIntervention] = useState<Intervention | null>(null);

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
    <div className="relative w-full h-screen bg-slate-950 overflow-hidden flex flex-col font-sans">
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

      <footer className="absolute bottom-0 left-0 right-0 z-30 p-6 md:p-12 pointer-events-none flex flex-col items-center gap-6">
        
        {/* Botón Flotante Moderno */}
        <button 
          onClick={handleShowAll}
          className={`pointer-events-auto px-8 py-3 rounded-full font-black text-[10px] md:text-xs transition-all shadow-2xl tracking-[0.15em] border-2 flex items-center gap-3 backdrop-blur-xl ${
            selectedYear === null 
              ? 'bg-red-600 text-white border-red-500' 
              : 'bg-slate-900/90 text-slate-300 border-slate-700 hover:border-slate-500'
          }`}
        >
          <div className={`w-2 h-2 rounded-full ${selectedYear === null ? 'bg-white animate-pulse' : 'bg-slate-500'}`}></div>
          {selectedYear === null ? 'VISUALIZANDO TODO' : 'VER TODOS LOS EVENTOS'}
        </button>

        {/* Slider de Tiempo Estilizado */}
        <div className="max-w-2xl w-full flex items-center gap-5 bg-slate-900/95 backdrop-blur-3xl p-5 md:p-6 rounded-[3rem] border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto">
          <div className="flex-1 flex flex-col gap-2">
            <input 
              type="range"
              min="0"
              max={availableYears.length - 1}
              step="1"
              value={currentYearIndex === -1 ? 0 : currentYearIndex}
              onChange={handleYearChange}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-600"
            />
            <div className="flex justify-between px-1">
               <span className="text-[8px] font-bold text-slate-600 tracking-widest">{availableYears[0]}</span>
               <span className="text-[8px] font-bold text-slate-600 tracking-widest">{availableYears[availableYears.length - 1]}</span>
            </div>
          </div>
          
          <div className={`flex items-center justify-center min-w-[70px] h-10 md:h-12 px-4 rounded-2xl font-black text-sm md:text-base transition-all border shadow-inner ${
            selectedYear ? 'bg-red-600 text-white border-red-500' : 'bg-slate-950 text-slate-700 border-slate-800'
          }`}>
            {selectedYear || 'TODO'}
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
