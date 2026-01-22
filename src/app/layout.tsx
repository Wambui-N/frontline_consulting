import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { StructuredData, organizationSchema } from "@/components/StructuredData";

const raleway = Raleway({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontline Consulting | Environment & Tourism Planning Specialists",
  description: "Expert environmental conservation planning, tourism project management, and technical writing services. Management plans for conservancies, national parks, and tourism development projects.",
  keywords: [
    "environmental consulting",
    "tourism planning",
    "conservation management",
    "technical writing",
    "EIA reports",
    "Kenya consulting",
    "wildlife conservation",
    "ecosystem management",
  ],
  authors: [{ name: "Frontline Consulting" }],
  creator: "Frontline Consulting",
  publisher: "Frontline Consulting",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Frontline Consulting | Environment & Tourism Planning Specialists",
    description: "Expert environmental conservation planning, tourism project management, and technical writing services.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Frontline Consulting",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontline Consulting | Environment & Tourism Planning Specialists",
    description: "Expert environmental conservation planning, tourism project management, and technical writing services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
  },
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData data={organizationSchema} />
      </head>
      <body className={`${raleway.className} `}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-orange focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" role="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Toaster />
        </body>
    </html>
  );
}
