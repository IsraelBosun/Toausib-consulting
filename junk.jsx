'use client';

import { companyInfo } from '../../../lib/data';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    }, 1500);
  };

  const services = [
    "Tax Advisory & Planning",
    "Audit & Assurance",
    "Fraud Investigation",
    "Financial Restructuring",
    "Management Consulting",
    "Accounting Services",
    "Other"
  ];

  const contactMethods = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Our Office",
      detail: companyInfo.addresses,
      action: "Get Directions"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      detail: [companyInfo.email],
      action: "Send Email"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      detail: [companyInfo.phones],
      action: "Call Now"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 1:00 PM" },
    { day: "Sunday", hours: "Closed" }
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
                Get In Touch
              </span>
              <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
            </div>

            <h1 className="text-white mb-6">
              Let's Start a Conversation
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Whether you need immediate assistance or want to discuss a future project, 
              we're here to help. Reach out today and let's explore how we can support 
              your business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
<section className="py-16 bg-white">
  <div className="container-custom">
    <div className="grid md:grid-cols-3 gap-8">
      {contactMethods.map((method, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-8 text-center hover:border-gold hover:shadow-xl transition-all duration-500 group"
        >
          <div className="w-16 h-16 bg-navy text-white flex items-center justify-center mx-auto mb-6 group-hover:bg-gold transition-colors duration-500">
            {method.icon}
          </div>

          <h3 className="text-xl font-serif text-navy mb-3 group-hover:text-gold transition-colors duration-300">
            {method.title}
          </h3>

          <div className="text-warm-gray mb-4 space-y-2">
            {method.detail.map((item, i) => {
              if (method.type === "phone") {
                return (
                  <a key={i} href={`tel:${item}`} className="block hover:text-gold">
                    {item}
                  </a>
                );
              }

              if (method.type === "email") {
                return (
                  <a key={i} href={`mailto:${item}`} className="block hover:text-gold">
                    {item}
                  </a>
                );
              }

              return <p key={i}>{item}</p>;
            })}
          </div>

          <button className="text-navy hover:text-gold font-medium text-sm transition-colors duration-300">
            {method.action} →
          </button>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Main Contact Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white p-10 border-2 border-gray-200 shadow-lg">
                <h2 className="text-3xl font-serif text-navy mb-2">Send Us a Message</h2>
                <p className="text-warm-gray mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {formStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-500 text-green-800">
                    <p className="font-medium">Thank you for contacting us!</p>
                    <p className="text-sm">We'll respond to your inquiry shortly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors duration-300"
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors duration-300"
                      placeholder="Your Company"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-navy mb-2">
                      Service of Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, idx) => (
                        <option key={idx} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-gray-200 focus:border-gold focus:outline-none transition-colors duration-300"
                      placeholder="Tell us about your needs..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="btn-primary w-full text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Office Hours */}
              <div className="bg-navy text-white p-8">
                <h3 className="text-2xl font-serif mb-6">Office Hours</h3>
                <div className="space-y-4">
                  {officeHours.map((schedule, idx) => (
                    <div key={idx} className="flex justify-between items-center pb-4 border-b border-white/20 last:border-0">
                      <span className="text-gray-300">{schedule.day}</span>
                      <span className="text-gold font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-white p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-serif text-navy mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-navy mb-1">Address</p>
                      <p className="text-warm-gray text-sm">
                        {companyInfo.addresses.map((a, i) => (
                          <p key={i} className="text-sm mb-2">{a}</p>
                        ))}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-navy mb-1">Phone</p>
                      <p className="text-warm-gray text-sm">
              {companyInfo.phones.map((p, i) => (
                <a key={i} href={`tel:${p}`} className="block text-sm hover:text-gold">{p}</a>
              ))}                        
              </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-navy mb-1">Email</p>
                      <p className="text-warm-gray text-sm">{companyInfo.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications Reminder */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 border-l-4 border-gold">
                <h4 className="text-lg font-serif text-navy mb-3">Certified Professionals</h4>
                <p className="text-warm-gray text-sm mb-4">
                  Our team holds recognized professional certifications including ACA and ACTI.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-semibold tracking-wider border border-gold/30">
                    ACA
                  </span>
                  <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-semibold tracking-wider border border-gold/30">
                    ACTI
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Bottom CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <h2 className="text-white mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            For urgent matters, please call us directly during office hours.
          </p>
          <a
            href={`tel:${companyInfo.phones[0]}`}
            className="inline-flex items-center px-8 py-4 bg-gold text-white font-medium tracking-wide hover:bg-white hover:text-navy transition-all duration-300"
          >
            <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {companyInfo.phones[0]}
          </a>
        </div>
      </section>
    </div>
  );
}