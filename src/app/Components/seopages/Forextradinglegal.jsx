import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
const tradeInfo = [
  "DFSA (Dubai Financial Services Authority)",
  "SCA (Securities and Commodities Authority)"
];
const Forextradinglegal = () => {
  return (
    <div>
      <div className="inn_container pt-12 xl:pt-24 2xl:pt-36">
        <div className="text-center max-w-7xl m-auto">
          <Title
            title={"Is Forex Trading Legal and Regulated in Dubai?"}
            color={"gradient_text"}
          />
          <div className="pt-3">
            <Discription
              dispription={
                "Yes, forex trading in Dubai UAE is legal and regulated under authorities such as"
              }
              color={"text-white"}
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-y-8 pt-12 md:pt-18">
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
                  <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-primary ">
                    {data}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="pt-12 text-center max-w-7xl m-auto">
          <Discription
            dispription={
              "FlipTrade Group operates with complete compliance and ensures a safe, secure, and transparent environment for all clients. Our goal is to become the most trusted choice among forex brokers Dubai traders depend on for fairness and reliability."
            }
            color={"text-white"}
          />
        </div>
      </div>
    </div>
  );
};

export default Forextradinglegal;
