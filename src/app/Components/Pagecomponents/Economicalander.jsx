"use client";
import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Graphhome from "./Markets/Graphhome";
import { useAutoScroll } from "../../../hooks/useAutoScroll";

function Economicalander() {
  useAutoScroll("calender", { delay: 800 });
  return (
    <div className="bg-theme relative">
      <video
        className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none "
        src="/videos/marketsgraphbg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="inn_container  pt-12 md:pt-18 lg:pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] text-center lg:text-start">
          <div
            className="max-w-[350px] m-auto md:max-w-[unset] pb-3 md:pb-0"
            id="calender"
          >
            <Title
              title="FlipTrade <br/> Economic Calendar"
              color="gradient_text"
            />
          </div>
          <div className="flex justify-center items-center">
            <Discription
              dispription="Stay ahead of market-moving events with <br/> FlipTrade’s Economic Calendar. Get real-time <br/> updates on global economic releases, central <br/> bank policies, and other key events that influence <br/> currencies, commodities, indices, and stocks."
              color="text-white"
            />
          </div>
        </div>
        <div>
          <Graphhome pagepath="/economic-calendar" />
        </div>
      </div>
    </div>
  );
}

export default Economicalander;
