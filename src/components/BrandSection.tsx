import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { BRANDS } from '../data/services';

export const BrandSection: React.FC = () => {
  return (
    <section id="brands-section" className="w-full">
      {/* 1. Sleek Brand Strip directly from Bold Typography theme */}
      <div className="h-14 bg-white border-y border-gray-200 flex items-center justify-around px-4 sm:px-12 overflow-x-auto gap-6 shrink-0">
        <span className="text-xs font-black text-gray-500 uppercase tracking-tighter whitespace-nowrap hover:text-[#D90429] transition-colors cursor-pointer">BMW Specialists</span>
        <span className="text-xs font-black text-gray-500 uppercase tracking-tighter whitespace-nowrap hover:text-[#D90429] transition-colors cursor-pointer">Mercedes-Benz</span>
        <span className="text-xs font-black text-gray-500 uppercase tracking-tighter whitespace-nowrap hover:text-[#D90429] transition-colors cursor-pointer">Volkswagen</span>
        <span className="text-xs font-black text-gray-500 uppercase tracking-tighter whitespace-nowrap hover:text-[#D90429] transition-colors cursor-pointer">Audi Service</span>
        <span className="text-xs font-black text-gray-500 uppercase tracking-tighter whitespace-nowrap hover:text-[#D90429] transition-colors cursor-pointer">Toyota Genuine</span>
        <span className="text-xs font-black text-gray-500 uppercase tracking-tighter whitespace-nowrap hover:text-[#D90429] transition-colors cursor-pointer">Ford Approved</span>
      </div>

      {/* 2. Comprehensive Brand Diagnosis Workshop Grid */}
      <div className="py-16 bg-[#0B132B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-[#D90429] font-black text-xs uppercase tracking-widest mb-1">
              Factory Diagnostic Standards
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase italic tracking-tight">
              Specialised With Leading Brands
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-gray-400">
              Equipped with genuine factory scan systems and factory software for Australian, European, and Japanese fleets.
            </p>
          </div>

          <div 
            id="brand-cards-grid"
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          >
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                id={`brand-card-${brand.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                className="group bg-[#070D1D] hover:bg-[#101B38] border border-white/10 hover:border-[#D90429] rounded-sm p-4 sm:p-5 flex flex-col items-center justify-center text-center transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-sm bg-white/10 group-hover:bg-[#D90429] flex items-center justify-center transition-colors mb-3">
                  <span className="font-black text-lg text-white tracking-wider">
                    {brand.logo}
                  </span>
                </div>

                <h3 className="font-black text-lg text-white tracking-wide uppercase italic group-hover:text-[#D90429] transition-colors">
                  {brand.name}
                </h3>

                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-0.5">
                  {brand.origin}
                </span>

                <p className="text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">
                  {brand.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-[11px] text-gray-500 font-medium">
            * All vehicle logbook servicing adheres strictly to original factory specifications, keeping your statutory new car warranty 100% intact.
          </div>

        </div>
      </div>
    </section>
  );
};
