"use client"
import React from "react";
import Title from "../Uiux/Title";
import sidebanner from "../../../../public/images/mt5keyfeature.webp";
import Image from "next/image";
import { useAutoScroll } from "../../../hooks/useAutoScroll";
const features = [
  {
    id: 1,
    title: "Multi-Asset Trading",
    description: "Access over 1,000 instruments from one platform."
  },
  {
    id: 2,
    title: "Advanced Charts & Analysis",
    description: "38 indicators, 39 tools, 21 timeframes."
  },
  {
    id: 3,
    title: "Automated Trading",
    description: "Use Expert Advisors and MQL5 scripts."
  },
  {
    id: 4,
    title: "Economic Calendar",
    description: "Track global events affecting the markets."
  }
];

function Mt5keyfeature() {
  useAutoScroll("platform-features", { delay: 800 });
  return (
    <div className="bg-theme py-12 md:py-18 lg:py-28" >
      <div className="inn_container text-center pb-6 xl:text-start">
        <Title title={"Key Features"} color={"gradient_text"} />
      </div>
      <div className="grid xl:grid-cols-[1fr_2fr] inn_container pt-12 md:pt-18 px-0 lg:px-[3%]" id="platform-features">
        <div>
          <Image
            src={sidebanner}
            alt="Illustration of MT5 key features on FlipTrade"
            width={1500}
            height={500}
            className="w-full m-auto"
          />
        </div>
        <div className="px-[5%] flex flex-col justify-center gap-4">
          {features.map(data =>
            <div
              key={data.id}
              className="flex flex-col md:flex-row gap-3 md:gap-8 lg:gap-12 p-6 lg:p-10 2xl:p-11 rounded-4xl bg-[linear-gradient(90deg,rgba(106,64,236,0.62)_0%,rgba(0,0,0,1)_100%)]"
            >
              <div className="text-[45px] pr-8 lg:pr-12 flex md:border-r-[3px] border-dashed items-center text-white">
                0{data.id}
              </div>
              <div className="flex flex-col gap-3">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-white">
                  {data.title}
                </h5>
                <span className="list_text font-light font_ternary text-white leading-6 xl:leading-[28px]">
                  {data.description}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mt5keyfeature;
