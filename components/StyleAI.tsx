
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
      setError("The digital stylist is currently unavailable. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      <div className="bg-[#0A0A0A] border border-white/5 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side: Visual/Context */}
          <div className="relative p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/5">
            <div className="space-y-6">
              <div className="w-10 h-10 border border-[#C5A059] flex items-center justify-center mb-12">
                <span className="text-[#C5A059] text-xs font-serif">AI</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-white italic">Digital Stylist</h2>
              <p className="text-white/40 text-sm leading-relaxed font-light max-w-sm">
                Leveraging the aesthetics of tradition and the precision of intelligence. Describe your profile for a bespoke recommendation.
              </p>
            </div>
            
            <div className="mt-12 space-y-4">
               <p className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-bold">Inspiration Phrases</p>
               <div className="flex flex-wrap gap-3">
                  {["Classic European", "Modern Fade", "Rugged Professional"].map(text => (
                    <button 
                      key={text}
                      onClick={() => setInput(prev => prev + (prev ? " " : "") + text)}
                      className="px-4 py-2 border border-white/10 text-white/50 text-[10px] uppercase tracking-widest hover:border-[#C5A059] hover:text-[#C5A059] transition-all"
                    >
                      {text}
                    </button>
                  ))}
               </div>
            </div>

            {/* Background Texture Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/5 blur-3xl rounded-full pointer-events-none"></div>
          </div>

          {/* Right Side: Interaction */}
          <div className="p-12 bg-[#0D0D0D]">
            {!recommendation ? (
              <div className="space-y-8">
                <div className="space-y-4">
                  <label className="text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">Describe Your Look</label>
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g. Sharp look for a wedding, oval face shape, thick hair..."
                    className="w-full h-48 bg-transparent border-b border-white/10 p-0 text-white placeholder-white/20 focus:outline-none focus:border-[#C5A059] transition-all resize-none text-xl font-serif"
                  />
                </div>
                
                <button
                  onClick={handleRecommend}
                  disabled={loading || !input.trim()}
                  className={`w-full py-6 text-[11px] uppercase tracking-[0.4em] font-bold transition-all duration-700 relative overflow-hidden border border-[#C5A059] ${
                    loading || !input.trim() 
                      ? 'text-white/20 border-white/10' 
                      : 'text-[#C5A059] hover:bg-[#C5A059] hover:text-white'
                  }`}
                >
                  {loading ? 'Consulting Experts...' : 'Generate Bespoke Look'}
                </button>
                {error && <p className="text-red-400 text-[10px] uppercase tracking-widest text-center">{error}</p>}
              </div>
            ) : (
              <div className="space-y-10 animate-in fade-in slide-in-from-right-8 duration-700">
                <div className="flex justify-between items-start">
                   <div className="space-y-2">
                     <span className="text-[10px] uppercase tracking-[0.4em] text-[#C5A059]">Your Selection</span>
                     <h3 className="text-3xl font-serif text-white italic">{recommendation.style}</h3>
                   </div>
                   <button onClick={() => setRecommendation(null)} className="text-white/20 hover:text-white transition-colors">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                     </svg>
                   </button>
                </div>

                <div className="space-y-8">
                  <div className="p-8 bg-white/5 border-l border-[#C5A059]">
                    <p className="text-white/80 font-light leading-relaxed">{recommendation.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h6 className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold">Stylist's Note</h6>
                    <p className="text-white/50 text-sm font-light leading-relaxed italic">"{recommendation.why}"</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex space-x-4">
                  <button className="flex-1 bg-white text-black py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#C5A059] hover:text-white transition-all">
                    Book This Style
                  </button>
                  <button className="px-8 py-4 border border-white/10 text-white text-[10px] uppercase tracking-[0.3em] font-bold hover:border-[#C5A059] transition-all">
                    Reset
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
