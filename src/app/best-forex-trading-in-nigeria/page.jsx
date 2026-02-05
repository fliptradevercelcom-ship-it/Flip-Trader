import React from "react";
import ForexBrokerBanner from "../Components/ForexBroker/ForexBrokerBanner";
import CustomersSay from "../Components/ForexBroker/CustomersSay";
import BrokerFeature from "../Components/ForexBroker/BrokerFeature";
import firebtnicon from "../../../public/icons/firebtnicon.svg";
import Button from "../Components/Uiux/Button";
import Spreadtable from "../Components/Pagecomponents/Spreadtable";
import Title from "../Components/Uiux/Title";
import OurPlatform from "../Components/ForexBroker/OurPlatform";
import TradingEducation from "../Components/Pagecomponents/TradingEducation";
import tradingplatformtab from "../../../public/images/tradingplatformtab.webp";
import Faq from "../Components/Pagecomponents/Faq";
import Link from "next/link";

const features = [
  {
    title: "INDICES",
    description:
      "Trade major global indices with FlipTrade Group and gain exposure to leading markets across regions. Benefit from smooth execution and transparent trading conditions designed for active market participation.",
    class: "z-[4]",
    alt: "Global stock market indices"
  },
  {
    title: "FOREX Trading",
    description:
      "Access the global forex market with FlipTrade Group and trade a wide range of currency pairs. Enjoy competitive spreads, fast execution, and a reliable trading environment built for traders in Nigeria.",
    class: "xl:w-[120%] left-[-20%] z-[3]",
    alt: "Forex currency trading"
  },
  {
    title: "SHARES CFDs",
    description:
      "Trade CFDs on international companies with FlipTrade Group’s advanced trading platform. Access global stock markets with flexible trading opportunities and tools that support informed trading decisions.",
    class: "xl:w-[120%] left-[-20%] z-[2]",
    alt: "Global shares and stock trading"
  },
  {
    title: "CRYPTO Trading",
    description:
      "Trade cryptocurrency CFDs with FlipTrade Group and access digital asset markets through a secure and user-friendly platform. Trade popular crypto assets with advanced charting and risk-aware conditions.",
    class: "xl:w-[120%] left-[-20%] z-[1]",
    alt: "Cryptocurrency CFD trading"
  }
];
const featureCards = [
  {
    __id: "01",
    title: "Advanced markets & execution",
    description: [
      "Trade a wide range of global markets with FlipTrade Group, including forex, indices, shares CFDs, and cryptocurrencies. Benefit from smooth execution and stable trading conditions designed for active trading."
    ],
    cta: "TRADE MARKETS",
    link: "#"
  },
  {
    __id: "02",
    title: "Tools designed for smarter trading",
    description: [
      "Access modern trading tools that support technical analysis, real-time pricing, and efficient trade management. FlipTrade Group provides tools that help traders analyze markets and make informed decisions."
    ],
    cta: "GET TRADING TOOLS",
    link: "#"
  },
  {
    __id: "03",
    title: "Reliable customer experience",
    description: [
      "Manage your trading account easily and receive support through multiple channels. FlipTrade Group focuses on delivering a smooth and responsive trading experience for traders in Nigeria."
    ],
    cta: "CUSTOMER SUPPORT",
    link: "#"
  },
  {
    __id: "04",
    title: "A trusted global trading brand",
    description: [
      "FlipTrade Group operates with a strong focus on transparency, security, and responsible trading. Our infrastructure is built to support traders globally while maintaining high standards in platform reliability and data protection."
    ],
    cta: "FINANCIAL STRENGTH",
    link: "#"
  }
];
const dataplatform = [
  {
    title: "Mobile App",
    description:
      "Trade anytime with FlipTrade Group’s mobile trading app. Monitor markets, manage positions, and execute trades in real time using a smooth and intuitive interface optimized for mobile devices.",
    link: "",
    class: "lg:left-[8%]"
  },
  {
    title: "Web Trader",
    description:
      "Trade directly from your browser with FlipTrade Group’s Web Trader. Access global markets without downloads, using fast execution, advanced charting, and a secure trading environment.",
    link: "",
    class: ""
  },
  {
    title: "TradingView",
    description:
      "Analyze market trends with advanced charting tools and technical indicators through TradingView. FlipTrade Group supports detailed analysis to help traders in Nigeria plan and manage trades more effectively.",
    link: "",
    class: ""
  },
  {
    title: "MetaTrader 5 (MT5)",
    description:
      "Trade forex and CFDs using MetaTrader 5 with FlipTrade Group. Access professional trading tools, multiple order types, and reliable execution across desktop, web, and mobile platforms.",
    link: "",
    class: "lg:left-[8%]"
  }
];
const tabsData = [
  {
    id: "platforms",
    title: "Platforms",
    description: [
      "Choose a trading platform that matches your trading style with FlipTrade Group. Access reliable trading solutions designed for stability, performance, and ease of use across devices.",
      "Trade forex and CFDs using Web Trader, MetaTrader 5, and mobile trading platforms that provide seamless access to global markets."
    ],
    button: "PLATFORMS",
    image: tradingplatformtab
  },
  {
    id: "academy",
    title: "Trading Academy",
    description: [
      "Improve your trading knowledge with FlipTrade Group’s Trading Academy. Learn essential concepts of forex and CFD trading through structured and easy-to-follow educational content.",
      "The academy helps traders in Nigeria build a strong foundation and develop a better understanding of global financial markets."
    ],
    button: "TRADING ACADEMY",
    image: tradingplatformtab
  },
  {
    id: "risk",
    title: "Risk Management",
    description: [
      "Understand the importance of managing risk when trading CFDs and forex with FlipTrade Group. Learn key principles that help control exposure and support responsible trading decisions.",
      "Our resources focus on helping traders in Nigeria trade with awareness and confidence in changing market conditions."
    ],
    button: "RISK MANAGEMENT",
    image: tradingplatformtab
  }
];
const pointstep = [
  {
    title: "Register",
    description: "to open an account"
  },
  {
    title: "Deposit",
    description: "safely and securely"
  },
  {
    title: "Start trading",
    description: "on web, mobile & desktop"
  }
];
const faqData = [
  {
    question: "What is forex trading and how does it work?",
    answer:
      "Forex trading involves buying and selling currency pairs to take advantage of price movements in the global foreign exchange market. FlipTrade Group allows traders in Nigeria to access forex markets through a secure online trading platform."
  },
  {
    question: "Can traders in Nigeria open an account with FlipTrade Group?",
    answer:
      "Yes. Traders in Nigeria can open an account with FlipTrade Group by completing the online registration and verification process, subject to eligibility requirements."
  },
  {
    question: "Which trading platforms are available for Nigeria traders?",
    answer:
      "FlipTrade Group offers MetaTrader 5 (MT5), Web Trader, and mobile trading platforms, allowing traders in Nigeria to access forex and CFD markets across multiple devices."
  },
  {
    question: "Is FlipTrade Group suitable for beginners in Nigeria?",
    answer:
      "Yes. FlipTrade Group supports beginner traders by offering a user-friendly platform, demo accounts, and educational resources to help new traders understand forex and CFD trading."
  },
  {
    question: "Do you offer a demo account for practice?",
    answer:
      "Yes. FlipTrade Group provides a demo account with virtual funds so traders can practice trading strategies and explore platform features without financial risk."
  },
  {
    question: "What markets can I trade with FlipTrade Group?",
    answer:
      "Traders can access global markets including forex pairs, indices, commodities, shares CFDs, and cryptocurrency CFDs, depending on market availability."
  },
  {
    question: "What is leverage in forex trading?",
    answer:
      "Leverage allows traders to control larger positions with a smaller amount of capital. While leverage can increase potential returns, it also increases risk and should be used carefully."
  },
  {
    question: "What risk management tools are available?",
    answer:
      "FlipTrade Group platforms include tools such as Stop Loss, Take Profit, and pending orders to help traders manage risk and control exposure."
  },
  {
    question: "How do deposits and withdrawals work for Nigeria traders?",
    answer:
      "Deposits and withdrawals are handled securely through the FlipTrade Group client portal after verification. Processing times and payment options may vary."
  },
  {
    question: "Is forex trading legal in Nigeria?",
    answer:
      "Forex trading regulations may change over time. Traders in Nigeria should ensure they understand local requirements and associated risks before trading. FlipTrade Group promotes informed and responsible trading."
  }
];


