import React from 'react';
import { CONTACT_INFO, SITE_INFO } from '@utils/constants';

const StructuredData: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_INFO.name,
    "description": SITE_INFO.description,
    "url": "https://andreaperinu.github.io/seahorse/",
    "logo": "https://andreaperinu.github.io/seahorse/assets/logo-placeholder.svg",
    "foundingDate": "2009",
    "founder": {
      "@type": "Person",
      "name": "Serena Massarani"
    },
    "sameAs": [
      "https://www.facebook.com/nidocavallucciomarino/",
      "https://wa.me/393454131977"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ChildCare",
    "name": SITE_INFO.name,
    "description": SITE_INFO.description,
    "image": "https://andreaperinu.github.io/seahorse/assets/og-image.jpg",
    "url": "https://andreaperinu.github.io/seahorse/",
    "telephone": CONTACT_INFO.phone,
    "email": CONTACT_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CONTACT_INFO.address.street,
      "addressLocality": CONTACT_INFO.address.city,
      "addressRegion": "Lombardia",
      "postalCode": CONTACT_INFO.address.zip,
      "addressCountry": "IT"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.3145,
      "longitude": 9.5031
    },
    "openingHours": "Mo-Fr 08:00-17:30",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:30"
      }
    ],
    "priceRange": "€€",
    "areaServed": {
      "@type": "City",
      "name": "Lodi",
      "containedIn": {
        "@type": "State",
        "name": "Lombardia"
      }
    },
    "sameAs": [
      "https://www.facebook.com/nidocavallucciomarino/",
      "https://wa.me/393454131977"
    ],
    "knowsAbout": [
      "Childcare",
      "Early childhood education",
      "Family daycare",
      "Flexible childcare hours",
      "Montessori-inspired activities",
      "Personalized child development"
    ],
    "audience": {
      "@type": "PeopleAudience",
      "suggestedMinAge": 0,
      "suggestedMaxAge": 3
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "3"
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": "https://wa.me/393454131977"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Family Daycare / Asilo Nido Famiglia",
    "provider": {
      "@type": "ChildCare",
      "name": SITE_INFO.name
    },
    "areaServed": {
      "@type": "City",
      "name": "Lodi"
    },
    "description": "Asilo nido famiglia con massimo 5 bambini per garantire attenzione personalizzata. Ambiente familiare, attività educative, orari flessibili.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock"
    }
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Cavalluccio Marino di Serena - Asilo Nido Famiglia a Lodi",
    "description": "Asilo nido famiglia a San Bernardo, Lodi. Massimo 5 bambini, ambiente familiare, attività educative personalizzate e orari flessibili.",
    "publisher": {
      "@type": "Organization",
      "name": SITE_INFO.name,
      "logo": {
        "@type": "ImageObject",
        "url": "https://andreaperinu.github.io/seahorse/assets/logo-placeholder.svg",
        "width": 512,
        "height": 512
      }
    },
    "inLanguage": "it",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://andreaperinu.github.io/seahorse/"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://andreaperinu.github.io/seahorse/"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
};

export default StructuredData;
