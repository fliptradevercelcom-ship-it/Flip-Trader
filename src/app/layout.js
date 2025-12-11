import localFont from "next/font/local";
import "./globals.css";
import ConditionalHeader from "./ConditionalHeader";
import Fotter from "./Components/Uiux/Fotter";
import Canonical from "./Canonical";
import GoogleAnalytics from "./GoogleAnalytics";
import Metalinksseo from "./Metalinksseo";
import Telegramlink from "./Telegramlink";
import Aosinit from "./Components/Pagecomponents/Aosinit";
import Signuppopup from "./Components/Signuppopup";
const monaSans = localFont({
  src: [{ path: "../../public/fonts/Mona-Sans-MediumWide.ttf" }],

  variable: "--font-mona-sans",
});
const monaSansnormal = localFont({
  src: [{ path: "../../public/fonts/Mona-Sans.ttf" }],

  variable: "--font-mona-sans-normal",
});
const monaSansnormallight = localFont({
  src: [{ path: "../../public/fonts/Mona-Sans-LightWide.ttf" }],

  variable: "--font-mona-sans-normallight",
});
const monaSanswidenormal = localFont({
  src: [{ path: "../../public/fonts/Mona-Sans-UltraLightWide.ttf" }],

  variable: "--font-mona-sans-monaSanswidenormal",
});
export const metadata = {
  title: "Best Forex & Multi-Asset Trading Platform | FlipTrade Group",
  description:
    "Trade forex, stocks, cryptos, commodities & metals with FlipTrade — low spreads, fast execution, secure platform. Start your trading journey today.",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "KgCqFoO6NlFNiJg06rxf_0u6vjoiAAGn4sVMH_X-1aQ",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Canonical />
        <script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-TMB747V2');`}</script>
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
        <Metalinksseo />
      </head>
      <body
        className={`${monaSans.variable} ${monaSansnormal.variable} ${monaSansnormallight.variable} ${monaSanswidenormal.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TMB747V2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
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
          <Signuppopup/>
        </div>
        <script>{` ;(function(_, m) { const orufyConnectSettings = { appId: 'wsxQa3dGW436zgdZgOzyNHB47qdKdl7S' }; const s = document.createElement("script"); s.type = "text/javascript"; s.async = true; s.src = 'https://widget.connect.orufy.com/widget.js'; const head = document.getElementsByTagName("head")[0]; head?.appendChild(s); window.orufy_connect = m; m._globals = orufyConnectSettings; })(document, window.orufy_connect || {}) `}</script>
      </body>
    </html>
  );
}
