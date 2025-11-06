"use client"
import React from "react";

import Image from "next/image";
import Discription from "../../Uiux/Discription";
import Title from "../../Uiux/Title";
import { useAutoScroll } from "../../../../hooks/useAutoScroll";


const Accountcards = ({description ,carddata}) => {
  useAutoScroll("trade-acc", { delay: 800 });
  return (
    <div className="bg-theme">
      <div className="inn_container ">
        <div className="grid grid-col-1 text-center lg:text-start lg:grid-cols-2">
          <Title
            title="Who Should Trade <br/> This Account"
            color="text-white"
          />
          <div className="flex justify-center items-center" id="trade-acc">
            <Discription
              dispription={description}
              color="text-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-0 xl:grid-cols-3 pt-8 md:pt-18">
          {carddata.map((data, index) =>
            <div
              key={index}
              className={`xl:relative px-10 py-20 flex flex-col gap-8 h-full rounded-[50px] ${data.class}  ${index %
                2 ===
              0
                ? "bg-primary"
                : "bg-[#E2E2FF]"}`}
            >
              <div>
                <Image
                  src={data.icon}
                  alt=""
                  width={1000}
                  height={500}
                  className={`max-w-[88px] m-auto xl:relative ${index === 0
                    ? ""
                    : "left-[10%]"}`}
                />
              </div>
              <div
                className={`text-center flex flex-col justify-center gap-4 m-auto max-w-[330px] xl:relative ${index ===
                0
                  ? ""
                  : "left-[10%]"}`}
              >
                <h5
                  className={`text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium ${index %
                    2 ===
                  0
                    ? "text-white"
                    : "text-primary"}`}
                  dangerouslySetInnerHTML={{ __html: data.title }}
                />
                <span
                  className={`list_text font-light font_ternary leading-6 xl:leading-[28px] ${index %
                    2 ===
                  0
                    ? "text-white"
                    : "text-secondary"}`}
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accountcards;
