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
    title: "FOREX MARKET",
    description:
      "Access a broad selection of major, minor, and exotic currency pairs with FlipTrade Group. Ranked among the Best Forex Brokers in Malaysia, the platform provides deep market liquidity, transparent pricing structures, and efficient order execution tailored for active forex traders in Malaysia.",
    class: "z-[4]",
    alt: "Global stock market indices"
  },
  {
    title: "FOREX TRADING",
    description:
      "Experience smooth and reliable Forex Trading in Malaysia within a stable and performance-focused trading ecosystem. As one of the Best Forex Brokers in Malaysia, FlipTrade Group combines fair trading conditions, consistent execution, and user-friendly systems that support both beginner and professional traders using the best platform for forex trading in Malaysia.",
    class: "xl:w-[120%] left-[-20%] z-[3]",
    alt: "Forex currency trading"
  },
  {
    title: "FOREX CFDs",
    description:
      "Trade global currencies through flexible forex CFD options designed for market adaptability. FlipTrade Group supports Forex Trading in Malaysia by allowing traders to track price movements, apply risk management strategies, and trade international currency pairs with enhanced flexibility using the best platform for forex trading in Malaysia.",
    class: "xl:w-[120%] left-[-20%] z-[2]",
    alt: "Global shares and stock trading"
  },
  {
    title: "FOREX PLATFORMS",
    description:
      "Choose from MT5, WebTrader, and mobile trading solutions engineered for speed and reliability. Built for traders seeking the best platform for forex trading in Malaysia, FlipTrade Group delivers real-time pricing, advanced charting tools, and uninterrupted access to global forex markets.",
    class: "xl:w-[120%] left-[-20%] z-[1]",
    alt: "Cryptocurrency CFD trading"
  }
];
const featureCards = [
  {
    __id: "01",
    title: "Fast & Reliable Forex Market Access",
    description: [
      "Trade a wide range of currency pairs with institutional-grade execution quality. As one of the Best Forex Brokers in Malaysia, FlipTrade Group ensures tight spreads, stable liquidity, and efficient order handling to support active trading strategies.",
    ],
    cta: "TRADE MARKETS",
    link: "#"
  },
  {
    __id: "02",
    title: "Advanced Tools for Market Analysis",
    description: [
      "Improve trading accuracy with professional analytical tools, live market data, and real-time pricing. FlipTrade Group enhances Forex Trading in Malaysia by empowering traders through the best platform for forex trading in Malaysia to identify opportunities and react quickly.",
    ],
    cta: "GET TRADING TOOLS",
    link: "#"
  },
  {
    __id: "03",
    title: "Seamless Trading Experience",
    description: [
      "Enjoy smooth account management and responsive customer support across all devices. Optimized for Forex Trading in Malaysia, FlipTrade Group delivers a consistent and reliable experience via web, mobile, and MT5 platforms.",
    ],
    cta: "CUSTOMER SUPPORT",
    link: "#"
  },
  {
    __id: "04",
    title: "Globally Trusted Trading Infrastructure",
    description: [
      "Built on strong security standards and transparent operations, FlipTrade Group supports traders worldwide. Ranked among the Best Forex Brokers in Malaysia, the platform is designed for secure, scalable, and long-term forex trading success.",
    ],
    cta: "FINANCIAL STRENGTH",
    link: "#"
  }
];
const dataplatform = [
  {
    title: "Mobile Forex Trading",
    description:
      "Trade anytime, anywhere with FlipTrade Group’s mobile solution. Supporting Forex Trading in Malaysia, the mobile platform allows traders to monitor markets, manage positions, and execute trades instantly with confidence.",
    link: "",
    class: "lg:left-[8%]"
  },
  {
    title: "Web Trader for Global Forex Markets",
    description:
      "Trade directly from your browser using FlipTrade Group’s Web Trader. Ideal for Forex Trading in Malaysia, it offers fast execution, advanced charts, real-time pricing, and secure access without downloads.",
    link: "",
    class: ""
  },
  {
    title: "Social & Copy Trading",
    description:
      "Learn from experienced traders through Social & Copy Trading features. Available on the best platform for forex trading in Malaysia, this option allows users to follow proven strategies and participate confidently in forex markets.",
    link: "",
    class: ""
  },
  {
    title: "MetaTrader 5 (MT5)",
    description:
      "Trade using the industry-standard MT5 platform with FlipTrade Group. Widely supported by the Best Forex Brokers in Malaysia, MT5 offers automated trading, advanced indicators, multiple order types, and stable execution across all devices.",
    link: "",
    class: "lg:left-[8%]"
  }
];
const tabsData = [
  {
    id: "platforms",
    title: "Platforms",
    description: [
      "Choose a trading platform that fits your trading style and strategy with FlipTrade Group. Access reliable and modern trading solutions designed to support performance, stability, and ease of use.",
      "Trade forex and CFDs using Web Trader, MetaTrader 5, and mobile trading apps that provide seamless access to global markets across devices."
    ],
    button: "Pip Calculator",
    image: tradingplatformtab,
    link: '/pip-calculator'
  },
  {
    id: "academy",
    title: "Trading Academy",
    description: [
      "Strengthen your trading knowledge with FlipTrade Group’s Trading Academy. Learn core concepts of forex and CFD trading through clear, easy-to-follow educational content.",
      "From understanding market basics to exploring practical trading approaches, the academy helps traders in Malaysia build skills and improve market awareness."
    ],
    button: "Economic Calendar",
    image: tradingplatformtab,
    link: '/economic-calendar'
  },
  {
    id: "risk",
    title: "Risk Management",
    description: [
      "Learn how to manage trading risk effectively with FlipTrade Group’s risk management resources. Understand key principles such as position sizing, market volatility, and responsible trade planning.",
      "Our educational content focuses on helping traders make informed decisions while trading CFDs and forex in changing market conditions."
    ],
    button: "Learn Trading",
    image: tradingplatformtab,
    link: '/learn-trading'
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
    question: "Is FlipTrade Group suitable for Forex Trading in Malaysia beginners?",
    answer:
      "Yes, Forex Trading in Malaysia is beginner-friendly with FlipTrade Group, offering learning tools, intuitive platforms, and support trusted by Best Forex Brokers in Malaysia."
  },
  {
    question: "What makes FlipTrade Group one of the Best Forex Brokers in Malaysia?",
    answer:
      "FlipTrade Group delivers transparent pricing, fast execution, advanced platforms, and strong security, positioning it among the Best Forex Brokers in Malaysia for reliable Forex Trading in Malaysia."
  },
  {
    question: "Why choose the best platform for forex trading in Malaysia?",
    answer:
      "Using the best platform for forex trading in Malaysia ensures faster execution, better tools, strong security, and smoother Forex Trading in Malaysia with trusted brokers."
  },
  {
    question: "Does FlipTrade Group support global forex markets?",
    answer:
      "Yes, FlipTrade Group provides global market access through the best platform for forex trading in Malaysia, supporting Forex Trading in Malaysia across major currency pairs."
  },
  {
    question: "How secure is Forex Trading in Malaysia with FlipTrade Group?",
    answer:
      "Forex Trading in Malaysia is secure with FlipTrade Group due to encrypted systems, transparent processes, and infrastructure standards followed by Best Forex Brokers in Malaysia."
  },
  {
    question: "Can I trade on mobile using the best platform for forex trading in Malaysia?",
    answer:
      "Yes, the best platform for forex trading in Malaysia supports mobile trading, allowing Forex Trading in Malaysia anytime with real-time data and fast execution."
  },
  {
    question: "Does FlipTrade Group offer MT5 for Malaysian traders?",
    answer:
      "FlipTrade Group supports MT5 as part of the best platform for forex trading in Malaysia, enabling advanced analysis and professional Forex Trading in Malaysia."
  },
  {
    question: "What tools help improve Forex Trading in Malaysia performance?",
    answer:
      "Forex Trading in Malaysia improves with advanced charts, calculators, economic calendars, and analytics provided by Best Forex Brokers in Malaysia like FlipTrade Group."
  },
  {
    question: "Why are Best Forex Brokers in Malaysia preferred over unregulated platforms?",
    answer:
      "Best Forex Brokers in Malaysia offer better liquidity, transparency, security, and execution quality, ensuring safer and more reliable Forex Trading in Malaysia."
  },
  {
    question: "Is long-term Forex Trading in Malaysia possible with FlipTrade Group?",
    answer:
      "Yes, FlipTrade Group supports long-term Forex Trading in Malaysia through stable platforms, education resources, and infrastructure trusted among Best Forex Brokers in Malaysia."
  }
];

