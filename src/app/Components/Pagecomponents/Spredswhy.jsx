import React from "react";
import spredsideimg from "../../../../public/images/leranmt5left.webp";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import Image from "next/image";
const Spredswhy = () => {
  return (
    <div className="inn_container pt-12 md:pt-18 lg:pt-28 xl:pt-32">
      <div className="">
        <div className=" bg-cover bg-center">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr]">
              <div>
                <Image
                  src={spredsideimg}
                  alt="Side banner"
                  width={2000}
                  height={500}
                  className="max-w-[750px] md:max-w-[unset] m-auto w-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-center items-center ps-4">
                <div
                  className="text-center lg:text-start pt-12 md:pt-0  md:px-0 lg:max-w-[95%] lg:ms-auto"
                  id="trade-download"
                >
                  <Title
                    title={`What are  forex <br/>spreads?`}
                    color="gradient_text"
                  />
                  <p className="p-4" />
                  <Discription
                    dispription={`When you begin trading, you’ll notice that you’re given a ‘bid’ (or ‘sell’) price and an ‘ask’ (or ‘buy’) price. The ‘bid’ is the price at which you sell the base currency, and the ‘ask’ is the price at which you buy the base currency. The difference between these two prices is what we call the spread.
                    <br/>
                    The third party is accepting the risk of a loss while facilitating the trade, thus the reason the third party will retain a part of each trade – that retained part is called the spread!    
                    `}
                    color="text-white"
                  />
                  <div className="flex justify-center md:justify-start me-auto pt-10">
                    <Button
                      btn_name={`Master MT5 Today`}
                      icon={firebtnicon.src}
                      btn_bg={`bg-primary`}
                      text_color="text-white"
                      border_color="border-primary"
                      shadow={true}
                    />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Spredswhy;
