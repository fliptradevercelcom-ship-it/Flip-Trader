import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import spredbg from "../../../../public/banners/spredsbg.webp";
import Link from "next/link";
const Spredsbanner = () => {
  return (
    <div
      className="bg-cover relative"
      style={{ backgroundImage: `url(${spredbg.src})` }}
    >
      <div className="inn_container pt-42 md:pt-46 xl:pt-48 2xl:pt-54 pb-32 ">
        <div className="flex flex-col gap-7 items-center relative z-[1]">
          <div className="text-center">
            <Title
              title={"Discover our Competitive Forex <br/> Swaps and Spreads"}
              color={"gradient_text"}
              ish1={true}
            />
          </div>
          <div className="text-center">
            <Discription
              dispription={
                "Knowing the transaction costs associated with your trading"
              }
              color={"text-[#D0D0D0]"}
            />
          </div>
          <Link href={"https://client.fliptradegroup.com/trader/registration"}>
            <Button
              icon={firebtnicon.src}
              text_color={"text-white"}
              btn_name={"Start Trading"}
              border_color="border-primary"
              btn_bg={"bg-primary"}
              shadow={true}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Spredsbanner;
