'use client';

import { companyInfo } from '../../lib/data';

export default function CredentialsStrip() {
  return (
    <section className="bg-navy text-white section-padding relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.03) 35px, rgba(255,255,255,.03) 70px)`
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Company Introduction */}
          <div>
            <div className="inline-block mb-6">
              <span className="text-gold text-sm tracking-widest uppercase font-medium">
                About Our Firm
              </span>
              <div className="h-0.5 w-12 bg-gold mt-2"></div>
            </div>
            
            <h2 className="text-white mb-6">
              Building Trust Through Excellence
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                 At {companyInfo.name} we understand that financial integrity is the foundation of economic development and institutional credibility.
                  Our team of chartered professionals delivers:
                  Independent audit and assurance services
                  Strategic tax advisory and regulatory compliance
                  Forensic accounting and financial investigation
                  Risk management and internal control systems design
                  Business advisory and financial restructuring
                  With professional operations dating back to 2014, our 
                  firm brings over a decade of hands-on experience navigating Nigeria’s regulatory and business environment
              </p>
              
              <p>
                Since commencing operations in {companyInfo.yearEstablished} we combine deep industry knowledge with technical 
                expertise to deliver solutions that drive sustainable growth and 
                regulatory compliance.
              </p>
              
              <p>
                Our team of highly qualified professionals brings unparalleled insights 
                into the Nigerian business landscape, ensuring our clients receive 
                advice that is both strategic and practical.
              </p>
            </div>
          </div>

          {/* Right: Credentials & Certifications */}
          <div>
            <h3 className="text-white text-3xl font-serif mb-8">
              Professional Certifications
            </h3>

            <div className="space-y-6">
              {companyInfo.credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 hover:bg-white/10 hover:border-gold/50 transition-all duration-500 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl font-serif font-bold text-gold group-hover:scale-110 transition-transform duration-300">
                      {cred.title}
                    </div>
                    <svg
                      className="w-6 h-6 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  
                  <div className="text-white font-medium text-lg mb-2">
                    {cred.full}
                  </div>
                  
                  <div className="text-gray-400 text-sm">
                    {cred.body}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Affiliations */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-4 tracking-wide">
                MEMBER OF PROFESSIONAL BODIES
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gold/20 text-gold text-xs font-semibold tracking-wider border border-gold/30">
                  ICAN
                </span>
                <span className="px-4 py-2 bg-gold/20 text-gold text-xs font-semibold tracking-wider border border-gold/30">
                  CITN
                </span>
                <span className="px-4 py-2 bg-gold/20 text-gold text-xs font-semibold tracking-wider border border-gold/30">
                  ANAN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}