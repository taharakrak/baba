
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-white/40 pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="text-2xl font-serif tracking-[0.3em] text-white uppercase flex flex-col items-start">
               <span>F & H</span>
               <div className="h-[1px] w-full bg-[#C5A059] mt-1"></div>
            </div>
            <p className="text-xs leading-loose font-light tracking-wide">
              The destination for discerning individuals seeking excellence in grooming and relaxation. EST 2014.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.5em] mb-10">Exploration</h4>
            <ul className="space-y-5 text-[11px] uppercase tracking-[0.2em]">
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">Our Ethos</a></li>
              <li><a href="#services" className="hover:text-[#C5A059] transition-colors">Services</a></li>
              <li><a href="#ai-style" className="hover:text-[#C5A059] transition-colors">Digital Stylist</a></li>
              <li><a href="#" className="hover:text-[#C5A059] transition-colors">The Lounge</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.5em] mb-10">Contact</h4>
            <ul className="space-y-5 text-[11px] uppercase tracking-[0.2em]">
              <li className="flex items-start space-x-3">
                <span className="text-[#C5A059]">Loc.</span>
                <span className="leading-relaxed">Downtown Blvd, Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#C5A059]">Tel.</span>
                <span>+971 4 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#C5A059]">Mail.</span>
                <span>info@fhgents.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.5em] mb-10">Connect</h4>
            <p className="text-[11px] mb-8 leading-relaxed">Join our private circle for exclusive updates and seasonal styles.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-transparent border-b border-white/10 pb-3 w-full text-[11px] text-white placeholder-white/20 focus:outline-none focus:border-[#C5A059] transition-colors"
              />
              <button className="absolute right-0 top-0 text-[#C5A059] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.4em] space-y-4 md:space-y-0 text-white/20">
          <p>© 2025 F & H Gents Saloon. Crafted with Precision.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <a href="#" className="hover:text-white transition-colors">Journal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
