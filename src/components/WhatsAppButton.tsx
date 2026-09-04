import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/services';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappUrl = `https://wa.me/61412345678?text=${encodeURIComponent(COMPANY_DETAILS.whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center flex-row-reverse group">
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
        aria-label="Chat on WhatsApp"
        title="Chat with our mechanics on WhatsApp"
      >
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-white/10" />
      </a>

      {/* Slide-out tooltip label */}
      <div 
        className={`mr-3 hidden sm:flex items-center bg-slate-900/95 backdrop-blur-sm text-white px-3.5 py-1.5 rounded-full shadow-lg border border-slate-700/50 text-xs font-semibold tracking-wide transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
        <span>Chat on WhatsApp</span>
      </div>
    </div>
  );
};
