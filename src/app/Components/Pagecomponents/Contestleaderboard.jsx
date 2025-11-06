import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Image from "next/image";
import contestdesktopbg from "../../../../public/images/contestdesktopbg.webp";
import buildtraderimagelowerph from "../../../../public/images/explorelowerphgradient.webp";
import contestleaderboard from "../../../../public/images/contestleaderboard.webp";
import Button from "../Uiux/Button";
import Link from "next/link";
const Contestleaderboard = () => {
  return (
    <div className="relative">
       <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-90 md:block hidden"
      >
        <source src="/videos/contestcelebration.mp4" type="video/mp4" />
      </video>

      <div className="inn_container hidden lg:block pb-12">
        <div className="relative">
          <Image
            src={contestdesktopbg}
            alt="banner"
            width={3000}
            height={500}
          />

          <div className="absolute bottom-0 h-[85%] flex items-center w-[57%] 2xl:w-[50%]">
            <div className="relative top-[-2%] left-[6%] xl:left-[5%] 2xl:left-[10%]">
              <Title
                title={`Win up to $10,000 <br/>  in free <span class='text-primary'> weekly <br/> contests. </span>`}
                color="text-black"
              />
              <div className="xl:pt-4">
                <Discription
                  dispription={`Join free trading contests, climb the leaderboard, <br/> and win real rewards with zero risk.`}
                  color="text-black"
                />
              </div>

              <div className="pt-4 xl:pt-8 flex gap-2 xl:gap-5">
                <Link
                  href={"https://client.fliptradegroup.com/trader/registration"}
                >
                  <Button
                    btn_name={`Join the Contest Now`}
                    btn_bg="bg-primary"
                    text_color="text-white"
                    border_color="border-transparent"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden inn_container pt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="pb-6 md:pb-0">
            <Image
              src={contestleaderboard}
              alt="contestleaderboard"
              width={1000}
              height={500}
              className="rounded-3xl"
            />
          </div>
          <div
            className=" relative bg-cover h-[400px]   bg-no-repeat rounded-[20px]"
            style={{ backgroundImage: `url(${buildtraderimagelowerph.src})` }}
          >
            <div className="md:w-[90%] m-auto flex items-center justify-center h-full">
              <div className="relative p-4 text-center px-8 md:px-0">
                <Title
                  title={`Win up to $10,000 <br/>  in free <span class='text-primary'> weekly <br/> contests. </span>`}
                  color="text-black"
                />
                <div className="xl:pt-4">
                  <Discription
                    dispription={`Join free trading contests, climb the leaderboard, <br/> and win real rewards with zero risk.`}
                    color="text-black"
                  />
                </div>

                <div className="pt-4 xl:pt-2 flex gap-2 xl:gap-5">
                  <Link
                    href={
                      "https://client.fliptradegroup.com/trader/registration"
                    }
                  >
                    <Button
                      btn_name={`Join the Contest Now`}
                      btn_bg="bg-primary"
                      text_color="text-white"
                      border_color="border-transparent"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contestleaderboard;
