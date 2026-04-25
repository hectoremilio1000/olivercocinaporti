import { NAV_ITEMS, SITE } from "@/data/site";

function generateSiteMap(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>
    <loc>${u}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join("\n")}
</urlset>`;
}

// SSR con cache de 24h para reducir cost en Vercel (CDN cachea respuesta).
export async function getServerSideProps({ res }) {
  const urls = NAV_ITEMS.map((n) => `${SITE.url}${n.href}`);
  const sitemap = generateSiteMap(urls);
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");
  res.write(sitemap);
  res.end();
  return { props: {} };
}

export default function Sitemap() { return null; }
