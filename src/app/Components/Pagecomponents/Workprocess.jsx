"use client";
import React from "react";
import Title from "../Uiux/Title";
import Image from "next/image";
import workflowround from "../../../../public/images/workflowround.webp";
import { useAutoScroll } from "../../../hooks/useAutoScroll";

export default function Workprocess() {
  useAutoScroll("workprocess", { delay: 800 });

  return (
    <div className="bg-animated-gradient" id="workprocess">
      <div className="inn_container relative pt-12 md:pt-18 pb-20 md:pb-32">
        {/* ================= DESKTOP VERSION (Unchanged) ================= */}
        <div className="max-w-[550px] 2xl:max-w-[750px] m-auto relative hidden xl:block">
          <Image
            src={workflowround}
            alt="workflowround"
            width={1000}
            height={500}
            className="w-full"
          />
          <div className="absolute top-0 w-full h-[78%] flex justify-center items-center text-center">
            <h3 className="text-4xl 2xl:text-5xl text-white h-max">
              In Just
              <br />
              <span className=" text-[100px] 2xl:text-[130px] leading-[100px] 2xl:leading-[130px] text-[#F2A9FF] font-bold">
                3
              </span>
              <br />
              Easy Steps
            </h3>
          </div>
        </div>

        {/* ================= MOBILE / TABLET VERSION ================= */}
        <div className="block xl:hidden text-center md:mb-10 relative">
          <div className="max-w-[350px] sm:max-w-[400px] mx-auto relative">
            <Image
              src={workflowround}
              alt="workflowround"
              width={600}
              height={300}
              className="w-full opacity-40"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bottom-[4rem] lg:bottom-0">
              <h3 className="text-2xl sm:text-3xl font-semibold">
                In Just
              </h3>
              <span className="text-[60px] sm:text-[80px] leading-[60px] sm:leading-[80px] text-subprimary font-bold">
                3
              </span>
              <h3 className="text-2xl sm:text-3xl font-semibold">
                Easy Steps
              </h3>
            </div>
          </div>
        </div>

        {/* ================= STEPS ================= */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 md:gap-16 relative">
          {/* Step A */}
          <div className="flex flex-col sm:flex-row xl:absolute xl:top-[-35rem] xl:left-0 items-center xl:items-center text-center xl:text-left gap-4 sm:gap-6">
            <h3 className="text-[60px] sm:text-[80px] xl:text-[100px] 2xl:text-[130px] leading-none text-white">
              A)
            </h3>
            <div>
              <p className="text-lg sm:text-xl xl:text-3xl 2xl:text-4xl font-medium text-primary gradient_text pb-2">
                Set Up Your<br/> Account
              </p>
              <span className="text-white text-sm sm:text-base leading-[24px] font-light">
                Begin trading online with just your <br className="hidden sm:block" /> basic contact details
              </span>
            </div>
          </div>

          {/* Step B */}
          <div className="flex flex-col sm:flex-row xl:absolute xl:top-[-38rem] xl:right-[3%] 2xl:right-0 items-center xl:items-center text-center xl:text-left gap-4 sm:gap-6">
            <h3 className="text-[60px] sm:text-[80px] xl:text-[100px] 2xl:text-[130px] leading-none text-white">
              B)
            </h3>
            <div>
              <p className="text-lg sm:text-xl xl:text-3xl 2xl:text-4xl font-medium text-primary gradient_text pb-2">
                Easy Funding
              </p>
              <span className="text-white text-sm sm:text-base leading-[24px] font-light">
                Securely deposit and withdraw using <br className="hidden sm:block" /> convenient local solutions
              </span>
            </div>
          </div>

          {/* Step C */}
          <div className="flex flex-col sm:flex-row xl:absolute xl:bottom-[15%] xl:left-[40%] items-center xl:items-center text-center xl:text-left gap-4 sm:gap-6">
            <h3 className="text-[60px] sm:text-[80px] xl:text-[120px] 2xl:text-[130px] leading-none text-white">
              C)
            </h3>
            <div className="md:flex md:items-center md:gap-2">
              <p className="text-lg sm:text-xl xl:text-3xl 2xl:text-4xl font-medium text-primary gradient_text pb-2">
                Start<br/> Trading
              </p>
              <span className="text-white text-sm sm:text-base leading-[24px] font-light">
                Start trading on your live account and <br className="hidden sm:block" /> access 2000+ instruments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
