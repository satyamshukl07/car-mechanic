import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Linkedin, 
  ArrowRight 
} from 'lucide-react';
import { SERVICES, COMPANY_DETAILS } from '../data/services';

export const Footer: React.FC = () => {
  return (
    <footer id="site-footer" className="bg-[#070D1D] text-gray-300 border-t border-white/10">
      
      {/* Top Pre-Footer Bar with Crimson Accent */}
      <div className="bg-[#D90429] text-white py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2 bg-white/20 rounded-sm shrink-0">
              <Phone className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest font-black opacity-90">
                Fast Emergency Mechanical Assistance or Free Quotes
              </p>
              <p className="text-base sm:text-xl font-black uppercase italic tracking-wider">
                CALL OUR WORKSHOP: {COMPANY_DETAILS.phone}
              </p>
            </div>
          </div>

          <a
            href={`tel:${COMPANY_DETAILS.phoneRaw}`}
            className="shrink-0 bg-white hover:bg-gray-100 text-[#0B132B] px-6 py-2.5 rounded-sm font-black text-xs uppercase tracking-widest transition-all shadow-md active:scale-95"
          >
            Call Now
          </a>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          {/* Col 1: Brand & Bio */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-sm bg-[#D90429] flex items-center justify-center text-white">
                <Wrench className="w-4 h-4" />
              </div>
              <span className="font-black text-2xl tracking-tight text-white uppercase italic">
                APEX <span className="text-[#D90429]">AUTO</span>
              </span>
            </div>

            <p className="text-xs text-gray-400 leading-relaxed mb-5">
              Australia's trusted automotive servicing and mechanical workshop. Manufacturer logbook servicing, brake & clutch repairs, and 24/7 emergency roadside rescue.
            </p>

            <div className="p-3 bg-[#0B132B] border border-white/10 rounded-sm text-xs space-y-1">
              <p className="text-gray-400">
                <strong className="text-white font-black uppercase text-[10px]">ABN:</strong> {COMPANY_DETAILS.abn}
              </p>
              <p className="text-gray-400">
                <strong className="text-white font-black uppercase text-[10px]">MTA Licensed:</strong> MVRL-48912
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-black text-base text-white uppercase italic tracking-wider mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-[#D90429]" />
              <span>Quick Links</span>
            </h4>

            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#D90429] flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#D90429]" />
                  <span className="font-bold uppercase tracking-wider text-[11px]">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#D90429] flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#D90429]" />
                  <span className="font-bold uppercase tracking-wider text-[11px]">About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#D90429] flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#D90429]" />
                  <span className="font-bold uppercase tracking-wider text-[11px]">Our Services</span>
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-gray-400 hover:text-[#D90429] flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#D90429]" />
                  <span className="font-bold uppercase tracking-wider text-[11px]">Book Appointment</span>
                </Link>
              </li>
              <li>
                <a href="#contact-cta-section" className="text-gray-400 hover:text-[#D90429] flex items-center gap-2 transition-colors">
                  <ArrowRight className="w-3 h-3 text-[#D90429]" />
                  <span className="font-bold uppercase tracking-wider text-[11px]">Contact & Location</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div>
            <h4 className="font-black text-base text-white uppercase italic tracking-wider mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-[#D90429]" />
              <span>Workshop Services</span>
            </h4>

            <ul className="space-y-2 text-xs">
              {SERVICES.slice(0, 8).map((service) => (
                <li key={service.id}>
                  <Link 
                    to={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-[#D90429] flex items-center gap-1.5 transition-colors line-clamp-1"
                  >
                    <span className="text-[#D90429] text-[10px]">■</span>
                    <span className="font-medium">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us & Social Media */}
          <div>
            <h4 className="font-black text-base text-white uppercase italic tracking-wider mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
              <span className="w-1.5 h-3 bg-[#D90429]" />
              <span>Contact Workshop</span>
            </h4>

            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${COMPANY_DETAILS.phoneRaw}`} className="text-white hover:text-[#D90429] font-black block text-sm">
                    {COMPANY_DETAILS.phone}
                  </a>
                  <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">24/7 Breakdown: 0412 345 678</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-gray-300 hover:text-[#D90429]">
                  {COMPANY_DETAILS.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-300">Mon-Fri: 7:30AM – 5:30PM</p>
                  <p className="text-gray-300">Sat: 8:00AM – 1:00PM</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-5 pt-3 border-t border-white/10">
              <p className="text-[10px] uppercase font-black tracking-widest text-gray-400 mb-2">
                Follow Us
              </p>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-sm bg-[#0B132B] hover:bg-[#D90429] text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-sm bg-[#0B132B] hover:bg-[#D90429] text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-sm bg-[#0B132B] hover:bg-[#D90429] text-gray-300 hover:text-white flex items-center justify-center border border-white/10 transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} {COMPANY_DETAILS.legalName}. All Rights Reserved.
          </p>
          <p className="flex items-center gap-3">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-gray-400 cursor-pointer">Warranty Standards</span>
          </p>
        </div>

      </div>
    </footer>
  );
};
