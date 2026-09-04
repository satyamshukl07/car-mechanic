import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Wrench, 
  Disc, 
  BookOpen, 
  Compass, 
  CircleDot, 
  Zap, 
  Wind, 
  Gauge, 
  PhoneCall, 
  Cog, 
  ShieldAlert, 
  Shield, 
  Activity 
} from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ICONS_MAP: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-5 h-5" />,
  Disc: <Disc className="w-5 h-5" />,
  BookOpen: <BookOpen className="w-5 h-5" />,
  Compass: <Compass className="w-5 h-5" />,
  CircleDot: <CircleDot className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Wind: <Wind className="w-5 h-5" />,
  Gauge: <Gauge className="w-5 h-5" />,
  PhoneCall: <PhoneCall className="w-5 h-5" />,
  Cog: <Cog className="w-5 h-5" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  Activity: <Activity className="w-5 h-5" />
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div 
      id={`service-card-${service.slug}`}
      className="group flex flex-col h-full bg-white border border-gray-200 hover:border-[#D90429] shadow-sm hover:shadow-md transition-all duration-200 rounded-sm overflow-hidden"
    >
      {/* Automotive Image */}
      <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#0B132B]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent" />
        
        {/* Category icon badge */}
        <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 text-[#0B132B] flex items-center justify-center rounded-sm shadow-sm group-hover:bg-[#0B132B] group-hover:text-white transition-colors duration-200">
          {ICONS_MAP[service.iconName] || <Wrench className="w-4 h-4" />}
        </div>

        {/* Pricing tag */}
        <div className="absolute bottom-2.5 left-3 bg-[#0B132B] text-white px-2 py-0.5 rounded-xs text-[11px] font-black uppercase tracking-wider">
          From {service.startingPrice}
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
        <div>
          <h3 className="font-black text-[#0B132B] text-lg sm:text-xl uppercase italic leading-tight group-hover:text-[#D90429] transition-colors mb-2">
            {service.title}
          </h3>

          <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
            {service.shortDescription}
          </p>
        </div>

        {/* Action Row */}
        <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">
            {service.estimatedTime}
          </span>
          <Link
            to={`/services/${service.slug}`}
            id={`know-more-btn-${service.slug}`}
            className="inline-flex items-center gap-1.5 bg-[#D90429] hover:brightness-110 active:scale-[0.98] text-white px-3.5 py-1.5 rounded-sm font-black text-[11px] uppercase tracking-wider transition-all"
            aria-label={`Know more about ${service.title}`}
          >
            <span>Know More</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
};
