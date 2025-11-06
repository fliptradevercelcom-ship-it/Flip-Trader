"use client"
import React from "react";
import calculatepipvaluebg from "../../../../public/images/Calculatepipvalue.webp";
import Calculatepipvalueleft from "../../../../public/images/Calculatepipvalueleft.webp";
import Image from "next/image";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import fireicon from "../../../../public/icons/firebtniconblue.svg";
import { useAutoScroll } from "../../../hooks/useAutoScroll";
import Link from "next/link";
const Calculatepipvalue = () => {
  useAutoScroll("pip-calculator", { delay: 800 });
  return (
    <div className="pt-12 lg:pt-0 bg-theme px-[3%]">
      <div
        className="bg-cover lg:bg-contain bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${calculatepipvaluebg.src})` }}
      >
        <div className="inn_container grid grid-cols-1 lg:grid-cols-2 py-12 md:py-18 xl:py-28" id="pip-calculator">
          <div>
            <Image
              src={Calculatepipvalueleft}
              alt=""
              width={3000}
              height={500}
              className=" max-w-[70%] lg:max-w-[90%] m-auto"
            />
          </div>
          <div className="h-max my-auto text-center lg:text-start pt-8 lg:pt-0">
            <Title
              title={"Calculate Your <br/> Pip Values Instantly"}
              color={"text-white"}
            />
            <div className="pb-6 pt-4">
              <Discription
                dispription={
                  "Know the value of each pip and make smarter <br/> trading decisions."
                }
                color={"text-white"}
              />
            </div>
            <Link href="/pip-calculator">
            <Button
              btn_name={"Learn More About Pip Calculator"}
              border_color={"border-white"}
              icon={fireicon}
              btn_bg={"bg-white"}
            />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculatepipvalue;
