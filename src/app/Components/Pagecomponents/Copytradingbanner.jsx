import React from "react";
import copytradingbanner from "../../../../public/banners/copytradingbanner.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtn from "../../../../public/icons/firebtnicon.svg";
import Image from "next/image";
import SocialTradingright from "../../../../public/images/Social-Tradingright.webp";
import Link from "next/link";
const Copytradingbanner = () => {
  return (
    <div
      className=""
      style={{ backgroundImage: `url(${copytradingbanner.src})` }}
    >
      <div className="inn_container pt-40 pb-14 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex flex-col justify-center text-center lg:text-start">
            <Title
              title={"Social & Copy <br/> Trading"}
              color={"gradient_text"}
              ish1={true}
            />
            <div className="py-6">
              <Discription
                dispription={
                  "Join a global community where traders share insights and you <br/> can automatically copy top performers — all in real time."
                }
                color={"text-[#D0D0D0]"}
              />
            </div>
            <Link
              href={"https://client.fliptradegroup.com/trader/registration"}
            >
              <Button
                btn_name="Join the Trading Community"
                border_color="border-primary"
                btn_bg={"bg-primary"}
                shadow={true}
                text_color={"text-white"}
                icon={firebtn}
              />
            </Link>
          </div>
          <div className="pt-12 lg:pt-0">
            <Image
              src={SocialTradingright}
              alt="side banner"
              width={1000}
              height={500}
              className="max-w-[90%] m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copytradingbanner;
