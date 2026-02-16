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
      "Trade major, minor, and exotic currency pairs with FlipTrade Group. As trusted Forex brokers in Singapore, we provide global market access, tight spreads, fast execution, and transparent trading conditions built for active and professional traders worldwide.",
    class: "z-[4]",
    alt: "Global stock market indices"
  },
  {
    title: "FOREX TRADING",
    description:
      "Experience reliable and efficient trading with FlipTrade Group. Recognized among the Best Forex Brokers in Singapore, we offer competitive pricing, smooth order execution, and a stable trading environment suitable for both beginners and experienced forex traders.",
    class: "xl:w-[120%] left-[-20%] z-[3]",
    alt: "Forex currency trading"
  },
  {
    title: "FOREX CFDs",
    description:
      "Trade forex CFDs on leading global currencies using advanced tools and analytics. FlipTrade Group supports Forex Online Trading in Singapore, allowing traders to analyze price movements, manage risk effectively, and benefit from flexible trading opportunities.",
    class: "xl:w-[120%] left-[-20%] z-[2]",
    alt: "Global shares and stock trading"
  },
  {
    title: "FOREX PLATFORMS",
    description:
      "Trade forex seamlessly across MT5, WebTrader, and mobile platforms. Designed for performance and security, FlipTrade Group supports Forex Trading in Singapore with powerful charting, real-time pricing, and reliable access to global currency markets.",
    class: "xl:w-[120%] left-[-20%] z-[1]",
    alt: "Cryptocurrency CFD trading"
  }
];
const featureCards = [
  {
    __id: "01",
    title: "Advanced Forex Markets & Execution",
    description: [
      "Trade major, minor, and exotic currency pairs with institutional-grade execution. As leading Forex brokers in Singapore, FlipTrade Group provides tight spreads, stable liquidity, and smooth order execution built for active and professional forex traders.",
    ],
    cta: "TRADE MARKETS",
    link: "#"
  },
  {
    __id: "02",
    title: "Smart Tools for Smarter Forex Trading",
    description: [
      "Access modern trading tools that support technical analysis, real-time pricing, and efficient trade management. FlipTrade Group enhances Forex Online Trading in Singapore by equipping traders with insights needed to analyze markets and act decisively.",
    ],
    cta: "GET TRADING TOOLS",
    link: "#"
  },
  {
    __id: "03",
    title: "Reliable Trader Experience",
    description: [
      "Manage your forex trading account seamlessly with responsive support and easy account controls. FlipTrade Group ensures a smooth trading journey for those seeking dependable Forex Trading in Singapore across web, mobile, and MT5 platforms.",
    ],
    cta: "CUSTOMER SUPPORT",
    link: "#"
  },
  {
    __id: "04",
    title: "A Trusted Global Forex Broker",
    description: [
      "FlipTrade Group operates with transparency, security, and responsible trading standards. Trusted by traders worldwide and ranked among the Best Forex Brokers in Singapore, our infrastructure supports secure, reliable, and scalable forex trading.",
    ],
    cta: "FINANCIAL STRENGTH",
    link: "#"
  }
];
const dataplatform = [
  {
    title: "Mobile Forex Trading",
    description:
      "Trade forex anytime, anywhere with FlipTrade Group. Designed for Forex Trading in Singapore, the app lets you monitor currency markets, manage positions, and execute trades instantly using a fast, intuitive, and secure mobile interface.",
    link: "",
    class: "lg:left-[8%]"
  },
  {
    title: "Web Trader for Forex Markets",
    description:
      "Trade directly from your browser with FlipTrade Group’s Web Trader. Ideal for Forex Online Trading in Singapore, it offers fast execution, advanced forex charting, real-time pricing, and secure access to global currency pairs without any downloads.",
    link: "",
    class: ""
  },
  {
    title: "Social & Copy Trading for Forex",
    description:
      "Follow and copy experienced forex traders with FlipTrade Group’s Social & Copy Trading tools. Ideal for traders working with Forex brokers in Singapore, this feature allows you to learn strategies, mirror trades automatically, and participate confidently in global forex markets.",
    link: "",
    class: ""
  },
  {
    title: "MetaTrader 5 (MT5) for Forex",
    description:
      "Trade forex using MetaTrader 5 (MT5) with FlipTrade Group. Recognized by the Best Forex Brokers in Singapore, MT5 offers powerful indicators, multiple order types, automated trading, and reliable execution across desktop, web, and mobile platforms.",
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
      "Stay ahead of market-moving events with the Economic Calendar. A vital tool for Forex Trading in Singapore, it tracks global economic releases, interest rate decisions, and key announcements that influence forex and CFD markets in real time.",
    ],
    button: "Economic Calendar",
    image: tradingplatformtab,
    link: '/economic-calendar'
  },
  {
    id: "risk",
    title: "Learn Trading",
    description: [
      "Build strong trading knowledge with FlipTrade Group’s learning resources. Supporting Forex Online Trading in Singapore, our beginner-to-advanced content helps traders understand forex and CFD markets and develop disciplined, informed trading strategies.",
    ],
    button: "Learn Trading",
    image: tradingplatformtab,
    link: '/learn-trading'
  }
];
const faqData = [
  {
    question: "What is forex trading and how does it work?",
    answer:
      "Forex trading involves buying and selling currency pairs to profit from price movements. Many traders choose Forex brokers in Singapore for regulated, global market access."
  },
  {
    question: "Is Forex Trading legal in Singapore?",
    answer:
      "Yes, Forex Trading in Singapore is legal when conducted through licensed platforms. Traders should always choose regulated and transparent Forex brokers in Singapore."
  },
  {
    question: "Why choose Forex brokers in Singapore?",
    answer:
      "Forex brokers in Singapore are known for strong regulation, advanced platforms, and secure trading environments supporting professional and retail Forex Online Trading in Singapore."
  },
  {
    question: "What markets can I trade with forex brokers?",
    answer:
      "With trusted Forex brokers in Singapore, traders can access forex, indices, commodities, and CFDs, offering diverse opportunities within Forex Trading in Singapore."
  },
  {
    question: "What is Forex Online Trading in Singapore?",
    answer:
      "Forex Online Trading in Singapore allows traders to access global currency markets digitally using platforms like MT5, WebTrader, and mobile trading apps."
  },
  {
    question: "Are beginners suitable for Forex Trading in Singapore?",
    answer:
      "Yes, many Forex brokers in Singapore provide educational tools, demo accounts, and guidance, making Forex Trading in Singapore accessible for beginners."
  },
  {
    question: "What trading platforms do Forex brokers in Singapore offer?",
    answer:
      "Most Forex brokers in Singapore support MT5, WebTrader, and mobile platforms, enabling smooth and secure Forex Online Trading in Singapore across devices."
  },
  {
    question: "How do I manage risk in Forex Online Trading in Singapore?",
    answer:
      "Risk management tools like stop-loss orders, pip calculators, and education from Forex brokers in Singapore help traders trade responsibly in volatile markets."
  },
  {
    question: "What is leverage in Forex Trading in Singapore?",
    answer:
      "Leverage allows traders to control larger positions with smaller capital. Forex brokers in Singapore offer leverage options with risk controls for responsible trading."
  },
  {
    question: "How do I choose the Best Forex Brokers in Singapore?",
    answer:
      "Look for regulation, transparent pricing, strong platforms, and education. The Best Forex Brokers in Singapore support secure, reliable, and professional trading experiences."
  }
];


