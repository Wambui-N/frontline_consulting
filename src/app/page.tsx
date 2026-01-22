import type { Metadata } from "next";
import React from 'react'
import Hero from '@/components/Hero'
import Values from '@/components/Values'
import ProjectsFeature from '@/components/ProjectsFeature'

export const metadata: Metadata = {
  title: "Home | Frontline Consulting - Environment & Tourism Planning Specialists",
  description: "Expert environmental conservation planning, tourism project management, and technical writing services. Management plans for conservancies, national parks, and tourism development projects in Kenya.",
  openGraph: {
    title: "Frontline Consulting - Environment & Tourism Planning Specialists",
    description: "Expert environmental conservation planning, tourism project management, and technical writing services.",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <Hero />
      <Values />
      <ProjectsFeature />
    </div>
  )
}

export default page
