import React from "react";
import whatyoulearnbg from "/public/banners/whatyoulearnbg.webp";
import firebtniconblue from "/public/icons/firebtniconblue.svg";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Link from "next/link";
import Button from "../Uiux/Button";
import youlearnicon1 from "../../../../public/icons/youlearnicon1.svg";
import youlearnicon2 from "../../../../public/icons/youlearnicon2.svg";
import youlearnicon3 from "../../../../public/icons/youlearnicon3.svg";
import youlearnicon4 from "../../../../public/icons/youlearnicon4.svg";
import youlearnicon5 from "../../../../public/icons/youlearnicon5.svg";
import Image from "next/image";

const learnlist = [
  {
    icon: youlearnicon1,
    title: "Forex Basics",
    description: "Master the fundamentals of foreign exchange trading.",
    padding_start: "lg:ps-0"
  },
  {
    icon: youlearnicon2,
    title: "Market Analysis",
    description: "Learn to read charts and analyze market trends.",
    padding_start: "lg:ps-12"
  },
  {
    icon: youlearnicon3,
    title: "Risk Management",
    description: "Protect your capital with proven risk strategies.",
    padding_start: "lg:ps-18"
  },
  {
    icon: youlearnicon4,
    title: "Trading Psychology",
    description: "Develop the mindset of successful traders.",
    padding_start: "lg:ps-12"
  },
  {
    icon: youlearnicon5,
    title: "Web Trading",
    description: "Navigate our tools with ease and efficiency.",
    padding_start: "lg:ps-0"
  }
];
function Whatyoulearn() {
  return (
    <div className="bg-theme  pt-12 xl:pt-24 2xl:pt-36">
      <div
        className="bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${whatyoulearnbg.src})` }}
      >
        <div className="inn_container  grid lg:grid-cols-2 py-6 lg:py-0">
          <div className="my-auto text-center lg:text-start">
            <div>
              <Title title={"What You'll <br/> Learn"} color={"text-white"} />
              <div className="py-3">
                <Discription
                  dispription={
                    "Comprehensive curriculum designed to <br/> transform beginners into confident <br/> traders."
                  }
                  color={"text-white"}
                />
              </div>
              <div className="lg:pt-8">
                <Link
                  href={"https://client.fliptradegroup.com/trader/registration"}
                >
                  <Button
                    icon={firebtniconblue.src}
                    btn_name="Start Learning Now"
                    btn_bg="bg-white"
                    text_color="text-primary"
                    border_color="border-white"
                    shadow={true}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="h-max my-auto py-12 lg:py-4">
            {learnlist.map((data, index) =>
              <div
                key={index}
                className={`flex  flex-col lg:flex-row items-center justify-center lg:justify-start pb-6 gap-6 ${data.padding_start}`}
              >
                <div className="w-[60px] xl:w-[70px] 2xl:w-[80px] h-[60px] xl:h-[70px] 2xl:h-[80px] bg-white rounded-[50%] flex justify-center items-center">
                  <Image
                    src={data.icon}
                    alt={data.title}
                    width={1000}
                    height={500}
                    className="max-w-[32px] 2xl:max-w-[45px]"
                  />
                </div>
                <div>
                  <h5 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-medium gradient_text text-center lg:text-start md:w-max">
                    {data.title}
                  </h5>
                  <div className="list_text font-light text-center font_ternary leading-[28px] max-w[330px] text-white">
                    {data.description}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatyoulearn;
