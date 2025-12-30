'use client';

import Link from 'next/link';
import { companyInfo } from '../../../lib/data';

export default function AboutPage() {
  const leadership = [
    {
      name: "Mr. Fatoyinbo Funsho",
      title: "Principal Partner",
      credentials: "ACA, ACTI, FIMC, CMC",
      bio: "With over 25 years of experience in audit and taxation, Mr. Funsho leads our firm with a vision for excellence and innovation in professional services.",
      image: "👨‍💼"
    },
    {
      name: "Mrs. Favour Grace",
      title: "Partner, Tax Advisory",
      credentials: "ACA, ACTI",
      bio: "Specializes in corporate tax planning and international taxation, bringing 18 years of expertise in helping businesses optimize their tax positions.",
      image: "👩‍💼"
    },
    {
      name: "Mr. Chukwuma Emeka",
      title: "Partner, Audit & Assurance",
      credentials: "ACA, CIA",
      bio: "Leads our audit practice with meticulous attention to detail and deep knowledge of Nigerian regulatory frameworks spanning 20 years.",
      image: "👨‍💼"
    },
    {
      name: "Mrs. Umaru Aishat",
      title: "Partner, Forensic Accounting",
      credentials: "ACA, CFE, ACFE",
      bio: "Renowned forensic accountant with 15 years of experience in fraud investigation and litigation support across multiple industries.",
      image: "👩‍💼"
    }
  ];

  const timeline = [
    {
      year: "2010",
      title: "Foundation",
      description: "TOAUSIB Consulting Limited was established in Aba with a vision to provide world-class professional services."
    },
    {
      year: "2013",
      title: "Expansion",
      description: "Expanded service offerings to include forensic accounting and management consulting."
    },
    {
      year: "2016",
      title: "Recognition",
      description: "Received industry recognition for excellence in tax advisory and audit services."
    },
    {
      year: "2020",
      title: "Growth",
      description: "Achieved milestone of serving 500+ clients across diverse industries in Nigeria."
    },
    {
      year: "2024",
      title: "Innovation",
      description: "Launched digital advisory services and expanded team to 50+ professionals."
    }
  ];

  const values = [
    {
      icon: "⚖️",
      title: "Integrity",
      description: "We uphold the highest ethical standards in every engagement, ensuring transparency and honesty guide all our actions."
    },
    {
      icon: "🎯",
      title: "Excellence",
      description: "We pursue excellence relentlessly, continuously improving our skills and knowledge to deliver superior results."
    },
    {
      icon: "🤝",
      title: "Client Focus",
      description: "Our clients' success is our success. We listen, understand, and tailor our services to meet their unique needs."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We embrace innovative solutions and modern technology to provide efficient, forward-thinking advisory services."
    },
    {
      icon: "🌟",
      title: "Professionalism",
      description: "We maintain the highest professional standards, adhering to regulatory requirements and industry best practices."
    },
    {
      icon: "🔒",
      title: "Confidentiality",
      description: "We treat all client information with utmost confidentiality and respect, building trust through discretion."
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
          <div className="max-w-4xl">
            <div className="inline-block mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-medium">
                About Us
              </span>
              <div className="h-0.5 w-12 bg-gold mt-2"></div>
            </div>

            <h1 className="text-white mb-6">
              Building Trust Through Professional Excellence
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Since {companyInfo.yearEstablished}, TOAUSIB Consulting Limited has been at the forefront 
              of professional services in Nigeria, delivering exceptional audit, tax, and advisory 
              solutions that drive business success.
            </p>

            <div className="flex flex-wrap gap-4">
              {companyInfo.stats.slice(0, 3).map((stat, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm px-6 py-4 border border-white/20">
                  <div className="text-3xl font-serif font-light text-gold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            {/* Mission */}
            <div className="bg-gray-50 p-10 border-l-4 border-gold">
              <div className="text-gold text-4xl mb-4">🎯</div>
              <h3 className="text-3xl font-serif text-navy mb-4">Our Mission</h3>
              <p className="text-warm-gray leading-relaxed text-lg">
                To provide world-class professional services that empower our clients to 
                achieve sustainable growth, maintain regulatory compliance, and make informed 
                business decisions with confidence.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-50 p-10 border-l-4 border-navy">
              <div className="text-navy text-4xl mb-4">🔭</div>
              <h3 className="text-3xl font-serif text-navy mb-4">Our Vision</h3>
              <p className="text-warm-gray leading-relaxed text-lg">
                To be Nigeria's most trusted and innovative professional services firm, 
                recognized for our technical expertise, integrity, and unwavering commitment 
                to client success across all sectors.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto">
              These principles guide our work and define who we are as a firm
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-gray-200 p-8 hover:border-gold hover:shadow-xl transition-all duration-500 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-serif text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-warm-gray leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-medium">
                Our Journey
              </span>
              <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
            </div>
            <h2 className="mb-4">Milestones of Excellence</h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto">
              A timeline of growth, achievement, and unwavering commitment to our clients
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-8 pb-12 border-l-2 border-gold last:pb-0">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-0 w-4 h-4 bg-gold rounded-full transform -translate-x-[9px]"></div>
                
                <div className="bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-serif font-bold text-gold mb-2">
                    {item.year}
                  </div>
                  <h4 className="text-xl font-serif text-navy mb-2">
                    {item.title}
                  </h4>
                  <p className="text-warm-gray">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-medium">
                Leadership Team
              </span>
              <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
            </div>
            <h2 className="mb-4">Meet Our Partners</h2>
            <p className="text-lg text-warm-gray max-w-3xl mx-auto">
              Experienced professionals leading with expertise, integrity, and vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {leadership.map((leader, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-8 hover:border-gold hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-start space-x-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-navy flex items-center justify-center text-5xl group-hover:bg-gold transition-colors duration-500">
                      {leader.image}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif text-navy mb-1 group-hover:text-gold transition-colors duration-300">
                      {leader.name}
                    </h3>
                    <p className="text-gold font-semibold mb-2">
                      {leader.title}
                    </p>
                    <p className="text-sm text-warm-gray mb-4">
                      {leader.credentials}
                    </p>
                    <p className="text-warm-gray leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-white mb-4">Professional Affiliations</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our memberships ensure we maintain the highest standards of professional practice
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { name: "ICAN", full: "Institute of Chartered Accountants of Nigeria" },
              { name: "CITN", full: "Chartered Institute of Taxation of Nigeria" },
              { name: "ANAN", full: "Association of National Accountants of Nigeria" },
              { name: "ACFE", full: "Association of Certified Fraud Examiners" }
            ].map((org, idx) => (
              <div
                key={idx}
                className="text-center p-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold transition-all duration-300"
              >
                <div className="text-4xl font-serif font-bold text-gold mb-3">
                  {org.name}
                </div>
                <p className="text-sm text-gray-400">
                  {org.full}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-warm-gray mb-8 leading-relaxed">
              Partner with a firm that combines deep expertise with unwavering commitment 
              to your success. Let's discuss how we can help your business thrive.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-primary text-base">
                Schedule Consultation
              </Link>
              <Link href="/services" className="btn-secondary text-base">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}