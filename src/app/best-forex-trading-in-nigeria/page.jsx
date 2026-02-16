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
      "Trade across global financial markets with access to major, minor, and exotic currency pairs. As a trusted name among the Best Forex Brokers in Nigeria, FlipTrade Group provides deep liquidity, fair pricing, and rapid trade execution. The platform is designed for traders looking for the best platform for forex trading in Nigeria, ensuring stability and accuracy in every trade.",
    class: "z-[4]",
    alt: "Global stock market indices"
  },
  {
    title: "FOREX TRADING",
    description:
      "Experience smooth and efficient Forex Trading in Nigeria through a performance-driven trading environment. FlipTrade Group delivers reliable execution, transparent pricing, and intuitive trading systems. Ranked among the Best Forex Brokers in Nigeria, it supports traders at every level using the best platform for forex trading in Nigeria.",
    class: "xl:w-[120%] left-[-20%] z-[3]",
    alt: "Forex currency trading"
  },
  {
    title: "FOREX CFDs",
    description:
      "Trade global currencies through flexible forex CFD instruments with full market visibility. FlipTrade Group empowers traders engaged in best forex trading in Nigeria to analyze price movements, manage risk effectively, and trade international currencies with confidence and control.",
    class: "xl:w-[120%] left-[-20%] z-[2]",
    alt: "Global shares and stock trading"
  },
  {
    title: "FOREX PLATFORMS",
    description:
      "Trade seamlessly on MT5, WebTrader, and mobile platforms engineered for speed and stability. Built for traders looking for the best platform for forex trading in Nigeria, FlipTrade Group delivers advanced charts, live market data, and uninterrupted global market access.",
    class: "xl:w-[120%] left-[-20%] z-[1]",
    alt: "Cryptocurrency CFD trading"
  }
];
const featureCards = [
  {
    __id: "01",
    title: "High-Speed Market Access & Execution",
    description: [
      "Trade global currency pairs with institutional-grade execution speeds. As a leader in best forex trading in Nigeria, FlipTrade Group provides competitive spreads, strong liquidity, and efficient order processing designed for active and high-volume traders."
    ],
    cta: "TRADE MARKETS",
    link: "#"
  },
  {
    __id: "02",
    title: "Advanced Trading Tools for Smarter Decisions",
    description: [
      "Analyze markets using live pricing, technical indicators, and real-time data. Supporting Forex Trading in Nigeria, FlipTrade Group enhances decision-making through the best platform for forex trading in Nigeria, helping traders respond quickly to market opportunities."
    ],
    cta: "GET TRADING TOOLS",
    link: "#"
  },
  {
    __id: "03",
    title: "Seamless & User-Friendly Trading Experience",
    description: [
      "Enjoy a smooth trading journey with simplified account management and responsive customer support. Optimized for traders choosing the best platform for forex trading in Nigeria, FlipTrade Group ensures consistent performance across mobile, web, and MT5 platforms."
    ],
    cta: "CUSTOMER SUPPORT",
    link: "#"
  },
  {
    __id: "04",
    title: "Secure & Globally Trusted Trading Environment",
    description: [
      "Built on strong security protocols and transparent operations, FlipTrade Group supports responsible Forex Trading in Nigeria. Ranked among the Best Forex Brokers in Nigeria, the platform is designed for long-term trading confidence and scalability."
    ],
    cta: "FINANCIAL STRENGTH",
    link: "#"
  }
];
const dataplatform = [
  {
    title: "Mobile Forex Trading",
    description:
      "Trade anytime, anywhere using FlipTrade Group’s mobile trading solution. Ideal for traders involved in Forex Trading in Nigeria, the mobile platform enables instant trade execution, market tracking, and position management on the go.",
    link: "",
    class: "lg:left-[8%]"
  },
  {
    title: "Web Trader for Global Forex Markets",
    description:
      "Trade directly from your browser with FlipTrade Group’s Web Trader. Perfect for those seeking the best platform for forex trading in Nigeria, it provides fast execution, real-time quotes, advanced charting, and secure access without downloads.",
    link: "",
    class: ""
  },
  {
    title: "Social & Copy Trading",
    description:
      "Learn and grow by following experienced traders through Social & Copy Trading. Available on the best platform for forex trading in Nigeria, this feature allows users to copy proven strategies and participate confidently in Forex Trading in Nigeria.",
    link: "",
    class: ""
  },
  {
    title: "MetaTrader 5 (MT5) Trading",
    description:
      "Access global forex markets using the powerful MetaTrader 5 platform. Integrated into FlipTrade Group’s ecosystem, MT5 supports automated trading, advanced indicators, and multiple order types—making it ideal for best forex trading in Nigeria.",
    link: "",
    class: "lg:left-[8%]"
  }
];
const tabsData = [
  {
    id: "platforms",
    title: "Pip Value Calculator",
    description: [
      "Estimate trade outcomes accurately using the Pip Value Calculator. A valuable tool for traders choosing the Best Forex Brokers in Nigeria, it simplifies position sizing and strengthens risk management strategies."
    ],
    button: "Pip Calculator",
    image: tradingplatformtab,
    link: '/pip-calculator'
  },
  {
    id: "academy",
    title: "Economic Calendar",
    description: [
      "Track important global economic events that impact currency markets. Essential for best forex trading in Nigeria, the Economic Calendar provides real-time updates on policy decisions, economic data, and major announcements."
    ],
    button: "Economic Calendar",
    image: tradingplatformtab,
    link: '/economic-calendar'
  },
  {
    id: "risk",
    title: "Forex Learning Programs",
    description: [
      "Develop your trading skills with structured educational programs covering beginner to advanced strategies. Supporting Forex Trading in Nigeria, these resources help traders build discipline, confidence, and long-term success using the best platform for forex trading in Nigeria.",
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
    question: "Why choose FlipTrade Group in Nigeria?",
    answer:
      "FlipTrade Group offers secure trading, fast execution, advanced tools, and education, making it ideal for best forex trading in Nigeria for beginners and traders alike."
  },
  {
    question: "Is FlipTrade Group a trusted broker in Nigeria?",
    answer:
      "Yes, FlipTrade Group ranks among the Best Forex Brokers in Nigeria due to transparent pricing, reliable platforms, strong security, and professional support for traders nationwide."
  },
  {
    question: "What makes it the best trading platform?",
    answer:
      "It provides MT5, WebTrader, mobile access, real-time pricing, and advanced charts, making it the best platform for forex trading in Nigeria today for all traders."
  },
  {
    question: "Can beginners trade easily with FlipTrade Group in Nigeria?",
    answer:
      "Beginners can start Forex Trading in Nigeria easily using FlipTrade Group with demo accounts, learning resources, simple tools, and guidance from experts for confident trading."
  },
  {
    question: "How secure is the platform?",
    answer:
      "FlipTrade Group ensures best forex trading in Nigeria through strong security systems, data protection, fund segregation, and responsible practices trusted by traders across Nigerian markets."
  },
  {
    question: "Does FlipTrade Group in Nigeria support mobile and MT5?",
    answer:
      "Yes, the best platform for forex trading in Nigeria supports MT5, WebTrader, and mobile apps, enabling seamless Forex Trading in Nigeria across devices anytime anywhere."
  },
  {
    question: "What markets are available?",
    answer:
      "Traders access major, minor, and exotic currency pairs globally while engaging in Forex Trading in Nigeria with competitive spreads and deep liquidity on trusted platforms."
  },
  {
    question: "Why do professionals prefer FlipTrade Group in Nigeria?",
    answer:
      "Professionals choose FlipTrade Group for best forex trading in Nigeria because of fast execution, advanced tools, transparency, and reliable infrastructure offered to serious traders nationwide."
  },
  {
    question: "Are analytics tools available?",
    answer:
      "Yes, analytics and tools help traders succeed with Forex Trading in Nigeria on the best platform for forex trading in Nigeria online using real-time insights."
  },
  {
    question: "How does FlipTrade support long-term growth in Nigeria?",
    answer:
      "FlipTrade Group supports long-term success in best forex trading in Nigeria through education, technology, market insights, and reliable trading conditions for consistent trader growth nationwide."
  }
];


export const metadata = {
  title: "Best Forex Trading in Nigeria | Top Platform for Online Forex",
  description:
    "Start forex trading in Nigeria with a secure platform, real-time charts, and global currency access. Trade confidently with professional tools and fast execution.",
};


const page = () => {
  return (
    <div>
      <ForexBrokerBanner
        title={"Best Forex Trading in Nigeria for Faster Profits"}
        description={
          "FlipTrade Group stands out as a reliable choice for traders seeking the best forex trading in Nigeria. Built for performance, security, and transparency, the platform supports both beginners and professional traders. Recognized among the Best Forex Brokers in Nigeria, FlipTrade Group offers advanced tools, competitive spreads, and seamless execution, making Forex Trading in Nigeria more accessible and efficient than ever."
        }
      />
      <CustomersSay data={features} />
      <BrokerFeature
        title={"Why trade with  FlipTrade Group"}
        description={`
           FlipTrade Group delivers a modern, technology-focused trading ecosystem trusted by traders worldwide. Recognized among the Best Forex Brokers in Nigeria, the platform combines cutting-edge infrastructure, transparent conditions, and fast execution to support confident Forex Trading in Nigeria.
          `}
        data={featureCards}
      />
      <OurPlatform
        title={"Smart Forex Trading with Faster Execution"}
        description={
          "FlipTrade Group offers a high-performance trading environment focused on speed, accuracy, and reliability. Supporting best forex trading in Nigeria, the platform delivers professional tools, competitive conditions, and smooth access to global markets."
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
        title={"Forex Learning & Real-Time Market Intelligence"}
        description={
          "Enhance your trading knowledge with professional learning resources from FlipTrade Group. Designed for traders focused on Forex Trading in Nigeria, these tools help analyze trends, manage risk, and improve trading performance on the best platform for forex trading in Nigeria."
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
