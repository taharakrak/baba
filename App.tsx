
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import StyleAI from './components/StyleAI';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#CBB28D] selection:text-[#0F1110] bg-[#0F1110]">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="services" className="py-40 md:py-60 bg-[#0F1110]">
          <Services />
        </section>

        <section id="ai-style" className="py-40 md:py-60 bg-[#0D0F0E]">
          <StyleAI />
        </section>

        <section id="about" className="py-40 md:py-60 bg-[#0F1110]">
          <div className="max-w-7xl mx-auto px-6 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-center">
              <div className="relative aspect-[3/4] overflow-hidden bg-zinc-950 group">
                 <img 
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1200" 
                  alt="Barbering Craftsmanship" 
                  className="object-cover w-full h-full grayscale brightness-50 transition-all duration-[2000ms] group-hover:scale-110 group-hover:brightness-75"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200';
                  }}
                />
                {/* Refined Frame */}
                <div className="absolute inset-0 border-[0.5px] border-[#CBB28D]/30 m-8 md:m-16 pointer-events-none transition-all duration-1000 group-hover:m-6 group-hover:border-[#CBB28D]/50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1110] via-transparent to-transparent opacity-80"></div>
                
                {/* Floating Detail */}
                <div className="absolute bottom-12 left-12 p-8 border border-white/5 backdrop-blur-sm bg-black/20 hidden md:block">
                   <p className="text-[#CBB28D] font-serif italic text-xl">The Ritual</p>
                </div>
              </div>
              
              <div className="space-y-16 lg:space-y-24">
                <div className="space-y-10">
                  <h3 className="text-[#CBB28D] text-[11px] font-bold uppercase tracking-[0.8em]">The Ethos</h3>
                  <h2 className="text-6xl md:text-8xl font-serif text-white italic leading-[1.1]">Defining the <br/>Standard</h2>
                </div>
                
                <p className="text-white/50 text-xl font-light leading-loose max-w-xl tracking-wide">
                  Founded on the strictly curated traditions of artisanal barbering, F & H Gents Saloon represents a sanctuary for those who recognize that grooming is an expression of self-respect.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 pt-6">
                  <div className="space-y-6 group">
                    <div className="flex items-center space-x-6">
                      <span className="text-4xl font-serif text-[#CBB28D]/40 group-hover:text-[#CBB28D] transition-colors duration-700">I</span>
                      <div className="h-[0.5px] w-12 bg-[#CBB28D]/20 group-hover:w-20 transition-all duration-700"></div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-white text-[10px] font-bold uppercase tracking-[0.3em]">Master Curators</h5>
                      <p className="text-white/30 text-[11px] font-light leading-relaxed tracking-wider">A lineage of expertise ensuring every stroke is deliberate and perfect.</p>
                    </div>
                  </div>
                  <div className="space-y-6 group">
                    <div className="flex items-center space-x-6">
                      <span className="text-4xl font-serif text-[#CBB28D]/40 group-hover:text-[#CBB28D] transition-colors duration-700">II</span>
                      <div className="h-[0.5px] w-12 bg-[#CBB28D]/20 group-hover:w-20 transition-all duration-700"></div>
                    </div>
                    <div className="space-y-2">
                      <h5 className="text-white text-[10px] font-bold uppercase tracking-[0.3em]">Private Atmosphere</h5>
                      <p className="text-white/30 text-[11px] font-light leading-relaxed tracking-wider">An intimate environment designed for relaxation and total focus on your style.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-10">
                  <button className="text-[10px] uppercase tracking-[0.6em] text-[#CBB28D] font-bold border-b border-[#CBB28D]/30 pb-4 hover:text-white hover:border-white transition-all duration-700">
                    The Full Narrative
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
