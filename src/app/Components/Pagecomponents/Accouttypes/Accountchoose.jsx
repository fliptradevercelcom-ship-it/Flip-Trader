"use client"
import React from "react";
import Title from "../../Uiux/Title";
import Discription from "../../Uiux/Discription";
import Image from "next/image";
import accountchooseleft from "../../../../../public/images/accountchooseleft.webp";
import { useAutoScroll } from "../../../../hooks/useAutoScroll";
const Accountchoose = ({
  title,
  description,
  cardtitle1,
  card_desc1,
  cardtitle2,
  card_desc2,
  cardtitle3,
  card_desc3
}) => {
  useAutoScroll("account-type", { delay: 800 });
  return (
    <div className="bg-theme" id="account-type">
      <div className="inn_container pt-12">
        <div className="grid grid-col-1 text-center lg:text-start lg:grid-cols-2">
          <Title
            title={title}
            color="gradient_text"
            hovercolor="gradient_text_title"
          />
          <div className="flex justify-center items-center">
            <Discription dispription={description} color="text-white" />
          </div>
        </div>
      </div>
      <div className="h-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 pt-12">
          <div className="h-max hidden lg:block">
            <Image
              src={accountchooseleft}
              alt=""
              width={3000}
              height={500}
              className="w-[85%]"
            />
          </div>
          <div className="pe-[3%] lg:pe-[15%] xl:pe-[20%] 2xl:pe-[25%]  lg:pt-12 hidden lg:block">
            <div className="pt-2 xl:pt-6 w-max ms-auto">
              <div className="relative z-[1]">
                <Title title={"01"} color={"gradient_text"} />
              </div>
              <div className="shadow-[0_-15px_20px_-16px_#6a40ec,0_15px_16px_-15px_#6a40ec] w-max px-12 py-6 relative top-[-30px] z-[2]">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium gradient_text text-center lg:text-start">
                  {cardtitle1}
                </h5>
                <p
                  className="!text-white list_text font-light font_ternary  max-w-[400px]  text-center md:text-start pt-2 lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]"
                  dangerouslySetInnerHTML={{ __html: card_desc1 }}
                />
              </div>
            </div>
            <div className="pt-2 xl:pt-6 w-max ps-[10%]">
              <div className="relative z-[1]">
                <Title title={"02"} color={"gradient_text"} />
              </div>
              <div className="shadow-[0_-15px_20px_-16px_#6a40ec,0_15px_16px_-15px_#6a40ec] w-max px-12 py-6 relative top-[-30px] z-[2]">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium gradient_text text-center lg:text-start">
                  {cardtitle2}
                </h5>
                <p
                  className="!text-white list_text font-light font_ternary  max-w-[400px]  text-center md:text-start pt-2 lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]"
                  dangerouslySetInnerHTML={{ __html: card_desc2 }}
                />
              </div>
            </div>
            <div className="pt-2 xl:pt-6 w-max relative left-[-15%]">
              <div className="relative z-[1]">
                <Title title={"03"} color={"gradient_text"} />
              </div>
              <div className="shadow-[0_-15px_20px_-16px_#6a40ec,0_15px_16px_-15px_#6a40ec] w-max px-12 py-6 relative top-[-30px] z-[2]">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium gradient_text text-center lg:text-start">
                  {cardtitle3}
                </h5>
                <p
                  className="!text-white list_text font-light font_ternary  max-w-[400px]  text-center md:text-start pt-2 lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]"
                  dangerouslySetInnerHTML={{ __html: card_desc3 }}
                />
              </div>
            </div>
          </div>
          <div className=" inn_container lg:hidden grid md:grid-cols-2">
            <div className="pt-2 xl:pt-6 ">
              <div className="relative z-[1]">
                <Title title={"01"} color={"gradient_text"} />
              </div>
              <div className="shadow-[0_-15px_20px_-16px_#6a40ec,0_15px_16px_-15px_#6a40ec] px-12 py-6 relative top-[-30px] z-[2]">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium gradient_text text-center lg:text-start">
                  {cardtitle1}
                </h5>
                <p
                  className="!text-white list_text font-light font_ternary  max-w-[400px]  text-center md:text-start pt-2 lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]"
                  dangerouslySetInnerHTML={{ __html: card_desc1 }}
                />
              </div>
            </div>
            <div className="pt-2 xl:pt-6 ps-[10%]">
              <div className="relative z-[1]">
                <Title title={"02"} color={"gradient_text"} />
              </div>
              <div className="shadow-[0_-15px_20px_-16px_#6a40ec,0_15px_16px_-15px_#6a40ec] px-12 py-6 relative top-[-30px] z-[2]">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium gradient_text text-center lg:text-start">
                  {cardtitle2}
                </h5>
                <p
                  className="!text-white list_text font-light font_ternary  max-w-[400px]  text-center md:text-start pt-2 lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]"
                  dangerouslySetInnerHTML={{ __html: card_desc2 }}
                />
              </div>
            </div>
            <div className="pt-2 xl:pt-6 relative">
              <div className="relative z-[1]">
                <Title title={"03"} color={"gradient_text"} />
              </div>
              <div className="shadow-[0_-15px_20px_-16px_#6a40ec,0_15px_16px_-15px_#6a40ec] px-12 py-6 relative top-[-30px] z-[2]">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium gradient_text text-center lg:text-start">
                  {cardtitle3}
                </h5>
                <p
                  className="!text-white list_text font-light font_ternary  max-w-[400px]  text-center md:text-start pt-2 lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]"
                  dangerouslySetInnerHTML={{ __html: card_desc3 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountchoose;
