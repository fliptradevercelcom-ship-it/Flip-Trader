import React from "react";
import Title from "../Uiux/Title";
import Image from "next/image";
import upgradestepbg from "../../../../public/images/upgradestepbg.webp";
import accounttypebg from "../../../../public/images/accounttypebg.webp";
function Accountstep() {
  const features = [
    {
      title: "Faster transactions",
      description: "Quick deposits and withdrawals."
    },
    {
      title: "Lower trading costs",
      description: "Tighter spreads and better pricing."
    },
    {
      title: "Deeper market insight",
      description: "Access research, analysis, and signals."
    },
    {
      title: "Personalized support",
      description: "Priority help and dedicated guidance."
    },
    {
      title: "Advanced tools",
      description: "More flexibility with powerful features."
    }
  ];

  return (
    <div className="bg-theme bg-cover bg-no-repeat bg-center" 
     style={{backgroundImage:`url(${accounttypebg.src})`}}
    >
      <div className="inn_container py-12 md:py-18 lg:py-24">
        <div className="text-center pb-6 md:pb-12  lg:text-start">
          <Title
            title="Reasons to Upgrade <br/> Your Account"
            color="text-white"
          />
        </div>
        <div className="hidden lg:block relative">
          <Image
            src={upgradestepbg}
            alt="upgradestepbg"
            width={2000}
            height={500}
            className="w-full"
          />
          <div className="absolute top-0 w-full h-full">
            <div className="h-[50%] flex items-center w-full relative">
              <div className="grid grid-cols-[1fr_3fr_3fr_1fr] w-full pt-10 xl:pt-16">
                <div />
                <div className="text-center">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl xl:pb-3 font-medium text-white text-center">
                    Lower trading costs
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px] text-white">
                    Tighter spreads and <br /> better pricing.
                  </span>
                </div>
                <div className="text-center">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl xl:pb-3 font-medium text-white text-center">
                    Deeper market insight
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px] text-white">
                    Access research, analysis, <br /> and signals.
                  </span>
                </div>
                <div />
              </div>
              <div className="absolute left-[9.1%] 2xl:left-[8.8%] top-[11%] 2xl:top-[9%] w-[75px] xl:w-[90px] 2xl:w-[122px] h-[75px] xl:h-[90px] 2xl:h-[122px] bg-black rounded-[50%] text-2xl xl:text-3xl 2xl:text-[40px] font_ternary flex items-center justify-center text-white">
                01
              </div>
              <div className="absolute left-[45.6%] 2lx:left-[45.3%] top-[11%] 2xl:top-[9%] w-[75px] xl:w-[90px] 2xl:w-[122px] h-[75px] xl:h-[90px] 2xl:h-[122px] bg-black rounded-[50%] text-2xl xl:text-3xl 2xl:text-[40px] font_ternary flex items-center justify-center text-white">
                03
              </div>
              <div className="absolute right-[11%] 2xl:right-[10.7%] top-[11%] 2xl:top-[9%] w-[75px] xl:w-[90px] 2xl:w-[122px] h-[75px] xl:h-[90px] 2xl:h-[122px] bg-black rounded-[50%] text-2xl xl:text-3xl 2xl:text-[40px] font_ternary flex items-center justify-center text-white">
                05
              </div>
            </div>
            <div className="h-[50%] flex items-center w-full relative">
              <div className="grid grid-cols-3 w-full pb-8">
                <div className="text-center w-max m-auto">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl pb-3 font-medium text-white text-center">
                    Faster transactions
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px] text-white">
                    Quick deposits and <br /> withdrawals.
                  </span>
                </div>
                <div className="text-center w-max m-auto">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl pb-3 font-medium text-white text-center">
                    Personalized support
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px] text-white">
                    Priority help and dedicated <br /> guidance.
                  </span>
                </div>
                <div className="text-center w-max m-auto">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl pb-3 font-medium text-white text-center">
                    Advanced tools
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px] text-white">
                    More flexibility with <br /> powerful features.
                  </span>
                </div>
              </div>
              <div className="absolute left-[26.9%] 2lx:left-[26.5%] bottom-[8%] w-[75px] xl:w-[90px] 2xl:w-[122px] h-[75px] xl:h-[90px] 2xl:h-[122px] bg-white rounded-[50%] text-2xl xl:text-3xl 2xl:text-[40px] font_ternary flex items-center justify-center text-secondary">
                02
              </div>
              <div className="absolute right-[29.1%] 2xl:right-[28.8%] bottom-[8%] w-[75px] xl:w-[90px] 2xl:w-[122px] h-[75px] xl:h-[90px] 2xl:h-[122px] bg-white rounded-[50%] text-2xl xl:text-3xl 2xl:text-[40px] font_ternary flex items-center justify-center text-secondary">
                04
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden py-6 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
            {features.map((data, index) =>
              <div key={index} className="relative w-full flex justify-center">
                <div
                  className={`absolute z-[3]   top-[-12%]  w-[50px] h-[50px] ${(index +
                    1) %
                    2 ===
                  0
                    ? "bg-secondary right-[2%]"
                    : "bg-primary left-[2%]"} rounded-[50%] text-2xl xl:text-3xl 2xl:text-[40px] font_ternary flex items-center justify-center text-white`}
                >
                  {index + 1}
                </div>
                <div className="relative [filter:drop-shadow(-1px_1px_8px_rgba(0,0,0,0.6))] w-[90%]">
                  <div className="text-center max-w-[430px] py-6 w-full border-x-2 border-primary [clip-path:polygon(0_0,calc(100%_-_15px)_0,100%_15px,100%_100%,15px_100%,0_calc(100%_-_15px))] bg-theme relative">
                    <p className="text-xl pb-1 font-medium text-white">
                      {data.title}
                    </p>
                    <span className="font-light text-white leading-6 font_ternary px-4 max-w-[350px] flex w-full m-auto">
                      {data.description}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accountstep;
