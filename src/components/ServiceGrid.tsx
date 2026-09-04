import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wrench, CheckCircle } from 'lucide-react';
import { ServiceCard } from './ServiceCard';
import { SERVICES, COMPANY_DETAILS } from '../data/services';

interface ServiceGridProps {
  limit?: number;
  showAllHeader?: boolean;
}

export const ServiceGrid: React.FC<ServiceGridProps> = ({ 
  limit, 
  showAllHeader = true 
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'popular'>('all');

  const displayedServices = SERVICES.filter(service => {
    if (activeFilter === 'popular') return service.popular;
    return true;
  }).slice(0, limit || SERVICES.length);

  return (
    <section id="services-overview-section" className="py-16 sm:py-20 bg-gray-50 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showAllHeader && (
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-gray-200 gap-4">
            <div>
              <p className="text-[#D90429] font-black text-xs uppercase tracking-widest mb-1">
                Our Expertise
              </p>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B132B] uppercase italic tracking-tight">
                What We Offer
              </h2>
            </div>

            {/* Quick Filter Tabs & Link */}
            <div className="flex items-center gap-3">
              <div className="inline-flex p-1 bg-gray-200/80 rounded-sm">
                <button
                  type="button"
                  id="filter-all-services-btn"
                  onClick={() => setActiveFilter('all')}
                  className={`px-3.5 py-1 rounded-sm text-xs font-black uppercase tracking-wider transition-all ${
                    activeFilter === 'all'
                      ? 'bg-[#0B132B] text-white shadow-sm'
                      : 'text-gray-700 hover:text-[#0B132B]'
                  }`}
                >
                  All ({SERVICES.length})
                </button>
                <button
                  type="button"
                  id="filter-popular-services-btn"
                  onClick={() => setActiveFilter('popular')}
                  className={`px-3.5 py-1 rounded-sm text-xs font-black uppercase tracking-wider transition-all ${
                    activeFilter === 'popular'
                      ? 'bg-[#0B132B] text-white shadow-sm'
                      : 'text-gray-700 hover:text-[#0B132B]'
                  }`}
                >
                  Popular
                </button>
              </div>

              <Link 
                to="/services" 
                className="text-xs font-black text-[#D90429] hover:underline uppercase tracking-wider hidden sm:inline-block"
              >
                View All Services →
              </Link>
            </div>
          </div>
        )}

        {/* Services Responsive Grid */}
        <div 
          id="services-cards-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {displayedServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="mt-12 p-6 rounded-sm bg-[#0B132B] text-white flex flex-col md:flex-row items-center justify-between gap-6 border-l-4 border-[#D90429]">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-sm bg-white/10 flex items-center justify-center shrink-0">
              <CheckCircle className="w-6 h-6 text-[#D90429]" />
            </div>
            <div>
              <h4 className="font-black text-lg text-white uppercase italic">
                Need a Custom Repair or Fleet Maintenance?
              </h4>
              <p className="text-xs text-gray-300">
                We handle complete engine overhauls, custom fabrication, and commercial utility fleet servicing.
              </p>
            </div>
          </div>

          <a
            href={`tel:${COMPANY_DETAILS.phoneRaw}`}
            className="shrink-0 bg-[#D90429] hover:brightness-110 active:scale-[0.98] text-white px-6 py-2.5 rounded-sm font-black text-xs uppercase tracking-wider transition-all"
          >
            Speak to a Mechanic: {COMPANY_DETAILS.phone}
          </a>
        </div>

      </div>
    </section>
  );
};
