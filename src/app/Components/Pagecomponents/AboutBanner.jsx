import React from "react";
import ibbanner from "../../../../public/banners/ibbanner.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtn from "../../../../public/icons/firebtnicon.svg";
import Image from "next/image";
import ibpartnerright from "../../../../public/images/ib-partnerright.webp";
import Link from "next/link";
const AboutBanner = () => {
  return (
    <div className="" style={{ backgroundImage: `url(${ibbanner.src})` }}>
      <div className="inn_container">
        <div className="grid grid-cols-1">
          <div className="flex flex-col justify-center text-center  pt-40 pb-20 lg:pt-48">
            <Title
              title={"FlipTrade Group — Trade Smarter,<br/> Trade Faster"}
              color={"gradient_text"}
              ish1={true}
            />
            <div className="py-6">
              <Discription
                dispription={
                  "Where smart traders flip the game and unlock <br/> next-gen trading opportunities."
                }
                color={"text-[#D0D0D0]"}
              />
            </div>
            <Link
              href={"/contact-us"}
            >
              <Button
                btn_name="Contact Us"
                border_color="border-primary"
                btn_bg={"bg-primary"}
                shadow={true}
                text_color={"text-white"}
                icon={firebtn}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
