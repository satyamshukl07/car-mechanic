import React from 'react';
import { Phone, Clock, MapPin, ShieldCheck, AlertCircle } from 'lucide-react';
import { Navbar } from './Navbar';
import { COMPANY_DETAILS } from '../data/services';

export const Header: React.FC = () => {
  return (
    <header id="site-header" className="sticky top-0 z-50 w-full shadow-lg">
      {/* Top Announcements & Emergency Phone Bar */}
      <div className="bg-[#0B132B] text-slate-300 text-xs border-b border-[#1C2541] py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D90429] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D90429]"></span>
              </span>
              <span className="font-bold text-white uppercase tracking-wider text-[11px]">24/7 Roadside Help:</span>
              <a 
                href={`tel:${COMPANY_DETAILS.phoneRaw}`} 
                className="text-[#D90429] hover:brightness-125 font-black tracking-wider hover:underline"
              >
                {COMPANY_DETAILS.phone}
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-slate-300 text-[11px] font-medium">
              <Clock className="w-3.5 h-3.5 text-[#D90429]" />
              <span>Mon - Fri: 7:30AM – 5:30PM | Sat: 8AM – 1PM</span>
            </div>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5 text-slate-300 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-[#D90429]" />
              <span className="font-medium">{COMPANY_DETAILS.address}</span>
            </div>
            
            <div className="flex items-center gap-1 text-emerald-400 font-bold uppercase tracking-wider text-[10px] border-l border-white/15 pl-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Licensed Mechanics MVRL #48912</span>
            </div>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <Navbar />
    </header>
  );
};
