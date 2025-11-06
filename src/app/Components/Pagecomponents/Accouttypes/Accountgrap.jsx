import React from "react";
import Title from "../../Uiux/Title";
import Discription from "../../Uiux/Discription";
import Image from "next/image";
import buildtraderimageloerph from "/public/images/buildtraderimagelowerph.webp";
import coinph from "/public/images/coinph.webp";
import gradient from "/public/images/gradient.webp";
import Button from "../../Uiux/Button";
import Link from "next/link";

const Accountgrap = ({desktopbanner,phonetabbanner,title,description,btnname}) => {
  return (
    <div className="bg-theme">
      <div className="inn_container py-12 ">

        <div className="pt-16 hidden xl:block">
          <div className="relative">
            <Image
              src={desktopbanner.src}
              alt="banner"
              width={3000}
              height={500}
              className="w-full"
            />
            <div className="absolute top-[30%] right-[2.5%]  2xl:right-[3.5%]">
              <div className="">
                <Title
                  title={title}
                  color="gradient_text"
                />
                <div className="pt-4">
                  <Discription
                    dispription={description}
                    color="text-white"
                  />
                </div>
                <div className="pt-10">
                  <Link
                    href={
                      "https://client.fliptradegroup.com/trader/registration"
                    }
                  >
                    <Button
                      btn_name={btnname}
                      btn_bg="gradient_bg"
                      text_color="text-secondary"
                      border_color="border-transparent"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="block xl:hidden relative">
          <div className="absolute right-0 top-[-25%] block md:hidden">
            <Image
              src={coinph}
              alt="coin"
              width={1000}
              height={500}
              className="max-w-[150px]"
            />
          </div>
          <div className="absolute right-0 top-[-20%] block md:hidden">
            <Image
              src={gradient}
              alt="coin"
              width={1000}
              height={500}
              className="max-w-[150px]"
            />
          </div>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-[2fr_4fr]">
            <div className="hidden md:block">
              <Image
                src={phonetabbanner}
                alt=""
                width={1000}
                height={500}
                className="max-h-[575px]"
              />
            </div>
            <div className="block md:hidden">
              <Image
                src={phonetabbanner}
                alt=""
                width={1000}
                height={500}
                className="max-h-[330px]"
              />
            </div>
            <div
              className=" relative bg-cover   bg-no-repeat hidden md:block min-h-[400px]"
              style={{ backgroundImage: `url(${buildtraderimageloerph.src})` }}
            >
              <div className="md:w-[80%] m-auto flex items-center justify-center h-full">
                <div className="relative top-8 lg:top-6 lg:left-2">
                  <Title
                    title={title}
                    color="gradient_text"
                  />
                  <div className="pt-4">
                    <Discription
                      dispription={description}
                      color="text-white"
                    />
                  </div>
                  <div className="pt-10">
                    <Link
                      href={
                        "https://client.fliptradegroup.com/trader/registration"
                      }
                    >
                      <Button
                        btn_name={btnname}
                        btn_bg="gradient_bg"
                        text_color="text-secondary"
                        border_color="border-transparent"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-5 block md:hidden">
              <div className="relative">
                {/* <Image
                  src={buildtraderimageloerph.src}
                  alt="banner"
                  width={3000}
                  height={500}
                  className="w-full"
                /> */}
                <div
                  className="relative  bg-cover w-full h-full flex items-center justify-center top-0"
                  style={{
                    backgroundImage: `url(${buildtraderimageloerph.src})`
                  }}
                >
                  <div className=" top-[15%] py-12 right-0 px-5 2xl:right-[3.5%]">
                    <div className="relative top-3 text-center px-4 md:px-0">
                      <Title
                        title={title}
                        color="gradient_text"
                      />
                      <div className="pt-4">
                        <Discription
                          dispription={description}
                          color="text-white"
                        />
                      </div>
                      <div className="pt-4">
                        <Link
                          href={
                            "https://client.fliptradegroup.com/trader/registration"
                          }
                        >
                          <Button
                            btn_name={btnname}
                            btn_bg="gradient_bg"
                            text_color="text-secondary"
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
        </div>
      </div>
    </div>
  );
};

export default Accountgrap;

