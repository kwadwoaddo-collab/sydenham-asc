import type { MetadataRoute } from 'next';

const BASE_URL = 'https://sydenhamasc.co.uk';
const LAST_MODIFIED = '2026-11-13';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: Array<{ path: string; priority: number }> = [
    { path: '', priority: 1.0 },
    { path: '/after-school-club', priority: 0.9 },
    { path: '/tuition', priority: 0.9 },
    { path: '/free-assessment', priority: 0.8 },
    { path: '/fees', priority: 0.8 },
    { path: '/contact', priority: 0.8 },
    { path: '/about', priority: 0.7 },
    { path: '/leadership', priority: 0.6 },
    { path: '/join-us', priority: 0.6 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: 'monthly',
    priority,
  }));
}
