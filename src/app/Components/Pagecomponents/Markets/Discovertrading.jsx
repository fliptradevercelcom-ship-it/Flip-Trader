"use client";
import React from "react";
import Title from "../../Uiux/Title";
import Discription from "../../Uiux/Discription";
import Button from "../../Uiux/Button";
import firebtnicon from "../../../../../public/icons/firebtniconblue.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import discoverbg from "../../../../../public/images/discoverbg.webp";
import { useAutoScroll } from "../../../../hooks/useAutoScroll";
const Discovertrading = ({
  discription,
  discoverleftimage,
  discoverrightimage,
  coinsimg,
  coinsimgalign
}) => {
  useAutoScroll("discover-trading", { delay: 800 });
  const currentpath = usePathname();
  const pathname = currentpath
    .replace("/", "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, c => c.toUpperCase());
  return (
    <div className="bg-theme relative ">
      <div
        className="inn_container bg-cover bg-no-repeat bg-center flex items-center justify-center rounded-4xl"
        style={{ backgroundImage: `url(${discoverbg.src})` }}
      >
        <div className="hidden lg:grid grid-cols-[2fr_3fr_2fr] relative">
          <div className="flex items-center">
            <Image
              src={discoverleftimage}
              alt="banner"
              width={1000}
              height={500}
              className="max-w-[240px] 2xl:max-w-[288px]"
            />
          </div>
          <div className="text-center py-36 px-8" id="discover-trading">
            <Title
              title={`Discover <br/> ${pathname} Trading`}
              color="text-white"
            />
            <div className="flex justify-center py-10">
              <Discription dispription={discription} color={"text-white"} />
            </div>
            <div>
              <Link
                href={"https://client.fliptradegroup.com/trader/registration"}
                target="_blank"
              >
                <Button
                  btn_name={`Start Trading ${pathname}`}
                  border_color={"border-white"}
                  btn_bg={"bg-white"}
                  shadow={true}
                  icon={firebtnicon}
                  text_color={"text-primary"}
                />
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src={discoverrightimage}
              alt="banner"
              width={1000}
              height={500}
              className="max-w-[240px] 2xl:max-w-[288px]"
            />
          </div>
        </div>
        <div className="grid lg:hidden grid-cols-1 relative">
          <div className="flex absolute items-center z-[1] left-0 top-[30%] opacity-[0.2]">
            <Image
              src={discoverleftimage}
              alt="banner"
              width={1000}
              height={500}
              className="max-w-[140px] 2xl:max-w-[288px] blur-[3px]"
            />
          </div>
          <div className="py-24 lg:py-36 px-8 max-w-[700px] m-auto">
            <div className="text-center relative z-[2]">
              <Title
                title={`Discover <br/> ${pathname} Trading`}
                color="text-white"
              />
              <div className="flex justify-center py-10">
                <Discription dispription={discription} color={"text-white"} />
              </div>
              <div>
                <Button
                  btn_name={`Start Trading ${pathname}`}
                  border_color={"border-white"}
                  btn_bg={"bg-white"}
                  shadow={true}
                  icon={firebtnicon}
                  text_color={"text-primary"}
                />
              </div>
            </div>
          </div>
          <div className="flex absolute items-center z-[1] right-0 top-[30%] opacity-[0.2]">
            <Image
              src={discoverrightimage}
              alt="banner"
              width={1000}
              height={500}
              className="max-w-[140px] 2xl:max-w-[288px] blur-[3px]"
            />
          </div>
        </div>
      </div>
      {coinsimg &&
        <div className={`absolute ${coinsimgalign}-0 -bottom-44`}>
          <Image
            src={coinsimg}
            alt="#"
            width={1000}
            height={300}
            className=" lg:max-w-[300px] 2xl:max-w-[400px] hidden lg:block"
          />
        </div>}
    </div>
  );
};

export default Discovertrading;
