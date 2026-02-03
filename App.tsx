
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import StyleAI from './components/StyleAI';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#C5A059] selection:text-white bg-[#0D0D0D]">
      <Navbar />
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="services" className="py-32 md:py-48 bg-[#0D0D0D]">
          <Services />
        </section>

        <section id="ai-style" className="py-32 md:py-48 bg-[#0A0A0A]">
          <StyleAI />
        </section>

        <section id="about" className="py-32 md:py-48 bg-[#0D0D0D]">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
              <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-zinc-900 group">
                 <img 
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1200" 
                  alt="Barbering Craftsmanship" 
                  className="object-cover w-full h-full grayscale brightness-75 transition-transform duration-1000 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=1200';
                  }}
                />
                <div className="absolute inset-0 border-[1px] border-[#C5A059] m-6 md:m-12 pointer-events-none opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60"></div>
              </div>
              
              <div className="space-y-10 lg:space-y-16">
                <div className="space-y-6">
                  <h3 className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.6em]">The Legacy</h3>
                  <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-tight">Heritage of <br/>Precision</h2>
                </div>
                
                <p className="text-white/60 text-lg font-light leading-relaxed max-w-xl">
                  Founded on the principles of classic European barbering, F & H Gents Saloon blends heritage techniques with a modern vision. Our master artisans believe that grooming is an essential ritual for the contemporary man.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-4">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-serif text-[#C5A059]">01</span>
                      <div className="h-[1px] w-8 bg-white/10"></div>
                    </div>
                    <h5 className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">Master Artisans</h5>
                    <p className="text-white/40 text-xs font-light leading-relaxed">Highly trained professionals with a minimum of 10 years experience.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-serif text-[#C5A059]">02</span>
                      <div className="h-[1px] w-8 bg-white/10"></div>
                    </div>
                    <h5 className="text-white text-[10px] font-bold uppercase tracking-[0.2em]">Bespoke Detail</h5>
                    <p className="text-white/40 text-xs font-light leading-relaxed">Every service is tailored precisely to your unique anatomical features.</p>
                  </div>
                </div>

                <div className="pt-8">
                  <button className="text-[11px] uppercase tracking-[0.4em] text-white font-bold border-b border-[#C5A059] pb-3 hover:text-[#C5A059] hover:border-white transition-all duration-500">
                    Discover Our Philosophy
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
