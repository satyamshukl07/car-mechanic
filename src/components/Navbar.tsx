import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Phone, 
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
  Shield
} from 'lucide-react';
import { SERVICES, COMPANY_DETAILS } from '../data/services';

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  'mechanical-repairs': <Wrench className="w-4 h-4" />,
  'brakes-and-clutch': <Disc className="w-4 h-4" />,
  'logbook-service': <BookOpen className="w-4 h-4" />,
  'suspension-and-steering': <Compass className="w-4 h-4" />,
  'tyres': <CircleDot className="w-4 h-4" />,
  'car-batteries': <Zap className="w-4 h-4" />,
  'car-air-servicing': <Wind className="w-4 h-4" />,
  'all-car-servicing': <Gauge className="w-4 h-4" />,
  'breakdown-assistance': <PhoneCall className="w-4 h-4" />,
  'transmission-repairs': <Cog className="w-4 h-4" />,
  'body-and-frame-repair': <ShieldAlert className="w-4 h-4" />,
  'windscreen-repair': <Shield className="w-4 h-4" />
};

export const Navbar: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  const isCurrent = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      id="main-navigation"
      className={`w-full transition-all duration-300 bg-white border-b border-gray-200 z-50 ${
        isScrolled ? 'shadow-md py-2.5' : 'py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with Bold Typography Styling */}
          <Link 
            to="/" 
            id="brand-logo-link"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Apex Auto Care Home"
          >
            <div className="w-10 h-10 bg-[#0B132B] flex items-center justify-center rounded-sm shrink-0 shadow-sm group-hover:bg-[#D90429] transition-colors duration-200">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-black text-xl sm:text-2xl tracking-tighter text-[#0B132B] uppercase block leading-none">
                APEX <span className="text-[#D90429]">AUTO CARE</span>
              </span>
              <span className="text-[10px] font-black tracking-widest text-gray-400 uppercase block mt-0.5">
                Mechanical & Servicing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link
              to="/"
              id="nav-home"
              className={`font-bold text-sm uppercase tracking-wider transition-colors duration-150 ${
                isCurrent('/') && location.pathname === '/'
                  ? 'text-[#D90429] border-b-2 border-[#D90429] pb-0.5'
                  : 'text-[#0B132B] hover:text-[#D90429]'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              id="nav-about"
              className={`font-bold text-sm uppercase tracking-wider transition-colors duration-150 ${
                isCurrent('/about')
                  ? 'text-[#D90429] border-b-2 border-[#D90429] pb-0.5'
                  : 'text-gray-600 hover:text-[#D90429]'
              }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                id="nav-services-dropdown-btn"
                type="button"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`flex items-center gap-1 font-bold text-sm uppercase tracking-wider transition-colors duration-150 ${
                  isCurrent('/services') || isServicesOpen
                    ? 'text-[#D90429] border-b-2 border-[#D90429] pb-0.5'
                    : 'text-gray-600 hover:text-[#D90429]'
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isServicesOpen ? 'rotate-180 text-[#D90429]' : ''
                  }`} 
                />
              </button>

              {/* Desktop Mega Dropdown */}
              {isServicesOpen && (
                <div 
                  id="services-dropdown-menu"
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[680px] bg-white border border-gray-200 rounded-sm shadow-2xl p-5 grid grid-cols-2 gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="col-span-2 pb-2.5 mb-1.5 border-b border-gray-100 flex items-center justify-between px-1">
                    <span className="text-[11px] font-black text-[#0B132B] uppercase tracking-wider">
                      Professional Workshop Services
                    </span>
                    <Link 
                      to="/services" 
                      className="text-xs text-[#D90429] hover:brightness-110 font-bold uppercase tracking-wider transition-colors"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      View All Services →
                    </Link>
                  </div>

                  {SERVICES.map((service) => {
                    const isActive = location.pathname === `/services/${service.slug}`;
                    return (
                      <Link
                        key={service.id}
                        to={`/services/${service.slug}`}
                        id={`dropdown-link-${service.slug}`}
                        onClick={() => setIsServicesOpen(false)}
                        className={`flex items-start gap-3 p-2.5 rounded-sm border transition-all duration-150 group ${
                          isActive 
                            ? 'bg-red-50/70 border-[#D90429] text-[#0B132B]' 
                            : 'border-transparent hover:border-gray-200 hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-sm flex items-center justify-center shrink-0 transition-colors ${
                          isActive 
                            ? 'bg-[#D90429] text-white' 
                            : 'bg-gray-100 text-[#0B132B] group-hover:bg-[#0B132B] group-hover:text-white'
                        }`}>
                          {SERVICE_ICONS[service.slug] || <Wrench className="w-4 h-4" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-black text-[#0B132B] uppercase tracking-tight truncate block group-hover:text-[#D90429] transition-colors">
                              {service.title}
                            </span>
                            {service.popular && (
                              <span className="text-[9px] bg-red-100 text-[#D90429] px-1.5 py-0.5 rounded-xs font-black uppercase tracking-wider">
                                Popular
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-gray-500 line-clamp-1 mt-0.5 font-normal">
                            {service.shortDescription}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <Link
              to="/book"
              id="nav-book"
              className={`font-bold text-sm uppercase tracking-wider transition-colors duration-150 ${
                isCurrent('/book')
                  ? 'text-[#D90429] border-b-2 border-[#D90429] pb-0.5'
                  : 'text-gray-600 hover:text-[#D90429]'
              }`}
            >
              Bookings
            </Link>
          </nav>

          {/* Right: Bold Call Now Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              id="header-call-now-btn"
              href={`tel:${COMPANY_DETAILS.phoneRaw}`}
              className="bg-[#D90429] hover:brightness-110 active:scale-[0.98] text-white px-5 sm:px-6 py-2.5 rounded-sm font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 shadow-md transition-all duration-150"
            >
              <Phone className="w-4 h-4 fill-white/20 animate-pulse shrink-0" />
              <span>Call Now: {COMPANY_DETAILS.phone}</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-sm text-[#0B132B] hover:bg-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#D90429]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {isMobileMenuOpen && (
          <div 
            id="mobile-menu-drawer"
            className="lg:hidden mt-3 pt-3 pb-6 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-150"
          >
            <div className="flex flex-col space-y-1">
              <Link
                to="/"
                id="mobile-nav-home"
                className={`px-3 py-2.5 rounded-sm text-sm font-black uppercase tracking-wider ${
                  isCurrent('/') && location.pathname === '/'
                    ? 'bg-[#D90429] text-white'
                    : 'text-[#0B132B] hover:bg-gray-100'
                }`}
              >
                Home
              </Link>

              <Link
                to="/about"
                id="mobile-nav-about"
                className={`px-3 py-2.5 rounded-sm text-sm font-black uppercase tracking-wider ${
                  isCurrent('/about')
                    ? 'bg-[#D90429] text-white'
                    : 'text-[#0B132B] hover:bg-gray-100'
                }`}
              >
                About Us
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  id="mobile-nav-services-btn"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-sm text-sm font-black uppercase tracking-wider ${
                    isCurrent('/services')
                      ? 'bg-red-50 text-[#D90429]'
                      : 'text-[#0B132B] hover:bg-gray-100'
                  }`}
                >
                  <span>Services ({SERVICES.length})</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {isServicesOpen && (
                  <div className="pl-3 pr-2 py-2 space-y-1 border-l-2 border-[#D90429] ml-3 mt-1">
                    <Link
                      to="/services"
                      className="block px-2 py-1.5 text-xs font-black uppercase tracking-wider text-[#D90429] hover:underline"
                    >
                      All Services Directory →
                    </Link>
                    {SERVICES.map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className="block px-2 py-1.5 text-xs font-bold text-gray-700 hover:text-[#D90429] hover:bg-gray-50 rounded-sm uppercase tracking-wide"
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/book"
                id="mobile-nav-book"
                className={`px-3 py-2.5 rounded-sm text-sm font-black uppercase tracking-wider ${
                  isCurrent('/book')
                    ? 'bg-[#D90429] text-white'
                    : 'text-[#0B132B] hover:bg-gray-100'
                }`}
              >
                Book Appointment
              </Link>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};
