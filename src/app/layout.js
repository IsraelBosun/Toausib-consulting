// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import { companyInfo } from "../../lib/data";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: `${companyInfo.name} - ${companyInfo.tagline}`,
//   description: companyInfo.description,
//   keywords: 'audit, tax advisory, consulting, nigeria, aba, forensic accounting, management consulting',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Navbar />
//         <main className="min-h-screen">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }




import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { companyInfo } from "../../lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://toausibconsulting.com"),

  title: {
    default: `${companyInfo.name} - ${companyInfo.tagline}`,
    template: `%s | ${companyInfo.name}`,
  },

  description: companyInfo.description,

  keywords: [
    "audit services Nigeria",
    "tax advisory Nigeria",
    "management consulting",
    "forensic accounting",
    "financial analytics",
    "AI advisory",
    "business consulting Nigeria",
    "Aba consulting firm",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: companyInfo.name,
    description: companyInfo.description,
    url: "https://toausibconsulting.com",
    siteName: companyInfo.name,
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: companyInfo.name,
    description: companyInfo.description,
  },

  alternates: {
    canonical: "https://toausibconsulting.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />

        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
