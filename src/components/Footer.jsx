import Link from 'next/link';
import { companyInfo, navigationLinks, services } from '../../lib/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-serif font-semibold text-white mb-2">
                {companyInfo.name.split(' ')[0]}
              </h3>
              <p className="text-sm text-gray-400 tracking-widest uppercase">
                Consulting Limited
              </p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {companyInfo.tagline}
            </p>
            <div className="flex space-x-2">
              {companyInfo.credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="px-3 py-1 bg-gold/20 text-gold text-xs font-semibold tracking-wide border border-gold/30"
                >
                  {cred.title}
                </div>
              ))}
            </div>
            {/* Social Media Links */}
            <div className="mt-8">
              <p className="text-sm text-gray-400 mb-3 tracking-wide">
                Connect With Us
              </p>
              <div className="flex space-x-4">
                <a
                  href={companyInfo.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href={companyInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>



          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-white">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-white">
              Contact Us
            </h4>

            <ul className="space-y-5 text-sm text-gray-300">

              {/* Addresses */}
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <div className="space-y-2">
                  {companyInfo.addresses.map((address, index) => (
                    <p key={index}>{address}</p>
                  ))}
                </div>
              </li>

              {/* Email */}
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-gold flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>

                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-gold transition-colors duration-300"
                >
                  {companyInfo.email}
                </a>
              </li>

              {/* Phone Numbers */}
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-1 text-gold flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>

                <div className="space-y-2">
                  {companyInfo.phones.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="block hover:text-gold transition-colors duration-300"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      {/* Bottom Bar */}
      <div className="border-t border-navy">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built by{' '}
              <a
                href="https://bluehydradev.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline hover:text-gold/90 transition"
              >
                Bluehydra
              </a>
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}