import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Tradefliptradeposter from "../../../../public/images/Tradefliptrade.webp";
import Image from "next/image";
import Tradefliptradeline1 from "../../../../public/images/Tradefliptradeline1.webp";
import Tradefliptradeline2 from "../../../../public/images/Tradefliptradeline2.webp";
import Tradefliptradeline3 from "../../../../public/images/Tradefliptradeline3.webp";
import Tradefliptradeline4 from "../../../../public/images/Tradefliptradeline4.webp";
import Tradefliptradeline5 from "../../../../public/images/Tradefliptradeline5.webp";
import Tradefliptradeline6 from "../../../../public/images/Tradefliptradeline6.webp";
import xlbluebg from "../../../../public/images/2xlbluebg.webp";
const featureData = [
  {
    title: "Smart Automation",
    desc: "Copy trades instantly with real <br /> time execution."
  },
  {
    title: "Verified Traders",
    desc: "Follow trusted and high-performing <br /> strategy providers."
  },
  {
    title: "Transparent Results",
    desc: "View performance history and risk <br /> metrics before investing."
  },
  {
    title: "Full Control",
    desc: "Adjust, pause, or stop <br /> copying anytime."
  },
  {
    title: "Flexible Investments",
    desc: "Set amounts and risk levels that <br /> suit your strategy."
  },
  {
    title: "Community Learning",
    desc: "Adjust, pause, or stop <br /> copying anytime."
  }
];

const Tradefliptrade = () => {
  return (
    <div className="px-0 xl:px-[3%]">
      <div
        className="bg-theme py-12 md:py-18 bg-cover 2xl:bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${xlbluebg.src})` }}
      >
        <div className="inn_container">
          <div className="grid grid-col-1 md:grid-cols-2 pb-5 text-center md:text-start relative z-[2]">
            <Title title="Why Trade with <br/> Fliptrade" color="text-white" />
            <div className="flex justify-center items-center">
              <Discription
                dispription={`Experience the advantage of expert trading.`}
                color="text-white"
              />
            </div>
          </div>
          <div className="relative hidden xl:block">
            <div className="py-38">
              <Image
                src={Tradefliptradeposter}
                alt="FlipTrade copy trading dashboard illustration"
                width={3000}
                height={500}
                className="max-w-[600px] m-auto"
              />
            </div>
            {/* Pointers */}
            <div className="absolute top-[4%] 2xl:top-[2%] left-[25%] w-max">
              <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-white text-end">
                Smart Automation
              </h5>
              <div className="relative w-max">
                <Image
                  src={Tradefliptradeline1}
                  alt="Tradefliptradeline1"
                  width={1000}
                  height={500}
                  className="max-w-[350px] 2xl:max-w-[448px]"
                />
                <p className="absolute top-4 right-4 list_text font-light font_ternary  max-w-[400px] !text-white  text-center md:text-end lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]">
                  Copy trades instantly with real <br /> time execution.
                </p>
              </div>
            </div>
            <div className="absolute top-[18%] left-[5%] w-max">
              <h5 className="pe-16 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-white text-end">
                Verified Traders
              </h5>
              <div className="relative w-max">
                <Image
                  src={Tradefliptradeline2}
                  alt="Tradefliptradeline1"
                  width={1000}
                  height={500}
                  className="max-w-[410px] 2xl:max-w-[560px]"
                />
                <p className="absolute top-4 right-16 list_text font-light font_ternary  max-w-[400px] !text-white   text-center md:text-end lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]">
                  Follow trusted and high-performing <br /> strategy providers.
                </p>
              </div>
            </div>
            <div className="absolute bottom-[50%] left-[2%] w-max">
              <h5 className="pe-16 2xl:pe-24 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-white text-end">
                Transparent Results
              </h5>
              <div className="relative w-max">
                <Image
                  src={Tradefliptradeline3}
                  alt="Tradefliptradeline1"
                  width={1000}
                  height={500}
                  className="max-w-[410px] 2xl:max-w-[560px]"
                />
                <p className="absolute top-4 right-16 2xl:right-24 list_text font-light font_ternary !text-white  max-w-[400px]  text-center md:text-end lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]">
                  View performance history and risk <br /> metrics before
                  investing.
                </p>
              </div>
            </div>
            <div className="absolute bottom-[35%] left-[5%] w-max">
              <h5 className="pe-44 2xl:pe-40 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-white text-end">
                Full Control
              </h5>
              <div className="relative w-max">
                <Image
                  src={Tradefliptradeline4}
                  alt="Tradefliptradeline1"
                  width={1000}
                  height={500}
                  className="max-w-[410px] 2xl:max-w-[560px]"
                />
                <p className="absolute top-4 right-44 2xl:right-40 list_text font-light font_ternary !text-white  max-w-[400px]  text-center md:text-end lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]">
                  Adjust, pause, or stop <br /> copying anytime.
                </p>
              </div>
            </div>
            <div className="absolute top-[4%] right-[6%] w-max">
              <h5 className="ps-4 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-white text-start">
                Flexible Investments
              </h5>
              <div className="relative w-max">
                <Image
                  src={Tradefliptradeline5}
                  alt="Tradefliptradeline1"
                  width={1000}
                  height={500}
                  className="max-w-[350px] 2xl:max-w-[448px]"
                />
                <p className="absolute top-4 left-4 list_text font-light font_ternary  max-w-[400px] !text-white  text-center md:text-start lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]">
                  Set amounts and risk levels that <br /> suit your strategy.
                </p>
              </div>
            </div>
            <div className="absolute bottom-[25%] right-[12%] w-max">
              <h5 className="ps-18 2xl:ps-32 text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium text-white text-start">
                Community Learning
              </h5>
              <div className="relative w-max">
                <Image
                  src={Tradefliptradeline6}
                  alt="Tradefliptradeline1"
                  width={1000}
                  height={500}
                  className="max-w-[410px] 2xl:max-w-[560px]"
                />
                <p className="absolute top-4 left-32 list_text font-light font_ternary  max-w-[400px] !text-white  text-center md:text-start lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]">
                  Adjust, pause, or stop <br /> copying anytime.
                </p>
              </div>
            </div>
          </div>
          <div className="block xl:hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featureData.map((item, index) =>
                <div
                  className="p-3 ui_btn_shadow rounded-2xl bg-black"
                  key={index}
                >
                  <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px] font-medium gradient_text text-center md:text-start">
                    {item.title}
                  </h5>
                  <p
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                    className="list_text font-light font_ternary max-w-[400px] text-center md:text-start lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px] !text-white"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tradefliptrade;
