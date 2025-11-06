"use client"
import React from "react";
import gradientbluebg from "../../../../public/banners/gradientbluebg.webp";
import mainbanner from "../../../../public/images/mt5where.webp";
import Image from "next/image";
import Title from "../Uiux/Title";
import Link from "next/link";
import { useAutoScroll } from "../../../hooks/useAutoScroll";
const Mt5anywhere = () => {
  useAutoScroll("trade", { delay: 800 });
  return (
    <div className="bg-theme" id="trade">
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${gradientbluebg.src})` }}
      >
        <div className="inn_container py-12 lg:py-18 2xl:py-24" style={{marginBottom:'7rem'}}>
          <div className="text-center pb-4 md:pb-8">
            <Title title={"Trade Anywhere"} color={"gradient_text"} />
          </div>
          <div className="relative">
            <Image
              src={mainbanner}
              alt="main banner"
              width={2000}
              height={500}
              className="max-w-[990px] w-full m-auto"
            />
            <Link
              href={
                "https://download.mql5.com/cdn/mobile/mt5/android?server=FlipTradeGroup-Server"
              }
              target="_blank"
            >
              <div className=" md:absolute mt-3 bottom-[15%] left-[10%] list_text font-light font_ternary leading-6 xl:leading-[28px] gradient_bg md:w-max py-2.5 lg:py-5 px-8 lg:px-8 rounded-3xl md:rounded-[60px] text-secondary">
                <span className="font-semibold">Android </span> android 
                apps for trading on-the-go.
              </div>
            </Link>
            {/* mobile ios & android  */}
            <Link href={'https://download.mql5.com/cdn/mobile/mt5/ios?server=FlipTradeGroup-Server'} target="_blank">
              <div className=" md:absolute mt-3 right-[10%] list_text font-light font_ternary leading-6 xl:leading-[28px] gradient_bg md:w-max py-2.5 lg:py-5 px-8 lg:px-8 rounded-3xl md:rounded-[60px] text-secondary">
                <span className="font-semibold"> iOS </span> – iOS 
                apps for trading on-the-go.
              </div>
            </Link>
            <Link
              href={
                "https://download.mql5.com/cdn/web/flip.trade.group/mt5/fliptradegroup5setup.exe"
              }
              target="_blank"
            >
              <div className=" md:absolute mt-3 top-[15%] right-[5%] list_text font-light font_ternary leading-6 xl:leading-[28px] gradient_bg md:w-max py-2.5 lg:py-5 px-8 lg:px-8 rounded-3xl md:rounded-[60px] text-secondary">
                <span className="font-semibold">Desktop </span> – Windows &
                macOS.
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mt5anywhere;
