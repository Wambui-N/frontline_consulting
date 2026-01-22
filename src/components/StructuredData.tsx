import React from "react";

interface StructuredDataProps {
  data: object | object[];
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Frontline Consulting",
  description:
    "Expert environmental conservation planning, tourism project management, and technical writing services.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  logo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/Dark Logo L.png`,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: ["English"],
  },
  sameAs: [
    // Add social media links when available
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "KE",
    addressLocality: "Kenya",
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Environmental and Tourism Consulting",
  provider: {
    "@type": "Organization",
    name: "Frontline Consulting",
  },
  areaServed: {
    "@type": "Country",
    name: "Kenya",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Consulting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Development Projects",
          description:
            "Project conception, proposals writing, fund raising, management plans for conservation protected areas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Environmental Impact Assessment (EIA)",
          description:
            "EIA reports, impact assessment before and after project implementation, monitoring and evaluating plans",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mapping and Cartography",
          description:
            "Analysis of data, developing maps of natural resources, land cover maps, interpreting data and maps",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Training",
          description:
            "Content development, data collection, natural resources and management techniques, report writing and analysis",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Writing Services",
          description:
            "Writing and editing technical reports, newsletters, blogs, articles, and content development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marketing",
          description:
            "Email marketing, social media marketing and management, magazines and periodicals",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tourism",
          description:
            "Project and business plans, new project design and development, customer service excellence design",
        },
      },
    ],
  },
};

export const personSchema = (person: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: person.name,
  jobTitle: person.jobTitle,
  description: person.description,
  ...(person.image && {
    image: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}${person.image}`,
  }),
  worksFor: {
    "@type": "Organization",
    name: "Frontline Consulting",
  },
});

export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}${item.url}`,
  })),
});
