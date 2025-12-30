'use client';

import Link from 'next/link';
import { industries } from '../../../lib/data';

export default function IndustriesPage() {
  const detailedIndustries = [
    {
      ...industries[0],
      challenges: [
        "Cost control and optimization",
        "Inventory management",
        "Working capital efficiency",
        "Regulatory compliance"
      ],
      solutions: [
        "Cost accounting and analysis",
        "Process efficiency audits",
        "Tax incentive identification",
        "Financial controls implementation"
      ],
      caseStudy: "Helped a leading manufacturer reduce operational costs by 22% through comprehensive process optimization and cost control strategies."
    },
    {
      ...industries[1],
      challenges: [
        "Project financing",
        "Tax planning for developments",
        "Joint venture structuring",
        "Valuation and appraisal"
      ],
      solutions: [
        "Development finance advisory",
        "Tax-efficient structuring",
        "Due diligence services",
        "Financial feasibility studies"
      ],
      caseStudy: "Advised a property developer on optimal tax structure, resulting in significant savings while ensuring full regulatory compliance."
    },
    {
      ...industries[2],
      challenges: [
        "Complex regulatory environment",
        "International taxation",
        "Joint operating agreements",
        "Cost recovery mechanisms"
      ],
      solutions: [
        "Petroleum profit tax advisory",
        "Transfer pricing services",
        "Regulatory compliance support",
        "Production sharing contract reviews"
      ],
      caseStudy: "Provided comprehensive tax advisory to an energy company, optimizing their fiscal position across multiple jurisdictions."
    },
    {
      ...industries[3],
      challenges: [
        "Cash flow management",
        "Access to finance",
        "Growth planning",
        "Financial reporting"
      ],
      solutions: [
        "Business advisory services",
        "Financial statement preparation",
        "Growth strategy consulting",
        "Tax planning for SMEs"
      ],
      caseStudy: "Supported an SME in securing financing through improved financial reporting and strategic business planning."
    },
    {
      ...industries[4],
      challenges: [
        "Regulatory compliance",
        "Risk management",
        "Capital adequacy",
        "Internal controls"
      ],
      solutions: [
        "Regulatory compliance audits",
        "Internal audit services",
        "Risk assessment frameworks",
        "IFRS implementation"
      ],
      caseStudy: "Conducted comprehensive audit for a financial institution, enhancing controls and ensuring regulatory compliance."
    },
    {
      ...industries[5],
      challenges: [
        "Inventory controls",
        "Multiple location management",
        "Revenue recognition",
        "E-commerce taxation"
      ],
      solutions: [
        "Inventory audit services",
        "Point-of-sale controls",
        "VAT compliance",
        "Financial systems implementation"
      ],
      caseStudy: "Implemented robust inventory controls for a retail chain, reducing shrinkage and improving profitability."
    }
  ];

  const expertise = [
    {
      icon: "📊",
      title: "Industry Knowledge",
      description: "Deep understanding of sector-specific regulations, challenges, and opportunities"
    },
    {
      icon: "🎯",
      title: "Tailored Solutions",
      description: "Customized services designed to address your industry's unique requirements"
    },
    {
      icon: "🤝",
      title: "Proven Track Record",
      description: "Successful engagements across diverse industries throughout Nigeria"
    },
    {
      icon: "💡",
      title: "Best Practices",
      description: "Implementation of industry-leading standards and methodologies"
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
                Industries We Serve
              </span>
              <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
            </div>

            <h1 className="text-white mb-6">
              Specialized Expertise Across Sectors
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Our deep industry knowledge enables us to provide insights and solutions 
              tailored to the unique challenges and opportunities of your sector.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Expertise Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {expertise.map((item, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-gray-50 hover:bg-white border-2 border-gray-200 hover:border-gold hover:shadow-xl transition-all duration-500"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-lg font-serif text-navy mb-3">{item.title}</h4>
                <p className="text-warm-gray text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Detailed Industries */}
          <div className="space-y-16">
            {detailedIndustries.map((industry, idx) => (
              <div
                key={idx}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-6xl">{industry.icon}</div>
                    <div>
                      <h2 className="text-4xl font-serif text-navy">{industry.name}</h2>
                      <div className="h-1 w-16 bg-gold mt-2"></div>
                    </div>
                  </div>

                  <p className="text-lg text-warm-gray leading-relaxed mb-8">
                    {industry.description}
                  </p>

                  {/* Key Challenges */}
                  <div className="mb-8">
                    <h4 className="text-xl font-serif text-navy mb-4 flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      Key Challenges
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {industry.challenges.map((challenge, cIdx) => (
                        <div key={cIdx} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-navy mr-2 flex-shrink-0 mt-0.5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-charcoal text-sm">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Our Solutions */}
                  <div>
                    <h4 className="text-xl font-serif text-navy mb-4 flex items-center">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      Our Solutions
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {industry.solutions.map((solution, sIdx) => (
                        <div key={sIdx} className="flex items-start">
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
                          <span className="text-charcoal text-sm">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Case Study Side */}
                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="bg-gradient-to-br from-navy to-navy-dark text-white p-10 relative overflow-hidden">
                    {/* Decorative Element */}
                    <div className="absolute top-0 right-0 text-gold opacity-10 text-9xl font-serif leading-none">
                      "
                    </div>

                    <div className="relative z-10">
                      <div className="text-gold text-sm tracking-widest uppercase mb-4 font-semibold">
                        Case Study
                      </div>

                      <h4 className="text-2xl font-serif text-white mb-4">
                        Success Story
                      </h4>

                      <p className="text-gray-300 leading-relaxed mb-6">
                        {industry.caseStudy}
                      </p>

                      <div className="pt-6 border-t border-white/20">
                        <Link
                          href="/contact"
                          className="inline-flex items-center text-gold hover:text-white transition-colors duration-300 font-medium"
                        >
                          Discuss Your Project
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
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Services */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-medium">
                Comprehensive Support
              </span>
              <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
            </div>
            <h2 className="mb-4">Services Across All Industries</h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto">
              Regardless of your sector, we provide the full spectrum of professional services
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Tax Advisory",
                services: ["Tax Planning", "Compliance", "Dispute Resolution"]
              },
              {
                title: "Audit & Assurance",
                services: ["Financial Audits", "Internal Audits", "Compliance Reviews"]
              },
              {
                title: "Business Advisory",
                services: ["Strategy", "Risk Management", "Performance"]
              }
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-white p-8 border-2 border-gray-200 hover:border-gold hover:shadow-xl transition-all duration-500"
              >
                <h4 className="text-xl font-serif text-navy mb-4">{category.title}</h4>
                <ul className="space-y-3">
                  {category.services.map((service, sIdx) => (
                    <li key={sIdx} className="flex items-center text-warm-gray">
                      <span className="w-2 h-2 bg-gold rounded-full mr-3"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">Your Industry, Our Expertise</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Whether you're in manufacturing, real estate, oil & gas, or any other sector, 
              we have the specialized knowledge to help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Schedule Consultation
              </Link>
              <Link
                href="/about"
                className="btn-secondary text-base inline-flex items-center"
                style={{borderColor: 'white', color: 'white'}}
              >
                Learn About Our Firm
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}