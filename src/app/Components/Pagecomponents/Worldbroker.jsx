import React from "react";
import Title from "../Uiux/Title";
import Button from "../Uiux/Button";
import Image from "next/image";
import Link from "next/link";
import Worldbrokerbg from "../../../../public/images/Worldbrokerbg.webp";
import Worldbrokerright from "../../../../public/images/Worldbrokerright.webp";
import fireiconblue from "../../../../public/icons/firebtniconblue.svg";
import giftwhite from "../../../../public/icons/giftwhite.svg";

function Worldbroker() {
  return (
    <div className="bg-theme pt-12 md:pt-18 lg:pt-24 pb-12 md:pb-4">
      <div
        className="inn_container  bg-no-repeat bg-center bg-cover min-h-[600px] sm:min-h-[500px] md:min-h-[660px] md:rounded-4xl relative"
        style={{ backgroundImage: `url(${Worldbrokerbg.src})` }}
      >
        {/* Grid layout */}
        <div className="grid xl:grid-cols-[3fr_2fr] pb-0 lg:pb-auto py-16 md:py-18 lg:py-24 2xl:32 px-4 sm:px-8 md:px-12 ">
          {/* Left Content */}
          <div className="text-center xl:text-start flex flex-col justify-center items-center xl:items-start">
            <Title
              title={"Get Onboard with the World’s Rapidly Growing Broker"}
              color={"text-white"}
            />

            <div className="flex flex-wrap justify-center xl:justify-start gap-4 pt-6 sm:pt-8">
              <Link href="https://client.fliptradegroup.com/trader/registration">
              <Button
                btn_name="Open Live Account"
                btn_bg="bg-white"
                text_color="text-primary"
                border_color="border-transparent"
                icon={fireiconblue}
              />
              </Link>
              <Link href="/ib-partner">
              <Button
                btn_name="Become a Partner"
                btn_bg="bg-[#00000099]"
                text_color="text-white"
                border_color="border-transparent"
                icon={giftwhite}
              /></Link>
            </div>
          </div>

          {/* Desktop right section */}
          <div className="hidden xl:block" />

          {/* Right Image (for desktop) */}
          <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-8 xl:right-12  xl:bottom-0 hidden xl:block">
            <Image
              src={Worldbrokerright}
              alt="World Broker"
              width={590}
              height={500}
              className="max-w-[590px] h-auto"
              priority
            />
          </div>
        </div>

        {/* Mobile Image */}
        <div className="block xl:hidden flex justify-center mt-8 px-4">
          <Image
            src={Worldbrokerright}
            alt="World Broker"
            width={400}
            height={300}
            className="w-full max-w-[380px] h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Worldbroker;
