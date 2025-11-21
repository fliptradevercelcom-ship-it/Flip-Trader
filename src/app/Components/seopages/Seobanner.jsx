import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import learntradingbanner from "../../../../public/banners/learntradingbanner.webp";
const Seobanner = () => {
  return (
    <div
      className="bg-cover"
      style={{ backgroundImage: `url(${learntradingbanner.src})` }}
    >
      <div className="inn_container h-full pt-[130px] md:pt-[180px]  2xl:pt-[200px] pb-[120px]">
        <div className="grid max-w-8xl">
          <div className="text-center">
            <Title
              title={"Forex Trading in Dubai, Your <br/> Trusted Global Broker"}
              color={"gradient_text"}
              ish1={true}
            />
            <div className="py-3 max-w-7xl m-auto">
              <Discription
                dispription={
                  "Dubai is now a leading global financial hub, attracting traders worldwide. With secure regulations and fast growth, FlipTrade Group offers smart, reliable forex trading in Dubai, advanced MT5 tools, tight spreads, and trusted support for every trader’s success."
                }
                color={"text-white"}
              />
            </div>
            <div className="pt-4 md:pt-8">
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
        </div>
      </div>
    </div>
  );
};

export default Seobanner;
