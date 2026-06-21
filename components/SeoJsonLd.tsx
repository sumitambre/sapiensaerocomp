type Props = {
  siteUrl: string;
};

function normalizeSiteUrl(siteUrl: string) {
  const trimmed = siteUrl.trim();
  if (!trimmed) return 'https://www.sapiensaerocomp.com';
  return trimmed.replace(/\/+$/, '');
}

export default function SeoJsonLd({ siteUrl }: Props) {
  const url = normalizeSiteUrl(siteUrl);

  const graph = [
    {
      '@type': 'Organization',
      '@id': `${url}/#organization`,
      name: 'Sapiens AeroComp Pvt. Ltd.',
      legalName: 'Sapiens AeroComp Pvt. Ltd.',
      url,
      logo: `${url}/images/company-logo.png`,
      email: 'k_shubham@sapiensaerocomp.com',
      description:
        'Pune-based Indian manufacturer of carbon fiber UAV propellers, custom propeller designs, carbon fiber plates, molds, and UAV composite components.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'k_shubham@sapiensaerocomp.com',
        availableLanguage: ['English'],
      },
      knowsAbout: [
        'Carbon fiber propellers',
        'CFRP manufacturing',
        'UAV propulsion',
        'Composite tooling',
        'Custom UAV components',
      ],
      founder: { '@id': `${url}/#shubham-khobragade` },
      sameAs: ['https://in.linkedin.com/company/sapiens-aerocomp'],
    },
    {
      '@type': 'Person',
      '@id': `${url}/#shubham-khobragade`,
      name: 'Shubham Khobragade',
      worksFor: { '@id': `${url}/#organization` },
      sameAs: ['https://in.linkedin.com/in/shubhamkhobragade'],
    },
    {
      '@type': 'WebSite',
      '@id': `${url}/#website`,
      url,
      name: 'Sapiens AeroComp',
      alternateName: 'Sapiens AeroComp Pvt. Ltd.',
      publisher: { '@id': `${url}/#organization` },
      inLanguage: 'en',
    },
    {
      '@type': 'WebPage',
      '@id': `${url}/#webpage`,
      url,
      name: 'Carbon Fiber (CFRP) Drone Propellers & Custom Molds',
      description:
        'Carbon fiber UAV propellers, custom propeller development, carbon fiber plates, molds, and UAV composite manufacturing.',
      isPartOf: { '@id': `${url}/#website` },
      about: { '@id': `${url}/#organization` },
      inLanguage: 'en',
    },
    {
      '@type': 'Product',
      '@id': `${url}/#product-14x4-8`,
      name: '14x4.8 inch Carbon Fiber (CFRP) Drone Propeller',
      description:
        'Indigenous carbon fiber (CFRP) propeller engineered for low vibration and high efficiency on UAV platforms.',
      brand: { '@type': 'Brand', name: 'Sapiens AeroComp' },
      manufacturer: { '@id': `${url}/#organization` },
      category: 'UAV Propellers',
      url: `${url}/#products`,
      image: [`${url}/images/14x4-8-cfrp-propeller.png`],
    },
    {
      '@type': 'Service',
      '@id': `${url}/#service-custom-molds`,
      name: 'Custom Carbon Fiber Mold Design & Manufacturing',
      description:
        'Custom mold design and manufacturing tailored to dimensions, shapes, and performance requirements for specialized carbon fiber components.',
      provider: { '@id': `${url}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      serviceType: 'Composite tooling and mold manufacturing',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': graph,
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
