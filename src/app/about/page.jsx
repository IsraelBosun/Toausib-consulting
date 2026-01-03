// 'use client';

// import Link from 'next/link';
// import { companyInfo } from '../../../lib/data';
// import Image from 'next/image';

// export default function AboutPage() {
//   const leadership = [
//     {
//       name: "Mr. Fatoyinbo Victor Olufunso",
//       title: "Principal Partner",
//       credentials: "FCA, FCTI, FIMC, CMC",
//       bio: "Founder and Managing Partner of TOAUSIB Consulting Ltd, providing audit, tax, forensic, and financial advisory services. He has over a decade of experience leading audit, tax, and forensic engagements across public and private sectors, and currently serves as Partner and Head of Tax and Investigation at Martina Adebola & Co., Chartered Accountants, with a strong focus on corporate governance, transparency, capacity building, and sustainable growth.",
//       image: "/images/victor.png"
//     },
//     {
//       name: "Mr. Robert Emmanuel",
//       title: "Partner, Financial & Business Advisory",
//       credentials: "ACA, ACTI",
//       bio: "Partner, Financial and Business Advisory at TOAUSIB Consulting Ltd, and a results-driven financial modeling and advisory professional with strong expertise in financial analysis, strategic planning, and data-driven decision support. He supports organisations in evaluating opportunities, managing risk, and optimising resources through robust financial models and evidence-based insights, enabling informed decision-making and sustainable growth.",
//       image: "/images/robert.jpg"
//     },
//   ];

//   const timeline = [
//     {
//       year: "2010",
//       title: "Foundation",
//       description: "TOAUSIB Consulting Limited was established in Aba with a vision to provide world-class professional services."
//     },
//     {
//       year: "2013",
//       title: "Expansion",
//       description: "Expanded service offerings to include forensic accounting and management consulting."
//     },
//     {
//       year: "2016",
//       title: "Recognition",
//       description: "Received industry recognition for excellence in tax advisory and audit services."
//     },
//     {
//       year: "2020",
//       title: "Growth",
//       description: "Achieved milestone of serving 500+ clients across diverse industries in Nigeria."
//     },
//     {
//       year: "2024",
//       title: "Innovation",
//       description: "Launched digital advisory services and expanded team to 50+ professionals."
//     }
//   ];

//   const values = [
//     {
//       icon: "⚖️",
//       title: "Integrity",
//       description: "We uphold the highest ethical standards in every engagement, ensuring transparency and honesty guide all our actions."
//     },
//     {
//       icon: "🎯",
//       title: "Excellence",
//       description: "We pursue excellence relentlessly, continuously improving our skills and knowledge to deliver superior results."
//     },
//     {
//       icon: "🤝",
//       title: "Client Focus",
//       description: "Our clients' success is our success. We listen, understand, and tailor our services to meet their unique needs."
//     },
//     {
//       icon: "💡",
//       title: "Innovation",
//       description: "We embrace innovative solutions and modern technology to provide efficient, forward-thinking advisory services."
//     },
//     {
//       icon: "🌟",
//       title: "Professionalism",
//       description: "We maintain the highest professional standards, adhering to regulatory requirements and industry best practices."
//     },
//     {
//       icon: "🔒",
//       title: "Confidentiality",
//       description: "We treat all client information with utmost confidentiality and respect, building trust through discretion."
//     }
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-navy-dark to-navy overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute inset-0" style={{
//             backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
//           }}></div>
//         </div>

//         <div className="container-custom relative z-10">
//           <div className="max-w-4xl">
//             <div className="inline-block mb-6">
//               <span className="text-gold text-sm tracking-widest uppercase font-medium">
//                 About Us
//               </span>
//               <div className="h-0.5 w-12 bg-gold mt-2"></div>
//             </div>

//             <h1 className="text-white mb-6">
//               Building Trust Through Professional Excellence
//             </h1>

//             <p className="text-xl text-gray-300 leading-relaxed mb-8">
//               Since {companyInfo.yearEstablished}, TOAUSIB Consulting Limited has been at the forefront 
//               of professional services in Nigeria, delivering exceptional audit, tax, and advisory 
//               solutions that drive business success.
//             </p>

//             <div className="flex flex-wrap gap-4">
//               {companyInfo.stats.slice(0, 3).map((stat, idx) => (
//                 <div key={idx} className="bg-white/10 backdrop-blur-sm px-6 py-4 border border-white/20">
//                   <div className="text-3xl font-serif font-light text-gold mb-1">
//                     {stat.number}
//                   </div>
//                   <div className="text-sm text-gray-300">
//                     {stat.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission, Vision & Values */}
//       <section className="section-padding bg-white">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
//             {/* Mission */}
//             <div className="bg-gray-50 p-10 border-l-4 border-gold">
//               <div className="text-gold text-4xl mb-4">🎯</div>
//               <h3 className="text-3xl font-serif text-navy mb-4">Our Mission</h3>
//               <p className="text-warm-gray leading-relaxed text-lg">
//                 To provide world-class professional services that empower our clients to 
//                 achieve sustainable growth, maintain regulatory compliance, and make informed 
//                 business decisions with confidence.
//               </p>
//             </div>

//             {/* Vision */}
//             <div className="bg-gray-50 p-10 border-l-4 border-navy">
//               <div className="text-navy text-4xl mb-4">🔭</div>
//               <h3 className="text-3xl font-serif text-navy mb-4">Our Vision</h3>
//               <p className="text-warm-gray leading-relaxed text-lg">
//                 To be Nigeria's most trusted and innovative professional services firm, 
//                 recognized for our technical expertise, integrity, and unwavering commitment 
//                 to client success across all sectors.
//               </p>
//             </div>
//           </div>

