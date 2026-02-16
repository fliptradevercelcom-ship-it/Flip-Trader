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
    title: "FOREX MARKETS",
    description:
      "Trade major, minor, and exotic currency pairs with confidence through FlipTrade Group. As the best forex broker in India, we offer Indian traders deep liquidity, low spreads, and reliable execution across international forex markets designed for both new and active traders.",
    class: "z-[4]",
    alt: "Global stock market indices"
  },
  {
    title: "FOREX TRADING",
    description:
      "Enjoy a smooth and efficient trading experience with FlipTrade Group. Known as the best forex broker in India for beginners, our platform combines easy navigation, competitive pricing, and stable performance to support traders at every experience level.",
    class: "xl:w-[120%] left-[-20%] z-[3]",
    alt: "Forex currency trading"
  },
  {
    title: "FOREX CFDs",
    description:
      "Trade forex CFDs on leading global currencies using advanced market analysis tools. FlipTrade Group supports forex online trading in India, allowing traders to analyze trends, manage exposure, and capitalize on price movements with flexible trading strategies.",
    class: "xl:w-[120%] left-[-20%] z-[2]",
    alt: "Global shares and stock trading"
  },
  {
    title: "FOREX PLATFORMS",
    description:
      "Trade seamlessly across MT5, WebTrader, and mobile apps. As the best platform for forex trading in India, FlipTrade Group delivers real-time pricing, advanced charts, and secure access to global currency markets anytime, anywhere.",
    class: "xl:w-[120%] left-[-20%] z-[1]",
    alt: "Cryptocurrency CFD trading"
  }
];
const featureCards = [
  {
    __id: "01",
    title: "Access Global Forex Markets with Speed & Precision",
    description: [
      "Access global currency markets with institutional-grade execution. As the best forex broker in India, FlipTrade Group delivers tight spreads, consistent liquidity, and fast order processing built for precision-driven forex trading. ",
    ],
    cta: "TRADE MARKETS",
    link: "#"
  },
  {
    __id: "02",
    title: "Powerful Tools That Elevate Forex Trading Decisions",
    description: [
      "Leverage advanced charting, technical indicators, and live pricing tools. FlipTrade Group enhances forex trading in India by empowering traders with data-driven insights for better market timing and trade management.",
    ],
    cta: "GET TRADING TOOLS",
    link: "#"
  },
  {
    __id: "03",
    title: "Seamless Trading Experience Across All Devices",
    description: [
      "Manage trades effortlessly with responsive customer support and intuitive account controls. Whether using desktop or mobile, FlipTrade Group ensures a seamless experience on the best app for forex trading in India.",
    ],
    cta: "CUSTOMER SUPPORT",
    link: "#"
  },
  {
    __id: "04",
    title: "A Globally Trusted Forex Trading Partner",
    description: [
      "Operating with transparency and strong security standards, FlipTrade Group is trusted worldwide and recognized as the best forex broker in India, offering a safe, scalable, and reliable trading infrastructure.",
    ],
    cta: "FINANCIAL STRENGTH",
    link: "#"
  }
];
const dataplatform = [
  {
    title: "Mobile Forex Trading",
    description:
      "Trade on the move with FlipTrade Group’s mobile app. Ranked among the best forex trading apps in India, it allows traders to track markets, execute trades instantly, and manage portfolios through a secure and intuitive interface.",
    link: "",
    class: "lg:left-[8%]"
  },
  {
    title: "Web Trader for Forex Markets",
    description:
      "Trade directly from your browser using FlipTrade Group’s Web Trader. Ideal for forex online trading in India, it offers fast execution, real-time charts, and secure access to currency markets without software downloads.",
    link: "",
    class: ""
  },
  {
    title: "Social & Copy Trading for Forex",
    description:
      "Learn from experienced traders through Social & Copy Trading. Designed for users seeking the best online forex trading app in India, this feature allows you to follow strategies, copy trades automatically, and participate confidently in global forex markets.",
    link: "",
    class: ""
  },
  {
    title: "MetaTrader 5 (MT5) for Forex",
    description:
      "Trade using MetaTrader 5 with advanced indicators and automated strategies. FlipTrade Group integrates MT5 across desktop, web, and mobile, reinforcing its position as one of the top forex trading platforms in India.",
    link: "",
    class: "lg:left-[8%]"
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
const tabsData = [
  {
    id: "platforms",
    title: "Pip Calculator",
    description: [
      "Calculate profits and losses accurately using the Pip Calculator. Ideal for traders using the best forex trading app in India, it helps plan position sizes, control risk, and make informed trading decisions."
    ],
    button: "Pip Calculator",
    image: tradingplatformtab,
    link: '/pip-calculator'
  },
  {
    id: "academy",
    title: "Economic Calendar",
    description: [
      "Stay updated on key economic events with the Economic Calendar. A must-have for forex trading in India, it tracks global data releases, central bank decisions, and market-moving announcements in real time.",
    ],
    button: "Economic Calendar",
    image: tradingplatformtab,
    link: '/economic-calendar'
  },
  {
    id: "risk",
    title: "Learn Trading",
    description: [
      "Strengthen your skills with structured learning resources. Supporting users of the best app for forex trading in India, our educational content covers forex fundamentals, advanced strategies, and disciplined trading approaches.",
    ],
    button: "Learn Trading",
    image: tradingplatformtab,
    link: '/learn-trading'
  }
];
const faqData = [
  {
    question: "Why is FlipTrade Group considered the best forex broker in India?",
    answer:
      "FlipTrade Group is considered the best forex broker in India due to fast execution, tight spreads, advanced platforms, strong security, and professional trading support."
  },
  {
    question: "Is FlipTrade Group suitable as the best forex broker in India for beginners?",
    answer:
      "Yes, FlipTrade Group is suitable for beginners in India, offering simple platforms, educational resources, demo accounts, and responsive customer support."
  },
  {
    question: "Does FlipTrade Group offer the best forex trading app in India?",
    answer:
      "FlipTrade Group provides a powerful forex trading app in India with fast mobile execution, real-time pricing, advanced charts, and secure trading access."
  },
  {
    question: "Why is FlipTrade Group the best app for forex trading in India?",
    answer:
      "FlipTrade Group’s app supports web, mobile, and MT5 trading with smooth performance, intuitive controls, and reliable market connectivity."
  },
  {
    question: "Is FlipTrade Group the best platform for forex trading in India?",
    answer:
      "FlipTrade Group delivers a strong forex trading platform in India with stable infrastructure, automated trading support, and access to global currency markets."
  },
  {
    question: "How does FlipTrade Group support forex online trading in India?",
    answer:
      "FlipTrade Group supports forex online trading in India through secure platforms, competitive pricing, advanced risk tools, and uninterrupted market access."
  },
  {
    question: "Can Indian traders trust FlipTrade Group’s forex trading apps?",
    answer:
      "Indian traders rely on FlipTrade Group’s trading apps for strong security, transparent trading conditions, and consistent performance across devices."
  },
  {
    question: "What makes FlipTrade Group one of the top forex trading platforms in India?",
    answer:
      "FlipTrade Group ranks among top forex trading platforms in India due to fast execution, professional tools, low spreads, and reliable trading technology."
  },
  {
    question: "Does FlipTrade Group offer a beginner-friendly forex trading experience in India?",
    answer:
      "Yes, FlipTrade Group offers a beginner-friendly forex trading experience in India with learning tools, simple navigation, demo access, and guided resources."
  },
  {
    question: "Why should traders choose FlipTrade Group for forex trading in India?",
    answer:
      "Traders choose FlipTrade Group for forex trading in India because it combines performance, security, education, and advanced technology in one platform."
  }
];

export const metadata = {
  title: "Best Forex Broker in India | Trade Securely with FlipTrade Group",
  description:
    "Discover the best forex broker in India for fast execution, tight spreads, and secure trading. Access global currency markets, MT5 tools, and professional trading support.",
};

const page = () => {
  return (
    <div>
      <ForexBrokerBanner
        title={"Best Forex Broker in India For Confident Trading"}
        description={
          "FlipTrade Group is widely recognized as the best forex broker in India, delivering competitive spreads, powerful trading technology, and secure market access. With fast execution, transparent pricing, and beginner-friendly tools, FlipTrade Group helps Indian traders trade smarter and scale confidently across global forex markets every day."
        }
      />
      <CustomersSay data={features} />
      <BrokerFeature
        title={"Why Traders Across India Trust FlipTrade Group"}
        description={`
          FlipTrade Group offers a performance-focused trading environment trusted by traders nationwide. Ranked among the top forex trading platforms in India, our ecosystem combines modern technology, fair pricing, and fast execution to support confident trading decisions.
          `}
        data={featureCards}
      />
      <OurPlatform
        title={"High-Performance Forex Trading Built for Speed"}
        description={
          "FlipTrade Group provides high-performance trading platforms designed for speed and reliability. Recognized as the best platform for forex trading in India, we deliver professional tools, competitive pricing, and uninterrupted access to global forex markets."
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
        title={'Build Strong Forex Trading Knowledge'}
        description={'Build strong market knowledge with FlipTrade Group’s expert resources. Designed for traders using the best forex broker in India, our tools help you understand market trends, manage risk, and trade with confidence.'}
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
