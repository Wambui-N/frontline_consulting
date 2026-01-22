import type { Metadata } from "next";
import React from "react";
import { Suspense } from "react";
import About from "@/components/About";
import Mission from "@/components/Mission";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "About Us | Frontline Consulting - Our Team & Mission",
  description: "Learn about Frontline Consulting, a Kenyan consultancy firm offering services in environmental management, tourism development, and technical writing. Meet our expert team of consultants.",
  openGraph: {
    title: "About Us | Frontline Consulting",
    description: "Learn about Frontline Consulting and our expert team of environmental and tourism consultants.",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <About />
      <Mission />
      <Team />
    </div>
  );
};

export default page;
