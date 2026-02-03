
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080909] text-white/30 pt-40 pb-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
          <div className="space-y-10">
            <div className="text-3xl font-serif tracking-[0.4em] text-white uppercase flex flex-col items-start">
               <span>F & H</span>
               <div className="h-[1px] w-24 bg-[#CBB28D] mt-3"></div>
            </div>
            <p className="text-[11px] leading-loose font-light tracking-[0.1em] max-w-xs">
              Crafting visual identities for the elite since 2014. A masterclass in precision, atmosphere, and masculine elegance.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.6em] mb-12">The House</h4>
            <ul className="space-y-6 text-[11px] uppercase tracking-[0.3em]">
              <li><a href="#" className="hover:text-[#CBB28D] transition-colors duration-500">Heritage</a></li>
              <li><a href="#services" className="hover:text-[#CBB28D] transition-colors duration-500">Menu</a></li>
              <li><a href="#ai-style" className="hover:text-[#CBB28D] transition-colors duration-500">Neural Guide</a></li>
              <li><a href="#" className="hover:text-[#CBB28D] transition-colors duration-500">Journal</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.6em] mb-12">Headquarters</h4>
            <ul className="space-y-6 text-[11px] uppercase tracking-[0.3em]">
              <li className="flex flex-col space-y-2">
                <span className="text-[#CBB28D]/50 text-[9px]">Location</span>
                <span className="leading-relaxed">Downtown Boulevard, Dubai</span>
              </li>
              <li className="flex flex-col space-y-2">
                <span className="text-[#CBB28D]/50 text-[9px]">Inquiries</span>
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex flex-col space-y-2">
                <span className="text-[#CBB28D]/50 text-[9px]">Digital</span>
                <span className="lowercase">concierge@fhgents.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.6em] mb-12">Private Circle</h4>
            <p className="text-[11px] mb-10 leading-loose tracking-wide">Receive exclusive access to our seasonal lookbooks and private events.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Secure email address" 
                className="bg-transparent border-b border-white/5 pb-4 w-full text-[11px] text-white placeholder-white/10 focus:outline-none focus:border-[#CBB28D] transition-colors duration-700"
              />
              <button className="absolute right-0 top-0 text-[#CBB28D]/50 group-hover:text-[#CBB28D] transition-colors duration-500 p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.5em] space-y-8 md:space-y-0 text-white/10 font-bold">
          <p>© 2025 F & H Gents Saloon. All Rights Reserved. Defined by Precision.</p>
          <div className="flex space-x-12">
            <a href="#" className="hover:text-[#CBB28D] transition-colors duration-500">Instagram</a>
            <a href="#" className="hover:text-[#CBB28D] transition-colors duration-500">Vimeo</a>
            <a href="#" className="hover:text-[#CBB28D] transition-colors duration-500">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
