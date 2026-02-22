'use client';

import Link from 'next/link';
import { companyInfo } from '../../../lib/data';

export default function AboutPage() {
  const leadership = [
    {
      name: "Mr. Fatoyinbo Victor Olufunso",
      title: "Principal Partner",
      credentials: "FCA, FCTI, FIMC, CMC",
      bio: "Founder and Managing Partner of TOAUSIB Consulting Ltd, providing audit, tax, forensic, and financial advisory services. He has over a decade of experience leading audit, tax, and forensic engagements across public and private sectors, and currently serves as Partner and Head of Tax and Investigation at Martina Adebola & Co., Chartered Accountants, with a strong focus on corporate governance, transparency, capacity building, and sustainable growth.",
      image: "/images/victor.png"
    },
    {
      name: "Mr. Robert Emmanuel",
      title: "Partner, Financial & Business Advisory",
      credentials: "ACA, ACTI",
      bio: "Partner, Financial and Business Advisory at TOAUSIB Consulting Ltd, and a results-driven financial modeling and advisory professional with strong expertise in financial analysis, strategic planning, and data-driven decision support. He supports organisations in evaluating opportunities, managing risk, and optimising resources through robust financial models and evidence-based insights, enabling informed decision-making and sustainable growth.",
      image: "/images/robert.jpg"
    },
    {
      name: "Mr. Goshen Olatunbosun",
      title: "Manager, Digital Strategy, Client Engagement & Practice Development",
      credentials: "ACA",
      bio: "Manager, Digital Strategy, Client Engagement & Practice Development at TOAUSIB Consulting Ltd, and a Chartered Accountant and digital strategy professional with a strong blend of expertise in accounting, finance, and digital marketing. He supports professional services organisations in strengthening market visibility, enhancing client engagement, and communicating value through data-driven digital strategies and structured financial insights. With hands-on experience in financial reporting, account reconciliation, performance analysis, and Nigerian tax compliance, he combines technical rigor with strategic communication to drive brand credibility, regulatory compliance, and sustainable business growth.",
      image: "/images/goshen.jpeg"
    },
    {
      name: "Ms. Anya Vanessa",
      title: "Senior Manager / Lead Analyst, Financial Analytics & AI Advisory",
      credentials: "",
      bio: "Senior Manager / Lead Analyst in Financial Analytics & AI Advisory at TOAUSIB Consulting Ltd, and a Chartered Accountant with a strong interest in the application of artificial intelligence, data analytics, and emerging technologies in financial decision-making and business strategy. She has a solid foundation in accounting and finance, with expertise in financial analysis, performance evaluation, and data-driven insight generation using advanced Excel-based analytics and financial tools. She supports advisory engagements by translating complex financial and operational data into actionable insights that enhance strategic planning, risk management, governance, and organizational performance. She also contributes to TOAUSIB’s analytics and innovation initiatives, including AI-enabled advisory solutions, financial analytics frameworks, and research on fintech and digital transformation to support sustainable growth across sectors.",
      image: "/images/vanessa.jpeg"
    },
      {
      name: "Ms. Grace  Collins",
      title: "Executive Director / Senior Partner – Compliance & Regulatory Advisory",
      credentials: "",
      bio: "Grace Collins is the Executive Director and Senior Partner in charge of Compliance and Regulatory Services at TOAUSIB Consulting Ltd. She holds a degree in Accounting and has over 12 years’ professional experience in accounting, auditing, regulatory compliance, and statutory reporting. Her core competencies include regulatory compliance reviews, compliance audits, internal control assessment, statutory filings, and financial reporting support across diverse sectors. She provides technical leadership in the design and implementation of compliance frameworks aligned with applicable laws, professional standards, and sound corporate governance practices. Grace plays a critical role in ensuring clients maintain regulatory compliance, manage compliance risk effectively, and uphold strong financial governance.",
      image: "https://placehold.co/400x400?text=Grace+Collins"
    }
  ];

  const timeline = [
    {
      year: "2014",
      title: "Foundation",
      description: "TOAUSIB Consulting Ltd was established to provide objective and value-driven professional services."
    },
    {
      year: "2013",
      title: "Service Expansion",
      description: "Expanded service offerings to include forensic accounting and management consulting."
    },
    {
      year: "2016",
      title: "Industry Recognition",
      description: "Gained recognition for excellence in audit, tax, and advisory services."
    },
    {
      year: "2020",
      title: "Growth & Reach",
      description: "Expanded client base across public, private, faith-based, and not-for-profit sectors."
    },
    {
      year: "2024",
      title: "Strategic Positioning",
      description: "Strengthened advisory capabilities and positioned the firm as a trusted professional partner."
    }
  ];

  const values = [
    {
      icon: "⚖️",
      title: "Integrity",
      description: "Upholding the highest ethical and professional standards."
    },
    {
      icon: "🎓",
      title: "Professionalism",
      description: "Delivering services with competence, diligence, and independence."
    },
    {
      icon: "🏆",
      title: "Excellence",
      description: "Striving for quality, accuracy, and continuous improvement."
    },
    {
      icon: "🔍",
      title: "Objectivity",
      description: "Providing unbiased and evidence-based advice."
    },
    {
      icon: "🤝",
      title: "Client Focus",
      description: "Delivering practical solutions that meet client needs and expectations."
    }
  ];

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-navy-dark to-navy">
        <div className="container-custom max-w-4xl">
          <span className="text-gold text-sm tracking-widest uppercase font-medium">
            About Us
          </span>
          <h1 className="text-white mt-4 mb-6">
            About TOAUSIB Consulting Ltd
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            TOAUSIB Consulting Ltd is a firm of Chartered Accountants, Financial & Management
            Consultants committed to delivering high-quality audit, taxation, forensic,
            financial, and business advisory services.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl space-y-6">
          <p className="text-lg text-warm-gray">
            The firm was established to provide objective, practical, and value-driven
            solutions that help organisations strengthen governance, ensure regulatory
            compliance, and achieve sustainable growth.
          </p>
          <p className="text-lg text-warm-gray">
            We serve clients across public and private sectors, faith-based and not-for-profit
            organisations, SMEs, and large corporates, combining deep technical expertise with
            professional independence and regulatory insight.
          </p>
          <p className="text-lg text-warm-gray">
            Our services span audit and assurance, taxation and regulatory services, forensic
            accounting and investigations, financial advisory, and business consulting. Each
            engagement is tailored to deliver clarity, transparency, and measurable impact.
          </p>
          <p className="text-lg text-warm-gray">
            Driven by integrity, professionalism, and excellence, we support boards and
            management teams with sound judgment, rigorous analysis, and practical
            recommendations for effective risk management and decision-making.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 border-l-4 border-gold">
            <h3 className="text-3xl font-serif text-navy mb-4">Our Vision</h3>
            <p className="text-warm-gray text-lg">
              To be a trusted and respected professional services firm delivering audit,
              tax, forensic, and advisory solutions that strengthen institutions and drive
              sustainable values.
            </p>
          </div>

          <div className="bg-white p-10 border-l-4 border-navy">
            <h3 className="text-3xl font-serif text-navy mb-4">Our Mission</h3>
            <ul className="list-decimal pl-5 space-y-3 text-warm-gray text-lg">
              <li>To redefine the consulting industry with quality services that promote business growth and sustainability.</li>
              <li>To provide independent, high-quality, and innovative professional services that enhance governance, promote compliance, manage risk, and support informed decision-making.</li>
            </ul>
          </div>
        </div>
      </section>


      {/* <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="text-center mb-12">Our Journey</h2>
          {timeline.map((item, idx) => (
            <div key={idx} className="border-l-2 border-gold pl-6 mb-8">
              <h4 className="text-gold text-xl font-serif">{item.year}</h4>
              <h5 className="text-navy font-semibold">{item.title}</h5>
              <p className="text-warm-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Leadership */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-center mb-12">Meet Our Partners</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {leadership.map((leader, idx) => (
              <div key={idx} className="bg-white p-8 border-2 border-gray-200">
                <img src={leader.image} alt={leader.name} className="w-32 h-35 object-cover mb-4 border border-gray-100" />
                <h3 className="text-xl font-semibold">{leader.name}</h3>
                <p className="text-gold">{leader.title}</p>
                <p className="text-sm text-warm-gray mb-4">{leader.credentials}</p>
                <p className="text-warm-gray">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="border-2 border-gray-200 p-8">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-serif text-navy mb-2">{value.title}</h4>
                <p className="text-warm-gray">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