export const metadata = {
  title: "Best Forex Trading in Nigeria | FlipTrade Group",
  description:
    "Trade forex and CFDs with FlipTrade Group in Nigeria. Access global markets, advanced trading platforms, and risk-aware trading conditions.",
  keywords: [
    "best forex trading in Nigeria",
    "forex trading Nigeria",
    "online forex trading Nigeria",
    "forex trading platform Nigeria",
    "CFD trading Nigeria",
    "MT5 trading Nigeria",
    "MetaTrader 5 Nigeria",
    "trade forex in Nigeria",
    "forex and CFD trading Nigeria"
  ]
};


const page = () => {
  return (
    <div>
      <ForexBrokerBanner
        title={"Best Forex Trading in Nigeria"}
        description={
          "FlipTrade Group provides a reliable and advanced forex trading experience for traders in Nigeria. Trade major, minor, and exotic currency pairs using powerful trading tools, fast execution, and a stable platform designed for both beginner and experienced traders."
        }
      />
      <CustomersSay data={features} />
      <BrokerFeature
        title={"Why trade with  fliptradegroup.com"}
        description={`
        FlipTrade Group supports traders in Nigeria with a reliable and performance-focused trading environment built for global financial markets. Our platform combines modern technology, transparent trading conditions, and easy-to-use tools to help traders trade with confidence.
            <br />
          From advanced trading platforms to responsive customer support, FlipTrade Group is designed to meet the needs of both new and experienced traders looking for a dependable forex and CFD trading experience.
          `}
        data={featureCards}
      />
      <OurPlatform
        title={"Control. Power. Speed. Get the Edge"}
        description={
          "FlipTrade Group provides advanced trading platforms built for performance and reliability, giving traders in Nigeria smooth access to global forex and CFD markets."
        }
        data={dataplatform}
      />
      <div className="md:pt-10  max-w-7xl m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl m-auto gap-y-3">
          {pointstep.map((data, index) =>
            <div key={index}>
              <div className="m-auto w-[75px] xl:w-[90px] 2xl:w-[122px] h-[75px] xl:h-[90px] 2xl:h-[122px] bg-primary rounded-[50%] text-2xl xl:text-3xl 2xl:text-[40px] font_ternary flex items-center justify-center text-white">
                0{index + 1}
              </div>
              <div className="pt-3 md:pt-10">
                <div className="text-center">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl xl:pb-3 font-medium gradient_text text-center">
                    {data.title}
                  </p>
                  <span
                    className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px] text-white"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pt-6 md:pt-12 flex justify-center gap-6">
          <Link href={"https://client.fliptradegroup.com/trader/registration"}>
            <Button
              btn_name="Open Account"
              icon={firebtnicon}
              border_color="border-primary"
              btn_bg="bg-primary"
              shadow={true}
              text_color="text-white"
            />
          </Link>
        </div>
      </div>
      <div className="pt-12 md:pt-18">
        <div className="cus_container">
          <div className="text-center">
            <Title
              title={"Tight Spreads, Lightning <br/> Fast Execution"}
              color={"gradient_text"}
            />
          </div>
        </div>
        <Spreadtable />
      </div>
      <TradingEducation
        title={"Advanced CFD Trading Education"}
        description={
          "FlipTrade Group offers practical learning resources and trading tools to help traders in Nigeria understand forex and CFD markets with greater clarity."
        }
        tabsData={tabsData}
      />
      <div className="bg-theme">
        <div className="inn_container pt-12 pb-16">
          <div className="text-center">
            <Title
              title={"Frequently Asked <br/> Questions"}
              color={"text-white"}
            />
          </div>
          <div className="pt-8">
            <Faq faqData={faqData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
