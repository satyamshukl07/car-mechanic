import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  ShieldCheck, 
  Wrench, 
  Clock, 
  ChevronRight
} from 'lucide-react';
import { ContactSection } from '../components/ContactSection';
import { BrandSection } from '../components/BrandSection';

export const About: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div id="about-page" className="bg-white min-h-screen">
      
      {/* Hero Header in Deep Navy Theme */}
      <section className="relative py-20 sm:py-28 bg-[#0B132B] text-white overflow-hidden border-b-4 border-[#D90429]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/90 to-[#0B132B]/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4 font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-[#D90429] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-[#D90429]">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[#D90429] font-black text-xs uppercase tracking-widest mb-2">
              Australian Automotive Authority
            </p>

            <h1 className="text-4xl sm:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">
              ABOUT <span className="text-[#D90429]">APEX AUTO</span>
            </h1>

            <p className="mt-4 text-base sm:text-xl text-gray-300 leading-relaxed border-l-4 border-[#D90429] pl-4 font-medium">
              Established with a clear mission: to provide Australian motorists with transparent, dealer-grade vehicle servicing and mechanical repairs at honest, competitive rates.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Values */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div>
              <p className="text-[#D90429] font-black text-xs uppercase tracking-widest mb-1">
                Our Heritage & Workshop Standards
              </p>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] uppercase italic tracking-tight leading-[0.95]">
                OVER TWO DECADES OF <br />
                <span className="text-[#D90429]">MECHANICAL EXCELLENCE</span>
              </h2>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Since our founding in 1999, Apex Auto Care has grown from a humble two-bay workshop into one of the region's most technologically advanced automotive service centres.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Every vehicle that rolls onto our hydraulic hoists is treated with the same uncompromising care as our own personal family cars. Our licensed mechanics are continually trained on the latest high-voltage hybrid safety protocols, electronic control units, and European precision transmissions.
            </p>

            {/* Credential Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-sm text-center">
                <div className="font-black text-3xl text-[#D90429] leading-none">25+</div>
                <div className="text-[10px] font-black uppercase text-gray-500 tracking-wider mt-1">Years Active</div>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-sm text-center">
                <div className="font-black text-3xl text-[#D90429] leading-none">45,000+</div>
                <div className="text-[10px] font-black uppercase text-gray-500 tracking-wider mt-1">Cars Serviced</div>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-sm text-center col-span-2 sm:col-span-1">
                <div className="font-black text-3xl text-[#D90429] leading-none">100%</div>
                <div className="text-[10px] font-black uppercase text-gray-500 tracking-wider mt-1">Warranty Safe</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-sm overflow-hidden shadow-xl border border-gray-200">
              <img
                src="https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=80"
                alt="Apex Auto Care Mechanics working inside modern workshop"
                className="w-full h-[420px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Workshop Core Pillars */}
      <section className="py-16 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-[#D90429] font-black text-xs uppercase tracking-widest mb-1">
              Why Choose Apex Auto
            </p>
            <h3 className="text-3xl sm:text-4xl font-black text-[#0B132B] uppercase italic tracking-tight">
              The Workshop Difference
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">
              Why thousands of local families, business fleets, and motoring enthusiasts trust us with their vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-200 hover:border-[#D90429] transition-colors">
              <div className="w-10 h-10 rounded-sm bg-gray-100 text-[#0B132B] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5 text-[#D90429]" />
              </div>
              <h4 className="font-black text-lg uppercase italic text-[#0B132B]">
                100% Upfront Pricing
              </h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                No surprises on your final invoice. We inspect first, provide a transparent itemised quote, and only proceed once you have approved the work.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-200 hover:border-[#D90429] transition-colors">
              <div className="w-10 h-10 rounded-sm bg-gray-100 text-[#0B132B] flex items-center justify-center mb-4">
                <Wrench className="w-5 h-5 text-[#D90429]" />
              </div>
              <h4 className="font-black text-lg uppercase italic text-[#0B132B]">
                Dealer-Grade Scanners
              </h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                We invest heavily in the latest electronic scan tools and software updates for Volkswagen, Mercedes, BMW, Audi, Toyota, and Ford models.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm shadow-sm border border-gray-200 hover:border-[#D90429] transition-colors">
              <div className="w-10 h-10 rounded-sm bg-gray-100 text-[#0B132B] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-[#D90429]" />
              </div>
              <h4 className="font-black text-lg uppercase italic text-[#0B132B]">
                Fast Bay Turnaround
              </h4>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                We understand your car is your livelihood. Most routine services and brake pad replacements are completed the very same day.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Leading Brands Section */}
      <BrandSection />

      {/* CTA Section */}
      <ContactSection />

    </div>
  );
};
