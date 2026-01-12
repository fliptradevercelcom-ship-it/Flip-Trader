"use client";
import Script from "next/script";

export default function Metalinksseo() {
  return (
    <>
      {/* ===== Meta Pixel 1 ===== */}
      <Script
        id="meta-pixel-1"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');  
          fbq('init', '1802853220355740');
          fbq('track', 'PageView');
        `,
        }}
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1802853220355740&ev=PageView&noscript=1"
          alt="meta-pixel-1"
        />
      </noscript>

      {/* ===== Meta Pixel 2 ===== */}
      <Script
        id="meta-pixel-2"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1916610305873436');
          fbq('track', 'PageView');
        `,
        }}
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1916610305873436&ev=PageView&noscript=1"
          alt="meta-pixel-2"
        />
      </noscript>

      {/* ===== Meta Pixel 3 ===== */}
      <Script
        id="meta-pixel-3"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '25867542746180452');
          fbq('track', 'PageView');
        `,
        }}
      />

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=25867542746180452&ev=PageView&noscript=1"
          alt="meta-pixel-3"
        />
      </noscript>

      {/* ===== Website Schema ===== */}
      <Script
        id="schema-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "WebSite",
            name: "FlipTrade Group",
            url: "https://www.fliptradegroup.com/",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.fliptradegroup.com/contact-us{search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* ===== Organization Schema ===== */}
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FlipTrade Group",
            url: "https://www.fliptradegroup.com/",
            logo: "",
            sameAs: [
              "https://www.facebook.com/profile.php?id=61580314210503",
              "https://www.instagram.com/fliptradegroupglobal/",
              "https://www.youtube.com/@fliptradegroup",
            ],
          }),
        }}
      />
    </>
  );
}
