import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Calendar, 
  MessageCircle, 
  MapPin, 
  Clock, 
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/services';

export const ContactSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/61412345678?text=${encodeURIComponent(COMPANY_DETAILS.whatsappMessage)}`;

  return (
    <section 
      id="contact-cta-section" 
      className="relative py-16 sm:py-24 bg-[#0B132B] text-white overflow-hidden border-t-4 border-[#D90429]"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-15"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/90 to-[#0B132B]/75" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Main CTA copy with Bold Typography */}
          <div className="lg:col-span-7">
            <p className="text-[#D90429] font-black text-xs uppercase tracking-widest mb-2">
              Immediate Mechanical Support
            </p>

            <h2 className="text-4xl sm:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">
              NEED A <span className="text-[#D90429]">RELIABLE MECHANIC?</span>
            </h2>

            <p className="mt-4 text-sm sm:text-lg text-gray-300 max-w-2xl leading-relaxed border-l-4 border-[#D90429] pl-4">
              Don't compromise on vehicle safety or pay inflated franchise dealership costs. Speak directly with a licensed mechanic or book your inspection online in seconds.
            </p>

            {/* Quick action buttons row */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                id="cta-call-now-btn"
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="bg-[#D90429] hover:brightness-110 active:scale-[0.98] text-white px-7 py-3.5 rounded-sm font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 fill-white/20" />
                <span>Call Now: {COMPANY_DETAILS.phone}</span>
              </a>

              <Link
                to="/book"
                id="cta-book-appointment-btn"
                className="bg-white hover:bg-gray-100 text-[#0B132B] px-6 py-3.5 rounded-sm font-black text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
              >
                <Calendar className="w-4 h-4 text-[#D90429]" />
                <span>Book Appointment</span>
              </Link>

              <a
                id="cta-whatsapp-btn"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3.5 rounded-sm font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Guarantee badges */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D90429]" />
                <span className="font-bold uppercase tracking-wider text-[11px]">Upfront Written Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D90429]" />
                <span className="font-bold uppercase tracking-wider text-[11px]">12-Month / 20,000km Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#D90429]" />
                <span className="font-bold uppercase tracking-wider text-[11px]">Genuine & OEM Parts</span>
              </div>
            </div>
          </div>

          {/* Location & Opening Hours Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#070D1D] border border-white/10 rounded-sm p-6 sm:p-8 shadow-2xl border-l-4 border-[#D90429]">
              <h3 className="font-black text-xl uppercase italic text-white tracking-tight pb-3 border-b border-white/10 flex items-center justify-between">
                <span>Workshop Information</span>
                <span className="text-[10px] font-black uppercase text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-xs border border-emerald-800/40">
                  Open Today
                </span>
              </h3>

              <div className="mt-5 space-y-4">
                
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-sm bg-white/10 text-[#D90429] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                      Workshop Location
                    </h4>
                    <p className="text-sm font-bold text-white mt-0.5">
                      {COMPANY_DETAILS.address}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      Equipped with 6 service hoists, customer parking & secure 24-hr key drop.
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-sm bg-white/10 text-[#D90429] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-wider text-gray-400">
                      Operating Hours
                    </h4>
                    <div className="text-xs space-y-1 mt-1">
                      <p className="flex justify-between text-gray-300">
                        <span className="text-gray-400 font-medium">Monday – Friday:</span>
                        <span className="font-bold text-white">7:30 AM – 5:30 PM</span>
                      </p>
                      <p className="flex justify-between text-gray-300">
                        <span className="text-gray-400 font-medium">Saturday:</span>
                        <span className="font-bold text-white">8:00 AM – 1:00 PM</span>
                      </p>
                      <p className="flex justify-between text-gray-300">
                        <span className="text-gray-400 font-medium">Sunday:</span>
                        <span className="font-bold text-[#D90429]">Emergency Roadside</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* 24/7 Breakdown notification */}
                <div className="p-3 bg-white/5 border border-white/10 rounded-sm flex items-center gap-3">
                  <AlertTriangle className="w-4 h-4 text-[#D90429] shrink-0" />
                  <p className="text-xs text-gray-300">
                    <strong className="text-white">24/7 Emergency Dispatch:</strong> Call{' '}
                    <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="text-[#D90429] hover:underline font-black">
                      {COMPANY_DETAILS.phone}
                    </a>{' '}
                    for immediate roadside assistance.
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
