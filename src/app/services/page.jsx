'use client';

import Link from 'next/link';
import { services } from '../../../lib/data';
import { useState } from 'react';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  const detailedServices = [
    {
      ...services[0],
      fullDescription: "Our tax advisory services are designed to help businesses and individuals navigate Nigeria's complex tax landscape with confidence. We provide strategic tax planning that minimizes liabilities while ensuring full compliance with all regulatory requirements.",
      deliverables: [
        "Comprehensive tax planning strategies",
        "Tax compliance and filing services",
        "Tax audit representation",
        "Transfer pricing documentation",
        "Value Added Tax (VAT) advisory",
        "Personal income tax planning"
      ],
      benefits: [
        "Optimized tax position",
        "Reduced tax liabilities",
        "Regulatory compliance",
        "Risk mitigation"
      ]
    },
    {
      ...services[1],
      fullDescription: "Our audit and assurance services provide stakeholders with confidence in the accuracy and reliability of financial information. We conduct thorough examinations of financial statements and internal controls to ensure compliance with applicable standards.",
      deliverables: [
        "Statutory financial audits",
        "Internal audit services",
        "Compliance audits",
        "Financial statement reviews",
        "Due diligence investigations",
        "Risk assessment and control evaluation"
      ],
      benefits: [
        "Enhanced credibility",
        "Improved financial controls",
        "Regulatory compliance",
        "Stakeholder confidence"
      ]
    },
    {
      ...services[2],
      fullDescription: "Our forensic accounting and fraud investigation services help organizations detect, investigate, and prevent financial irregularities. We combine accounting expertise with investigative skills to uncover fraud and provide litigation support.",
      deliverables: [
        "Fraud detection and prevention",
        "Forensic investigations",
        "Asset tracing and recovery",
        "Litigation support services",
        "Expert witness testimony",
        "Internal fraud risk assessments"
      ],
      benefits: [
        "Fraud prevention",
        "Asset recovery",
        "Legal support",
        "Enhanced controls"
      ]
    },
    {
      ...services[3],
      fullDescription: "Our financial restructuring services help businesses navigate financial challenges and position themselves for sustainable growth. We provide expert guidance on debt restructuring, business turnaround, and insolvency matters.",
      deliverables: [
        "Business restructuring strategies",
        "Debt restructuring and refinancing",
        "Turnaround management",
        "Insolvency advisory",
        "Creditor negotiations",
        "Viability assessments"
      ],
      benefits: [
        "Business recovery",
        "Improved cash flow",
        "Creditor confidence",
        "Sustainable operations"
      ]
    },
    {
      ...services[4],
      fullDescription: "Our management consulting services help organizations enhance operational efficiency, improve performance, and achieve strategic objectives. We provide practical, actionable advice that drives real business results.",
      deliverables: [
        "Strategic business planning",
        "Process optimization",
        "Risk management frameworks",
        "Performance improvement programs",
        "Change management support",
        "Business analytics and insights"
      ],
      benefits: [
        "Operational efficiency",
        "Strategic clarity",
        "Risk management",
        "Competitive advantage"
      ]
    },
    {
      ...services[5],
      fullDescription: "Our comprehensive accounting services ensure accurate financial records and timely reporting. From bookkeeping to financial analysis, we provide the support your business needs to maintain financial health and make informed decisions.",
      deliverables: [
        "Bookkeeping and accounting",
        "Financial statement preparation",
        "Payroll management",
        "Management accounts",
        "Budgeting and forecasting",
        "Financial analysis and reporting"
      ],
      benefits: [
        "Accurate records",
        "Timely reporting",
        "Better decisions",
        "Cost efficiency"
      ]
    }
  ];

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
                Our Services
              </span>
              <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
            </div>

            <h1 className="text-white mb-6">
              Comprehensive Professional Services
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              From strategic tax planning to forensic investigations, we provide the full 
              spectrum of professional services your business needs to thrive in Nigeria's 
              dynamic business environment.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid with Details */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {/* Service Cards - Left Side */}
            <div className="lg:col-span-1 space-y-4">
              {detailedServices.map((service, idx) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(idx)}
                  className={`w-full text-left p-6 border-2 transition-all duration-300 ${
                    activeService === idx
                      ? 'border-gold bg-gold/5 shadow-lg'
                      : 'border-gray-200 hover:border-gold/50 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`text-4xl transition-transform duration-300 ${
                      activeService === idx ? 'scale-110' : ''
                    }`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-serif transition-colors duration-300 ${
                        activeService === idx ? 'text-gold' : 'text-navy'
                      }`}>
                        {service.title}
                      </h3>
                      <div className={`text-sm mt-1 ${
                        activeService === idx ? 'text-navy' : 'text-warm-gray'
                      }`}>
                        View Details →
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Service Details - Right Side */}
            <div className="lg:col-span-2">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-10">
                  {/* Icon and Title */}
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="w-20 h-20 bg-navy flex items-center justify-center text-4xl">
                      {detailedServices[activeService].icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-serif text-navy mb-2">
                        {detailedServices[activeService].title}
                      </h2>
                      <div className="h-1 w-16 bg-gold"></div>
                    </div>
                  </div>

                  {/* Full Description */}
                  <p className="text-lg text-warm-gray leading-relaxed mb-8">
                    {detailedServices[activeService].fullDescription}
                  </p>

                  {/* What We Deliver */}
                  <div className="mb-8">
                    <h4 className="text-xl font-serif text-navy mb-4">
                      What We Deliver
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {detailedServices[activeService].deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-charcoal">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="bg-white p-6 border-l-4 border-gold">
                    <h4 className="text-lg font-serif text-navy mb-4">
                      Key Benefits
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {detailedServices[activeService].benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="px-4 py-2 bg-gold/10 text-navy text-sm font-semibold border border-gold/30"
                        >
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-8">
                    <Link href="/contact" className="btn-primary">
                      Request This Service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-medium">
                Our Approach
              </span>
              <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
            </div>
            <h2 className="mb-4">How We Work</h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto">
              Our proven methodology ensures exceptional results for every engagement
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We begin by understanding your business, challenges, and objectives through detailed consultation."
              },
              {
                step: "02",
                title: "Analysis",
                description: "Our team conducts thorough analysis, leveraging expertise and technology to identify opportunities."
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute solutions with precision, maintaining clear communication throughout the process."
              },
              {
                step: "04",
                title: "Support",
                description: "We provide ongoing support and guidance to ensure sustained success and continuous improvement."
              }
            ].map((phase, idx) => (
              <div
                key={idx}
                className="relative bg-white p-8 border-2 border-gray-200 hover:border-gold hover:shadow-xl transition-all duration-500 group"
              >
                {/* Step Number */}
                <div className="absolute -top-6 left-8 text-6xl font-serif font-bold text-gold/20 group-hover:text-gold/40 transition-colors duration-300">
                  {phase.step}
                </div>
                
                <div className="relative pt-8">
                  <h4 className="text-xl font-serif text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                    {phase.title}
                  </h4>
                  <p className="text-warm-gray leading-relaxed">
                    {phase.description}
                  </p>
                </div>

                {/* Arrow */}
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gold">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise Highlight */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">Industry-Specific Expertise</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Our services are tailored to meet the unique needs of your industry. 
              We bring specialized knowledge and experience across multiple sectors.
            </p>
            <Link href="/industries" className="btn-secondary text-base inline-flex items-center" style={{borderColor: 'white', color: 'white'}}>
              Explore Industries We Serve
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-gray-50 to-white p-12 border-2 border-gray-200">
            <h2 className="mb-6">Let's Discuss Your Needs</h2>
            <p className="text-xl text-warm-gray mb-8 leading-relaxed">
              Every business is unique. Schedule a consultation to discuss how our 
              services can be tailored to your specific requirements.
            </p>
            <Link href="/contact" className="btn-primary text-base">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}