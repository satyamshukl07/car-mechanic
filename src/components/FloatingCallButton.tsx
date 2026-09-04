import React, { useState } from 'react';
import { PhoneCall } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/services';

export const FloatingCallButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center group">
      <a
        id="floating-call-btn"
        href={`tel:${COMPANY_DETAILS.phoneRaw}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-400 focus:ring-opacity-50"
        aria-label="Call Apex Auto Care Now"
        title="Call 1300 892 455"
      >
        {/* Pulse effect */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />
        
        <PhoneCall className="w-6 h-6 animate-pulse" />
      </a>

      {/* Slide-out tooltip label */}
      <div 
        className={`ml-3 hidden sm:flex items-center bg-slate-900/95 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full shadow-lg border border-slate-700/50 text-xs font-semibold tracking-wide transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-ping" />
        <span>Call Now: {COMPANY_DETAILS.phone}</span>
      </div>
    </div>
  );
};
