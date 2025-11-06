import React from "react";
import Copytradingbanner from "../Components/Pagecomponents/Copytradingbanner";
import Whatcopytrading from "../Components/Pagecomponents/Whatcopytrading";
import Copytradingwork from "../Components/Pagecomponents/Copytradingwork";

import copytradingdesktop from "../../../public/images/copytradingdesktop.webp";
import ibgrapsecondaryph from "../../../public/images/ibgrapsecondaryph.webp";
import Grapsecondary from "../Components/Pagecomponents/Grapsecondary";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
import Tradefliptrade from "../Components/Pagecomponents/Tradefliptrade";
const faqData = [
  {
    question: "What is Copy Trading?",
    answer:
      "Copy Trading lets you automatically mirror expert traders’ strategies and trade smarter instantly."
  },
  {
    question: "What is Social Trading?",
    answer:
      "Social Trading allows traders to share, follow, and learn from each other’s strategies in real time."
  },
  {
    question: "How do I start Copy Trading?",
    answer:
      "Simply create an account, choose an expert trader to copy, and set your investment amount."
  },
  {
    question: "Can I control my risk?",
    answer:
      "Yes, you can manage your risk by setting limits, adjusting trade size, or stopping copying anytime."
  },
  {
    question: "Can I become a trader that others can copy?",
    answer:
      "Yes, experienced traders can apply to become strategy providers and earn from their followers’ trades."
  }
];

export const metadata = {
  title: "Social & Copy Trading – FlipTrade Group | Follow Top Traders",
  description:
    "Join FlipTrade Group’s social & copy trading platform today! Mirror expert traders automatically, optimize your trades and grow smarter with every move."
};
const page = () => {
  return (
    <div>
      <Copytradingbanner />
      <Whatcopytrading />
      <Copytradingwork />
      {/* Ramnish guru kar dena monday ko */}
      <Tradefliptrade />
      <Grapsecondary
        desktopbanner={copytradingdesktop}
        phonetabbanner={ibgrapsecondaryph}
        title={"Start Copy <br/> Trading Today"}
        description={`Experience smarter trading — join the <br/> Fliptrade community and copy success with <br/> confidence.`}
        btnname={"Start Social & Copy Trading Now"}
        top={'top-[8%]'}
      />

      <div className="bg-theme py-12 md:py-18 lg:py-24">
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
};

export default page;
