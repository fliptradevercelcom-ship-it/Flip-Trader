"use client"
import React from "react";
// import formsidebanner from "../../../../public/images/formsidebanner.webp";
import Image from "next/image";
import Maincontactform from "./Maincontactform";
import contactusbanner from "../../../../public/banners/contactusbanner.webp";
import facebookwhite from "../../../../public/icons/facebookwhite.svg";
import instawhite from "../../../../public/icons/instawhite.svg";
import youtubewhite from "../../../../public/icons/youtubewhite.svg";
import Link from "next/link";
import { useAutoScroll } from "../../../hooks/useAutoScroll";
// import formsidebanner from "../../../../public/images/womenleft.webp";
// import manright from "../../../../public/images/manright.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
export default function Contactfrom() {
  useAutoScroll("social-link", { delay: 800 });
  return (
    <div>
      <div
        className="py-12 md:py-16 lg:py-22 relative overflow-hidden bg-cover bg-no-repeat" id="contact-me"
        style={{ backgroundImage: `url(${contactusbanner.src})` }}
      >
        <div className="inn_container">
          <div className="text-center">
             <Title
              title={' Get in Touch'}
              color={'text-white'}
              />
              <div>
                <Discription
                 dispription={'Have a question about our services or need <br/> trading support? Let us know.'}
                 color={'text-white'}
                 />
              </div>
          </div>
          <div className=" max-w-[1380px] m-auto pt-10">
            <div className="flex justify-center xl:justify-center">
              <Maincontactform />
            </div>
            <div className="flex">
            {/* <div className="hidden xl:block absolute max-w-[450px] 2xl:max-w-[600px] bottom-0 left-0.5 w-full">
              <Image
                src={formsidebanner}
                alt="formsidebanner"
                width={2000}
                height={500}
                className="w-full"
              />
            </div>
            <div className="hidden xl:block absolute max-w-[450px] 2xl:max-w-[600px] right-[-5rem] bottom-0 w-full">
              <Image
                src={manright}
                alt="manright"
                width={2000}
                height={500}
                className="w-full"
              />
            </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-theme py-10 md:py-20" id="social-link">
        <div className="inn_container">
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl 2xl:text-4xl null  font-medium  gradient_text">
              Stay Connected
            </p>
            <span className="list_text font-light  pt-4 text-center  leading-[28px] font_ternary max-w[330px] min-h-[65px] h-full flex text-white">
              Follow us on our social media channels for updates, tips, and
              more.
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 m-auto max-w-[1024px] pt-2 md:pt-12 lg:pt-16 md:gap-5">
            <div className=" border-b-[3px] md:border-b-0 w-max m-auto md:w-full py-6 md:py-0 md:border-r-[3px] border-dashed border-[#BCC1FFB2] cursor-pointer">
              <div className="w-max m-auto">
                <div className="flex justify-center">
                  <Image
                    src={facebookwhite}
                    alt="facebook"
                    width={1000}
                    height={500}
                    className="max-w-[55px]"
                  />
                </div>
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=61580314210503"
                  }
                  target="_blank"
                >
                  <div className="text-xl md:text-3xl 2xl:text-4xl null flex items-center pt-8 justify-center gap-2.5  font-medium text-white font_ternary">
                    Facebook
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M7 17.2832L17 7.2832"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7.2832H17V17.2832"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div className=" border-b-[3px] md:border-b-0 w-max m-auto md:w-full py-6 md:py-0 md:border-r-[3px] border-dashed border-[#BCC1FFB2] cursor-pointer">
              <div className="w-max m-auto">
                <div className="flex justify-center">
                  <Image
                    src={instawhite}
                    alt="insta"
                    width={1000}
                    height={500}
                    className="max-w-[55px]"
                  />
                </div>
                <Link
                  href={"https://www.instagram.com/fliptradegroup/"}
                  target="_blank"
                >
                  <div className="text-xl md:text-3xl 2xl:text-4xl null flex justify-center pt-8 items-center gap-2.5  font-medium text-white font_ternary">
                    Instagram
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M7 17.2832L17 7.2832"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7.2832H17V17.2832"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div className="cursor-pointer  py-6 md:py-0">
              <div className="w-max m-auto">
                <div className="flex justify-center">
                  <Image
                    src={youtubewhite}
                    alt="youtube"
                    width={1000}
                    height={500}
                    className="max-w-[55px]"
                  />
                </div>
                <Link
                  href={"https://www.youtube.com/@fliptradegroup"}
                  target="_blank"
                >
                  <div className="text-xl md:text-3xl 2xl:text-4xl null flex justify-center pt-8 items-center gap-2.5  font-medium text-white font_ternary">
                    Youtube
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                    >
                      <path
                        d="M7 17.2832L17 7.2832"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7 7.2832H17V17.2832"
                        stroke="#fff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
