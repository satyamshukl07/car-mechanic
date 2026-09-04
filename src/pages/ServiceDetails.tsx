import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Wrench, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  DollarSign, 
  ChevronRight,
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
import { SERVICES, COMPANY_DETAILS } from '../data/services';
import { BookingForm } from '../components/BookingForm';

const ICON_MAP: Record<string, React.ReactNode> = {
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

export const ServiceDetails: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  const service = SERVICES.find(
    s => s.slug === serviceId || s.id === serviceId
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 bg-[#0B132B] text-white text-center">
        <div className="w-16 h-16 rounded-sm bg-[#D90429]/20 text-[#D90429] flex items-center justify-center mb-4">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h1 className="font-black text-3xl uppercase italic">Service Not Found</h1>
        <p className="mt-2 text-gray-400 max-w-md text-xs">
          The requested automotive service does not exist or has been relocated.
        </p>
        <Link
          to="/services"
          className="mt-6 bg-[#D90429] hover:brightness-110 text-white px-6 py-2.5 rounded-sm font-black text-xs uppercase tracking-widest transition-all"
        >
          View All Services
        </Link>
      </div>
    );
  }

  const whatsappUrl = `https://wa.me/61412345678?text=${encodeURIComponent(
    `Hello Apex Auto Care, I would like to enquire about ${service.title}.`
  )}`;

  return (
    <div id="service-detail-page" className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section 
        id="service-hero"
        className="relative py-20 sm:py-28 bg-[#0B132B] text-white overflow-hidden border-b-4 border-[#D90429]"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${service.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/90 to-[#0B132B]/75" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-4 font-bold uppercase tracking-wider">
            <Link to="/" className="hover:text-[#D90429] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <Link to="/services" className="hover:text-[#D90429] transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            <span className="text-[#D90429] truncate">{service.title}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/10 text-white text-xs font-black tracking-widest uppercase mb-4 border border-white/10">
              <span className="text-[#D90429]">
                {ICON_MAP[service.iconName] || <Wrench className="w-3.5 h-3.5" />}
              </span>
              <span>Certified Workshop Care</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">
              {service.title}
            </h1>

            <p className="mt-4 text-base sm:text-xl text-gray-300 font-medium leading-relaxed border-l-4 border-[#D90429] pl-4">
              {service.shortDescription}
            </p>

            {/* Quick Metrics */}
            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-bold">
              <div className="flex items-center gap-1.5 bg-[#070D1D] px-3 py-1.5 rounded-sm border border-white/10 text-gray-300 uppercase tracking-wider text-[11px]">
                <Clock className="w-3.5 h-3.5 text-[#D90429]" />
                <span>Est: {service.estimatedTime}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#070D1D] px-3 py-1.5 rounded-sm border border-white/10 text-gray-300 uppercase tracking-wider text-[11px]">
                <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                <span>From {service.startingPrice}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-[#070D1D] px-3 py-1.5 rounded-sm border border-white/10 text-gray-300 uppercase tracking-wider text-[11px]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D90429]" />
                <span>12-Month Guarantee</span>
              </div>
            </div>

            {/* Quick CTA row */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#book-appointment-anchor"
                className="bg-[#D90429] hover:brightness-110 active:scale-[0.98] text-white px-6 py-3 rounded-sm font-black text-xs uppercase tracking-widest transition-all shadow-xl"
              >
                Book Appointment
              </a>
              <a
                href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                className="bg-white hover:bg-gray-100 text-[#0B132B] px-5 py-3 rounded-sm font-black text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#D90429]" />
                <span>Call {COMPANY_DETAILS.phone}</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3 rounded-sm font-black text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Main Content Grid: 8 cols content + 4 cols sidebar */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left / Main Column */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Service Detailed Overview */}
            <div>
              <p className="text-[#D90429] font-black text-xs uppercase tracking-widest mb-1">
                Technical Specification
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-[#0B132B] uppercase italic tracking-tight border-b pb-3 border-gray-200">
                Service Overview & Scope
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-4">
                {service.longDescription}
              </p>
            </div>

            {/* Common Warning Signs */}
            <div className="bg-amber-50 border border-amber-200 rounded-sm p-5 sm:p-6 border-l-4 border-l-amber-500">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <h3 className="font-black text-lg uppercase italic text-[#0B132B]">
                  Common Warning Signs & Symptoms
                </h3>
              </div>
              <p className="text-xs text-gray-600 mb-3">
                If your car shows any of the following symptoms, early inspection prevents costly secondary damage:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-gray-800">
                {service.commonProblems.map((problem, idx) => (
                  <li key={idx} className="flex items-start gap-2 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span>{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Inclusions */}
            <div>
              <p className="text-[#D90429] font-black text-xs uppercase tracking-widest mb-1">
                Checklist
              </p>
              <h3 className="text-2xl font-black text-[#0B132B] uppercase italic tracking-tight mb-4">
                What Is Included In This Service
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.included.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-3 p-3.5 rounded-sm bg-gray-50 border border-gray-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                    <span className="text-xs font-bold text-gray-800 leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="p-6 rounded-sm bg-[#0B132B] text-white border-l-4 border-[#D90429]">
              <h3 className="font-black text-xl text-white uppercase italic tracking-tight mb-4">
                Key Benefits of Professional Servicing
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-gray-300 text-xs">
                    <ShieldCheck className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div>
              <p className="text-[#D90429] font-black text-xs uppercase tracking-widest mb-1">
                Workshop Advantage
              </p>
              <h3 className="text-2xl font-black text-[#0B132B] uppercase italic tracking-tight mb-4">
                Why Choose Us For {service.title}
              </h3>
              <div className="space-y-2.5">
                {service.whyChooseUs.map((reason, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-sm border-l-4 border-[#D90429]">
                    <span className="font-black text-[#D90429] text-base leading-none mt-0.5">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-gray-800">
                      {reason}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Form */}
            <div id="book-appointment-anchor" className="pt-4">
              <BookingForm 
                initialService={service.slug} 
                className="border-2 border-[#D90429]"
              />
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Contact Box */}
            <div className="bg-[#0B132B] text-white rounded-sm p-5 border border-white/10 shadow-xl border-l-4 border-[#D90429]">
              <h4 className="font-black text-lg uppercase italic text-white pb-3 border-b border-white/10">
                Direct Mechanic Hotline
              </h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Have an urgent question or need immediate roadside rescue? Speak directly to our workshop floor.
              </p>

              <div className="mt-4 space-y-2.5">
                <a
                  href={`tel:${COMPANY_DETAILS.phoneRaw}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#D90429] hover:brightness-110 text-white py-2.5 rounded-sm font-black text-xs uppercase tracking-widest transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 rounded-sm font-black text-xs uppercase tracking-widest transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiries</span>
                </a>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10 text-xs text-gray-400 space-y-1">
                <p className="flex justify-between">
                  <span>Operating:</span>
                  <span className="text-white font-bold">Mon-Fri 7:30AM–5:30PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white font-bold">8:00AM–1:00PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Emergency:</span>
                  <span className="text-[#D90429] font-black">24/7 Roadside</span>
                </p>
              </div>
            </div>

            {/* Other Services Navigation List */}
            <div className="bg-gray-50 border border-gray-200 rounded-sm p-5">
              <h4 className="font-black text-base uppercase italic text-[#0B132B] pb-2 border-b border-gray-200">
                All Available Services
              </h4>
              
              <div className="mt-3 space-y-1">
                {SERVICES.map((other) => {
                  const isCurrent = other.id === service.id;
                  return (
                    <Link
                      key={other.id}
                      to={`/services/${other.slug}`}
                      className={`flex items-center justify-between p-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all ${
                        isCurrent 
                          ? 'bg-[#0B132B] text-white shadow-sm' 
                          : 'text-gray-700 hover:bg-gray-200 hover:text-[#0B132B]'
                      }`}
                    >
                      <span className="truncate pr-2">{other.title}</span>
                      <ArrowRight className={`w-3 h-3 shrink-0 ${isCurrent ? 'text-white' : 'text-gray-400'}`} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="p-4 rounded-sm bg-emerald-50 border border-emerald-200 text-center">
              <div className="w-10 h-10 rounded-sm bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h5 className="font-black text-sm text-emerald-950 uppercase italic">
                National Guarantee
              </h5>
              <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                All repairs completed with genuine or OEM standard components backed by our 12-month or 20,000 km national warranty.
              </p>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
