import React from "react";
import Starttradinggraph from "./Starttradinggraph";
import "./Starttradinggraph.css";
import Faq from "../Components/Pagecomponents/Faq";
import Title from "../Components/Uiux/Title";
const faqData = [
  {
    question: "What is the FlipTrade Web Trading platform?",
    answer:
      "The FlipTrade Web Trading platform is an advanced online terminal that allows traders to access global markets directly from their browser — no downloads required."
  },
  {
    question: "Do I need to install any software to use Web Trading?",
    answer:
      "No installation is needed. You can log in and trade instantly through any modern web browser using the secure FlipTrade Web Terminal."
  },
  {
    question: "Is the Web Trading platform secure?",
    answer:
      "Yes, FlipTrade uses encrypted connections and advanced security measures to protect your data and transactions on the Web Trading platform."
  },
  {
    question: "Can I trade all assets using Web Trading?",
    answer:
      "Yes, the Web Trading terminal gives you access to multiple asset classes including forex, indices, commodities, and cryptocurrencies — all in one platform."
  },
  {
    question: "Does the Web Trading platform support mobile devices?",
    answer:
      "Absolutely! The FlipTrade Web Terminal is fully responsive and optimized for trading seamlessly on mobile, tablet, and desktop devices."
  }
];

const page = () => {
  return (
    <div className="bg-black pt-[140px] md:pt-[160px]">
      <div className=" pb-12 lg:pb-18">

      <Starttradinggraph />
      </div>
      <div className="bg-theme pb-12 md:pb-18 pt-12 md:pt-0 lg:py-24">
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
