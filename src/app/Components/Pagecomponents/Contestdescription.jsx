import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import contestgiftbox from "../../../../public/images/contestgiftbox.webp";
import giftbox from "../../../../public/images/giftbox.webp"
import Image from "next/image";
const Contestdescription = () => {
  return (
    <div>
      <div className="inn_container  pt-12 md:pt-18 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 text-center lg:text-start">
          <div>
            <Title title={"Branded Trading Contests"} color="gradient_text" />
          </div>
          <div className="flex justify-center items-center">
            <Discription
              dispription={
                "Are you an Introducing Broker (IB) or an Influencer, with your own following? Why not engage your audience with your very own Branded Trading Contest!"
              }
              color="text-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-4 lg:grid-cols-2 pt-6 md:pt-12">
          <div>
            <div className="max-w-[90%] m-auto text-center">
              <h3 className="text-[22px] md:text-2xl lg:text-5xl text-white">
                Real Prizes
              </h3>
              <p className="text-base md:text-2xl text-white font-normal font_ternarynormal pt-3">
                Offer real prizes to the top traders in your Contest.
              </p>
            </div>
            <Image
              src={contestgiftbox}
              alt="contestgiftbox"
              width={3000}
              height={500}
              className="max-w-[90%] m-auto"
            />
          </div>
          <div className="flex flex-col">
             <div className="max-w-[90%] mx-auto text-center">
                <h3 className="text-[22px] md:text-2xl lg:text-5xl text-white">
                  Prize Sponsorships
                </h3>
                <p className="text-base md:text-2xl text-white font-normal font_ternarynormal pt-3">
                  We sponsor  prizes for your community.
                </p>
              </div>
            <div>
             
              <div className="flex flex-col items-center">
                <Image
                  src={giftbox}
                  alt="giftbox"
                  width={6000}
                  height={500}
                  className=""
                />
                <p className="text-green-600 text-2xl md:text-4xl md:ps-12">
                  $ 15000 , $10000 , $5000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contestdescription;
