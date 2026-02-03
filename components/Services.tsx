
import React, { useState } from 'react';
import { Service } from '../types';

const SERVICES: Service[] = [
  { id: '1', name: 'Signature Haircut', description: 'Bespoke precision cut, charcoal-infused shampoo, and artistic styling.', price: '€65', duration: '50m', category: 'Hair' },
  { id: '2', name: 'Platinum Fade', description: 'Surgical graduation from skin with hand-finished detail and tonic treatment.', price: '€55', duration: '45m', category: 'Hair' },
  { id: '3', name: 'Beard Sculpture', description: 'Anatomical shaping, line-up with straight razor, and warm oil soak.', price: '€40', duration: '30m', category: 'Beard' },
  { id: '4', name: 'The Grand Shave', description: 'Traditional multi-ritual shave with botanical oils and ice-cool compress.', price: '€55', duration: '50m', category: 'Beard' },
  { id: '5', name: 'Total Transformation', description: 'Our flagship service: Signature cut, beard ritual, and revitalizing facial.', price: '€145', duration: '135m', category: 'Combo' },
  { id: '6', name: 'Revival Facial', description: 'High-performance extraction and hydration therapy using premium minerals.', price: '€75', duration: '45m', category: 'Face' },
];

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Hair' | 'Beard' | 'Face' | 'Combo'>('All');

  const categories: ('All' | 'Hair' | 'Beard' | 'Face' | 'Combo')[] = ['All', 'Hair', 'Beard', 'Face', 'Combo'];

  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <div className="max-w-6xl mx-auto px-6 lg:px-16">
      <div className="text-center space-y-8 mb-32">
        <h3 className="text-[#CBB28D] text-[10px] font-bold uppercase tracking-[0.7em]">The Collection</h3>
        <h2 className="text-5xl md:text-7xl font-serif text-white italic leading-tight">Artisanal Services</h2>
        <div className="w-16 h-[1px] bg-[#CBB28D] mx-auto opacity-40"></div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 mb-24 border-b border-white/5 pb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-[10px] uppercase tracking-[0.4em] font-bold transition-all duration-500 relative pb-3 group ${
              activeCategory === cat ? 'text-[#CBB28D]' : 'text-white/30 hover:text-white'
            }`}
          >
            {cat}
            <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-[#CBB28D] transition-transform duration-500 origin-left ${activeCategory === cat ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`}></div>
          </button>
        ))}
      </div>

      {/* Services List */}
      <div className="space-y-20">
        {filteredServices.map((service) => (
          <div 
            key={service.id} 
            className="group grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start border-b border-white/5 pb-16 hover:border-[#CBB28D]/20 transition-colors duration-700"
          >
            <div className="md:col-span-8 space-y-4">
              <h4 className="text-2xl md:text-3xl font-serif text-white group-hover:text-[#CBB28D] transition-colors duration-500">
                {service.name}
              </h4>
              <p className="text-white/40 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                {service.description}
              </p>
            </div>
            
            <div className="md:col-span-2 flex flex-col items-start md:items-center">
              <span className="text-[9px] text-white/20 uppercase tracking-[0.3em] mb-2">Investment</span>
              <span className="text-2xl font-serif text-[#CBB28D]">{service.price}</span>
            </div>

            <div className="md:col-span-2 flex flex-col items-start md:items-end">
              <span className="text-[9px] text-white/20 uppercase tracking-[0.3em] mb-2">Allocation</span>
              <span className="text-white/60 text-sm font-light uppercase tracking-widest">{service.duration}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 text-center">
        <button className="text-[10px] uppercase tracking-[0.5em] text-white/50 hover:text-[#CBB28D] transition-all flex items-center justify-center mx-auto space-x-6 group">
          <div className="h-[1px] w-12 bg-[#CBB28D]/20 group-hover:w-24 group-hover:bg-[#CBB28D] transition-all duration-700"></div>
          <span>View Bespoke Menu (PDF)</span>
          <div className="h-[1px] w-12 bg-[#CBB28D]/20 group-hover:w-24 group-hover:bg-[#CBB28D] transition-all duration-700"></div>
        </button>
      </div>
    </div>
  );
};

export default Services;
