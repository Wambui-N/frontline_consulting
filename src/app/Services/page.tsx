import type { Metadata } from "next";
import React from 'react'
import Services from '@/components/Services'

export const metadata: Metadata = {
  title: "Our Services | Frontline Consulting - Environmental & Tourism Solutions",
  description: "Comprehensive environmental, conservation, and tourism consultancy services including EIA reports, management plans, mapping, training, writing services, and marketing solutions.",
  openGraph: {
    title: "Our Services | Frontline Consulting",
    description: "Comprehensive environmental, conservation, and tourism consultancy services.",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <Services />
      
    </div>
  )
}

export default page