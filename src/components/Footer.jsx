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
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-0.5 text-gold flex-shrink-0"
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
                <span>{companyInfo.address}</span>
              </li>
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-gold transition-colors duration-300"
                >
                  {companyInfo.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-gold transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-gold transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}