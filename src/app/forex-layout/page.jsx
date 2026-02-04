import React from "react";
import ForexBrokerBanner from "../Components/ForexBroker/ForexBrokerBanner";
import CustomersSay from "../Components/ForexBroker/CustomersSay";
import BrokerFeature from "../Components/ForexBroker/BrokerFeature";
import firebtnicon from "../../../public/icons/firebtnicon.svg";
import firebtniconblue from "../../../public/icons/firebtniconblue.svg";
import Button from "../Components/Uiux/Button";
import Spreadtable from "../Components/Pagecomponents/Spreadtable";
import Title from "../Components/Uiux/Title";
import OurPlatform from "../Components/ForexBroker/OurPlatform";
import TradingEducation from "../Components/Pagecomponents/TradingEducation";
import tradingplatformtab from "../../../public/images/tradingplatformtab.webp";
import Faq from "../Components/Pagecomponents/Faq";
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
    question: "What is Forex and CFD trading?",
    answer:
      "Forex and CFD trading allows traders to speculate on the price movements of currencies, indices, commodities, shares, and cryptocurrencies without owning the underlying assets."
  },
  {
    question: "Who can open a trading account with your broker?",
    answer:
      "Anyone who meets the eligibility criteria and successfully completes the registration and verification process can open a trading account with us."
  },
  {
    question: "Which trading platform do you offer?",
    answer:
      "We offer MetaTrader 5 (MT5), a powerful and advanced trading platform available on Web, Desktop, and Mobile devices."
  },
  {
    question: "What are the benefits of using MetaTrader 5 (MT5)?",
    answer:
      "MT5 offers advanced charting tools, multiple timeframes, built-in technical indicators, faster order execution, and support for automated trading strategies."
  },
  {
    question: "Is my money safe with your brokerage?",
    answer:
      "Yes, client funds are held in segregated accounts and protected with industry-standard security protocols to ensure a high level of fund safety."
  },
  {
    question: "Do you provide a demo account on MT5?",
    answer:
      "Yes, we offer a free MT5 demo account with virtual funds, allowing traders to practice strategies and explore platform features without any risk."
  },
  {
    question: "What trading instruments are available on MT5?",
    answer:
      "You can trade Forex pairs, indices, commodities, shares, and cryptocurrencies as CFDs using the MT5 platform."
  },
  {
    question: "What is leverage and how does it work in Forex trading?",
    answer:
      "Leverage allows traders to control larger positions with a smaller amount of capital. While leverage can increase profits, it also significantly increases risk."
  },
  {
    question: "What risk management tools are available?",
    answer:
      "MT5 provides risk management tools such as Stop Loss, Take Profit, pending orders, and negative balance protection to help traders manage risk effectively."
  },
  {
    question: "How can I deposit and withdraw funds?",
    answer:
      "Deposits and withdrawals can be made securely through the client portal using supported payment methods after completing the verification process."
  }
];
const features = [
  {
    title: "INDICES",
    description:
      "Take a position on 21 major global indices, including US SP 500, Wall Street and Hong Kong 50. Spreads start from 0.3 pts.",
    class: "z-[4]",
    alt: "Global stock market indices"
  },
  {
    title: "FOREX Trading",
    description:
      "Access the world’s most traded market with 84 FX pairs including EUR/USD and USD/JPY. Spreads as low as 0.5 pips.",
    class: "xl:w-[120%] left-[-20%] z-[3]",
    alt: "Forex currency trading"
  },
  {
    title: "SHARES CFDs",
    description:
      "Trade CFDs on 6,000+ global stocks with commissions from just 0.08% and out-of-hours trading access.",
    class: "xl:w-[120%] left-[-20%] z-[2]",
    alt: "Global shares and stock trading"
  },
  {
    title: "CRYPTO Trading",
    description:
      "Trade leading crypto CFDs 7 days a week including Bitcoin, Ether, Ripple and more.",
    class: "xl:w-[120%] left-[-20%] z-[1]",
    alt: "Cryptocurrency CFD trading"
  }
];
const featureCards = [
  {
    __id: "01",
    title: "Elite products, value, and execution",
    description: [
      "Choose from thousands of CFD markets across a variety of asset classes, including EUR/USD, US SP 500, Tesla and Nvidia.",
      "Enjoy consistently low trading costs and fast, quality execution."
    ],
    cta: "TRADE MARKETS",
    link: "#"
  },
  {
    __id: "02",
    title: "Tools designed for your edge",
    description: [
      "Choose from a variety of platforms and refine your trading with exclusive data tools like Performance Analytics.",
      "Take full command of your analysis with industry-leading TradingView charts and in-platform news feeds."
    ],
    cta: "GET TRADING TOOLS",
    link: "#"
  },
  {
    __id: "03",
    title: "A superior customer experience",
    description: [
      "Access knowledgeable customer support by phone, email or chat and enjoy convenient online account management tools.",
      "VIP traders can experience personalised service and exclusive benefits."
    ],
    cta: "CUSTOMER SUPPORT",
    link: "#"
  },
  {
    __id: "04",
    title: "A trusted global leader",
    description: [
      "We’re a wholly-owned subsidiary of StoneX Group, a Nasdaq-listed Fortune 50 financial giant with operating revenue of $3.4 billion.",
      "Fully regulated and financially stable, providing trading services since 2001."
    ],
    cta: "FINANCIAL STRENGTH",
    link: "#"
  }
];
const dataplatform = [
  {
    title: "Mobile app",
    description:
      "Our powerful mobile platform doesn’t compromise on performance. Intuitive tools and features give you full control on the move.",
    link: "",
    class: "lg:left-[8%]"
  },
  {
    title: "Web Trader",
    description:
      "Our powerful mobile platform doesn’t compromise on performance. Intuitive tools and features give you full control on the move.",
    link: "",
    class: ""
  },
  {
    title: "TradingView",
    description:
      "Our powerful mobile platform doesn’t compromise on performance. Intuitive tools and features give you full control on the move.",
    link: "",
    class: ""
  },
  {
    title: "MetaTrader 5 (MT5)",
    description:
      "Our powerful mobile platform doesn’t compromise on performance. Intuitive tools and features give you full control on the move.",
    link: "",
    class: "lg:left-[8%]"
  }
];
const tabsData = [
  {
    id: "platforms",
    title: "Platforms",
    description: [
      "Find a trading platform that complements your style and strategy. Choose from our award-winning Web Trader platform, MetaTrader 4 and our powerful mobile trading app for Android and iOS. Find a trading platform that complements your style and strategy.",
      "Find a trading platform that complements your style and strategy. Choose from our award-winning Web Trader platform."
    ],
    button: "PLATFORMS",
    image: tradingplatformtab
  },
  {
    id: "academy",
    title: "Trading Academy",
    description: [
      "Learn the basics of CFD trading with our range of videos and guides. Develop your skills with easy-to-understand tutorials and master the fundamentals of trading.",
      "Learn the basics of CFD trading with our range of videos and guides. Develop your skills with easy-to-understand tutorials and master the fundamentals of trading."
    ],
    button: "TRADING ACADEMY",
    image: tradingplatformtab
  },
  {
    id: "risk",
    title: "Risk Management",
    description: [
      "Learn the basics of CFD trading with our range of videos and guides. Develop your skills with easy-to-understand tutorials and master the fundamentals of trading.",
      "Learn the basics of CFD trading with our range of videos and guides. Develop your skills with easy-to-understand tutorials and master the fundamentals of trading."
    ],
    button: "RISK MANAGEMENT",
    image: tradingplatformtab
  }
];
const page = () => {
  return (
    <div>
      <ForexBrokerBanner
        title={"Forex Trading | Online FX Trading ,Forex Trading"}
        description={
          "The FX market moves over $5 trillion daily, making it the world’s largest and most liquid.The FX market moves over $5 trillion daily, making it the world’s largest and most liquid."
        }
      />
      <CustomersSay data={features} />
      <BrokerFeature
        title={"Why trade with  fliptradegroup.com"}
        description={`
          Proudly supporting traders worldwide, we are committed to offering cutting-edge platforms, education, insights and opportunities for market success.
            <br />
          That's why over one million traders* have chosen us as their trusted partner.
          `}
        data={featureCards}
      />
      <OurPlatform
        title={"Control. Power. Speed. Get the Edge"}
        description={
          "Our award-winning app and platforms offer full control, powerful performance, and fast execution to keep you ahead."
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
          <Button
            btn_name="Open Account"
            icon={firebtnicon}
            border_color="border-primary"
            btn_bg="bg-primary"
            shadow={true}
            text_color="text-white"
          />
          <Button
            btn_name="Try a Demo"
            icon={firebtniconblue}
            border_color="border-primary"
            btn_bg="bg-white"
            shadow={true}
            text_color="text-primary"
          />
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
