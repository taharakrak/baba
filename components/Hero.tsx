
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0F1110]">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1110] via-transparent to-[#0F1110] z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1599351431247-f579338421f0?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Barbering Atmosphere" 
          className="w-full h-full object-cover grayscale opacity-[0.15] transition-opacity duration-1000 scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000';
          }}
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl space-y-16">
        <div className="space-y-8">
          <h3 className="text-[#CBB28D] text-[10px] md:text-xs font-bold uppercase tracking-[0.9em] animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Est. 2014 • The Peak of Grooming
          </h3>
          <h1 className="text-6xl md:text-9xl font-serif text-white leading-[1.05] tracking-tighter animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Timeless <br />
            <span className="italic font-playfair font-normal text-[#CBB28D]/90">Mastery</span>
          </h1>
        </div>

        <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-[#CBB28D] to-transparent mx-auto opacity-30"></div>

        <p className="text-[#F5F5F5]/50 text-sm md:text-xl max-w-3xl mx-auto font-light leading-relaxed tracking-wider animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          Step into a sanctuary where heritage craftsmanship meets contemporary elegance. We curate your appearance with surgical precision and artistic vision.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-8 sm:space-y-0 sm:space-x-16 animate-in fade-in zoom-in duration-1000 delay-500 pt-4">
          <a 
            href="#services" 
            className="group relative px-20 py-7 overflow-hidden border border-[#CBB28D]/20 text-[#CBB28D] text-[10px] uppercase tracking-[0.5em] font-bold"
          >
            <span className="relative z-10 transition-colors duration-500 group-hover:text-[#0F1110]">The Menu</span>
            <div className="absolute inset-0 bg-[#CBB28D] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
          </a>
          <button className="text-white/60 text-[10px] uppercase tracking-[0.5em] font-bold hover:text-[#CBB28D] transition-all duration-500 relative group flex items-center">
            <span>Book Experience</span>
            <div className="w-0 group-hover:w-8 h-[1px] bg-[#CBB28D] ml-4 transition-all duration-500"></div>
          </button>
        </div>
      </div>

      {/* Decorative details */}
      <div className="absolute top-20 left-20 w-40 h-40 border-l border-t border-[#CBB28D]/5 hidden lg:block"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 border-r border-b border-[#CBB28D]/5 hidden lg:block"></div>

      {/* Vertical divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-8">
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent to-[#CBB28D]/30"></div>
      </div>
    </div>
  );
};

export default Hero;
