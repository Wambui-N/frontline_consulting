import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const raleway = Raleway({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontline Consulting",
  description: "Frontline Consulting",
};

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} `}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
