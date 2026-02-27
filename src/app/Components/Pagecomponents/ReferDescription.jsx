import Image from "next/image";
import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Link from "next/link";

const ReferDescription = () => {
  return (
    <div className="relative">
      <video
        className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none opacity-75"
        src="/videos/marketsgraphbg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 inn_container pt-24 relative z-10 gap-y-7 text-center md:text-left">
        <div className="md:w-[90%] flex items-center">
          <div>
            <Title
              title={"Earn Up to $100 for Every Successful Referral"}
              color={"gradient_text"}
            />
            <div className="pt-8">
              <Discription
                dispription={`
          Invite new traders to join the platform and start earning rewards when they register and actively begin trading.
          <br/>
          <br/>
          Earn up to $100 once your referred user completes the required trading activity. There’s no limit to how much you can earn — the more active traders you bring, the greater your rewards.
          `}
                color={"text-white"}
              />
            </div>
            <div className=" mt-1 md:mt-10" />
            <Link
              href={"/terms-and-conditions"}
              className="text-xl text-white italic"
            >
              *Terms and conditions apply.
            </Link>
          </div>
        </div>

        <div>
          <Image
            src={"/images/referposter1.png"}
            alt=""
            width={1000}
            height={500}
          />
        </div>

        <div className="hidden md:block">
          <Image
            src={"/images/referposter2.webp"}
            alt=""
            width={1000}
            height={500}
            className="h-full object-cover"
          />
        </div>

        <div className="md:w-[90%] ms-auto flex items-center md:py-12">
          <div>
            <Title
              title={"Turn First Deposits Into $100 Rewards"}
              color={"gradient_text"}
            />
            <div className="pt-8">
              <Discription
                dispription={`
          Receive a $100 reward when a new user joins the platform and completes their first successful deposit.
          <br/>
          <br/>
          Grow your earnings by inviting more traders to start their trading journey and unlock rewards with every qualified first deposit.
          `}
                color={"text-white"}
              />
            </div>
            <div className=" mt-10" />
            <Link
              href={"/terms-and-conditions"}
              className="text-xl text-white italic"
            >
              *Terms and conditions apply.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferDescription;
