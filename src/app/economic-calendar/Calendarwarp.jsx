'use client'
import React, { useRef } from "react";
import Economicbanner from "../Components/Pagecomponents/Economicbanner";
import Economicuse from "../Components/Pagecomponents/Economicuse";
import Economicgetstart from "../Components/Pagecomponents/Economicgetstart";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
import Economicalander from "../Components/Pagecomponents/Economicalander";
const faqData = [
  {
    question: "What is the purpose of an economic calendar?",
    answer:
      "It helps traders track market-moving events and plan trades effectively."
  },
  {
    question: "How often is the FlipTrade Economic Calendar updated?",
    answer:
      "The calendar is updated in real-time to provide the latest economic data and announcements as soon as they are released."
  },
  {
    question: "Which markets are affected by economic events?",
    answer:
      "Economic events can impact global financial markets, including forex, commodities, indices, and stocks."
  },
  {
    question: "Can I view events in my own time zone?",
    answer:
      "Yes, the FlipTrade Economic Calendar automatically adjusts to your local time zone for accurate scheduling."
  },
  {
    question: "How do I use the calendar for trading?",
    answer:
      "You can use the calendar to anticipate potential market volatility, align your trades with upcoming events, and manage risk more effectively."
  }
];

function Calendarwarp() {
      const calculatorRef = useRef(null);
    
      const scrollToCalculator = () => {
        calculatorRef.current?.scrollIntoView({ behavior: "smooth",top: '0' });
      };
  return (
    <div>
      <Economicbanner onScrollClick={scrollToCalculator} />
       <div ref={calculatorRef}>
         <Economicalander />
       </div>
      <Economicuse />
      {/* <Economicgetstart /> */}
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
}

export default Calendarwarp;
