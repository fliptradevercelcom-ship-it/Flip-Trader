import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Link from "next/link";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import learnbannerright from "../../../../public/images/learnbannerright.webp";
import Image from "next/image";
import learntradingbanner from "../../../../public/banners/learntradingbanner.webp";
const Learntradingbanner = ({onJoinClick}) => {
  return (
    <div className="bg-cover" style={{ backgroundImage: `url(${learntradingbanner.src})` }}>
      <div className="inn_container h-full pt-[180px]  2xl:pt-[200px]">
        <div className="grid md:grid-cols-2">
          <div>
            <Title
              title={"Master the Markets with Confidence"}
              color={"gradient_text"}
            />
            <div className="py-3">
              <Discription
                dispription={
                  "Learn proven trading skills, strategies, and tools — guided by experts."
                }
                color={"text-white"}
              />
            </div>
            <div className="pt-8" onClick={onJoinClick}>
  
                <Button
                  icon={firebtnicon.src}
                  btn_name="Start Trading"
                  btn_bg="bg-primary"
                  text_color="text-white"
                  border_color="border-primary"
                  shadow={true}
                />
            </div>
          </div>
          <div>
            <Image
              src={learnbannerright}
              alt=""
              width={1000}
              height={500}
              className="max-w-[80%] m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learntradingbanner;
