'use client';

import { valuePropositions } from '../../lib/data';

export default function ValueProposition() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-navy/5 rounded-full blur-3xl"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-gold text-sm tracking-widest uppercase font-medium">
              Why Choose Us
            </span>
            <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
          </div>
          
          <h2 className="mb-6">
            What Sets TOAUSIB Apart
          </h2>
          
          <p className="text-lg text-warm-gray leading-relaxed">
            We don't just provide services—we build lasting partnerships founded 
            on trust, expertise, and an unwavering commitment to your success.
          </p>
        </div>

        {/* Value Propositions Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto mb-16">
          {valuePropositions.map((value, idx) => (
            <div
              key={idx}
              className="group relative"
            >
              {/* Card */}
              <div className="bg-white border-2 border-gray-200 p-8 h-full hover:border-gold transition-all duration-500 hover:shadow-xl">
                {/* Icon */}
                <div className="w-20 h-20 bg-navy/5 group-hover:bg-navy flex items-center justify-center mb-6 transition-all duration-500">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-500">
                    {value.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-warm-gray leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-gold/0 group-hover:border-r-gold/20 transition-all duration-500"></div>
              </div>

              {/* Number Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-navy text-white flex items-center justify-center font-serif text-xl font-semibold group-hover:bg-gold transition-colors duration-500">
                {idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-navy text-white p-10 md:p-12 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
              }}></div>
            </div>

            <div className="relative z-10 text-center">
              <div className="text-gold text-5xl mb-6">
                "
              </div>
              <blockquote className="text-xl md:text-2xl font-serif font-light leading-relaxed mb-6">
                Our commitment to integrity, accuracy, and client success has made 
                us the trusted advisor for Nigeria's leading businesses.
              </blockquote>
              <div className="h-1 w-16 bg-gold mx-auto mb-6"></div>
              <p className="text-gray-400 text-sm tracking-wider uppercase">
                Founded on Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}