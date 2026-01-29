export async function GET() {
  const baseUrl = "https://www.fliptradegroup.com";

  const staticUrls = [
    `${baseUrl}/`,
    `${baseUrl}/accounts-types`,
    `${baseUrl}/aml-ctf-policy`,
    `${baseUrl}/api`,
    `${baseUrl}/classic-account`,
    `${baseUrl}/commodities`,
    `${baseUrl}/complaint-handling-procedures`,
    `${baseUrl}/contact-us`,
    `${baseUrl}/cookies`,
    `${baseUrl}/cryptocurrency`,
    `${baseUrl}/economic-calendar`,
    `${baseUrl}/enc-account`,
    `${baseUrl}/faq`,
    `${baseUrl}/forex`,
    `${baseUrl}/forex-trading-in-dubai`,
    `${baseUrl}/ib-partner`,
    `${baseUrl}/indices`,
    `${baseUrl}/learn-trading`,
    `${baseUrl}/metals`,
    `${baseUrl}/pip-calculator`,
    `${baseUrl}/platform`,
    `${baseUrl}/privacy-policy`,
    `${baseUrl}/professional-account`,
    `${baseUrl}/promo`,
    `${baseUrl}/refund-withdrawal`,
    `${baseUrl}/risk-warning`,
    `${baseUrl}/social-copy-trading`,
    `${baseUrl}/standard-account`,
    `${baseUrl}/stocks`,
    `${baseUrl}/terms-and-conditions`,
    `${baseUrl}/thank-you`,
    `${baseUrl}/web-trading`,
    `${baseUrl}/why-fliptrade`,
    `${baseUrl}/about-us`,
    `${baseUrl}/contest`,
    `${baseUrl}/deposit-and-withdrawal`,
    `${baseUrl}/reviews`,
    `${baseUrl}/signup-offer`,
    `${baseUrl}/spreads-swaps`,

  ];

  const today = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls
      .map(
        url => `
        <url>
           <loc>${url}</loc>
           <lastmod>${today}</lastmod>
           <changefreq>daily</changefreq>
           <priority>0.7</priority>
        </url>`
      )
      .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
