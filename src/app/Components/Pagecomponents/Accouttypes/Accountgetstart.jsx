import React from "react";
import Title from "../../Uiux/Title";
import Discription from "../../Uiux/Discription";
// import boxbg from "../../../../../public/banners/box-bg.webp";
import Image from "next/image";
import accountriver from "../../../../../public/images/accountriver.webp";
const Accountgetstart = ({
  description,
  card1desk,
  card2desk,
  card3desk,
  card4desk,
  card5desk,
  cardphdata
}) => {
  return (
    <div className="bg-theme">
      <div className="inn_container pt-12 md:pt-18 lg:pt-28">
        <div className="grid grid-col-1 text-center lg:text-start lg:grid-cols-2">
          <Title
            title="How to Get Started"
            color="text-white"
            hovercolor="gradient_text_title"
          />
          <div className="flex justify-center items-center">
            <Discription dispription={description} color="text-white" />
          </div>
        </div>
      </div>
      <div className="pt-12 md:pt-24">
        <div
          className="relative bg-cover hidden xl:block"
          // style={{ backgroundImage: `url(${boxbg.src})` }}
        >
          <div className="pt-[15%]">
            <Image
              src={accountriver}
              alt="accountriver"
              width={5000}
              height={500}
              className="w-full"
            />
          </div>

          <div className="absolute top-[-4%] left-[8%]">
            <div className="bg-[#E2E2FF]  py-4 px-8 rounded-3xl">
              <Discription
                dispription={card1desk}
                color={"text-primary"}
              />
            </div>
            <div className="flex  flex-col items-center">
              <p className="w-[1.5px] min-h-[200px] 2xl:min-h-[290px] bg-primary" />
              <span className="w-[13px] h-[13px] bg-primary rounded-[50%]" />
            </div>
          </div>
          <div className="absolute top-[14%] left-[25%]">
            <div className="bg-[#E2E2FF]  py-4 px-8 rounded-3xl">
              <Discription
                dispription={card2desk}
                color={"text-primary"}
              />
            </div>
            <div className="flex  flex-col items-center">
              <p className="w-[1.5px] min-h-[200px] 2xl:min-h-[250px] bg-primary" />
              <span className="w-[13px] h-[13px] bg-primary rounded-[50%]" />
            </div>
          </div>
          <div className="absolute top-[28%] left-[45%]">
            <div className="bg-[#E2E2FF]  py-4 px-8 rounded-3xl">
              <Discription
                dispription={card3desk}
                color={"text-primary"}
              />
            </div>
            <div className="flex  flex-col items-center">
              <p className="w-[1.5px] min-h-[100px] 2xl:min-h-[150px] bg-primary" />
              <span className="w-[13px] h-[13px] bg-primary rounded-[50%]" />
            </div>
          </div>
          <div className="absolute top-[44%] right-[15%]">
            <div className="bg-[#E2E2FF]  py-4 px-8 rounded-3xl">
              <Discription
                dispription={card4desk}
                color={"text-primary"}
              />
            </div>
            <div className="flex  flex-col items-center">
              <p className="w-[1.5px] min-h-[80px] bg-primary" />
              <span className="w-[13px] h-[13px] bg-primary rounded-[50%]" />
            </div>
          </div>
          <div className="absolute bottom-[12%] right-[5%]">
            <div className="bg-[#E2E2FF]  py-4 px-8 rounded-3xl">
              <Discription
                dispription={card5desk}
                color={"text-primary"}
              />
            </div>
            <div className="flex  flex-col items-center">
              <p className="w-[1.5px] min-h-[70px] bg-primary" />
              <span className="w-[13px] h-[13px] bg-primary rounded-[50%]" />
            </div>
          </div>
        </div>

        <div
          className=" bg-cover block xl:hidden"
          style={{ backgroundImage: `url(${boxbg.src})` }}
        >
          <div className="inn_container  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-3 pb-12">
            {cardphdata.map((data, index) =>
              <div className="pt-4" key={index}>
                <div className="bg-[#E2E2FF]  py-4 px-8 rounded-3xl ui_btn_shadow">
                  <Discription
                    dispription={data}
                    color={"text-primary"}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountgetstart;
