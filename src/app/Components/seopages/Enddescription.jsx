import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtniconblue from "../../../../public/icons/firebtniconblue.svg";
const Enddescription = () => {
  return (
    <div>
      <div className="inn_container pt-12 xl:pt-24 2xl:pt-36">
        <div className="text-center max-w-7xl m-auto">
          <Title
            title={"Start Forex Trading in Dubai Today with FlipTrade Group"}
            color={"gradient_text"}
          />
          <div className="pt-3">
            <Discription
              dispription={
                "Dubai’s thriving financial ecosystem makes it one of the best places in the world to explore the potential of Forex. With FlipTrade Group, you get the perfect blend of technology, security, and trading opportunities. Join the world’s rapidly growing community of traders today and unlock limitless opportunities."
              }
              color={"text-white"}
            />
          </div>
          <div className="pt-6">
            <Button
              icon={firebtniconblue.src}
              btn_name="Start Trading Now"
              btn_bg="bg-white"
              text_color="text-primary"
              border_color="border-white"
              shadow={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enddescription;