export const metadata = {
  title: "Best Forex Brokers in Malaysia for 2026 | Trusted Trading Platform",
  description:
    "Compare the best forex brokers in Malaysia offering low spreads, advanced trading tools, and reliable platforms for beginners and professional traders.",
};

const page = () => {
  return (
    <div>
      <ForexBrokerBanner
        title={"Best Approached Forex Brokers in Malaysia"}
        description={
          "Choosing the right trading partner is essential for long-term success in currency markets. Among the Best Forex Brokers in Malaysia, FlipTrade Group delivers a balanced trading environment combining technology, transparency, and reliability. Designed for traders at every level, the platform supports informed decision-making, efficient execution, and secure access to global forex markets."
        }
      />
      <CustomersSay data={features} />
      <BrokerFeature
        title={"Why Traders Choose FlipTrade Group"}
        description={`
          FlipTrade Group offers a technology-driven trading environment trusted by traders worldwide. Recognized among the Best Forex Brokers in Malaysia, the platform blends advanced infrastructure, transparent trading conditions, and rapid execution to support smarter decision-making in Forex Trading in Malaysia.
          `}
        data={featureCards}
      />
      <OurPlatform
        title={"Trade Faster with Intelligent Forex Technology"}
        description={
          "FlipTrade Group delivers a high-performance trading environment designed for speed and precision. As the best platform for forex trading in Malaysia, it provides smooth market access, competitive trading conditions, and professional-grade tools for modern forex traders."
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
        title={'Forex Education & Live Market Intelligence'}
        description={'Build deeper market understanding with professional learning resources from FlipTrade Group. Created for traders using the best forex trading platform in Pakistan, these insights help users track market trends, apply risk management techniques, and trade with increased confidence.'}
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
