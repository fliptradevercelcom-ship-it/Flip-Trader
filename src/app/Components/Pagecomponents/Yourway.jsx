import React from "react";
import tradeyourway from "../../../../public/images/tradeyourway.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import bluedot from "../../../../public/icons/bluedot.svg";
import Image from "next/image";
import tradeyourwayleft from "../../../../public/images/tradeyourwayleft.webp";
const Yourway = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${tradeyourway.src})` }}
      >
        <div className="inn_container grid grid-cols-1 lg:grid-cols-2 pt-12 md:pt-18">
          <div className="hidden lg:block">
            <Image
              src={tradeyourwayleft}
              alt=""
              width={3000}
              height={500}
              className=""
            />
          </div>
          <div className="lg:ps-8 pb-8 text-center lg:text-start h-max m-auto">
            <Title
              title={"Trade It Your Way  with Confidence."}
              color={"text-white"}
            />
            <div className="py-6">
              <Discription
                dispription={
                  "Your strategy, your tools, your success — all united in one intelligent platform designed for traders like you."
                }
                color={"text-white"}
              />
            </div>
            <div className="flex flex-wrap  justify-center gap-4">
              <Button
                btn_name={"0% Commission"}
                icon={bluedot}
                btn_bg="bg-white"
                text_color="text-secondary"
                border_color="border-white"
                shadow={true}
              />
              <Button
                btn_name={"Fast Withdrawal"}
                icon={bluedot}
                btn_bg="bg-white"
                text_color="text-secondary"
                border_color="border-white"
                shadow={true}
              />
              <Button
                btn_name={"Instant Deposit"}
                icon={bluedot}
                btn_bg="bg-white"
                text_color="text-secondary"
                border_color="border-white"
                shadow={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yourway;
