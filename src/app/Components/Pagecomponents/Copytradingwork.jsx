import React from "react";
import boxbg from "public/banners/box-bg.webp";
import Image from "next/image";
import copytradingwork from "../../../../public/images/copytradingwork.webp";
import Title from "../Uiux/Title";
const Copytradingwork = () => {
  return (
    <div className="bg-theme pt-12 md:pt-18">
      <div
        className="bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${boxbg.src})` }}
      >
        <div className="inn_container grid grid-cols-1 lg:grid-cols-2 py-12 md:py-18">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-18 relative lg:left-[7%]">
            <div className="lg:w-max  bg-theme  lg:ml-auto border-b-[1px] lg:border-b-0 border-r-0 lg:border-r-[3px] border-white shadow-[0_-15px_20px_-16px_#6a40ec,0_15px_16px_-15px_#6a40ec] ">
              <div className="p-4">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium gradient_text text-center lg:text-end">
                  Monitor & Adjust
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-end lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px] !text-white">
                  Track performance in real time and <br /> modify anytime.
                </p>
              </div>
            </div>
            <div className="lg:w-max  bg-theme  lg:mx-auto border-b-[1px] lg:border-b-0 border-r-0 lg:border-r-[3px] border-white shadow-[0_-15px_20px_-16px_#6a40ec,0_15px_16px_-15px_#6a40ec] ">
              <div className="p-4">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium gradient_text text-center lg:text-end">
                  Set Your Limits
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-end lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px] !text-white">
                  Control your investment amount <br /> and risk preferences.
                </p>
              </div>
            </div>
            <div className="lg:w-max bg-theme  lg:mx-auto border-b-[1px] lg:border-b-0 border-r-0 lg:border-r-[3px] border-white shadow-[0_-15px_20px_-16px_#6a40ec,0_15px_16px_-15px_#6a40ec] ">
              <div className="p-4">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium gradient_text text-center lg:text-end">
                  Follow or Copy
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-end lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px] !text-white">
                  Choose to follow for insights or <br /> auto-copy their
                  trades.
                </p>
              </div>
            </div>
            <div className="lg:w-max bg-theme  lg:ml-auto border-b-[1px] lg:border-b-0 border-r-0 lg:border-r-[3px] border-white shadow-[0_-15px_20px_-16px_#6a40ec,0_15px_16px_-15px_#6a40ec] ">
              <div className="p-4">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium gradient_text text-center lg:text-end">
                  Discover Top Traders
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-end lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px] !text-white">
                  Browse verified trader profiles with performance <br /> stats
                  and risk levels.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center pt-12 lg:pt-0">
            <div className="relative w-[60%] lg:w-max m-auto ">
              <Image
                src={copytradingwork}
                alt="img"
                width={1000}
                height={500}
                className="max-w-[100%] lg:max-w-[540px]"
              />

              <div className="absolute w-full h-full top-0 flex justify-center items-center">
                 <div className="w-max ps-16">
                    <Title title={"How It <br/> Works"} color={"text-secondary"} />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copytradingwork;
