import React from "react";
import Title from "./Title";
import Discription from "./Discription";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";
import firebtn from "../../../../public/icons/firebtnicon.svg";
import referfriend from '../../../../public/images/referfriend.webp';
const GlobleBanner = ({title, description, btn_name, btn_link}) => {
  return (
    <div className="relative">
      <video
        className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none brightness-[0.2]"
        src="/videos/forexbgvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="inn_container pt-40 2xl:pt-52">
        <div className="grid xl:grid-cols-2">
          <div className="text-center xl:text-start">
            <div>
              <Title
                title={title}
                color="gradient_text"
                ish1={true}
              />
              <div className="flex w-full pt-4">
                <Discription
                  dispription={description}
                  color="text-[#D0D0D0]"
                />
              </div>

              <div className="pt-12 pb-5">
                <Link
                  href={btn_link}
                  target="_blank"
                >
                  <Button
                    btn_name={btn_name}
                    border_color="border-primary"
                    btn_bg={"bg-primary"}
                    shadow={true}
                    text_color={"text-white"}
                    icon={firebtn}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-8 xl:pt-0 relative z-[1]">
            <Image
              src={referfriend}
              alt="side banner"
              width={1500}
              height={500}
              className="w-[80%]  m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobleBanner;
