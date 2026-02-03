
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-sm border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
             <div className="text-2xl font-serif tracking-[0.3em] text-white uppercase flex flex-col items-center">
                <span>F & H</span>
                <div className="h-[1px] w-full bg-[#C5A059] mt-1"></div>
             </div>
          </div>

          <div className="hidden lg:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative nav-link text-white/70 hover:text-white transition-colors text-[11px] uppercase tracking-[0.2em] font-medium"
              >
                {link.name}
              </a>
            ))}
            <button className="border border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white px-8 py-3 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500">
              Book Your Appointment
            </button>
          </div>

          <button className="lg:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
