import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import card1icon from "../../../../public/icons/Advanced.svg";
import card2icon from "../../../../public/icons/ibworkimg1.svg";
import card3icon from "../../../../public/icons/target.svg";
import card4icon from "../../../../public/icons/checkmark.svg";
import Image from "next/image";
const carddata = [
  {
    icon: card1icon,
    title: "Learn from Markets",
    carddis: "Learn with actual market scenarios, not just theory."
  },
  {
    icon: card2icon,
    title: "Expert Guidance",
    carddis: "Step-by-step guidance from professional traders."
  },
  {
    icon: card3icon,
    title: "Hands-On Practice",
    carddis: "Practice with demo accounts before going live."
  },
  {
    icon: card4icon,
    title: "Build Confidence",
    carddis: "Gain the confidence to trade live markets."
  }
];
function Learnwhy() {
  return (
    <div className="bg-theme">
      <div className="inn_container  pt-12 xl:pt-24 2xl:pt-36">
        <div className="grid grid-col-1 md:grid-cols-2 pb-5 text-center md:text-start relative z-[2]">
          <Title
            title="Why Learn with <span class=&quot;gradient_text&quot;> FlipTrade </span>"
            color="text-white"
          />
          <div className="flex justify-center items-center">
            <Discription
              dispription={`Join thousands of successful traders who <br/> started their journey with us.`}
              color="text-white"
            />
          </div>
        </div>
        <div className="pt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {carddata.map((data, index) =>
            <div
              className="flex flex-col px-8 2xl:px-12 py-12 shadow-[inset_-15px_0_20px_-16px_#6a40ec,inset_15px_0_16px_-15px_#6a40ec] rounded-4xl max-w-[400px] m-auto group"
              key={index}
            >
              <Image
                src={data.icon}
                alt=""
                width={1000}
                height={500}
                className="max-w-[70px] 2xl:max-w-[80px] m-auto group-hover:shadow-[0px_0px_20px_6px_#6a40ec] rounded-[50%] transition-all duration-300 group-hover:scale-[1.05]"
              />
              <h5 className="text-2xl lg:text-3xl 2xl:text-4xl pt-8  font-medium gradient_text text-center">
                {data.title}
              </h5>
              <div className="list_text font-light text-center  pt-6 font_ternary leading-[28px] max-w[330px] text-white">
                {data.carddis}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Learnwhy;