//           {/* Core Values */}
//           <div className="text-center mb-12">
//             <h2 className="mb-4">Our Core Values</h2>
//             <p className="text-lg text-warm-gray max-w-3xl mx-auto">
//               These principles guide our work and define who we are as a firm
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {values.map((value, idx) => (
//               <div
//                 key={idx}
//                 className="bg-white border-2 border-gray-200 p-8 hover:border-gold hover:shadow-xl transition-all duration-500 group"
//               >
//                 <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
//                   {value.icon}
//                 </div>
//                 <h4 className="text-xl font-serif text-navy mb-3 group-hover:text-gold transition-colors duration-300">
//                   {value.title}
//                 </h4>
//                 <p className="text-warm-gray leading-relaxed">
//                   {value.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Timeline */}
//       <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
//         <div className="container-custom">
//           <div className="text-center mb-16">
//             <div className="inline-block mb-6">
//               <span className="text-gold text-sm tracking-widest uppercase font-medium">
//                 Our Journey
//               </span>
//               <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
//             </div>
//             <h2 className="mb-4">Milestones of Excellence</h2>
//             <p className="text-lg text-warm-gray max-w-3xl mx-auto">
//               A timeline of growth, achievement, and unwavering commitment to our clients
//             </p>
//           </div>

//           <div className="max-w-4xl mx-auto">
//             {timeline.map((item, idx) => (
//               <div key={idx} className="relative pl-8 pb-12 border-l-2 border-gold last:pb-0">
//                 {/* Timeline Dot */}
//                 <div className="absolute left-0 top-0 w-4 h-4 bg-gold rounded-full transform -translate-x-[9px]"></div>
                
//                 <div className="bg-white p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
//                   <div className="text-3xl font-serif font-bold text-gold mb-2">
//                     {item.year}
//                   </div>
//                   <h4 className="text-xl font-serif text-navy mb-2">
//                     {item.title}
//                   </h4>
//                   <p className="text-warm-gray">
//                     {item.description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Leadership Team */}
//       <section className="section-padding bg-white">
//         <div className="container-custom">
//           <div className="text-center mb-16">
//             <div className="inline-block mb-6">
//               <span className="text-gold text-sm tracking-widest uppercase font-medium">
//                 Leadership Team
//               </span>
//               <div className="h-0.5 w-12 bg-gold mt-2 mx-auto"></div>
//             </div>
//             <h2 className="mb-4">Meet Our Partners</h2>
//             <p className="text-lg text-warm-gray max-w-3xl mx-auto">
//               Experienced professionals leading with expertise, integrity, and vision
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-10">
//             {leadership.map((leader, idx) => (
//               <div
//                 key={idx}
//                 className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 p-8 hover:border-gold hover:shadow-2xl transition-all duration-500 group"
//               >
//                 <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 space-y-6 md:space-y-0">
                  
//                   {/* Avatar */}
//                   <div className="flex-shrink-0">
//                     <div
//                       className="
//                         w-32 h-32
//                         md:w-24 md:h-24
//                         lg:w-32 lg:h-32
//                         xl:w-40 xl:h-40
//                         bg-navy
//                         overflow-hidden
//                         flex items-center justify-center
//                         group-hover:bg-gold
//                         transition-colors duration-500
//                       "
//                     >
//                       <img
//                         src={leader.image}
//                         alt={leader.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>

//                   {/* Text Content */}
//                   <div className="text-center md:text-left">
//                     <h3 className="text-xl font-semibold mb-1">
//                       {leader.name}
//                     </h3>

//                     <p className="text-gold font-medium mb-1">
//                       {leader.title}
//                     </p>

//                     {leader.credentials && (
//                       <p className="text-sm text-warm-gray mb-4">
//                         {leader.credentials}
//                       </p>
//                     )}

//                     <p className="text-warm-gray leading-relaxed">
//                       {leader.bio}
//                     </p>
//                   </div>

//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>


//       {/* Professional Memberships */}
//       <section className="section-padding bg-navy text-white">
//         <div className="container-custom">
//           <div className="text-center mb-12">
//             <h2 className="text-white mb-4">Professional Affiliations</h2>
//             <p className="text-gray-300 text-lg max-w-3xl mx-auto">
//               Our memberships ensure we maintain the highest standards of professional practice
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
//             {[
//               { name: "ICAN", full: "Institute of Chartered Accountants of Nigeria" },
//               { name: "CITN", full: "Chartered Institute of Taxation of Nigeria" },
//               { name: "ANAN", full: "Association of National Accountants of Nigeria" },
//               { name: "ACFE", full: "Association of Certified Fraud Examiners" }
//             ].map((org, idx) => (
//               <div
//                 key={idx}
//                 className="text-center p-6 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold transition-all duration-300"
//               >
//                 <div className="text-4xl font-serif font-bold text-gold mb-3">
//                   {org.name}
//                 </div>
//                 <p className="text-sm text-gray-400">
//                   {org.full}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
//         <div className="container-custom">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="mb-6">Ready to Work With Us?</h2>
//             <p className="text-xl text-warm-gray mb-8 leading-relaxed">
//               Partner with a firm that combines deep expertise with unwavering commitment 
//               to your success. Let's discuss how we can help your business thrive.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <Link href="/contact" className="btn-primary text-base">
//                 Schedule Consultation
//               </Link>
//               <Link href="/services" className="btn-secondary text-base">
//                 View Our Services
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }



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
    }
  ];

  const timeline = [
    {
      year: "2010",
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
                <img src={leader.image} alt={leader.name} className="w-32 h-32 object-cover mb-4" />
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
