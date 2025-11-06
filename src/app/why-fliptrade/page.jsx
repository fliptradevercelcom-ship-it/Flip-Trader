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
export const metadata = {
  title: "Why Choose FlipTrade Group – Your Premier Forex & CFD Broker",
  description:
    "Trade with confidence at FlipTrade Group. Enjoy secure trading, transparent pricing, fast execution, and expert support. Experience why traders choose us."
};
function page() {
  return (
    <div>
      <Whyflipbanner />
      <Marketaccess />
      <Whyflipstep pointdata={pointdata} />
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
