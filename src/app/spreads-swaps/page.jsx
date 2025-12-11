import React from "react";
import Spredsbanner from "../Components/Pagecomponents/Spredsbanner";
import Spredswhy from "../Components/Pagecomponents/Spredswhy";
import Spreadtable from "../Components/Pagecomponents/Spreadtable";
import Calculatespread from "../Components/Pagecomponents/Calculatespread";
import Spredscontent from "../Components/Pagecomponents/Spredscontent";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
const faqData = [
  {
    question: "Which cryptocurrencies are supported?",
    answer:
      "FlipTrade offers trading on major cryptocurrencies like Bitcoin, Ethereum, Litecoin, and various altcoins, available with secure and fast execution."
  },
  {
    question: "Is crypto trading 24/7?",
    answer:
      "Yes, cryptocurrency markets are open 24/7, and FlipTrade provides continuous access for traders worldwide without market closing times."
  },
  {
    question: "Are there fees for crypto trading?",
    answer:
      "Yes, spreads and swap fees may apply, but FlipTrade ensures transparent pricing with competitive spreads on crypto trades."
  },
  {
    question: "Does FlipTrade offer leverage on crypto?",
    answer:
      "Yes, leverage options are available, allowing traders to maximize exposure while managing risks responsibly within regulatory limits."
  },
  {
    question: "Is my crypto trading account secure?",
    answer:
      "Yes, FlipTrade uses advanced security measures like encryption and compliance protocols to ensure safe cryptocurrency trading."
  }
];
function page() {
  return (
    <div>
      <Spredsbanner />
      <Spreadtable />
      <Spredswhy />
      <Calculatespread />
      <Spredscontent />
        <div className=" bg-theme">
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
}

export default page;
