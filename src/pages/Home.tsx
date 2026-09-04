import React from 'react';
import { HeroSlider } from '../components/HeroSlider';
import { AboutSection } from '../components/AboutSection';
import { ServiceGrid } from '../components/ServiceGrid';
import { BrandSection } from '../components/BrandSection';
import { BookingForm } from '../components/BookingForm';
import { ContactSection } from '../components/ContactSection';
import { 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  Award,
  Wrench
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/services';

export const Home: React.FC = () => {
  return (
    <div id="home-page" className="w-full">
      
      {/* 1. Hero Slider */}
      <HeroSlider />

      {/* 2. Fast Benefits Bar in Deep Navy Theme */}
      <section className="bg-[#070D1D] text-white border-b border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-white/10 text-[#D90429] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-black text-sm uppercase italic text-white leading-tight">
                  Warranty Safe
                </h4>
                <p className="text-[11px] text-gray-400">100% Logbook Compliant</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-white/10 text-[#D90429] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-black text-sm uppercase italic text-white leading-tight">
                  Licensed Mechanics
                </h4>
                <p className="text-[11px] text-gray-400">Certified Technicians</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-white/10 text-[#D90429] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-black text-sm uppercase italic text-white leading-tight">
                  Same-Day Servicing
                </h4>
                <p className="text-[11px] text-gray-400">Fast Bay Turnaround</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-sm bg-white/10 text-[#D90429] flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-black text-sm uppercase italic text-white leading-tight">
                  24/7 Breakdown Help
                </h4>
                <p className="text-[11px] text-gray-400">Emergency Roadside Vans</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. About / Introduction Section */}
      <AboutSection />

      {/* 4. Services Overview ("What We Offer") */}
      <ServiceGrid />

      {/* 5. Specialised With Leading Brands */}
      <BrandSection />

      {/* 6. Booking Appointment Section on Home */}
      <section id="home-booking-section" className="py-16 sm:py-24 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-[#D90429] font-black text-xs uppercase tracking-widest mb-1">
                  Transparent Workshop Care
                </p>
                <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] uppercase italic tracking-tight leading-[0.95]">
                  BOOK YOUR <br />
                  <span className="text-[#D90429]">INSPECTION</span> TODAY
                </h2>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed border-l-4 border-[#D90429] pl-4">
                Take advantage of fixed-price servicing, genuine parts, and friendly customer care. Choose your required service or describe vehicle symptoms.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-sm bg-[#D90429] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-wide text-[#0B132B]">Choose Service & Date</h4>
                    <p className="text-xs text-gray-500">Pick from our full catalogue of mechanical, logbook, or brake repairs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-sm bg-[#D90429] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-wide text-[#0B132B]">Fast SMS & Phone Confirmation</h4>
                    <p className="text-xs text-gray-500">Our workshop manager confirms your vehicle bay within 30 minutes.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-sm bg-[#D90429] text-white flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <h4 className="font-black text-xs uppercase tracking-wide text-[#0B132B]">Drive Away With Confidence</h4>
                    <p className="text-xs text-gray-500">Full 12-month / 20,000km warranty on all parts and workshop labor.</p>
                  </div>
                </div>
              </div>

              {/* Direct phone badge */}
              <div className="p-4 bg-white rounded-sm border border-gray-200 shadow-sm flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase text-gray-400 block tracking-wider">
                    Need immediate assistance?
                  </span>
                  <span className="font-black text-lg text-[#0B132B] uppercase">
                    {COMPANY_DETAILS.phone}
                  </span>
                </div>
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="bg-[#D90429] hover:brightness-110 text-white px-4 py-2 rounded-sm text-xs font-black uppercase tracking-wider transition-all"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-7">
              <BookingForm />
            </div>

          </div>
        </div>
      </section>

      {/* 7. Contact / CTA Section */}
      <ContactSection />

    </div>
  );
};
