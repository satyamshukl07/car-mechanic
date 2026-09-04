import React, { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Clock, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  ChevronRight, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { BookingForm } from '../components/BookingForm';
import { COMPANY_DETAILS } from '../data/services';

export const BookAppointment: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div id="book-appointment-page" className="bg-gray-50 min-h-screen">
      
      {/* Banner in Deep Navy */}
      <section className="relative py-16 sm:py-24 bg-[#0B132B] text-white overflow-hidden border-b-4 border-[#D90429]">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1920&q=80')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/90 to-[#0B132B]/80" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4 font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-[#D90429] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-[#D90429]">Book Appointment</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[#D90429] font-black text-xs uppercase tracking-widest mb-2">
              Online Workshop Hoist Reservation
            </p>

            <h1 className="text-4xl sm:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">
              BOOK YOUR <span className="text-[#D90429]">APPOINTMENT</span>
            </h1>

            <p className="mt-4 text-base sm:text-xl text-gray-300 leading-relaxed border-l-4 border-[#D90429] pl-4 font-medium">
              Schedule your logbook service, mechanical diagnosis, or brake repair with our certified technicians. Upfront itemised quotes with zero unapproved surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form and Info Layout */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7">
            <BookingForm 
              initialService={preselectedService} 
              className="border border-gray-200"
            />
          </div>

          {/* Right Info & Guarantees (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Workshop Quick Card */}
            <div className="bg-white rounded-sm p-6 sm:p-7 border border-gray-200 shadow-sm border-l-4 border-[#D90429]">
              <h3 className="font-black text-xl text-[#0B132B] uppercase italic tracking-tight pb-3 border-b border-gray-100 flex items-center justify-between">
                <span>Workshop Information</span>
                <span className="text-[10px] font-black uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-xs border border-emerald-200">
                  Open Mon - Sat
                </span>
              </h3>

              <div className="mt-4 space-y-3.5 text-xs text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-[#0B132B] uppercase text-[10px] tracking-wider block">Address</span>
                    <span className="font-medium text-gray-700">{COMPANY_DETAILS.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-[#0B132B] uppercase text-[10px] tracking-wider block">Phone Support</span>
                    <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="text-[#D90429] font-black hover:underline text-sm">
                      {COMPANY_DETAILS.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-[#0B132B] uppercase text-[10px] tracking-wider block">Operating Hours</span>
                    <p className="text-gray-500">Mon - Fri: 7:30 AM – 5:30 PM</p>
                    <p className="text-gray-500">Sat: 8:00 AM – 1:00 PM</p>
                    <p className="text-[#D90429] font-bold">Sun: 24/7 Roadside Assistance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-sm p-6 sm:p-7 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <HelpCircle className="w-4 h-4 text-[#D90429]" />
                <h4 className="font-black text-lg text-[#0B132B] uppercase italic">
                  What Happens Next?
                </h4>
              </div>

              <div className="space-y-3 text-xs text-gray-600">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                  <p><strong className="text-[#0B132B]">Fast Confirmation:</strong> Our service advisor reviews bay availability and contacts you within 30 minutes.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                  <p><strong className="text-[#0B132B]">Early Key Drop:</strong> Need to drop off before 7:30 AM? Use our secure 24-hour key drop box at the front entrance.</p>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                  <p><strong className="text-[#0B132B]">Transparent Invoicing:</strong> We will call with an itemised quote before commencing any repair work.</p>
                </div>
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="p-5 rounded-sm bg-[#0B132B] text-white border-l-4 border-[#D90429]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#D90429] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-black text-base text-white uppercase italic">
                    12-Month / 20,000 KM Warranty
                  </h5>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Every repair and service performed at Apex Auto Care is backed by our full warranty coverage.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
