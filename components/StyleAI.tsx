
import React, { useState } from 'react';
import { getStyleRecommendation } from '../services/gemini';
import { Recommendation } from '../types';

const StyleAI: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRecommend = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setError(null);
    try {
      const result = await getStyleRecommendation(input);
      setRecommendation(result);
    } catch (err) {
      console.error(err);
      setError("Our digital consultant is temporarily unavailable.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-[#0D0F0E] border border-[#CBB28D]/10 overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side */}
          <div className="relative p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#CBB28D]/10">
            <div className="space-y-10">
              <div className="w-12 h-12 border border-[#CBB28D]/40 flex items-center justify-center">
                <span className="text-[#CBB28D] text-[10px] font-bold tracking-widest">AI</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-serif text-white italic">Intelligence <br/>of Style</h2>
                <p className="text-white/40 text-sm md:text-base leading-relaxed font-light max-w-xs">
                  Describe your aesthetic aspirations. Our neural consultant will curate a bespoke look aligned with your character.
                </p>
              </div>
            </div>
            
            <div className="mt-16 space-y-6">
               <p className="text-[10px] uppercase tracking-[0.4em] text-[#CBB28D] font-bold">Curated Starting Points</p>
               <div className="flex flex-wrap gap-4">
                  {["Elite Professional", "Contemporary Edge", "Classic Heritage"].map(text => (
                    <button 
                      key={text}
                      onClick={() => setInput(prev => prev + (prev ? " " : "") + text)}
                      className="px-6 py-3 border border-white/5 text-white/30 text-[9px] uppercase tracking-[0.25em] hover:border-[#CBB28D]/40 hover:text-[#CBB28D] transition-all duration-500"
                    >
                      {text}
                    </button>
                  ))}
               </div>
            </div>

            {/* Ambient Lighting */}
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#CBB28D]/5 blur-[120px] rounded-full"></div>
          </div>

          {/* Right Side */}
          <div className="p-16 bg-[#0F1110]">
            {!recommendation ? (
              <div className="space-y-12">
                <div className="space-y-6">
                  <label className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-bold">Your Brief</label>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Describe your face shape, hair density, or a specific occasion..."
                    className="w-full h-56 bg-transparent border-b border-white/5 p-0 text-white placeholder-white/10 focus:outline-none focus:border-[#CBB28D] transition-all duration-700 resize-none text-2xl font-serif leading-relaxed"
                  />
                </div>
                
                <button
                  onClick={handleRecommend}
                  disabled={loading || !input.trim()}
                  className={`w-full py-7 text-[10px] uppercase tracking-[0.5em] font-bold transition-all duration-1000 relative overflow-hidden group border border-[#CBB28D]/30 ${
                    loading || !input.trim() 
                      ? 'text-white/10 border-white/5' 
                      : 'text-[#CBB28D] hover:text-[#0F1110]'
                  }`}
                >
                  <span className="relative z-10">{loading ? 'Synthesizing...' : 'Consult Stylist'}</span>
                  {!loading && input.trim() && (
                    <div className="absolute inset-0 bg-[#CBB28D] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
                  )}
                </button>
                {error && <p className="text-red-400 text-[10px] uppercase tracking-widest text-center animate-pulse">{error}</p>}
              </div>
            ) : (
              <div className="space-y-12 animate-in fade-in slide-in-from-right-12 duration-1000">
                <div className="flex justify-between items-start">
                   <div className="space-y-4">
                     <span className="text-[10px] uppercase tracking-[0.5em] text-[#CBB28D]">Neural Match</span>
                     <h3 className="text-4xl md:text-5xl font-serif text-white italic">{recommendation.style}</h3>
                   </div>
                   <button onClick={() => setRecommendation(null)} className="text-white/10 hover:text-[#CBB28D] transition-colors duration-500 p-2">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                     </svg>
                   </button>
                </div>

                <div className="space-y-10">
                  <div className="p-10 bg-white/[0.02] border-l-2 border-[#CBB28D]/50">
                    <p className="text-white/80 text-lg font-light leading-relaxed">{recommendation.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h6 className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">Stylist Observation</h6>
                    <p className="text-[#CBB28D]/70 text-base font-light leading-relaxed italic">"{recommendation.why}"</p>
                  </div>
                </div>

                <div className="pt-10 border-t border-white/5 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
                  <button className="flex-1 bg-white text-[#0F1110] py-5 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-[#CBB28D] transition-all duration-700">
                    Acquire Selection
                  </button>
                  <button onClick={() => setRecommendation(null)} className="px-10 py-5 border border-white/10 text-white/50 text-[10px] uppercase tracking-[0.4em] font-bold hover:border-[#CBB28D] hover:text-white transition-all duration-700">
                    Refine
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleAI;
