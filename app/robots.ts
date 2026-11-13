import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/thankyou'],
      },
    ],
    sitemap: 'https://sydenhamasc.co.uk/sitemap.xml',
  };
}
