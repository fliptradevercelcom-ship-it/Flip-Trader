import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import cardarrowbgleft from "../../../../public/images/cardarrowbgleft.webp";
import cardarrowbgright from "../../../../public/images/cardarrowbgright.webp";
import Image from "next/image";
const Reviewcontent = () => {
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
      <div className="inn_container pt-16 md:pt-20 lg:pt-30">
        <div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start">
          <div>
            <Title title="Supported Trading Instruments" color="gradient_text" />
          </div>
          <div className="flex justify-center items-center">
            <Discription
              dispription="The platform supports multiple asset classes, including forex, indices, commodities, crypto, and stocks."
              color="text-white"
            />
          </div>
        </div>

        <div className="pt-12">
          <div className="flex flex-col lg:flex-row gap-2 justify-center">
            <div className="relative">
              <Image
                src={cardarrowbgleft}
                alt="bg"
                width={1000}
                height={500}
                className="max-w-[625px] w-full m-auto"
              />
              <div className="absolute top-0 w-full h-[72%] flex justify-center items-center">
                <div className="">
                  <p className="text-xl md:text-2xl lg:text-4xl xl:text-3xl 2xl:text-4xl null  font-medium text-white text-center">
                    Multiple Trading 
                  </p>
                  <span className="list_text font-light text-center max-w-[350px] md:max-w-[unset] m-auto  pt-4 font_ternary leading-[28px] max-w[330px] min-h-[65px] h-full flex text-white justify-center">
                    Forex, indices, commodities, crypto, and <br /> stocks  available on one platform.
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={cardarrowbgright}
                alt="bg"
                width={1000}
                height={500}
                className="max-w-[625px] w-full m-auto"
              />
              <div className="absolute top-0 w-full h-[72%] flex justify-center items-center">
                <div className="">
                  <p className="text-xl md:text-2xl lg:text-4xl xl:text-3xl 2xl:text-4xl null  font-medium text-white text-center">
                    Deep Liquidity
                  </p>
                  <span className="list_text font-light text-center max-w-[350px] md:max-w-[unset] m-auto  pt-4 font_ternary leading-[28px] max-w[330px] min-h-[65px] h-full flex text-white justify-center">
                    Optimal pricing for <br /> every trade
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-2 justify-center relative lg:top-[-80px]">
            <div className="relative">
              <Image
                src={cardarrowbgleft}
                alt="bg"
                width={1000}
                height={500}
                className="max-w-[625px] w-full m-auto"
              />
              <div className="absolute top-0 w-full h-[72%] flex justify-center items-center">
                <div className="">
                  <p className="text-xl md:text-2xl lg:text-4xl xl:text-3xl 2xl:text-4xl null  font-medium text-white text-center">
                    24/7 Access
                  </p>
                  <span className="list_text font-light text-center max-w-[350px] md:max-w-[unset] m-auto  pt-4 font_ternary leading-[28px] max-w[330px] min-h-[65px] h-full flex text-white justify-center">
                    Trade global markets <br /> anytime
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src={cardarrowbgright}
                alt="bg"
                width={1000}
                height={500}
                className="max-w-[625px] w-full m-auto"
              />
              <div className="absolute top-0 w-full h-[72%] flex justify-center items-center">
                <div className="">
                  <p className="text-xl md:text-2xl lg:text-4xl xl:text-3xl 2xl:text-4xl null  font-medium text-white text-center">
                    One Account
                  </p>
                  <span className="list_text font-light text-center max-w-[350px] md:max-w-[unset] m-auto  pt-4 font_ternary leading-[28px] max-w[330px] min-h-[65px] h-full flex text-white justify-center">
                    All instruments in a <br /> single account
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewcontent;

