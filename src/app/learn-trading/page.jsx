import React from "react";
import Learntradingbanner from "../Components/Pagecomponents/Learntradingbanner";
import Learnwhy from "../Components/Pagecomponents/Learnwhy";
import Whatyoulearn from "../Components/Pagecomponents/Whatyoulearn";
import Journey from "../Components/Pagecomponents/Journey";
import Notalone from "../Components/Pagecomponents/Notalone";
import Livesession from "../Components/Pagecomponents/Livesession";
import Righttextgrap from "../Components/Pagecomponents/Righttextgrap";
import learnwrapdesktop from "../../../public/images/learnwrapdesktop.webp";
import learnwrapphone from "../../../public/images/learnwrapphone.webp";
import Enrolmentform from "../Components/Pagecomponents/Enrolmentform";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
export const metadata = {
  title: "Forex Trading | Learn Trading with FlipTrade Group",
  description:
    "Master Forex, stocks, crypto & more with FlipTrade Group’s complete learning hub. Start with risk‑free demo account & build trading skills from beginner to expert."
};
const faqData = [
  {
    question: "Who can join FlipTrade’s learning program?",
    answer: "Anyone interested in learning trading can join."
  },
  {
    question: "Do I need any prior trading experience?",
    answer: "No prior experience is required; beginners are welcome."
  },
  {
    question: "Is the learning program free?",
    answer:
      "The image doesn’t specify, but often such programs may have free and paid tiers. You might need to check FlipTrade’s website for confirmation."
  },
  {
    question: "What topics will I learn?",
    answer: "Trading, analysis, risk management, and MT5 — all in one."
  },
  {
    question: "How do live sessions work?",
    answer:
      "The image doesn’t provide details. Usually, live sessions are interactive webinars or video classes where instructors teach trading strategies in real-time."
  }
];

const page = () => {
  return (
    <div>
      <Learntradingbanner />
      <Learnwhy />
      <Whatyoulearn />
      <Journey />
      <Notalone />
      <Livesession />
      <div className="inn_container  pt-12 xl:pt-22 2xl:pt-30">
        <Righttextgrap
          desktopbanner={learnwrapdesktop}
          phonetabbanner={learnwrapphone}
          title={"Start <span class='text-primary'>  Trading Today </span>"}
          description={`FlipTrade Group brings you closer <br/> to financial freedom.`}
          btnname={"Join Today"}
          position={"top-[22%] xl:w-[41%] right-0"}
        />
      </div>
      <Enrolmentform />
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
};

export default page;
