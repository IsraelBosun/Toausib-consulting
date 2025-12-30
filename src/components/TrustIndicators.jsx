'use client';

import { industries, testimonials } from '../../lib/data';

export default function TrustIndicators() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Industries Served */}
        <div className="mb-20">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-medium">
                Industries We Serve
              </span>
              <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
            </div>
            
            <h2 className="mb-6">
              Diverse Expertise Across Sectors
            </h2>
            
            <p className="text-lg text-warm-gray leading-relaxed">
              Our deep industry knowledge enables us to provide specialized insights 
              tailored to your sector's unique challenges and opportunities.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="group bg-gray-50 hover:bg-navy p-6 text-center transition-all duration-500 hover:shadow-lg cursor-default border border-gray-200 hover:border-navy"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">
                  {industry.icon}
                </div>
                <h4 className="text-sm font-semibold text-navy group-hover:text-white mb-2 transition-colors duration-300">
                  {industry.name}
                </h4>
                <p className="text-xs text-warm-gray group-hover:text-gray-300 transition-colors duration-300">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-block mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-medium">
                Client Testimonials
              </span>
              <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
            </div>
            
            <h2 className="mb-6">
              Trusted by Leading Organizations
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 p-8 hover:border-gold hover:shadow-xl transition-all duration-500 group"
              >
                {/* Quote Icon */}
                <div className="text-gold text-5xl mb-4 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                  "
                </div>

                {/* Quote */}
                <blockquote className="text-charcoal leading-relaxed mb-6 font-light text-lg">
                  {testimonial.quote}
                </blockquote>

                {/* Attribution */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-semibold text-navy mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-warm-gray">
                    {testimonial.industry}
                  </p>
                </div>

                {/* Star Rating */}
                <div className="flex mt-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory Compliance Notice */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-navy/5 border-l-4 border-gold p-8">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-gold mr-4 flex-shrink-0 mt-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <div>
                <h4 className="text-lg font-serif font-semibold text-navy mb-2">
                  Fully Compliant & Regulated
                </h4>
                <p className="text-warm-gray leading-relaxed">
                  TOAUSIB Consulting Limited operates in full compliance with Nigerian 
                  regulatory requirements. We are registered with the Institute of 
                  Chartered Accountants of Nigeria (ICAN) and the Chartered Institute 
                  of Taxation of Nigeria (CITN), ensuring the highest professional 
                  standards in all our engagements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}