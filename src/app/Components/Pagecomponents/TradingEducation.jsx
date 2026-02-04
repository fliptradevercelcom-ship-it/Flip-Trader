"use client";
import React, { useState } from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Image from "next/image";
import tradingplatformtab from "../../../../public/images/tradingplatformtab.webp";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
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
const TradingEducation = () => {
  const [activeTab, setActiveTab] = useState("platforms");
  const activeContent = tabsData.find(tab => tab.id === activeTab);
  return (
    <div>
      <div className="inn_container pt-12 md:pt-18">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] text-center lg:text-start gap-5">
          <div>
            <Title
              title={"Advanced CFD Trading Education"}
              color="gradient_text"
            />
          </div>
          <div className="flex justify-center items-center">
            <Discription
              dispription={
                "Our award-winning app and platforms offer full control, powerful performance, and fast execution to keep you ahead."
              }
              color="text-white"
            />
          </div>
        </div>
        <div className="max-w-[1440px] m-auto pt-6 md:pt-12">
          <div className="mx-auto grid grid-cols-2 md:grid-cols-3 overflow-hidden rounded-xl bg-primary">
            {tabsData.map((tab, index) =>
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2 md:px-6 py-4 text-base md:text-lg cursor-pointer font-medium transition ${tab.title ===
                "Trading Academy"
                  ? "border-x-2 border-white"
                  : ""}
                ${activeTab === tab.id
                  ? "gradient_bg text-black"
                  : "text-white hover:bg-white/10"} ${index === 2
                  ? "col-span-2 md:col-span-1 border-t md:border-t-0 text-center"
                  : ""}`}
              >
                {tab.title}
              </button>
            )}
          </div>

          <div className="pt-6 md:pt-12 flex flex-col items-center gap-6 lg:flex-row md:px-8">
            <div className="flex-1">
              <h2 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-5xl   font-medium gradient_text text-center lg:text-start">
                {activeContent.title}
              </h2>

              {activeContent.description.map((i, index) =>
                <p
                  key={index}
                  className="list_text pt-4 font-light font_ternary  max-w-100  text-center md:text-start lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-7 !text-white space-y-4"
                >
                  {i}
                </p>
              )}

              <div className="pt-6 md:pt-12 flex justify-center md:justify-start">
                <Button
                  btn_name={activeContent.button}
                  btn_bg={"bg-primary"}
                  border_color={"border-primary"}
                  text_color={"text-white"}
                  icon={firebtnicon}
                />
              </div>
            </div>

            <div className="flex-1 text-right">
              <Image
                src={activeContent.image}
                alt={activeContent.title}
                width={1000}
                height={500}
                className="max-w-[80%] m-auto scale-x-[-1]"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center pt-12">
          <Button
            btn_name={'Open Account '}
            btn_bg={"bg-primary"}
            border_color={"border-primary"}
            text_color={"text-white"}
            icon={firebtnicon}
          />
        </div> */}
      </div>
    </div>
  );
};

export default TradingEducation;
