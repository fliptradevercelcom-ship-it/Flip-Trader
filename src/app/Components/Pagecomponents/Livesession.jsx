import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import spots from "../../../../public/icons/spots.svg";
import calendar from "../../../../public/icons/calendar.svg";
import clock from "../../../../public/icons/clock.svg";
import Image from "next/image";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import Link from "next/link";
const sessiondata = [
  {
    id: 1,
    level: "Beginner",
    spots: 45,
    title: "MT5 Platform Basics for Beginners",
    trainer: "Sarah Johnson",
    startdate: "November 2, 2025",
    timing: "10:00 AM EST • 90 mins"
  },
  {
    id: 2,
    level: "Advanced",
    spots: 45,
    title: "Advanced Technical Analysis Strategies",
    trainer: "Sarah Johnson",
    startdate: "November 2, 2025",
    timing: "10:00 AM EST • 90 mins"
  },
  {
    id: 3,
    level: "Intermediate",
    spots: 45,
    title: "Risk Management & Portfolio Protection",
    trainer: "Sarah Johnson",
    startdate: "November 2, 2025",
    timing: "10:00 AM EST • 90 mins"
  },
  {
    id: 4,
    level: "Beginner",
    spots: 45,
    title: "Cryptocurrency Trading on MT5",
    trainer: "Sarah Johnson",
    startdate: "November 2, 2025",
    timing: "10:00 AM EST • 90 mins"
  },
  {
    id: 5,
    level: "Beginner",
    spots: 45,
    title: "Expert Advisors & Automated Trading",
    trainer: "Sarah Johnson",
    startdate: "November 2, 2025",
    timing: "10:00 AM EST • 90 mins"
  },
  {
    id: 6,
    level: "Beginner",
    spots: 45,
    title: "Forex Fundamentals: Getting Started",
    trainer: "Sarah Johnson",
    startdate: "November 2, 2025",
    timing: "10:00 AM EST • 90 mins"
  }
];

const Livesession = () => {
  return (
    <div className="theme">
      <div className="inn_container pt-12 xl:pt-22 2xl:pt-30">
        <div className="text-center lg:w-max m-auto">
          <Title
            title={"Upcoming Live Webinars <br/> & Workshops"}
            color={"gradient_text"}
          />
          <div>
            <Discription
              dispription={
                "Join live, expert-led sessions to learn strategies, market insights, and <br/> platform skills in real time."
              }
              color={"text-white"}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 pt-12 xl:pt-18">
          {sessiondata.map((data, index) =>
            <div className="bg-white p-10 rounded-[48px]" key={index}>
              <div className="flex justify-between items-center">
                <p className="text-base md:text-lg font_ternary font-[350] text-white px-5 py-1.5 bg-secondary w-max rounded-full">
                  {data.level}
                </p>

                <div className="bg-primary px-5 py-1.5 rounded-full flex text-white gap-2 font_ternary text-base md:text-lg">
                  <Image
                    src={spots}
                    alt=""
                    width={1000}
                    height={500}
                    className="max-w-[17px]"
                  />
                  {data.spots} spots
                </div>
              </div>
              <div className="pt-6">
                <h5 className="text-[22px] lg:text-[24px] 2xl:text-[28px] text-primary max-w-[80%]">
                  {data.title}
                </h5>
                <p className="text-lg font_ternary text-secondary pt-1">
                  With <span className="font-extrabold">{data.trainer}</span>
                </p>

                <div className="pt-4">
                  <p className="flex items-center gap-2 text-lg md:text-xl font_ternary">
                    <Image
                      src={calendar}
                      alt="calender"
                      width={1000}
                      height={500}
                      className="max-w-6"
                    />
                    {data.startdate}
                  </p>
                  <p className="flex items-center gap-2 text-lg md:text-xl font_ternary pt-2">
                    <Image
                      src={clock}
                      alt="clock"
                      width={1000}
                      height={500}
                      className="max-w-6"
                    />
                    {data.timing}
                  </p>
                </div>
              </div>
              <div className="pt-7">
                <Link
                  href={"https://client.fliptradegroup.com/trader/registration"}
                >
                  <Button
                    btn_name={"Register Now"}
                    btn_bg={"bg-primary"}
                    icon={firebtnicon}
                    text_color={"text-white"}
                    shadow={true}
                    border_color={"border-primary"}
                  />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Livesession;
