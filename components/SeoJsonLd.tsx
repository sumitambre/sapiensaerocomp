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
      url,
      logo: `${url}/images/company-logo.png`,
      email: 'k.shubham@sapiensaerocomp.com',
      telephone: '',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Pune',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${url}/#website`,
      url,
      name: 'Sapiens AeroComp',
      publisher: { '@id': `${url}/#organization` },
      inLanguage: 'en',
    },
    {
      '@type': 'WebPage',
      '@id': `${url}/#webpage`,
      url,
      name: 'Carbon Fiber (CFRP) Drone Propellers & Custom Molds',
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
      image: [`${url}/images/14inch%20propeller%20made%20in%20India.png`],
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
