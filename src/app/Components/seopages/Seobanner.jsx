import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import learntradingbanner from "../../../../public/banners/learntradingbanner.webp";
import Link from "next/link";
const Seobanner = ({ title, description }) => {
  return (
    <div
      className="bg-cover"
      style={{ backgroundImage: `url(${learntradingbanner.src})` }}
    >
      <div className="inn_container h-full pt-[130px] md:pt-[180px]  2xl:pt-[200px] pb-[120px]">
        <div className="grid max-w-8xl">
          <div className="text-center">
            <Title title={title} color={"gradient_text"} ish1={true} />
            <div className="py-3 max-w-7xl m-auto">
              <Discription dispription={description} color={"text-white"} />
            </div>
            <div className="pt-4 md:pt-8">
              <Link
                href={"https://client.fliptradegroup.com/trader/registration"}
              >
                <Button
                  icon={firebtnicon.src}
                  btn_name="Start Trading"
                  btn_bg="bg-primary"
                  text_color="text-white"
                  border_color="border-primary"
                  shadow={true}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seobanner;
