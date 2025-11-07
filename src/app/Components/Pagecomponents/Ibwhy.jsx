"use client"
import React from "react";
import boxbg from "../../../../public/banners/box-bg.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import firebtn from "../../../../public/icons/firebtnicon.svg";
import Button from "../Uiux/Button";
import Link from "next/link";
import { useAutoScroll } from "../../../hooks/useAutoScroll";
const tradeInfo = [
  {
    title: "Referral",
    description: "Get started by referring <br/> friends and family."
  },
  {
    title: "Dashboard",
    description: "Track your referrals and <br/> earnings easily."
  },
  {
    title: "Commission",
    description: "Earn rewards for every <br/> referral."
  },
  {
    title: "Earnings",
    description: "Unlimited potential with <br/> every trader."
  }
];

const Ibwhy = () => {
  useAutoScroll("ib-why", { delay: 800 });
  return (
    <div className="bg-theme">
      <div
        className="bg-contain"
        style={{ backgroundImage: `url(${boxbg.src})` }}
      >
        <div className="inn_container pt-12">
          <div className="grid grid-col-1 md:grid-cols-2 pb-5 text-center md:text-start relative z-[2]" id="ib-why">
            <Title
              title="Why Become an <br/> IB Partner?"
              color="text-white"
            />
            <div className="flex justify-center items-center">
              <Discription
                dispription={`What makes our IB program the best choice.`}
                color="text-white"
              />
            </div>
          </div>
        </div>
        <div className="max-w-[1340px] m-auto py-12 md:py-18 px-[3%] xl:px-0">
          <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-y-18 gap-x-6">
            {tradeInfo.map((data, index) =>
              <div
                key={index}
                className={`relative flex ${index % 2 === 0
                  ? "justify-end"
                  : "justify-start"} `}
              >
                <div
                  className={`${index == 1 || index == 2
                    ? "bg-subprimary"
                    : "bg-primary"} py-4 md:py-7 px-6 md:px-12 max-w-[300px] xl:max-w-[400px] w-full text-[24px] lg:text-[40px] font_ternary  rounded-[70px] text-white ${index %
                    2 ===
                  0
                    ? "text-end"
                    : "text-start"}`}
                >
                  0{index + 1}
                </div>
                <div
                  className={`absolute z-[20] top-[-9px] xl:top-[-20px] bg-[#E2E2FF] py-3 min-h-[94px] md:min-h-[123px] lg:min-h-[unset] justify-center md:py-6 px-8 md:px-16 max-w-[300px] md:max-w-[400px] xl:max-w-[500px] w-full text-[40px] font_ternary text-end rounded-[90px] text-white transition-all duration-700 cursor-pointer ${index %
                    2 ===
                  0
                    ? "right-[15%] md:right-[19%] hover:right-0"
                    : "left-[15%] md:left-[19%] hover:left-0"}`}
                >
                  <div
                    className={`flex flex-col ${index % 2 === 0
                      ? "items-start"
                      : "text-end"}`}
                  >
                    <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-primary ">
                      {data.title}
                    </p>
                    <span
                      className={`list_text text-secondary font-light font_ternary ${index %
                        2 ===
                      0
                        ? "text-start"
                        : "text-end"}`}
                      dangerouslySetInnerHTML={{ __html: data.description }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-center pt-12 md:pt-18">
            <Link
              href={"https://client.fliptradegroup.com/trader/registration"}
            >
              <Button
                btn_name="Become IB Partner"
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
    </div>
  );
};

export default Ibwhy;
