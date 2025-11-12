import React from "react";
import Title from "../Uiux/Title";
import Journeybluebg from "../../../../public/images/Journeybluebg.webp";
import Discription from "../Uiux/Discription";
import Image from "next/image";
import Journeyperson from "../../../../public/images/Journeyperson.webp";
import leranmt5left from "../../../../public/images/leranmt5left.webp";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import learnmt5bg from "../../../../public/images/learnmt5bg.webp";
import Link from "next/link";
function Journey() {
  return (
    <div className="bg-theme  pt-12 xl:pt-24 2xl:pt-36">
      <div className="inn_container">
        <div className="grid grid-col-1 md:grid-cols-2 pb-5 text-center md:text-start relative z-[2]">
          <Title
            title="Your Journey to <span class='gradient_text'> Becoming a Trader </span>"
            color="text-white"
          />
          <div className="flex justify-center items-center">
            <Discription
              dispription={`A clear, structured path from beginner to <br/> professional trader.`}
              color="text-white"
            />
          </div>
        </div>
      </div>
      <div className="px-[3%] pt-6 lg:pt-16 xl:pt-22 2xl:pt-32">
        <div
          className="bg-cover bg-center relative"
          style={{ backgroundImage: `url(${Journeybluebg.src})` }}
        >
          <div className="inn_container grid lg:grid-cols-2  py-18 lg:py-30 xl:py-44 gap-y-8 md:gap-y-18 lg:gap-y-24 xl:gap-y-40 relative z-20">
            <div className="2xl:relative flex justify-between items-center shadow-[10px_12px_20px_8px_#00000036] py-4 px-8 max-w-[90%] xl:max-w-[80%] 2xl:max-w-[516px] bg-white rounded-tr-full md:rounded-tr-none  rounded-br-full md:rounded-br-none rounded-tl-full rounded-bl-full  gap-3 lg:gap-12 left-[9%] bottom-8">
              <div className="text-[22px] lg:text-3xl 2xl:text-4xl font-bold bg-primary w-[40px] md:w-[80px] h-[40px] md:h-[80px] flex justify-center items-center rounded-full text-white">
                A
              </div>
              <div>
                <h5 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-medium text-secondary text-end">
                  Learn
                </h5>
                <div className="list_text font-light text-end font_ternary md:leading-[28px] max-w[330px] text-secondary ">
                  Start with fundamentals and <br /> build your knowledge base.
                </div>
              </div>
            </div>
            <div className="2xl:relative flex justify-between items-center shadow-[10px_12px_20px_8px_#00000036] py-4 px-8 max-w-[90%] xl:max-w-[80%] 2xl:max-w-[516px] bg-white rounded-tl-full md:rounded-tl-none rounded-bl-full  md:rounded-bl-none rounded-tr-full rounded-br-full ms-auto gap-3 lg:gap-12 right-[9%] bottom-8">
              <div>
                <h5 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-medium text-secondary text-start">
                  Practice
                </h5>
                <div className="list_text font-light text-start font_ternary md:leading-[28px] max-w[330px] text-secondary ">
                  Apply strategies in risk-free <br /> demo environments.e.
                </div>
              </div>
              <div className="text-[22px] lg:text-3xl 2xl:text-4xl font-bold bg-primary w-[40px] md:w-[80px] h-[40px] md:h-[80px] flex justify-center items-center rounded-full text-white">
                B
              </div>
            </div>
            <div className="2xl:relative flex justify-between items-center shadow-[10px_12px_20px_8px_#00000036] py-4 px-8 max-w-[90%] xl:max-w-[80%] 2xl:max-w-[516px] bg-white rounded-tr-full md:rounded-tr-none  rounded-br-full md:rounded-br-none  rounded-tl-full rounded-bl-full  gap-3 lg:gap-12 bottom-6">
              <div className="text-[22px] lg:text-3xl 2xl:text-4xl font-bold bg-primary w-[40px] md:w-[80px] h-[40px] md:h-[80px] flex justify-center items-center rounded-full text-white">
                C
              </div>
              <div>
                <h5 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-medium text-secondary text-end">
                  Trade
                </h5>
                <div className="list_text font-light text-end font_ternary md:leading-[28px] max-w[330px] text-secondary ">
                  Execute live trades with <br /> confidence and precision.
                </div>
              </div>
            </div>
            <div className="2xl:relative flex justify-between items-center shadow-[10px_12px_20px_8px_#00000036] py-4 px-8 max-w-[90%] xl:max-w-[80%] 2xl:max-w-[516px] bg-white rounded-tl-full md:rounded-tl-none rounded-bl-full  md:rounded-bl-none  rounded-tr-full rounded-br-full ms-auto gap-3 lg:gap-12 bottom-6">
              <div>
                <h5 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-medium text-secondary text-end">
                  Earn
                </h5>
                <div className="list_text font-light text-end font_ternary md:leading-[28px] max-w[330px] text-secondary ">
                  Generate consistent returns <br /> from the markets.
                </div>
              </div>
              <div className="text-[22px] lg:text-3xl 2xl:text-4xl font-bold bg-primary w-[40px] md:w-[80px] h-[40px] md:h-[80px] flex justify-center items-center rounded-full text-white">
                D
              </div>
            </div>
          </div>
          {/* person image */}
          <div className="absolute w-full h-full hidden xl:flex justify-center items-end top-0 z-10">
            <Image
              src={Journeyperson}
              alt="Journeyperson"
              width={1000}
              height={500}
              className="max-w-[400px] 2xl:max-w-[514px]"
            />
          </div>
        </div>
      </div>

      <div className="pt-12 xl:pt-24 2xl:pt-36">
        <div
          className=" bg-cover bg-center"
          style={{ backgroundImage: `url(${learnmt5bg.src})` }}
        >
          <div className="inn_container">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr]">
              <div>
                <Image
                  src={leranmt5left}
                  alt="Side banner"
                  width={2000}
                  height={500}
                  className="max-w-[750px] md:max-w-[unset] m-auto w-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center ps-4">
                <div
                  className="text-center lg:text-start pt-12 md:pt-0 px-5 md:px-0"
                  id="trade-download"
                >
                  <Title
                    title={`Learn MT5 <br/> from Beginner to Pro`}
                    color="gradient_text"
                  />
                  <p className="p-4" />
                  <Discription
                    dispription={`MT5 delivers speed, accuracy, and flexibility for <br/> trading Forex, CFDs, and more — all in one <br/> platform.`}
                    color="text-white"
                  />
                  <div className="flex justify-center md:justify-start me-auto pt-5">
                    <Link
                     href={'/platform'}>
                    <Button
                      btn_name={`Master MT5 Today`}
                      icon={firebtnicon.src}
                      btn_bg={`bg-primary`}
                      text_color="text-white"
                      border_color="border-primary"
                      shadow={true}
                    />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
