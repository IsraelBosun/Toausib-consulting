'use client';

import Link from 'next/link';
import { academyData } from '../../../lib/data';

export default function AcademyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-navy-dark to-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-medium">
                Professional Development
              </span>
              <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
            </div>

            <h1 className="text-white mb-6">
              TOAUSIB Academy
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
              {academyData.tagline}
            </p>

            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {academyData.description}
            </p>
          </div>
        </div>
      </section>

      {/* About the Academy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              {/* Left Content */}
              <div>
                <h2 className="mb-6">Our Purpose</h2>
                <p className="text-lg text-warm-gray leading-relaxed mb-6">
                  TOAUSIB Academy leverages the extensive professional experience of TOAUSIB 
                  Consulting Ltd in audit, taxation, forensic accounting, financial advisory, 
                  and business consulting.
                </p>
                <p className="text-warm-gray leading-relaxed mb-6">
                  Our courses are facilitated by seasoned practitioners and subject-matter experts 
                  with deep exposure to regulatory compliance, financial systems, investigations, 
                  and advisory engagements across multiple sectors.
                </p>
                <p className="text-warm-gray leading-relaxed">
                  Through TOAUSIB Academy, we demonstrate our commitment to knowledge transfer, 
                  professional excellence, and long-term impact by empowering individuals and 
                  institutions with the skills required to operate effectively in today's complex 
                  financial and regulatory environment.
                </p>
              </div>

              {/* Right - Key Stats */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-10 border-2 border-gray-200">
                <h3 className="text-2xl font-serif text-navy mb-8">Academy Highlights</h3>
                <div className="space-y-6">
                  {[
                    { number: "7", label: "Focus Areas", icon: "📚" },
                    { number: "4", label: "Programme Types", icon: "🎓" },
                    { number: "15+", label: "Years Experience", icon: "⭐" },
                    { number: "100%", label: "Practitioner-Led", icon: "👨‍🏫" }
                  ].map((stat, idx) => (
                    <div key={idx} className="flex items-center space-x-4 pb-6 border-b border-gray-200 last:border-0">
                      <div className="text-4xl">{stat.icon}</div>
                      <div className="flex-1">
                        <div className="text-3xl font-serif text-navy font-light">
                          {stat.number}
                        </div>
                        <div className="text-warm-gray">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Focus Areas */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-medium">
                What We Teach
              </span>
              <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
            </div>
            <h2 className="mb-4">Training Focus Areas</h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto">
              Comprehensive training programmes covering essential areas of finance, 
              accounting, and business management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {academyData.focusAreas.map((area, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 p-8 hover:border-gold hover:shadow-xl transition-all duration-500 group"
              >
                {/* Icon */}
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-warm-gray text-sm mb-4 leading-relaxed">
                  {area.description}
                </p>

                {/* Topics */}
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-xs text-navy font-semibold mb-2 uppercase tracking-wide">
                    Key Topics:
                  </p>
                  <ul className="space-y-1">
                    {area.topics.map((topic, tIdx) => (
                      <li key={tIdx} className="flex items-start text-sm text-charcoal">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programmes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-medium">
                Our Programmes
              </span>
              <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
            </div>
            <h2 className="mb-4">Training Programme Options</h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto">
              Flexible learning formats designed to meet diverse needs and schedules
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {academyData.trainingPrograms.map((program, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-8 hover:border-gold hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-serif text-navy group-hover:text-gold transition-colors duration-300 flex-1">
                    {program.type}
                  </h3>
                  <div className="text-3xl ml-4">
                    {idx === 0 && "📖"}
                    {idx === 1 && "🏢"}
                    {idx === 2 && "💡"}
                    {idx === 3 && "🎯"}
                  </div>
                </div>

                <p className="text-warm-gray leading-relaxed mb-6">
                  {program.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-xs text-warm-gray uppercase tracking-wide mb-1">
                      Duration
                    </p>
                    <p className="text-sm font-semibold text-navy">
                      {program.duration}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-warm-gray uppercase tracking-wide mb-1">
                      Format
                    </p>
                    <p className="text-sm font-semibold text-navy">
                      {program.format}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-medium">
                Our Methodology
              </span>
              <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
            </div>
            <h2 className="text-white mb-4">Our Approach to Learning</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              At TOAUSIB Academy, learning is practical, interactive, and outcome-driven. 
              We combine technical depth with real-life case studies, regulatory insights, 
              and professional best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {academyData.approach.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 hover:border-gold transition-all duration-500 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-serif text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-medium">
                Target Audience
              </span>
              <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
            </div>
            <h2 className="mb-4">Who Should Attend</h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto">
              Our programmes are designed for diverse professionals and organizations 
              seeking to build capacity and enhance performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {academyData.targetAudience.map((audience, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 p-8 text-center hover:border-gold hover:shadow-xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-navy flex items-center justify-center text-3xl mx-auto mb-6 group-hover:bg-gold transition-colors duration-500">
                  {idx === 0 && "🎓"}
                  {idx === 1 && "👔"}
                  {idx === 2 && "👥"}
                  {idx === 3 && "🏢"}
                </div>
                <h4 className="text-lg font-serif text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                  {audience.group}
                </h4>
                <p className="text-sm text-warm-gray leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Benefits List */}
              <div>
                <div className="mb-8">
                  <div className="inline-block mb-6">
                    <span className="text-gold text-sm tracking-widest uppercase font-medium">
                      Why Choose Us
                    </span>
                    <div className="h-0.5 w-12 bg-gold mt-2"></div>
                  </div>
                  <h2 className="mb-4">Training Benefits</h2>
                  <p className="text-lg text-warm-gray leading-relaxed">
                    Gain competitive advantage through practical skills and professional credentials
                  </p>
                </div>

                <div className="space-y-4">
                  {academyData.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-start p-4 bg-gray-50 hover:bg-white border-l-4 border-gold hover:shadow-md transition-all duration-300"
                    >
                      <svg
                        className="w-6 h-6 text-gold mr-4 flex-shrink-0 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-charcoal font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Mission Statement */}
              <div className="bg-navy text-white p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 text-gold opacity-10 text-9xl font-serif leading-none">
                  "
                </div>

                <div className="relative z-10">
                  <div className="text-gold text-sm tracking-widest uppercase mb-4 font-semibold">
                    Our Mission
                  </div>

                  <p className="text-xl md:text-2xl font-serif font-light leading-relaxed mb-6 text-gray-100">
                    {academyData.mission}
                  </p>

                  <div className="pt-6 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">
                      Join hundreds of professionals who have enhanced their careers through 
                      TOAUSIB Academy training programmes.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center text-gold hover:text-white transition-colors duration-300 font-medium"
                    >
                      Enroll Today
                      <svg
                        className="w-5 h-5 ml-2"
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-12 border-2 border-gray-200 text-center">
            <h2 className="mb-6">Ready to Advance Your Career?</h2>
            <p className="text-xl text-warm-gray mb-8 leading-relaxed">
              Whether you're a student, early-career professional, or corporate team, 
              TOAUSIB Academy has the right programme for you. Contact us to learn more 
              about upcoming training sessions and enrollment options.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Request Information
              </Link>
              <Link href="/services" className="btn-secondary text-base">
                View Consulting Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}