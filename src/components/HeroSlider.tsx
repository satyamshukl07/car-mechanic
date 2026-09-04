import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Pause, Play, Shield, Wrench, Phone } from 'lucide-react';
import { HERO_SLIDES } from '../data/services';

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  }, []);

  // Automatic slide transition every 5 seconds unless paused
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section 
      id="hero-slider-section"
      className="relative w-full h-[520px] sm:h-[600px] lg:h-[680px] overflow-hidden bg-[#0B132B] select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Automotive Hero Carousel"
    >
      {/* Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentSlide;
        // Split title into words for bold typography styling
        const titleWords = slide.title.split(' ');
        const firstPart = titleWords.slice(0, Math.ceil(titleWords.length / 2)).join(' ');
        const secondPart = titleWords.slice(Math.ceil(titleWords.length / 2)).join(' ');

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            aria-hidden={!isActive}
          >
            {/* Background image */}
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover object-center transform transition-transform duration-7000 ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              loading={index === 0 ? 'eager' : 'lazy'}
            />

            {/* Dark image gradient overlay matching theme */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/85 to-transparent z-10" />

            {/* Slide Content */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-12 flex items-center">
              <div className="max-w-2xl text-white">
                
                {/* Badge */}
                {slide.badge && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-sm bg-[#D90429] text-white text-[11px] sm:text-xs font-black tracking-widest uppercase shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    <span>{slide.badge}</span>
                  </div>
                )}

                {/* Main Headline with Bold Typography Theme */}
                <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] italic uppercase tracking-tighter mb-4 drop-shadow-md">
                  {firstPart} <br />
                  <span className="text-[#D90429]">{secondPart}</span>
                </h1>

                {/* Subtitle with signature left accent border */}
                <p className="text-gray-300 text-base sm:text-xl mb-6 border-l-4 border-[#D90429] pl-4 font-medium leading-snug max-w-xl">
                  {slide.subtitle}
                </p>

                {/* Feature checklist */}
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-300 mb-8">
                  <div className="flex items-center gap-1.5 bg-[#0B132B]/90 px-3 py-1.5 rounded-sm border border-white/10 font-bold uppercase tracking-wider text-[11px]">
                    <Shield className="w-3.5 h-3.5 text-[#D90429]" />
                    <span>12-Month / 20,000km Warranty</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-[#0B132B]/90 px-3 py-1.5 rounded-sm border border-white/10 font-bold uppercase tracking-wider text-[11px]">
                    <Wrench className="w-3.5 h-3.5 text-[#D90429]" />
                    <span>Licensed Master Mechanics</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to={slide.ctaLink}
                    id={`hero-cta-knowmore-${slide.id}`}
                    className="bg-white text-[#0B132B] px-8 py-3.5 font-black text-sm uppercase tracking-widest hover:bg-[#D90429] hover:text-white transition-colors rounded-sm shadow-xl"
                  >
                    {slide.ctaText}
                  </Link>

                  {slide.secondaryCtaText && slide.secondaryCtaLink && (
                    slide.secondaryCtaLink.startsWith('tel:') ? (
                      <a
                        href={slide.secondaryCtaLink}
                        id={`hero-cta-secondary-${slide.id}`}
                        className="bg-[#D90429] text-white px-8 py-3.5 font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all rounded-sm shadow-xl flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        <span>{slide.secondaryCtaText}</span>
                      </a>
                    ) : (
                      <Link
                        to={slide.secondaryCtaLink}
                        id={`hero-cta-secondary-${slide.id}`}
                        className="bg-[#D90429] text-white px-8 py-3.5 font-black text-sm uppercase tracking-widest hover:brightness-110 transition-all rounded-sm shadow-xl"
                      >
                        {slide.secondaryCtaText}
                      </Link>
                    )
                  )}
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        id="hero-prev-btn"
        type="button"
        onClick={prevSlide}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-sm bg-[#0B132B]/80 hover:bg-[#D90429] text-white border border-white/10 transition-all duration-150 transform hover:scale-105 focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        id="hero-next-btn"
        type="button"
        onClick={nextSlide}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-sm bg-[#0B132B]/80 hover:bg-[#D90429] text-white border border-white/10 transition-all duration-150 transform hover:scale-105 focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators & Pause Control */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-[#0B132B]/80 backdrop-blur-sm px-4 py-2 rounded-sm border border-white/10">
        {HERO_SLIDES.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(idx)}
            className={`transition-all duration-200 rounded-none h-1.5 ${
              idx === currentSlide
                ? 'w-8 bg-[#D90429]'
                : 'w-3 bg-slate-600 hover:bg-slate-400'
            }`}
            aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
          />
        ))}

        <button
          type="button"
          onClick={() => setIsPaused(!isPaused)}
          className="ml-2 text-slate-400 hover:text-white p-1"
          aria-label={isPaused ? 'Play slide rotation' : 'Pause slide rotation'}
          title={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
        >
          {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        </button>
      </div>
    </section>
  );
};
