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
      "Take positions on major global indices with FlipTrade Group. Trade popular indices covering US, European, and Asian markets with competitive spreads, smooth execution, and reliable market access designed for active traders.",
    class: "z-[4]",
    alt: "Global stock market indices"
  },
  {
    title: "FOREX Trading",
    description:
      "Trade the global forex market with FlipTrade Group and access a wide range of currency pairs, including major and minor FX pairs. Enjoy fast execution, tight spreads, and a stable trading environment built for traders in Pakistan.",
    class: "xl:w-[120%] left-[-20%] z-[3]",
    alt: "Forex currency trading"
  },
  {
    title: "SHARES CFDs",
    description:
      "Trade CFDs on leading global companies through FlipTrade Group’s advanced trading platform. Access international stock markets with flexible trading hours, transparent pricing, and tools that support informed trading decisions.",
    class: "xl:w-[120%] left-[-20%] z-[2]",
    alt: "Global shares and stock trading"
  },
  {
    title: "CRYPTO Trading",
    description:
      "Trade popular cryptocurrency CFDs with FlipTrade Group and access digital markets throughout the week. Trade major crypto assets using a secure platform with advanced charting and risk-aware trading conditions.",
    class: "xl:w-[120%] left-[-20%] z-[1]",
    alt: "Cryptocurrency CFD trading"
  }
];
const featureCards = [
  {
    __id: "01",
    title: "Advanced markets & execution",
    description: [
      "Trade a wide range of global markets with FlipTrade Group, including forex, indices, shares CFDs, and cryptocurrencies. Benefit from smooth order execution, competitive trading conditions, and a stable platform designed for active market participation.",
    ],
    cta: "TRADE MARKETS",
    link: "#"
  },
  {
    __id: "02",
    title: "Tools built for smarter trading",
    description: [
      "Use powerful trading tools and platforms offered by FlipTrade Group to analyze markets and manage trades efficiently. Access advanced charts, real-time pricing, and features that help traders make informed trading decisions.",
    ],
    cta: "GET TRADING TOOLS",
    link: "#"
  },
  {
    __id: "03",
    title: "Reliable customer support",
    description: [
      "FlipTrade Group provides dedicated customer support through multiple channels to assist traders whenever needed. Manage your trading account easily and receive timely assistance to ensure a smooth trading experience.",
    ],
    cta: "CUSTOMER SUPPORT",
    link: "#"
  },
  {
    __id: "04",
    title: "A trusted global trading brand",
    description: [
      "FlipTrade Group operates with a strong focus on transparency, security, and responsible trading. Our services are built to support traders worldwide while maintaining high standards in technology, data protection, and risk-aware trading practices.",
    ],
    cta: "FINANCIAL STRENGTH",
    link: "#"
  }
];
const dataplatform = [
  {
    title: "Mobile App",
    description:
      "Trade anytime, anywhere with FlipTrade Group’s mobile trading app. Access real-time markets, manage trades, and monitor positions with intuitive tools designed for smooth performance on the move.",
    link: "",
    class: "lg:left-[8%]"
  },
  {
    title: "Web Trader",
    description:
      "Trade directly from your browser with FlipTrade Group’s Web Trader. Enjoy fast execution, advanced charting, and seamless access to global markets without downloading additional software.",
    link: "",
    class: ""
  },
  {
    title: "TradingView",
    description:
      "Analyze markets with advanced charting and technical tools through TradingView integration. FlipTrade Group supports detailed market analysis to help traders plan and manage trades effectively.",
    link: "",
    class: ""
  },
  {
    title: "MetaTrader 5 (MT5)",
    description:
      "Trade forex and CFDs using MetaTrader 5 with FlipTrade Group. Access professional-grade tools, multiple order types, and reliable execution on one of the world’s most widely used trading platforms.",
    link: "",
    class: "lg:left-[8%]"
  }
];
const tabsData = [
  {
    id: "platforms",
    title: "Platforms",
    description: [
      "Find a trading platform that matches your trading style and strategy with FlipTrade Group. Access modern trading solutions designed for performance, stability, and ease of use across multiple devices.",
      "Choose from Web Trader, MetaTrader 5, and mobile trading apps to trade forex and CFDs with reliable execution, advanced charting, and seamless market access—anytime, anywhere."
    ],
    button: "PLATFORMS",
    image: tradingplatformtab
  },
  {
    id: "academy",
    title: "Trading Academy",
    description: [
      "Build a strong foundation in CFD trading with FlipTrade Group’s Trading Academy. Learn essential trading concepts through structured guides and educational content designed for clarity and ease of understanding..",
      "From basic market concepts to practical trading strategies, the academy helps traders improve their knowledge and develop skills needed to navigate global financial markets with confidence."
    ],
    button: "TRADING ACADEMY",
    image: tradingplatformtab
  },
  {
    id: "risk",
    title: "Risk Management",
    description: [
      "Understand the importance of managing risk in CFD trading with FlipTrade Group’s risk management resources. Learn how to control exposure, manage positions responsibly, and approach trading with a risk-aware mindset.",
      "Our educational content focuses on helping traders understand market volatility and make informed decisions while trading forex and CFDs."
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
    question: "What is forex trading and CFD trading?",
    answer:
      "Forex trading focuses on buying and selling currency pairs, while CFD trading lets you trade price movements of markets like indices, commodities, shares, and cryptocurrencies without owning the underlying asset. With FlipTrade Group, traders in Pakistan can access global markets through one platform."
  },
  {
    question: "Can traders in Pakistan open an account with FlipTrade Group?",
    answer:
      "Yes. Traders in Pakistan can open an account with FlipTrade Group by completing the online registration and required verification steps. Eligibility may vary based on local requirements and internal checks."
  },
  {
    question: "Which trading platforms are available on FlipTrade Group?",
    answer:
      "FlipTrade Group provides access to MetaTrader 5 (MT5) and web-based trading solutions, designed for desktop and mobile use so you can trade forex and CFDs with flexibility."
  },
  {
    question: "Is FlipTrade Group suitable for beginners in Pakistan?",
    answer:
      "Yes. FlipTrade Group supports beginners with a user-friendly trading experience and educational resources. New traders can start with a demo account to understand the platform and practice basic trading strategies."
  },
  {
    question: "Do you offer a demo account for practice?",
    answer:
      "Yes. FlipTrade Group offers a demo account with virtual funds so traders can practice forex and CFD trading, test strategies, and explore platform features before moving to live trading."
  },
  {
    question: "What markets can I trade with FlipTrade Group?",
    answer:
      "With FlipTrade Group, you can trade a range of global markets including forex pairs, indices, commodities, shares CFDs, and crypto CFDs—depending on account type and market availability."
  },
  {
    question: "What is leverage in forex trading, and is it risky?",
    answer:
      "Leverage allows you to open larger positions with a smaller amount of capital. While it can amplify gains, it can also amplify losses. FlipTrade Group encourages risk-aware trading and using leverage responsibly."
  },
  {
    question: "What risk management features can I use on the platform?",
    answer:
      "FlipTrade Group platforms support common risk management tools such as Stop Loss, Take Profit, and pending orders. These tools help traders manage exposure, plan entries/exits, and control downside risk."
  },
  {
    question: "How do deposits and withdrawals work for Pakistan traders?",
    answer:
      "Deposits and withdrawals are processed through the FlipTrade Group client portal after account verification. Available payment methods and processing times may depend on your selected method and internal compliance checks."
  },
  {
    question: "Is forex and CFD trading legal in Pakistan?",
    answer:
      "Regulations can vary and may change over time. Traders in Pakistan should ensure they understand local rules and the risks involved before trading. FlipTrade Group provides risk disclosures and encourages informed, responsible trading."
  }
];
export const metadata = {
  title: "Best Forex Trading Platform in Pakistan | FlipTrade Group",
  description:
    "Trade forex and CFDs with FlipTrade Group, a reliable trading platform for Pakistan traders. Access global markets, MT5 tools, and risk-aware trading.",
  keywords: [
    "best forex trading platform in Pakistan",
    "forex trading Pakistan",
    "online forex trading Pakistan",
    "CFD trading platform Pakistan",
    "trade forex in Pakistan",
    "MT5 trading platform Pakistan",
    "forex and CFD trading Pakistan",
    "currency trading platform Pakistan",
    "global forex markets",
    "risk aware forex trading"
  ]
};

const page = () => {
  return (
    <div>
      <ForexBrokerBanner
        title={"Best Forex Trading Platform in Pakistan"}
        description={
          "FlipTrade Group provides a secure and advanced forex trading platform for traders in Pakistan. Trade major, minor, and exotic currency pairs with fast execution, competitive spreads, and powerful tools on a reliable, user-friendly platform."
        }
      />
      <CustomersSay data={features} />
      <BrokerFeature
        title={"Why trade with  fliptradegroup.com"}
        description={`
          FlipTrade Group supports traders in Pakistan with a reliable and advanced trading environment built for today’s global markets. Our platform focuses on transparency, performance, and ease of use, helping traders access forex and CFD markets with confidence.
            <br />
          From modern trading tools to responsive support, FlipTrade Group is designed to meet the needs of both new and experienced traders.
          `}
        data={featureCards}
      />
      <OurPlatform
        title={"Control. Power. Speed. Get the Edge"}
        description={
          "FlipTrade Group’s advanced trading platforms give traders in Pakistan full control, powerful performance, and fast execution. Trade confidently with technology designed to support smarter decisions and efficient market access."
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
          <Link
           href={'https://client.fliptradegroup.com/trader/registration'}
           >
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
        title={'Advanced CFD Trading Education'}
        description={'Our award-winning app and platforms offer full control, powerful performance, and fast execution to keep you ahead.'}
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
