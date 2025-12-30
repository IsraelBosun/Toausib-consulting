'use client';

import Link from 'next/link';
import { services } from '../../lib/data';

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-gold text-sm tracking-widest uppercase font-medium">
              What We Do
            </span>
            <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
          </div>
          
          <h2 className="mb-6">
            Comprehensive Professional Services
          </h2>
          
          <p className="text-lg text-warm-gray leading-relaxed">
            From strategic tax planning to forensic investigations, our full-service 
            approach ensures your business receives expert guidance at every stage.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className="group bg-white border border-gray-200 p-8 hover:border-gold hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{
                animationDelay: `${idx * 100}ms`
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-navy/5 group-hover:bg-navy flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110">
                <span className="text-3xl group-hover:scale-125 transition-transform duration-500">
                  {service.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-serif text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-warm-gray leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start text-sm text-charcoal">
                    <svg
                      className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Link */}
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-medium text-navy group-hover:text-gold transition-colors duration-300"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-warm-gray mb-6 text-lg">
            Need a customized solution? Let's discuss your unique requirements.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}