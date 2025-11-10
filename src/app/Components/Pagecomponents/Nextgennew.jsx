"use client";
import React, { useEffect, useRef } from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import newgencardbg from "../../../../public/images/newgencardbg.webp";
const Nextgennew = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.70;
    }
  }, []);
  return (
    <div className="relative pt-12 md:pt-18 lg:pt-28 xl:pt-38 bg-theme overflow-hidden">
      <div className="relative inn_container mt-12 md:mt-18 text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10 lg:opacity-50 z-[5]"
        >
          <source src="/videos/nextgen-bg.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover opacity-30 lg:opacity-20"
          >
            <source src="/videos/Fliptradeiconvideo.mp4" type="video/mp4" />
          </video>
          <div className="lg:absolute top-0 left-0 w-full h-full z-10">
            <div className="grid grid-col-1 text-center lg:text-start lg:grid-cols-[3fr_2fr]  bg-[linear-gradient(180deg,rgba(0,0,0,1)_0%,rgba(255,255,255,0)_100%)]">
              <div>
                <Title
                  title="Next-Gen Forex <br/> Trading for Everyone"
                  color="gradient_text"
                />
              </div>
              <div className="flex justify-center items-center">
                <Discription
                  dispription={`Trade with zero hidden fees, ultra-tight spreads, and lightning-fast execution. FlipTrade gives 
                       you transparent pricing, expert insights, & a stable platform you can trust.`}
                  color="text-white"
                />
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 pt-12 lg:pt-18 gap-x-16 gap-y-12">
                <div className="flex justify-end">
                  <div
                    className="w-[433px] bg-contain bg-no-repeat py-6 "
                    style={{ backgroundImage: `url(${newgencardbg.src})` }}
                  >
                    <p className="md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-semibold text-white min-w-[200px] text-center pb-2">
                      Ultra-Tight Spreads
                    </p>
                    <p className="list_text font-light text-center font_ternary leading-[28px] text-white">
                      From 0.0 pips.
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    className="max-w-[433px] bg-contain bg-no-repeat py-6 "
                    style={{ backgroundImage: `url(${newgencardbg.src})` }}
                  >
                    <p className="md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-semibold text-white min-w-[200px] text-center pb-2">
                      Fast Execution
                    </p>
                    <p className="list_text font-light text-center font_ternary leading-[28px] text-white">
                      Milliseconds matter.
                    </p>
                  </div>
                </div>
                <div>
                  <div
                    className="max-w-[433px] bg-contain bg-no-repeat py-6 "
                    style={{ backgroundImage: `url(${newgencardbg.src})` }}
                  >
                    <p className="md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-semibold text-white min-w-[200px] text-center pb-2">
                      Exclusive Insights
                    </p>
                    <p className="list_text font-light text-center font_ternary leading-[28px] text-white">
                      Signals & analysis.
                    </p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div
                    className="w-[433px] bg-contain bg-no-repeat py-6 "
                    style={{ backgroundImage: `url(${newgencardbg.src})` }}
                  >
                    <p className="md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl font-semibold text-white min-w-[200px] text-center pb-2">
                      Transparent Pricing
                    </p>
                    <p className="list_text font-light text-center font_ternary leading-[28px] text-white">
                      No hidden costs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nextgennew;
