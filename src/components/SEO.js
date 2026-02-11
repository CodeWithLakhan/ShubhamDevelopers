import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteUrl = window.location.origin;
  const defaultImage = `${siteUrl}/images/logo.png`; // Fallback image

  const metaTitle = title || "Shubham Developers | Top Web Development Agency in Shirpur";
  const metaDescription = description || "Shubham Developers provides professional web development, SEO, and software solutions in Shirpur. Contact us for custom websites and apps.";
  const metaKeywords = keywords || "Shubham Developers, Web Development Shirpur, Software Company Shirpur, SEO Services, Website Design";
  const metaImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;
  const metaUrl = url ? `${siteUrl}${url}` : window.location.href;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Shubham Developers",
    "image": metaImage,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "+91-9284844534", // Replace with actual number if available
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shirpur",
      "addressLocality": "Shirpur",
      "addressRegion": "Maharashtra",
      "postalCode": "425405",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.3524,
      "longitude": 74.8817 
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.instagram.com/my1st_residence",
    ]
  };

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={metaUrl} />
      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />
      <meta property="twitter:image" content={metaImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
