import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronRight
} from 'lucide-react';
import { SERVICES } from '../data/services';
import { ServiceCard } from '../components/ServiceCard';
import { ContactSection } from '../components/ContactSection';

export const Services: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'popular'>('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const filteredServices = SERVICES.filter(service => {
    const matchesSearch = 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (!matchesSearch) return false;
    if (selectedFilter === 'popular') return service.popular;
    return true;
  });

  return (
    <div id="services-catalog-page" className="bg-gray-50 min-h-screen">
      
      {/* Header Banner in Deep Navy */}
      <section className="relative py-20 sm:py-28 bg-[#0B132B] text-white overflow-hidden border-b-4 border-[#D90429]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/90 to-[#0B132B]/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4 font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-[#D90429] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-[#D90429]">Our Services</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[#D90429] font-black text-xs uppercase tracking-widest mb-2">
              Full Mechanical & Auto Electrical Workshop
            </p>

            <h1 className="text-4xl sm:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">
              SERVICES <span className="text-[#D90429]">DIRECTORY</span>
            </h1>

            <p className="mt-4 text-base sm:text-xl text-gray-300 leading-relaxed border-l-4 border-[#D90429] pl-4 font-medium">
              Explore our full catalogue of 12 specialized automotive capabilities. Click on any service for transparent inclusions, estimated labor times, and direct online booking.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="bg-white rounded-sm shadow-xl border border-gray-200 p-4 sm:p-5 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              id="services-search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search services (e.g. brakes, logbook, clutch)..."
              className="w-full pl-9 pr-3.5 py-2 rounded-sm text-sm bg-gray-50 border border-gray-300 focus:bg-white focus:outline-none focus:border-[#D90429] text-[#1a1a1a]"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
            <button
              type="button"
              id="services-tab-all"
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-sm text-xs font-black uppercase tracking-wider transition-all shrink-0 ${
                selectedFilter === 'all'
                  ? 'bg-[#0B132B] text-white shadow-sm'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              All Services ({SERVICES.length})
            </button>

            <button
              type="button"
              id="services-tab-popular"
              onClick={() => setSelectedFilter('popular')}
              className={`px-4 py-2 rounded-sm text-xs font-black uppercase tracking-wider transition-all shrink-0 ${
                selectedFilter === 'popular'
                  ? 'bg-[#0B132B] text-white shadow-sm'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              Most Popular
            </button>
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-sm border border-gray-200 p-8">
            <p className="text-lg font-black uppercase text-[#0B132B]">No services match "{searchTerm}"</p>
            <p className="text-xs text-gray-500 mt-1">Try searching for brakes, logbook, battery, or air conditioning.</p>
            <button
              type="button"
              onClick={() => { setSearchTerm(''); setSelectedFilter('all'); }}
              className="mt-4 text-xs font-black text-[#D90429] uppercase tracking-wider hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div 
            id="services-directory-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </section>

      {/* Contact CTA */}
      <ContactSection />

    </div>
  );
};
