import React from "react";
import Contestleaderboard from "../Components/Pagecomponents/Contestleaderboard";
import Pipworkstep from "../Components/Pagecomponents/Pipworkstep";
import Contesttime from "../Components/Pagecomponents/Contesttime";
import Contestdescription from "../Components/Pagecomponents/Contestdescription";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";

const conteststepdata = [
  {
    title: "Sign up",
    description: "Sign up for a free <br/> PrimeXBT account"
  },
  {
    title: "Choose  Contest",
    description: "Choose the contests you <br/> want to join"
  },
  {
    title: "Trading Rewards",
    description: "Top the leaderboards and earn real <br/> money to trade with"
  }
];
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
    <div className="pt-18 lg:pt-28 xl:pt-32">
      <Contestleaderboard btn_name={"Open Account"} />
      <Contestdescription />
      <Contesttime />
      <Pipworkstep
        title={"What Is a Pip? & <br/> How it works"}
        dispription={
          "A pip (percentage in point) is the <br/> smallest price movement a currency <br/> pair can make based on market convention."
        }
        pointstep={conteststepdata}
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
}

export default page;
