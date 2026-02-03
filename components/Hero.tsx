
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0D0D0D]">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1599351431247-f579338421f0?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Barbering Atmosphere" 
          className="w-full h-full object-cover grayscale opacity-20 transition-opacity duration-1000"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=2000';
          }}
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl space-y-12">
        <div className="space-y-6">
          <h3 className="text-[#C5A059] text-[10px] md:text-xs font-bold uppercase tracking-[0.8em] animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Precision • Tradition • Excellence
          </h3>
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            The Art of <br />
            <span className="italic font-playfair font-normal opacity-90">Gentle</span>man
          </h1>
        </div>

        <div className="h-[1px] w-32 bg-[#C5A059] mx-auto opacity-40"></div>

        <p className="text-white/60 text-sm md:text-lg max-w-2xl mx-auto font-light leading-relaxed tracking-wide animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          Step into a sanctuary where timeless grooming meets modern precision. We don't just cut hair; we curate your personal legacy.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-12 animate-in fade-in zoom-in duration-1000 delay-500">
          <a 
            href="#services" 
            className="group relative px-16 py-6 overflow-hidden border border-white/10 text-white text-[11px] uppercase tracking-[0.4em] font-bold"
          >
            <span className="relative z-10">The Menu</span>
            <div className="absolute inset-0 bg-[#C5A059] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            <span className="absolute inset-0 z-20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">The Menu</span>
          </a>
          <button className="text-[#C5A059] text-[11px] uppercase tracking-[0.4em] font-bold hover:text-white transition-all duration-300 relative group">
            Book Selection
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
          </button>
        </div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-16 left-16 w-32 h-32 border-l border-t border-white/5 hidden lg:block"></div>
      <div className="absolute bottom-16 right-16 w-32 h-32 border-r border-b border-white/5 hidden lg:block"></div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-6 opacity-30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
