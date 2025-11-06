"use client";
import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import buildtraderimage from "../../../../public/images/buildtraderimage.webp";
import buildtraderimageloerph from "../../../../public/images/buildtraderimagelower.webp";
import Righttextgrap from "./Righttextgrap";
import { useAutoScroll } from "../../../hooks/useAutoScroll";
const buildtradetagcard = [
  {
    title: "10,000 +",
    sub_title: "Tradable <br/> Instruments",
    data_duration: "800"
  },
  {
    title: "1:500",
    sub_title: "Leverage <br/> up to",
    data_duration: "1000"
  },
  {
    title: "1 MS",
    sub_title: "Trade <br/> Execution",
    data_duration: "1200"
  },
  {
    title: "$0 Deposit",
    sub_title: "& Withdrawals <br/> fees",
    data_duration: "1400"
  },
  {
    title: "24/7",
    sub_title: "Client <br/> Support",
    data_duration: "1600"
  }
];
const Buildtrader = () => {
  // Auto-scroll to buildtrader section when navigated from header
  useAutoScroll("buildtrader", { delay: 800 });
  
  return (
    <div className="bg-theme">
      <div className="inn_container pt-16 md:pt-20 lg:pt-30" id="buildtrader">
        <div className="grid grid-col-1 text-center lg:text-start lg:grid-cols-2">
          <Title
            title="Built for Traders. <br/> Backed by Trust."
            color="text-white"
          />
          <div className="flex justify-center items-center">
            <Discription
              dispription={`From zero deposit fees to ultra-low <br/> latency, everything is designed to give you <br/> an edge.`}
              color="text-white"
            />
          </div>
        </div>
        <div className="py-10 md:py-12 lg:py-16 grid grid-cols-2 lg:grid-cols-5  gap-4 md:gap-7">
          {buildtradetagcard.map((data, index) =>
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration={data.data_duration}
              className={` flex flex-col items-center gap-2 lg:gap-4 2xl:gap-5 py-[24px] md:py-[30px] lg:py-[46px] rounded-2xl 
                ${index % 2 === 0
                  ? "[clip-path:polygon(0_0,80%_0,100%_25%,100%_100%,20%_100%,0_75%)] bg-[#6A40EB] shadow-[inset_1px_0px_20px_20px_#462A9C]"
                  : "[clip-path:polygon(20%_0,100%_0,100%_75%,80%_100%,0_100%,0_25%)] bg-[#B46AFF] shadow-[inset_1px_0px_20px_20px_#7E4AB2]"} `}
            >
              <p className="text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-white md:min-w-[200px] text-center pb-4 2xl:pb-5 border-b-[3px] !border-solid border-[#BCC1FF]">
                {data.title}
              </p>
              <p
                className="list_text font-light text-center font_ternary text-white leading-6 xl:leading-[28px] px-3 md:px-0"
                dangerouslySetInnerHTML={{ __html: data.sub_title }}
              />
            </div>
          )}
        </div>
    
        <Righttextgrap
          desktopbanner={buildtraderimage}
          phonetabbanner={buildtraderimageloerph}
          title={
            "<span class='text-primary'> FlipTrade. </span> Built for <span class='text-primary'> Traders. </span>"
          }
          description={`Seamless trading across Forex, CFDs, metals, and <br/> more. Real-time insights, advanced tools, and <br/> reliable support — everything you need to grow.`}
          btnname={"Read More"}
        />
      </div>
    </div>
  );
};

export default Buildtrader;
