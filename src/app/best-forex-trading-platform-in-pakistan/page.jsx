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
      "Access a wide range of major, minor, and exotic currency pairs through FlipTrade Group. Recognized as the best broker for forex trading in Pakistan, the platform offers deep liquidity, transparent pricing, and fast order execution designed for serious and active forex traders.",
    class: "z-[4]",
    alt: "Global stock market indices"
  },
  {
    title: "FOREX TRADING",
    description:
      "Trade forex efficiently in a stable and performance-focused environment. Ranked among the best forex brokers in Pakistan, FlipTrade Group combines fair pricing, reliable trade execution, and user-friendly systems that support both new traders and experienced professionals using the best forex trading platform in Pakistan.",
    class: "xl:w-[120%] left-[-20%] z-[3]",
    alt: "Forex currency trading"
  },
  {
    title: "FOREX CFDs",
    description:
      "Explore global currency markets through forex CFDs with flexible trading conditions. FlipTrade Group enables traders using the best forex trading app in Pakistan to track price movements, apply risk management strategies, and trade global currencies with greater control and confidence.",
    class: "xl:w-[120%] left-[-20%] z-[2]",
    alt: "Global shares and stock trading"
  },
  {
    title: "FOREX PLATFORMS",
    description:
      "Choose from MT5, WebTrader, and mobile trading solutions tailored for speed and security. Designed for traders seeking the best app for forex trading in Pakistan, FlipTrade Group delivers real-time data, advanced charting tools, and uninterrupted access to international forex markets.",
    class: "xl:w-[120%] left-[-20%] z-[1]",
    alt: "Cryptocurrency CFD trading"
  }
];
const featureCards = [
  {
    __id: "01",
    title: "High-Performance Forex Access & Execution",
    description: [
      "Trade across a broad range of global currency pairs with fast, institutional-level execution. As the best broker for forex trading in Pakistan, FlipTrade Group delivers competitive spreads, reliable liquidity, and efficient order handling built to support active traders and high-volume forex strategies.",
    ],
    cta: "TRADE MARKETS",
    link: "#"
  },
  {
    __id: "02",
    title: "Intelligent Trading Tools for Market Precision",
    description: [
      "Refine your trading approach using advanced analytical tools, live pricing, and real-time market data. FlipTrade Group strengthens Forex Online Trading through the best forex trading platform in Pakistan, enabling traders to spot opportunities faster and react decisively to changing market conditions.",
    ],
    cta: "GET TRADING TOOLS",
    link: "#"
  },
  {
    __id: "03",
    title: "User-Focused Trading Experience",
    description: [
      "Experience hassle-free trading with simplified account management and dedicated customer support. Optimized for users of the best forex trading app in Pakistan, FlipTrade Group provides a stable and consistent trading environment across mobile, web, and MT5 platforms.",
    ],
    cta: "CUSTOMER SUPPORT",
    link: "#"
  },
  {
    __id: "04",
    title: "Globally Trusted Forex Trading Infrastructure",
    description: [
      "Built on transparency, security, and responsible trading practices, FlipTrade Group serves traders worldwide. Recognized as one of the best forex brokers in Pakistan, the platform is designed to support secure, scalable, and long-term forex trading success.",
    ],
    cta: "FINANCIAL STRENGTH",
    link: "#"
  }
];
const dataplatform = [
  {
    title: "Mobile Forex Trading",
    description:
      "Trade currencies on the go using FlipTrade Group’s mobile solution. Recognized as the best forex trading app in Pakistan, the mobile platform allows traders to track markets, manage open positions, and execute trades instantly from anywhere.",
    link: "",
    class: "lg:left-[8%]"
  },
  {
    title: "Web Trader for Forex Markets",
    description:
      "Access global forex markets directly through your browser with FlipTrade Group’s Web Trader. Ideal for traders choosing the best broker for forex trading in Pakistan, it offers fast execution, real-time quotes, advanced charts, and secure access without software installation.",
    link: "",
    class: ""
  },
  {
    title: "Social & Copy Trading for Forex",
    description:
      "Learn from experienced traders using Social & Copy Trading features. Available through the best forex trading platform in Pakistan, this option allows traders to follow proven strategies, copy trades automatically, and participate confidently in forex markets.",
    link: "",
    class: ""
  },
  {
    title: "MetaTrader 5 (MT5)",
    description:
      "Trade with industry-leading MetaTrader 5 technology through FlipTrade Group. As part of the best forex trading app in Pakistan, MT5 delivers advanced indicators, automated trading capabilities, multiple order types, and reliable execution across all devices.",
    link: "",
    class: "lg:left-[8%]"
  }
];
const tabsData = [
  {
    id: "platforms",
    title: "Pip Value Calculator",
    description: [
      "Calculate potential profits and losses accurately with FlipTrade Group’s Pip Calculator. Designed for traders using Forex brokers in Singapore, it helps you understand pip values instantly, plan position sizes effectively, and manage risk with confidence before every trade."
    ],
    button: "Pip Calculator",
    image: tradingplatformtab,
    link: '/pip-calculator'
  },
  {
    id: "academy",
    title: "Economic Calendar",
    description: [
      "Stay informed about global economic developments that influence currency movements. A must-have for traders using the best forex trading app in Pakistan, the Economic Calendar delivers real-time updates on major announcements, policy decisions, and market-impacting data.",
    ],
    button: "Economic Calendar",
    image: tradingplatformtab,
    link: '/economic-calendar'
  },
  {
    id: "risk",
    title: "Forex Learning Programs",
    description: [
      "Advance your trading skills through organized educational content covering beginner to advanced topics. Supporting Forex Online Trading via the best app for forex trading in Pakistan, these learning materials help traders build disciplined strategies and long-term trading confidence.",
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
    question: "What makes FlipTrade Group the best forex trading platform in Pakistan?",
    answer:
      "FlipTrade Group combines fast execution, advanced tools, and security, making it the best forex trading platform in Pakistan for beginners and professional traders alike."
  },
  {
    question: "Why is FlipTrade Group considered the best forex broker in Pakistan?",
    answer:
      "As the best forex broker in Pakistan, FlipTrade Group offers transparent pricing, tight spreads, strong liquidity, and reliable platforms supporting confident forex trading decisions."
  },
  {
    question: "Is FlipTrade Group the best broker for forex trading in Pakistan for beginners?",
    answer:
      "Yes, FlipTrade Group is the best broker for forex trading in Pakistan, providing easy onboarding, learning resources, and tools designed for new and growing forex traders."
  },
  {
    question: "Which is the best app for forex trading in Pakistan?",
    answer:
      "FlipTrade Group offers the best app for forex trading in Pakistan, allowing traders to monitor markets, execute trades, and manage accounts securely from anywhere."
  },
  {
    question: "How does the best forex trading app in Pakistan help manage risk?",
    answer:
      "The best forex trading app in Pakistan by FlipTrade Group includes risk tools, real-time pricing, and calculators to help traders plan positions and control losses."
  },
  {
    question: "Can I trade globally using the best forex trading platform in Pakistan?",
    answer:
      "Yes, the best forex trading platform in Pakistan provides access to major, minor, and exotic currency pairs across global forex markets with reliable execution."
  },
  {
    question: "Does the best forex broker in Pakistan support MT5 trading?",
    answer:
      "The best forex broker in Pakistan, FlipTrade Group, supports MetaTrader 5 with advanced indicators, automation features, and multi-device access for forex traders."
  },
  {
    question: "Why choose the best broker for forex trading in Pakistan over local platforms?",
    answer:
      "Choosing the best broker for forex trading in Pakistan ensures better liquidity, stronger security, transparent pricing, and access to global trading technology and tools."
  },
  {
    question: "Is Forex Online Trading safe with the best app for forex trading in Pakistan?",
    answer:
      "Forex Online Trading is secure with the best app for forex trading in Pakistan, offering encrypted systems, regulated processes, and reliable infrastructure for traders."
  },
  {
    question: "How does the best forex trading app in Pakistan support learning?",
    answer:
      "The best forex trading app in Pakistan includes education tools, market insights, and calculators that help traders build skills and improve long-term trading performance."
  }
];
export const metadata = {
  title: "Best Forex Trading Platform in Pakistan | FlipTrade Group",
  description:
    "Trade global forex markets from Pakistan using MT5, WebTrader, and mobile apps. Enjoy tight spreads, advanced tools, and a secure trading environment.",
};

const page = () => {
  return (
    <div>
      <ForexBrokerBanner
        title={"Best Forex Trading Platform in Pakistan"}
        description={
          "FlipTrade Group is widely regarded as the best forex trading platform in Pakistan, built to meet the needs of modern traders. As a leading best forex broker in Pakistan, it delivers competitive spreads, high-speed execution, secure infrastructure, and dependable customer support. FlipTrade Group provides access to the best forex trading app in Pakistan for consistent and confident global trading."
        }
      />
      <CustomersSay data={features} />
      <BrokerFeature
        title={"Why Traders Choose FlipTrade Group"}
        description={`
          FlipTrade Group offers a technology-driven forex trading ecosystem trusted by traders worldwide. Recognized as the best forex broker in Pakistan, the platform blends advanced infrastructure, transparent trade conditions, and rapid execution to help traders make informed decisions in global forex markets.
          `}
        data={featureCards}
      />
      <OurPlatform
        title={"Smart Forex Trading, Faster Execution"}
        description={
          "FlipTrade Group provides a high-performance trading environment built for speed and accuracy. As the best forex trading platform in Pakistan, it enables smooth access to global markets, competitive trading conditions, and professional-level tools for forex traders."
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