export const metadata = {
  title: "Top Forex Brokers in Singapore | Secure & Regulated Trading",
  description:
    "Explore trusted forex brokers in Singapore with fast execution, transparent pricing, and powerful trading platforms for global currency tradin",
};

const page = () => {
  return (
    <div>
      <ForexBrokerBanner
        title={"Best Forex Brokers in Singapore"}
        description={
          "FlipTrade Group stands out as the best forex broker in Singapore, offering tight spreads, advanced trading platforms, strong security, and responsive support. With transparent pricing, fast execution, and tools for beginners and professionals alike, FlipTrade Group empowers traders to trade confidently and grow consistently worldwide every day."
        }
      />
      <CustomersSay data={features} />
      <BrokerFeature
        title={"Why Traders Choose FlipTrade Group"}
        description={`
          FlipTrade Group delivers a performance-driven forex trading environment trusted by global traders. Recognized among the Best Forex Brokers in Singapore, our platform combines advanced technology, transparent pricing, and fast execution to support confident trading decisions across global markets.
          `}
        data={featureCards}
      />
      <OurPlatform
        title={"Smart Forex Trading, Faster Execution"}
        description={
          "FlipTrade Group delivers advanced forex trading platforms built for performance, speed, and reliability. Trusted among the Best Forex Brokers in Singapore, we provide traders with smooth access to global forex markets, competitive pricing, and professional-grade trading tools."
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
        title={'Learn Forex Trading & Market Insights'}
        description={'Gain practical knowledge, real-time insights, and expert guidance with FlipTrade Group. Designed for Forex Trading in Singapore, our resources help traders analyze markets, manage risk, and trade confidently with trusted Forex tools.'}
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
