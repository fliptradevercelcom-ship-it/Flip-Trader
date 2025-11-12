import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import notalonebarimg1 from "../../../../public/images/notalonebarimg1.webp";
import notalonebarimg2 from "../../../../public/images/notalonebarimg2.webp";
import notalonebarimg3 from "../../../../public/images/notalonebarimg3.webp";
import notalonerightimg from "../../../../public/images/notalonerightimg.webp";
import Image from "next/image";

const bardata = [
  {
    icon: notalonebarimg1,
    title: "Active Community",
    discription:
      "Connect with traders worldwide, share insights and strategies."
  },
  {
    icon: notalonebarimg2,
    title: "Live Sessions",
    discription: "Attend real-time webinars and Q&A with expert traders."
  },
  {
    icon: notalonebarimg3,
    title: "Expert Mentorship",
    discription: "Get personalized guidance from seasoned professionals."
  }
];
const Notalone = () => {
  return (
    <div className="bg-theme">
      <div className="inn_container pt-12 xl:pt-24 2xl:pt-36">
        <div className="grid grid-col-1 md:grid-cols-2 pb-5 text-center md:text-start relative z-[2]">
          <Title
            title="You're Never <span class='gradient_text'> Trading Alone </span>"
            color="text-white"
          />
          <div className="flex justify-center items-center">
            <Discription
              dispription={`Join our trader community, attend live sessions, <br/> and get expert mentorship.`}
              color="text-white"
            />
          </div>
        </div>

        <div className="relative  mt-8">
          {bardata.map((data, index) =>
            <div
              className="flex flex-col lg:flex-row items-center py-3 shadow-[inset_0_15px_20px_-10px_#6a40ecc2,inset_0_-15px_20px_-10px_#6a40ecc2] mb-6 relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-[5%] before:h-full before:bg-[linear-gradient(90deg,rgba(0,0,0,1)_35%,rgba(0,212,255,0)_100%)] after:content-[''] after:absolute after:top-0 after:right-0 after:w-[5%] after:h-full after:bg-[linear-gradient(90deg,rgba(0,0,0,0)_35%,rgba(0,0,0,1)_100%)]  rounded-4xl"
              key={index}
            >
              <div>
                <Image
                  src={data.icon}
                  alt=""
                  width={1000}
                  height={500}
                  className="max-w-[150px]"
                />
              </div>
              <div className=" lg:max-w-[480px] px-4 md:px-0">
                <h5 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-medium gradient_text text-center lg:text-start md:w-max">
                  {data.title}
                </h5>
                <p className="list_text font-light text-center md:text-start font_ternary leading-[28px] max-w[330px] text-white">
                  {data.discription}
                </p>
              </div>
            </div>
          )}
          <div className="absolute top-0 right-[3%] w-[35%] xl:w-[45%] h-full hidden lg:flex items-center">
            <Image
              src={notalonerightimg}
              alt=""
              width={1000}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notalone;
