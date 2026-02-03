
import React, { useState } from 'react';
import { Service } from '../types';

const SERVICES: Service[] = [
  { id: '1', name: 'Signature Haircut', description: 'Precision cut, shampoo, scalp massage, and bespoke styling.', price: '€45', duration: '45m', category: 'Hair' },
  { id: '2', name: 'Classic Fade', description: 'Expert graduation from skin to desired length with tailored finish.', price: '€40', duration: '45m', category: 'Hair' },
  { id: '3', name: 'Beard Sculpture', description: 'Artisan shaping, line-up, and nourishing oil treatment.', price: '€30', duration: '30m', category: 'Beard' },
  { id: '4', name: 'The Royal Shave', description: 'Traditional straight razor shave with multi-stage hot towel ritual.', price: '€40', duration: '45m', category: 'Beard' },
  { id: '5', name: 'Master Grooming', description: 'The complete experience: Haircut, beard grooming, and facial.', price: '€95', duration: '120m', category: 'Combo' },
  { id: '6', name: 'Revitalizing Facial', description: 'Deep cleansing and hydration ritual for the modern man.', price: '€50', duration: '40m', category: 'Face' },
];

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Hair' | 'Beard' | 'Face' | 'Combo'>('All');

  const categories: ('All' | 'Hair' | 'Beard' | 'Face' | 'Combo')[] = ['All', 'Hair', 'Beard', 'Face', 'Combo'];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12">
      <div className="text-center space-y-6 mb-24">
        <h3 className="text-[#C5A059] text-[10px] font-bold uppercase tracking-[0.5em]">The Menu</h3>
        <h2 className="text-4xl md:text-6xl font-serif text-white italic">Curated Services</h2>
        <p className="text-white/40 max-w-lg mx-auto text-sm font-light">Precision crafted for individuals who value the finer things in grooming.</p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-20 border-b border-white/5 pb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-[11px] uppercase tracking-[0.3em] font-bold transition-all duration-300 relative pb-2 ${
              activeCategory === cat ? 'text-[#C5A059]' : 'text-white/40 hover:text-white'
            }`}
          >
            {cat}
            {activeCategory === cat && (
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C5A059]"></div>
            )}
          </button>
        ))}
      </div>

      {/* Services List */}
      <div className="space-y-16">
        {filteredServices.map((service) => (
          <div 
            key={service.id} 
            className="group grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-start border-b border-white/5 pb-12 hover:border-[#C5A059]/30 transition-colors duration-500"
          >
            <div className="md:col-span-2 space-y-3">
              <h4 className="text-xl md:text-2xl font-serif text-white group-hover:text-[#C5A059] transition-colors">
                {service.name}
              </h4>
              <p className="text-white/40 text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-center justify-center">
              <span className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-1">Duration</span>
              <span className="text-white/70 text-sm">{service.duration}</span>
            </div>

            <div className="flex flex-col items-start md:items-end justify-center">
              <span className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-1">Price</span>
              <span className="text-2xl font-serif text-[#C5A059]">{service.price}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <button className="text-[11px] uppercase tracking-[0.4em] text-white/60 hover:text-[#C5A059] transition-all flex items-center justify-center mx-auto space-x-4 group">
          <div className="h-[1px] w-8 bg-white/20 group-hover:bg-[#C5A059] transition-colors"></div>
          <span>Download PDF Menu</span>
          <div className="h-[1px] w-8 bg-white/20 group-hover:bg-[#C5A059] transition-colors"></div>
        </button>
      </div>
    </div>
  );
};

export default Services;
