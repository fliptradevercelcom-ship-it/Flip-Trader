import React from "react";
import iphoneback from "../../../../../public/images/iphoneback.webp";
import Image from "next/image";
import Button from "../../Uiux/Button";
import firebtnicon from "../../../../../public/icons/firebtnicon.svg";
const EconomicCalendarHero = () => {
  return (
    <section className="relative flex  items-center justify-between bg-black text-white py-10 overflow-hidden">
      {/* Left Image */}
      <div className="md:block hidden">
        <Image
          src={iphoneback} // Replace with your image path
          alt="Phone"
          width={3000}
          height={500}
          className="w-full object-contain max-w-[2169px]"
        />
        <div className="absolute bottom-[4rem] left-0 w-full h-32 bg-gradient-to-t from-black via-black/60 to-transparent blur-md"></div>
      </div>

      {/* Right Text Section */}
      <div className="md:absolute w-full md:w-1/2 text-center md:text-left md:mt-10  right-0 md:bottom-[13rem]">
        <h1 className="font-medium title_text aos-init aos-animate">
          Get Started with{" "}
          <span className="gradient_text font-medium title_text aos-init aos-animate">
            FlipTrade’s
          </span>{" "}
          <span className="gradient_text font-medium title_text aos-init aos-animate">
            Economic Calendar
          </span>
        </h1>

        <p className="description_text font-light font_ternary text-white aos-init aos-animate">
          Filter events by country, category, or impact level, set your time
          zone, and stay prepared with FlipTrade’s real-time economic calendar.
        </p>

        {/* <div className="flex justify-center md:justify-start mt-4">
          <Button
            btn_name="View Full Calendar"
            border_color="border-primary"
            shadow={true}
            btn_bg="bg-primary"
            text_color="text-white"
            icon={firebtnicon}
          />
        </div> */}
      </div>
    </section>
  );
};

export default EconomicCalendarHero;
