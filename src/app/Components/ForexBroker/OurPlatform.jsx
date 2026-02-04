import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Image from "next/image";
import tradingposterlaptop from "../../../../public/images/tradingposterlaptop.webp";

const OurPlatform = ({title, description, data}) => {
  return (
    <div className="inn_container pb-12 md:pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] text-center lg:text-start gap-5">
        <div>
          <Title
            title={title}
            color="gradient_text"
          />
        </div>
        <div className="flex justify-center items-center">
          <Discription
            dispription={description}
            color="text-white"
          />
        </div>
      </div>
      <div className="pt-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="space-y-8">
          {data.map((item, index) =>
            <div
              className={`relative lg:w-fit  bg-theme rounded-3xl lg:mr-auto border-b lg:border-b-0 border-r-0 lg:border-l-[3px] border-white shadow-[0_-15px_20px_-16px_#6a40ec,0_15px_16px_-15px_#6a40ec] max-w-150 ps-6 py-5 ${item.class}`}
              key={index}
            >
              <h4 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-8.75  font-medium gradient_text text-center lg:text-start">
                {item.title}
              </h4>
              <p className="list_text pt-4 font-light font_ternary  max-w-100  text-center md:text-start lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-7 !text-white">
                {item.description}
              </p>
            </div>
          )}
        </div>
        <div className="hidden lg:flex items-center">
          <Image
            src={tradingposterlaptop}
            alt="tradingposterlaptop"
            width={1000}
            height={500}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default OurPlatform;
