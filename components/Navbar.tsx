
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'AI Stylist', href: '#ai-style' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-[#0F1110]/98 backdrop-blur-md border-b border-[#CBB28D]/10 py-5' : 'bg-transparent py-10'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex justify-between items-center">
          <div className="flex items-center group cursor-pointer">
             <div className="text-2xl md:text-3xl font-serif tracking-[0.4em] text-white uppercase flex flex-col items-center">
                <span className="group-hover:text-[#CBB28D] transition-colors duration-500">F & H</span>
                <div className="h-[1px] w-full bg-[#CBB28D] mt-2 group-hover:scale-x-110 transition-transform duration-500"></div>
             </div>
          </div>

          <div className="hidden lg:flex space-x-16 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative nav-link text-white/60 hover:text-white transition-colors text-[10px] uppercase tracking-[0.3em] font-semibold"
              >
                {link.name}
              </a>
            ))}
            <button className="border border-[#CBB28D]/40 text-[#CBB28D] hover:bg-[#CBB28D] hover:text-[#0F1110] px-10 py-3.5 text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-700">
              Book Appointment
            </button>
          </div>

          <button className="lg:hidden text-[#CBB28D]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 9h16M4 15h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
