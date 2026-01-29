import localFont from "next/font/local";
import "./globals.css";
import ConditionalHeader from "./ConditionalHeader";
import Fotter from "./Components/Uiux/Fotter";
import Canonical from "./Canonical";
import GoogleAnalytics from "./GoogleAnalytics";
import Metalinksseo from "./Metalinksseo";
import Telegramlink from "./Telegramlink";
import Aosinit from "./Components/Pagecomponents/Aosinit";
// import Signuppopup from "./Components/Signuppopup";
import WhtasAppLink from "./Components/Pagecomponents/WhtasAppLink";
import Script from "next/script";
const monaSans = localFont({
  src: [{ path: "../fonts/Mona-Sans-MediumWide.ttf" }],

  variable: "--font-mona-sans"
});
const monaSansnormal = localFont({
  src: [{ path: "../fonts/Mona-Sans.ttf" }],

  variable: "--font-mona-sans-normal"
});
const monaSansnormallight = localFont({
  src: [{ path: "../fonts/Mona-Sans-LightWide.ttf" }],

  variable: "--font-mona-sans-normallight"
});
const monaSanswidenormal = localFont({
  src: [{ path: "../fonts/Mona-Sans-UltraLightWide.ttf" }],

  variable: "--font-mona-sans-monaSanswidenormal"
});
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Flip Trade Group",
      url: "https://fliptradegroup.com/",
      logo: "https://fliptradegroup.com/wp-content/uploads/logo.png",
      description:
        "Flip Trade Group provides professional trading education, market insights, and strategic tools to help traders grow with confidence.",
      sameAs: [
        "https://www.facebook.com/fliptradegroup",
        "https://www.instagram.com/fliptradegroup",
        "https://www.linkedin.com/company/fliptradegroup"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        availableLanguage: ["English"]
      }
    },

    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Flip Trade Group",
      url: "https://fliptradegroup.com/",
      logo: "https://fliptradegroup.com/wp-content/uploads/logo.png",
      image: "https://fliptradegroup.com/wp-content/uploads/logo.png",
      description:
        "Flip Trade Group offers professional trading education, market analysis, and strategic tools to support confident and informed trading decisions.",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US"
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00"
      },
      sameAs: [
        "https://www.facebook.com/fliptradegroup",
        "https://www.instagram.com/fliptradegroup",
        "https://www.linkedin.com/company/fliptradegroup"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Flip Trade Group offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Flip Trade Group provides professional trading education, market insights, and strategic tools designed to help traders improve decision-making and long-term performance."
          }
        },
        {
          "@type": "Question",
          name: "Is Flip Trade Group suitable for beginners?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, Flip Trade Group offers structured learning resources suitable for beginners as well as advanced traders seeking to refine their trading strategies."
          }
        },
        {
          "@type": "Question",
          name: "Does Flip Trade Group provide trading signals?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Flip Trade Group focuses on education, analysis, and strategy development rather than guaranteed trading signals, helping traders build independent skills."
          }
        },
        {
          "@type": "Question",
          name: "Can I access Flip Trade Group services online?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Yes, Flip Trade Group operates online, allowing traders to access educational content, tools, and insights from anywhere."
          }
        },
        {
          "@type": "Question",
          name: "How does Flip Trade Group help with risk management?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Flip Trade Group emphasizes risk management through education on position sizing, market analysis, and disciplined trading strategies."
          }
        }
      ]
    }
  ]
};
export const metadata = {
  title: "Best Forex & Multi-Asset Trading Platform | FlipTrade Group",
  description:
    "Trade forex, stocks, cryptos, commodities & metals with FlipTrade — low spreads, fast execution, secure platform. Start your trading journey today.",
  icons: {
    icon: "/favicon.ico"
  },
  verification: {
    google: "KgCqFoO6NlFNiJg06rxf_0u6vjoiAAGn4sVMH_X-1aQ"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Canonical />
        <Script id="gtm-script" strategy="afterInteractive">
          {`
             (function(w,d,s,l,i){w[l]=w[l]||[];
             w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
             var f=d.getElementsByTagName(s)[0],
             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
             j.async=true;j.src=
             'https://www.googletagmanager.com/gtm.js?id='+i+dl;
             f.parentNode.insertBefore(j,f);
             })(window,document,'script','dataLayer','GTM-P8DN8QDS');
          `}
        </Script>

        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        />
        <Metalinksseo />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      </head>
      <body
        className={`${monaSans.variable} ${monaSansnormal.variable} ${monaSansnormallight.variable} ${monaSanswidenormal.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8DN8QDS"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <GoogleAnalytics />
        <div className="main_outer_container">
          <div className="absolute w-full max-w-[1960px] z-[999] bg-[linear-gradient(1deg,rgba(255,255,255,0)_15%,rgb(0_0_0_/_76%)_99%)]">
            <ConditionalHeader />
          </div>
          <Aosinit />
          {children}
          <Fotter />
          <div className="fixed left-0 bottom-0 z-[999]">
            <Telegramlink />
          </div>

          <div className="fixed right-5 bottom-3 z-[999]">
            <WhtasAppLink width={"50px"} height={"50px"} />
          </div>
          {/* <Signuppopup/> */}
        </div>
        {/* <script>{` ;(function(_, m) { const orufyConnectSettings = { appId: 'wsxQa3dGW436zgdZgOzyNHB47qdKdl7S' }; const s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = 'https://widget.connect.orufy.com/widget.js'; const head = document.getElementsByTagName("head")[0]; head?.appendChild(s); window.orufy_connect = m; m._globals = orufyConnectSettings; })(document, window.orufy_connect || {}) `}</script> */}
      </body>
    </html>
  );
}
