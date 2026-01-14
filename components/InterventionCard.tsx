
import React, { useState, useEffect } from 'react';
import { Intervention } from '../types';
import { getHistoricalAnalysis } from '../services/geminiService';

interface InterventionCardProps {
  intervention: Intervention | null;
  onClose: () => void;
}

const InterventionCard: React.FC<InterventionCardProps> = ({ intervention, onClose }) => {
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setAiAnalysis(null);
  }, [intervention]);

  if (!intervention) return null;

  const handleFetchAnalysis = async () => {
    setLoading(true);
    const analysis = await getHistoricalAnalysis(intervention.country, intervention.expandedDescription || intervention.description);
    setAiAnalysis(analysis || "Error al generar el análisis.");
    setLoading(false);
  };

  return (
    <div className="fixed inset-x-4 bottom-32 md:bottom-auto md:top-6 md:right-6 md:left-auto md:w-96 z-50 animate-in slide-in-from-bottom md:slide-in-from-right duration-300">
      <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[70vh]">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">{intervention.country}</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {intervention.years.map(y => (
                  <span key={y} className="px-2 py-0.5 bg-slate-800 text-slate-300 rounded text-sm font-mono">{y}</span>
                ))}
              </div>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-800 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4 overflow-y-auto max-h-[40vh] pr-2 custom-scrollbar">
            <p className="text-slate-400 font-medium italic">"{intervention.description}"</p>
            <p className="text-slate-200 leading-relaxed text-sm">
              {intervention.expandedDescription}
            </p>

            {aiAnalysis ? (
              <div className="mt-6 p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Análisis por IA (Gemini)</span>
                </div>
                <p className="text-slate-300 text-sm italic leading-relaxed">
                  {aiAnalysis}
                </p>
              </div>
            ) : (
              <button 
                onClick={handleFetchAnalysis}
                disabled={loading}
                className="w-full mt-4 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 text-white rounded-2xl font-semibold text-sm transition-all flex items-center justify-center gap-2 group"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.477.859h4.000z" />
                    </svg>
                    Profundizar con IA
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterventionCard;
