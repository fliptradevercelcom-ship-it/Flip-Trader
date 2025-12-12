"use client";
import React from "react";
import boxbg from "../../../../../public/banners/box-bg.webp";
import Title from "../../Uiux/Title";
import Discription from "../../Uiux/Discription";
import accountarrowsecondary from "../../../../../public/images/accountarrowsecondary.webp";
import accountarrowprimary from "../../../../../public/images/accountarrowprimary.webp";
import bgarrow from "../../../../../public/images/accountwhyarrow.webp";
import Image from "next/image";
import { useAutoScroll } from "../../../../hooks/useAutoScroll";
const Accountgetstarted = ({
  description,
  mini_depo,
  spreads_from,
  swap_free,
  commission
}) => {
  useAutoScroll("get-started", { delay: 800 });
  return (
    <div className="bg-theme relative">
      <video
        className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none"
        src="/videos/marketsgraphbg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div
        className="bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${boxbg.src})` }}
      >
        <div className="inn_container  py-16 md:py-20 lg:py-40 bg-contain">
          <div
            className="grid grid-col-1 text-center lg:text-start lg:grid-cols-2"
            id="get-started"
          >
            <Title title="Get Started Easily" color="gradient_text" />
            <div className="flex justify-center items-center">
              <Discription dispription={description} color="text-white" />
            </div>
          </div>

          <div className="pt-12 lg:pt-24">
            <div
              className="grid grid-cols-2 lg:grid-cols-4 max-w-[600px] bg_image_none lg:max-w-[800px] xl:max-w-[1024px] 2xl:max-w-[1280px] m-auto bg-no-repeat bg-top"
              style={{ backgroundImage: `url(${bgarrow.src})` }}
            >
              <div className="relative">
                <Image
                  src={accountarrowprimary}
                  alt="Arrow graphic highlighting the minimum deposit detail"
                  width={1000}
                  height={500}
                  className="max-w-[140px] lg:max-w-[180px] xl:max-w-[220px] 2xl:max-w-[280px] m-auto lg:m-[unset]"
                />
                <div className="lg:absolute left-[-25%] top-[45%]">
                  <h5 className="lg:pe-16 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-white text-center lg:text-end">
                    Minimum <br /> Deposit:{" "}
                    <span className="text-primary">{mini_depo}</span>
                  </h5>
                </div>
              </div>
              <div className="lg:pt-54 relative">
                <Image
                  src={accountarrowsecondary}
                  alt="Arrow graphic highlighting spread information"
                  width={1000}
                  height={500}
                  className="max-w-[140px] lg:max-w-[180px] xl:max-w-[220px] 2xl:max-w-[280px] m-auto lg:m-[unset]"
                />
                <div className="lg:absolute lg:w-[120%] left-[-22%]">
                  <h5 className="lg:pe-16 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-white text-center lg:text-end">
                    Spreads: From <br />
                    <span className="text-primary"> {spreads_from} </span>
                  </h5>
                </div>
              </div>
              <div className="lg:pt-54 relative">
                <Image
                  src={accountarrowprimary}
                  alt="Arrow graphic emphasising the swap-free benefit"
                  width={1000}
                  height={500}
                  className="max-w-[140px] lg:max-w-[180px] xl:max-w-[220px] 2xl:max-w-[280px] m-auto lg:m-[unset] rotate-[295deg]"
                />
                <div className="lg:absolute right-[-70%] xl:right-[-60%] bottom-0 xl:bottom-[10%]">
                  <h5 className="lg:pe-16 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-white text-center lg:text-end">
                    Swap-Free: <br />
                    <span className="text-primary">{swap_free}</span>
                  </h5>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={accountarrowsecondary}
                  alt="Arrow graphic pointing to commission details"
                  width={1000}
                  height={500}
                  className="max-w-[140px] lg:max-w-[180px] xl:max-w-[220px] 2xl:max-w-[280px] m-auto lg:m-[unset] rotate-[295deg]"
                />
                <div className="lg:absolute top-[20%] right-[-50%]">
                  <h5 className="lg:pe-16 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-white text-center lg:text-end">
                    Commission: <br />
                    <span className="text-primary">{commission}</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountgetstarted;
