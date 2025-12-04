"use client";
import { useEffect, useState } from "react";
import Title from "../Uiux/Title";

export default function Contesttime() {
  const END_DATE = "2025-12-10T00:00:00";

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
      <div className="inn_container py-12 md:py-18 lg:py-32">
        <div className="text-center">
          <Title title={"Ongoing contests"} color={"gradient_text"} />
        </div>

        <div className="max-w-5xl m-auto mt-12 bg-white rounded-2xl">
            <div className="grid grid-cols-2 py-6 px-4">
               <div>
                 <h4 className="text-black text-4xl leading-[46px]">Crypto Futures weekly <br /> contest</h4>
                 <div>
                    <p className="text-secondary text-xl text-center">Contest ends in</p>

                    <div className="grid grid-cols-4 pt-4">
                        <div className="text-subprimary text-7xl font-bold text-center">
                            {String(timeLeft.days).padStart(2, "0")}
                            <p className="text-secondary text-base font-normal">Days</p>
                        </div>
                        <div className="text-subprimary text-7xl font-bold text-center">
                            {String(timeLeft.hours).padStart(2, "0")}
                            <p className="text-secondary text-base font-normal">Hours</p>
                        </div>
                        <div className="text-subprimary text-7xl font-bold text-center">
                            {String(timeLeft.minutes).padStart(2, "0")}
                            <p className="text-secondary text-base font-normal">Minutes</p>
                        </div>
                        <div className="text-subprimary text-7xl font-bold text-center">
                            {String(timeLeft.seconds).padStart(2, "0")}
                            <p className="text-secondary text-base font-normal">Seconds</p>
                        </div>
                    </div>
                 </div>
               </div>
            </div>
        </div>
      </div>
    </div>
  );
}
