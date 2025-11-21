import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";

const stepsData = [
  {
    title: "Open Your Account",
    description:
      "Register through our secure online portal in just a few minutes."
  },
  {
    title: "Verify Your Identity",
    description:
      "Complete KYC verification for full access to your trading account."
  },
  {
    title: "Choose Your Account Type",
    description:
      "FlipTrade Group offers account options for beginners, advanced traders, and professionals."
  },
  {
    title: "Deposit Funds",
    description:
      "You can deposit using bank transfer or cryptocurrency, offering flexibility and speed."
  },
  {
    title: "Download MT5",
    description: "Begin trading on one of the world’s most powerful platforms."
  },
  {
    title: "Start Trading",
    description:
      "Access global markets instantly and begin executing your strategies."
  }
];

const Howstart = () => {
  return (
    <div>
      <div className="inn_container  pt-12 xl:pt-24 2xl:pt-36">
        <div className="grid grid-col-1 md:grid-cols-2 pb-5 text-center md:text-start relative z-[2]">
          <Title
            title="How to Start Forex Trading in Dubai "
            color="gradient_text"
          />
          <div className="flex justify-center items-center">
            <Discription
              dispription={`Starting your journey in forex trading <br/> in Dubai is quick and simple. <br/> Follow these steps:`}
              color="text-white"
            />
          </div>
        </div>

        <div className="pt-12 grid grid-cols-3 gap-8">
          {stepsData.map((data, index) =>
            <div
              className="shadow-[0_-15px_20px_-16px_#6a40ec,0_15px_16px_-15px_#6a40ec]  px-12 py-6  rounded-4xl z-[2] flex justify-center flex-col"
              key={index}
            >
              <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium gradient_text text-center lg:text-start">
                {data.title}
              </h5>
              <p
                className="!text-white list_text font-light font_ternary  max-w-[400px]  text-center md:text-start pt-2 lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Howstart;
