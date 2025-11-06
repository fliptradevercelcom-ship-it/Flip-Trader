import React from "react";
import sidebanner from "../../../../public/banners/mt5.webp";
import banner from "../../../../public/banners/mt5main.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtn from "../../../../public/icons/firebtnicon.svg";
import Image from "next/image";
import Link from "next/link";
function Mt5banner() {
  return (
    <div className="relative">
      <video
        className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none brightness-[0.2]"
        src='/videos/forexbgvideo.mp4'
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      /> 
      <div className="inn_container pt-40 2xl:pt-52">
        <div className="grid xl:grid-cols-2">
          <div className="text-center xl:text-start">
            <div>
              <Title
                title={`MetaTrader 5 – Trade Smarter, Faster`}
                color="gradient_text"
                ish1={true}
              />
              <div className="flex w-full pt-4">
                <Discription
                  dispription={`MetaTrader 5 (MT5) is a next-gen trading platform for traders of all  levels. Trade Forex, stocks, commodities, indices, and cryptocurrencies in one place.`}
                  color="text-[#D0D0D0]"
                />
              </div>

              <div className="pt-12 pb-5">
                <Link
                 href='https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=en_IN'
                 target="_blank"
                 >
                <Button
                  btn_name="Download MT5"
                  border_color="border-primary"
                  btn_bg={"bg-primary"}
                  shadow={true}
                  text_color={"text-white"}
                  icon={firebtn}
                />
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-8 xl:pt-0 relative z-[1]">
            <Image
              src={sidebanner}
              alt="side banner"
              width={1500}
              height={500}
              className="w-[80%]  m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mt5banner;
