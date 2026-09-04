import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Award, 
  Wrench, 
  ArrowRight
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/services';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-intro-section" className="py-16 sm:py-24 bg-white text-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Workshop / Mechanic Imagery */}
          <div className="lg:col-span-6 relative">
            
            <div className="relative rounded-sm overflow-hidden shadow-xl border border-gray-200 group">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1200&q=80"
                alt="Apex Auto Care Mechanic Workshop Bay"
                className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-[11px] font-black uppercase tracking-widest text-[#D90429]">
                  Precision Workshop Engineering
                </p>
                <p className="text-lg font-black uppercase italic">
                  Modern Diagnostic Equipment & Clean Bays
                </p>
              </div>
            </div>

            {/* Experience Floating Badge */}
            <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-[#0B132B] text-white p-4 sm:p-5 rounded-sm shadow-2xl border-l-4 border-[#D90429] max-w-[210px]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-sm bg-[#D90429] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-black text-3xl text-white leading-none">
                    25+
                  </div>
                  <div className="text-[10px] text-gray-300 font-black uppercase tracking-widest mt-0.5">
                    Years Excellence
                  </div>
                </div>
              </div>
            </div>

            {/* Quality seal badge */}
            <div className="absolute -top-3 -left-3 hidden sm:flex items-center gap-2 bg-white px-3 py-1.5 rounded-sm shadow-md border border-gray-200">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-black text-[#0B132B] uppercase tracking-wider">
                MTA Licensed Workshop
              </span>
            </div>

          </div>

          {/* Right Column: Company Introduction & Content */}
          <div className="lg:col-span-6">
            
            <p className="text-[#D90429] font-black text-xs uppercase tracking-widest mb-1">
              About Apex Auto Care
            </p>

            <h2 className="text-3xl sm:text-5xl font-black text-[#0B132B] uppercase italic tracking-tight leading-[0.95]">
              TRUSTED AUSTRALIAN <br />
              <span className="text-[#D90429]">CAR SERVICING</span> SPECIALISTS
            </h2>

            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              At <strong className="text-[#0B132B]">Apex Auto Care</strong>, we believe keeping your vehicle reliable, safe, and warranty-compliant should be completely transparent and stress-free. Operating from our modern workshop facility, our certified mechanics service all European, Japanese, and domestic vehicle makes.
            </p>

            <p className="mt-2 text-xs sm:text-sm text-gray-500 leading-relaxed">
              Whether you require routine factory logbook servicing, urgent brake and clutch replacements, engine diagnostics, or 24/7 mobile breakdown roadside rescue, we combine dealership-grade scanning technology with honest Australian workmanship.
            </p>

            {/* Core Value Highlights */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2.5 p-3 rounded-sm bg-gray-50 border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black text-[#0B132B] uppercase tracking-wide">Experienced Mechanics</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Licensed, continuously trained certified technicians.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-sm bg-gray-50 border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black text-[#0B132B] uppercase tracking-wide">Reliable Repairs</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Strict quality standards using genuine or OEM parts.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-sm bg-gray-50 border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black text-[#0B132B] uppercase tracking-wide">Workshop & Roadside</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Full workshop facilities plus rapid 24/7 mobile vans.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-sm bg-gray-50 border border-gray-200">
                <CheckCircle2 className="w-4 h-4 text-[#D90429] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-black text-[#0B132B] uppercase tracking-wide">Customer First</h4>
                  <p className="text-[11px] text-gray-500 mt-0.5">Transparent upfront quotes with zero unapproved work.</p>
                </div>
              </div>
            </div>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/about"
                id="about-learn-more-btn"
                className="inline-flex items-center gap-2 bg-[#0B132B] hover:bg-[#D90429] text-white px-6 py-3 rounded-sm font-black text-xs uppercase tracking-widest transition-colors shadow-md"
              >
                <span>Read More About Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <Link
                to="/book"
                id="about-book-inspection-btn"
                className="inline-flex items-center gap-2 bg-[#D90429] hover:brightness-110 text-white px-6 py-3 rounded-sm font-black text-xs uppercase tracking-widest transition-all shadow-md"
              >
                <span>Book An Inspection</span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
