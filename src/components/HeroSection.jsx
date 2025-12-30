'use client';

import Link from 'next/link';
import { companyInfo } from '../../lib/data';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-navy rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gold rounded-full blur-3xl"></div>
      </div>

      {/* Geometric Accent Lines */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-navy to-transparent opacity-50"></div>

      <div className="container-custom relative z-10 py-32 lg:py-40">
        <div className="max-w-5xl mx-auto text-center">
          {/* Certification Badge */}
          <div className="inline-flex items-center space-x-3 mb-8 animate-fade-in">
            {companyInfo.credentials.map((cred, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-white border border-gold/30 shadow-sm"
              >
                <span className="text-xs font-semibold text-gold tracking-widest">
                  {cred.title} CERTIFIED
                </span>
              </div>
            ))}
          </div>

          {/* Main Headline */}
          <h1 className="mb-8 animate-slide-up text-balance">
            <span className="block text-navy-dark">
              Excellence in
            </span>
            <span className="block text-navy mt-2">
              Professional Advisory
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-charcoal/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-slide-up animation-delay-200">
            Premier audit, tax advisory, and management consulting services 
            with unwavering commitment to <span className="text-gold font-medium">integrity</span> and <span className="text-gold font-medium">precision</span>.
          </p>

          {/* Value Statement */}
          <div className="mb-12 animate-slide-up animation-delay-400">
            <p className="text-base md:text-lg text-warm-gray max-w-2xl mx-auto leading-relaxed">
              Serving Nigeria's leading businesses with world-class financial expertise 
              and strategic guidance since {companyInfo.yearEstablished}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-slide-up animation-delay-600">
            <Link href="/contact" className="btn-primary text-base w-full sm:w-auto">
              Schedule Consultation
            </Link>
            <Link href="/services" className="btn-secondary text-base w-full sm:w-auto">
              Explore Services
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gray-200 animate-fade-in animation-delay-800">
            {companyInfo.stats.map((stat, idx) => (
              <div key={idx} className="text-center group cursor-default">
                <div className="text-4xl md:text-5xl font-serif font-light text-navy mb-2 group-hover:text-gold transition-colors duration-500">
                  {stat.number}
                </div>
                <div className="text-sm text-warm-gray tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-navy opacity-50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}