import React from "react";
import Ibpartnerbanner from "../Components/Pagecomponents/Ibpartnerbanner";
import Ibpartnerwork from "../Components/Pagecomponents/Ibpartnerwork";
import Ibwhy from "../Components/Pagecomponents/Ibwhy";
import Grapsecondary from "../Components/Pagecomponents/Grapsecondary";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";

import ibgrapsecondary from "../../../public/images/ibgrapsecondary.webp";
import ibgrapsecondaryph from "../../../public/images/ibgrapsecondaryph.webp";
const faqData = [
  {
    question: "What is an IB Partner?",
    answer:
      "An IB Partner refers traders to Fliptrade and earns commissions from their trades."
  },
  {
    question: "How do I become an IB Partner?",
    answer:
      "Sign up for the IB program on Fliptrade, complete the registration, and start referring traders."
  },
  {
    question: "How much can I earn as an IB Partner?",
    answer:
      "Earnings depend on the number of active referrals and their trading volume."
  },
  {
    question: "How do I track my referrals and earnings?",
    answer:
      "You can track all referrals, commissions, and performance through your IB dashboard."
  },
  {
    question: "Are there any limits on how many traders I can refer?",
    answer:
      "No, there are no limits — you can refer as many traders as you like."
  }
];

export const metadata = {
  title: "IB Partner Program – FlipTrade Group | Earn with Trade Referrals",
  description:
    "Join FlipTrade Group’s IB Partner Program now! Drive clients, earn commissions, and access exclusive tools your path to success in forex & CFD referrals."
};
const page = () => {
  return (
    <div>
      <Ibpartnerbanner />
      <Ibpartnerwork />
      <Ibwhy />
      <Grapsecondary
        desktopbanner={ibgrapsecondary}
        phonetabbanner={ibgrapsecondaryph}  
        title={"Start <span class='text-primary'> Earning <br/> Today </span>"}
        description={`Become a Fliptrade IB Partner and unlock a <br/> world of opportunities — refer traders, earn  <br/> competitive commissions, and grow    your  <br/> income effortlessly.`}
        btnname={'Join the Fliptrade Partner Club'}
        top={'top-[13%]'}
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
