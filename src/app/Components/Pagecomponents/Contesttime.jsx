"use client";
import { useEffect, useState } from "react";
import Title from "../Uiux/Title";
import trophy from "../../../../public/icons/trophy.svg";
import prople from "../../../../public/icons/contest-people.svg";
import Image from "next/image";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
export default function Contesttime() {
  const END_DATE = "2025-12-18T00:00:00";

  const calculateTimeLeft = () => {
    const end = new Date(END_DATE).getTime();
    const now = new Date().getTime();
    const diff = end - now;
    if (diff <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00"
      };
    }
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor(diff / (1000 * 60 * 60) % 24),
      minutes: Math.floor(diff / (1000 * 60) % 60),
      seconds: Math.floor(diff / 1000 % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="inn_container">
        <div className="text-center">
          <Title title={"Ongoing contests"} color={"gradient_text"} />
        </div>

        <div className="max-w-5xl p-4 m-auto mt-12 bg-white rounded-2xl">
          <h4 className="text-black text-2xl md:text-3xl lg:text-5xl text-center lg:leading-[58px]">
            Crypto Futures Weekly <br /> Contest
          </h4>

          <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 pt-6 md:pt-10 md:px-4">
            <div>
              <div>
                <h6 className="text-secondary text-xl md:text-2xl lg:text-3xl text-start pb-4">
                  Contest ends in
                </h6>

                <div className="grid grid-cols-4 md:max-w-[85%] bg-primary py-8 px-1 rounded-3xl">
                  <div className="text-white text-3xl lg:text-5xl  md:font-bold text-center">
                    {String(timeLeft.days).padStart(2, "0")}
                    <p className="text-white text-sm font-normal">Days</p>
                  </div>
                  <div className="text-white text-3xl lg:text-5xl  md:font-bold text-center">
                    {String(timeLeft.hours).padStart(2, "0")}
                    <p className="text-white text-sm font-normal">Hours</p>
                  </div>
                  <div className="text-white text-3xl lg:text-5xl  md:font-bold text-center">
                    {String(timeLeft.minutes).padStart(2, "0")}
                    <p className="text-white text-sm font-normal">Minutes</p>
                  </div>
                  <div className="text-white text-3xl lg:text-5xl  md:font-bold text-center">
                    {String(timeLeft.seconds).padStart(2, "0")}
                    <p className="text-white text-sm font-normal">Seconds</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="max-w-[90%] md:max-w-[80%] m-auto grid grid-cols-2 gap-y-3">
                <div>
                  <Image
                    src={trophy}
                    alt="trophy"
                    width={1000}
                    height={500}
                    className="max-w-[55px] md:max-w-[65px]"
                  />
                  <p className="text-xl pt-2">$1000</p>
                </div>
                <div>
                  <Image
                    src={prople}
                    alt="prople"
                    width={1000}
                    height={500}
                    className="max-w-[55px] md:max-w-[65px]"
                  />
                  <p className="text-xl pt-2">134 / 2000</p>
                </div>
                <div>
                  <p className="text-base text-gray-500">Start</p>
                  <div className="text-xl py-1">11/12/2025</div>
                  <p className="text-base text-gray-500">12:00:00 AM</p>
                </div>
                <div>
                  <p className="text-base text-gray-500">End</p>
                  <div className="text-xl py-1">18/12/2025</div>
                  <p className="text-base text-gray-500">12:00:00 AM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 flex justify-center">
            <Button
              btn_name={"Join Contest"}
              btn_bg={"bg-primary"}
              border_color={"border-primary"}
              text_color={'text-white'}
              icon={firebtnicon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
