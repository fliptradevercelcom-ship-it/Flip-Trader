"use client"
import React from "react";
import workprocessbanner from "../../../../public/banners/workprocess.webp";
import Ibpartnerworkbanner from "../../../../public/images/Ibpartnerwork.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Image from "next/image";
import ibworkimg1 from "../../../../public/icons/ibworkimg1.svg";
import ibworkimg2 from "../../../../public/icons/ibworkimg2.svg";
import ibworkimg3 from "../../../../public/icons/ibworkimg3.svg";
import ibworkimg4 from "../../../../public/icons/ibworkimg4.svg";
import ibworkdash1 from "../../../../public/images/ibworkdash1.webp";
import ibworkdash2 from "../../../../public/images/ibworkdash2.webp";
import ibworkdash3 from "../../../../public/images/ibworkdash3.webp";
import ibworkdash4 from "../../../../public/images/ibworkdash4.webp";
import { useAutoScroll } from "../../../hooks/useAutoScroll";
const Ibpartnerwork = () => {
  useAutoScroll("ib-partner", { delay: 800 });
  return (
    <div className="bg-theme relative" id="ib-partner">
       <video
        className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none"
        src='videos/marketsgraphbg.mp4'
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div
        className="bg-cover"
        style={{ backgroundImage: `url(${workprocessbanner.src})` }}
      >
        <div className="inn_container pt-12 xl:pt-24 2xl:pt-36">
          <div className="grid grid-col-1 md:grid-cols-2 pb-5 text-center md:text-start relative z-[2]">
            <Title title="How It Works" color="text-white" />
            <div className="flex justify-center items-center">
              <Discription
                dispription={`Turn your network into earnings with our simple <br/> IB program.`}
                color="text-white"
              />
            </div>
          </div>
          {/* For Desktop > 1024 */}
          <div className="py-12 xl:py-18 2xl:py-26 hidden lg:block">
            <div className="relative">
              <Image
                src={Ibpartnerworkbanner}
                alt="Illustration of the FlipTrade IB partner workflow"
                width={3000}
                height={500}
                className="max-w-[1500px] m-auto w-full"
              />
              <div className="absolute w-[30%] top-[5%] left-[4%]">
                <div className="w-max">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl xl:pb-3 font-medium gradient_text text-center">
                    Sign Up
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px] text-white">
                    Register as an IB Partner.
                  </span>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <Image
                    src={ibworkdash1}
                    alt="Gradient connector line highlighting the sign up step"
                    width={1000}
                    height={500}
                    className="  max-w-[180px] 2xl:max-w-[203px]"
                  />

                  <Image
                    src={ibworkimg1}
                    alt="Clipboard icon for IB partner registration"
                    width={1000}
                    height={500}
                    className="max-w-[80px] 2xl:max-w-[100px]"
                  />
                </div>
              </div>
              <div className="absolute w-[30%] top-[51%] left-[0%]">
                <div className="flex items-center justify-end gap-2 h-[130px] xl:h-[190px]">
                  <Image
                    src={ibworkdash3}
                    alt="Connector line leading to the commission earnings step"
                    width={1000}
                    height={500}
                    className="  max-w-[180px] 2xl:max-w-[203px] mt-auto"
                  />

                  <Image
                    src={ibworkimg3}
                    alt="Coin stack icon symbolising commission earnings"
                    width={1000}
                    height={500}
                    className="max-w-[80px] 2xl:max-w-[100px] mb-auto"
                  />
                </div>
                <div className="w-max text-center mt-3">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl xl:pb-3 font-medium gradient_text text-center">
                    Earn Commissions
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px] text-white">
                    Receive a share of trading <br />
                    fees from your referred clients.
                  </span>
                </div>
              </div>

              <div className="absolute w-[30%] top-[5%] right-[4%]">
                <div className="w-max ml-auto">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl xl:pb-3 font-medium gradient_text text-center">
                    Refer Traders
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px] text-white">
                    Share your unique referral link.
                  </span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <Image
                    src={ibworkimg2}
                    alt="Referral link sharing icon"
                    width={1000}
                    height={500}
                    className="max-w-[80px] 2xl:max-w-[100px]"
                  />
                  <Image
                    src={ibworkdash2}
                    alt="Connector line illustrating the referral process"
                    width={1000}
                    height={500}
                    className="  max-w-[180px] 2xl:max-w-[203px]"
                  />
                </div>
              </div>
              <div className="absolute w-[30%] top-[51%] right-[0%]">
                <div className="flex items-center justify-start gap-2 h-[130px] xl:h-[190px]">
                  <Image
                    src={ibworkimg4}
                    alt="Analytics icon for performance tracking"
                    width={1000}
                    height={500}
                    className="max-w-[80px] 2xl:max-w-[100px] mb-auto"
                  />
                  <Image
                    src={ibworkdash4}
                    alt="Connector line leading to performance tracking"
                    width={1000}
                    height={500}
                    className="  max-w-[180px] 2xl:max-w-[203px] mt-auto"
                  />
                </div>
                <div className="w-max text-center ml-auto mt-3">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl xl:pb-3 font-medium gradient_text text-center">
                    Track Performance
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px] text-white">
                    Monitor your referrals and <br />
                    earnings in real-time.
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* For mobile and tab  */}
          <div className="pb-12 block lg:hidden relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
              <div className="flex gap-3 pt-5 ">
                <div>
                  <Image
                    src={ibworkimg1}
                    alt="Clipboard icon for IB partner registration"
                    width={1000}
                    height={500}
                    className="max-w-[60px]"
                  />
                </div>
                <div>
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl xl:pb-3 font-medium gradient_text">
                    Sign Up
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px] text-white">
                    Register as an IB Partner.
                  </span>
                </div>
              </div>
              <div className="flex gap-3 pt-5 ">
                <div>
                  <Image
                    src={ibworkimg2}
                    alt="Referral link sharing icon"
                    width={1000}
                    height={500}
                    className="max-w-[60px]"
                  />
                </div>
                <div>
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl xl:pb-3 font-medium gradient_text">
                    Refer Traders
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px] text-white">
                    Share your unique referral link.
                  </span>
                </div>
              </div>
               <div className="flex gap-3 pt-5 ">
                <div>
                  <Image
                    src={ibworkimg3}
                    alt="Coin stack icon symbolising commission earnings"
                    width={1000}
                    height={500}
                    className="max-w-[60px]"
                  />
                </div>
                <div>
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl xl:pb-3 font-medium gradient_text">
                    Earn Commissions
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px] text-white">
                    Receive a share of trading fees from your referred clients.
                  </span>
                </div>
              </div>
              <div className="flex gap-3 pt-5 ">
                <div>
                  <Image
                    src={ibworkimg4}
                    alt="Analytics icon for performance tracking"
                    width={1000}
                    height={500}
                    className="max-w-[60px]"
                  />
                </div>
                <div>
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl xl:pb-3 font-medium gradient_text">
                   Track Performance
                  </p>
                  <span className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px] text-white">
                    Monitor your referrals and earnings in real-time.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ibpartnerwork;
