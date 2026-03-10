import React from "react";
import Whyflipbanner from "../Components/Pagecomponents/Whyflipbanner";
import Marketaccess from "../Components/Pagecomponents/Marketaccess";
import whyflipstep1 from "../../../public/icons/realtime.svg";
import whyflipstep2 from "../../../public/icons/whyflipstep2.svg";
import whyflipstep3 from "../../../public/icons/whyflipstep3.svg";
import whyflipstep4 from "../../../public/icons/whyflipstep4.svg";
import Whyflipstep from "../Components/Pagecomponents/Whyflipstep";
import Grapbanner from "../Components/Pagecomponents/Grapbanner";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
import TextCard from "../Components/Uiux/TextCard";
const pointdata = [
  {
    id: 1,
    title: "Powerful Platform",
    description: "Trade seamlessly on <br/> MetaTrader 5",
    icon: whyflipstep1
  },
  {
    id: 2,
    title: "Cross-Device Access",
    description: "Use desktop, web, or <br/> mobile apps",
    icon: whyflipstep2
  },
  {
    id: 3,
    title: "Smart Tools",
    description: "Advanced indicators and <br/> charting features",
    icon: whyflipstep3
  },
  {
    id: 4,
    title: "Full Control",
    description: "Customize and trade <br/> your way",
    icon: whyflipstep4
  }
];
const faqData = [
  {
    question: "Are there any hidden fees on Fliptrade?",
    answer:
      "No. Fliptrade offers full transparency — you only pay spreads and commissions as clearly stated."
  },
  {
    question: "What are Fliptrade’s spreads?",
    answer:
      "Fliptrade provides competitive and variable spreads depending on market conditions, ensuring fair and transparent pricing for all trades."
  },
  {
    question: "Does Fliptrade charge deposit or withdrawal fees?",
    answer:
      "No, Fliptrade does not charge any deposit or withdrawal fees. However, your bank or payment provider may apply standard transfer charges."
  },
  {
    question: "How can I check live pricing?",
    answer:
      "You can view real-time prices directly on Fliptrade’s trading platform or app. Live updates ensure you always trade at accurate market rates."
  },
  {
    question: "Does Fliptrade offer different pricing for different accounts?",
    answer:
      "Yes, Fliptrade may offer different spreads or commission structures based on your account type and trading volume. All details are clearly displayed in your account settings."
  }
];

const textcardData = [
  {
    id: 1,
    title: "Low Spreads",
    description:
      "Our mission is to provide traders with the lowest spreads possible during all market conditions. We have invested heavily in technology and establishing strong relationships with some of the largest and most reliable liquidity providers in the market. We are constantly adding and tweaking our technology in order to bring our traders the best possible conditions in the industry."
  },
  {
    id: 2,
    title: "Fast Execution",
    description:
      "Flip Trade Group utilises enterprise grade hardware on our trade servers in the NY4 & LD5 data centre in New York & London respectively. Our trader servers are collocated with the data server of our pricing providers in these data centres. Dedicated fibre optic cross connects us and our pricing providers to ensure the lowest latency and fastest possible trade execution for our clients.   "
  },
  {
    id: 3,
    title: "Superior Technology",
    description:
      "Flip Trade Group has partnered with the world’s best trading technology companies to bring you the ultimate trading experience  and cutting edge trading tools. These tools include: Depth of Market (DoM), inbuilt spread monitoring, ladder trading, automated close of trades with custom order templates, and more. Our iPhone and Android trading applications have been optimised to provide you the best possible mobile trading experience.  "
  },
  {
    id: 4,
    title: "The Ultimate in Trading Conditions",
    description: `Flip Trade Group has been created with traders in mind. Scalping, hedging, and automated trading are all allowed. Our Raw Spread account spreads start from 0.0 pips. We have flexible leverage options offering up to 1:1000, and accept deposits in 5 major currencies. 5. Better Fills
    <br />
    Clients can open trades from 1 micro lot (1,000 base currency) to 200 lots (20 million base currency) through our bridge. Our technology sorts and ranks prices to allow real-time execution of large trades over multiple pricing providers and their pricing tiers, and this ensures the best price for any trade size.  
    `
  },
  {
    id: 5,
    title: "Unrivalled Customer Service",
    description: `Flip Trade Group strives to offer you the best possible customer service and support. Our team has a significant amount of experience within the forex industry so they understand what traders want and need. You can trade with confidence knowing that the Flip Trade Group team will always be there to help 24 hours a day, 7 days a week.`
  },
  {
    id: 6,
    title: "Advanced Trading Tools",
    description: `Our additions to MetaTrader 5 such as a one click trade module, market depth, spread monitor, trade risk calculator, and advanced order types previously not available on MetaTrader 4 make for a better trading experience.  `
  },
  {
    id: 7,
    title: "Superior Trading Platforms",
    description: `MetaTrader 5, and TradingView are some of the best trading platforms available today. Flip Trade Group has revolutionised forex trading by giving traders direct access to our Raw Pricing using any of these popular trading platforms.`
  },
  {
    id: 8,
    title: "Trust and Transparency",
    description: `Trust and Transparency form the basis of Flip Trade Group core values. Flip Trade Group is a regulated Forex CFD provider that applies Raw Spreads on its main and most famous account type, so there is no requotes, no price manipulation and no restrictions.`
  },
  {
    id: 9,
    title: "Regulation",
    description: `Flip Trade Group is regulated by the Financial Services Commission of Mauritius (FSC) meeting strict capital requirements. All client funds are held in segregated client money accounts with top International banks. Flip Trade Group do not use these funds for any operational expenses or purposes.`
  }
];
export const metadata = {
  title: "Why Choose FlipTrade Group – Your Premier Forex & CFD Broker",
  description:
    "Trade with confidence at FlipTrade Group. Enjoy secure trading, transparent pricing, fast execution, and expert support. Experience why traders choose us."
};
function page() {
  return (
    <div>
      <Whyflipbanner />
      <Whyflipstep pointdata={pointdata} />
      <Marketaccess />
      {/* <TextCard data={textcardData} title={'Why Fliptrade Group'} col_2={true} p_sec={true}/> */}
      <Grapbanner />
      <div className="bg-theme pb-12 md:pb-18 lg:py-24">
        <div className="inn_container">
          <div className="text-center">
            <Title
              title={"Frequently Asked <br/> Questions"}
              color="text-white"
            />
          </div>
          <div>
            <Faq faqData={faqData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
