"use client";
import { useEffect, useState } from "react";
import Title from "../Uiux/Title";
import trophy from "../../../../public/icons/trophy.svg";
import trophysilver from "../../../../public/images/trophysilver.png";
import trophy3rd from "../../../../public/images/trophy3rd.png";
import prople from "../../../../public/icons/contest-people.svg";
import Image from "next/image";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import Link from "next/link";

const accounttype_data = [
  {
    title: "Demo Contest",
    accountType: "Demo Account",
    price1st: "$5000",
    price2nd: "$2500",
    price3rd: "$1000",
    requirements: ["Sign Up", "KYC", "Open Demo A/C", "Join Contest"],
    slots: 100,
  },
  {
    title:
      "Live Trading Contest <br/> <span class='text-green-700'> $50 </span>",
    accountType: "Live Trading Account",
    price1st: "$10000",
    price2nd: "$5000",
    price3rd: "$2500",
    requirements: ["Sign Up", "KYC", "Open Live A/C", "Join Contest"],
    slots: 500,
  },
  {
    title:
      "Live Trading Contest <br/> <span class='text-green-700'> $100 </span>",
    accountType: "Live Trading Account",
    price1st: "$15000",
    price2nd: "$10000",
    price3rd: "$5000",
    requirements: ["Sign Up", "KYC", "Open Live A/C", "Join Contest"],
    slots: 1000,
  },
];

export default function Contesttime() {
  const getEndDate = () => {
    if (typeof window === "undefined") return new Date();

    const savedEndDate = localStorage.getItem("contestEndDate");
    if (savedEndDate) return new Date(savedEndDate);

    const newEnd = new Date();
    newEnd.setDate(newEnd.getDate() + 7);
    localStorage.setItem("contestEndDate", newEnd.toISOString());
    return newEnd;
  };

  const calculateTimeLeft = () => {
    const diff = getEndDate().getTime() - new Date().getTime();

    if (diff <= 0) {
      const nextEnd = new Date();
      nextEnd.setDate(nextEnd.getDate() + 7);
      localStorage.setItem("contestEndDate", nextEnd.toISOString());
      return { days: "07", hours: "00", minutes: "00", seconds: "00" };
    }

    return {
      days: String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, "0"),
      hours: String(
        Math.floor((diff / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),
      minutes: String(
        Math.floor((diff / (1000 * 60)) % 60)
      ).padStart(2, "0"),
      seconds: String(Math.floor((diff / 1000) % 60)).padStart(2, "0"),
    };
  };

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(
      () => setTimeLeft(calculateTimeLeft()),
      1000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="inn_container">
        <div className="text-center">
          <Title title="Ongoing contests" color="gradient_text" />
        </div>

        {/* MAIN TIMER */}
        <div className="pt-12">
          <div className="md:max-w-[50%] m-auto">
            <h6 className="text-white text-xl md:text-2xl lg:text-3xl text-center pb-4">
              Contest ends in
            </h6>

            <div className="flex items-center gap-4 justify-center">
              <Image src={trophy} alt="trophy" width={1000} height={500} className="max-w-16 hidden md:block" />

              <div className="grid grid-cols-4 bg-primary py-8 px-1 rounded-3xl w-[85%]">
                {Object.entries(timeLeft).map(([key, value]) => (
                  <div key={key} className="text-white text-3xl lg:text-5xl font-bold text-center">
                    {value}
                    <p className="text-sm font-normal capitalize">{key}</p>
                  </div>
                ))}
              </div>

              <Image src={trophy} alt="trophy" width={1000} height={500} className="max-w-16 hidden md:block" />
            </div>
          </div>
        </div>

        {/* CONTEST CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-24">
          {accounttype_data.map((data, index) => (
            <div key={index} className="bg-white rounded-4xl py-5 px-4 shadow-lg w-full m-auto h-full">
              <h5
                className="text-center text-2xl font-bold mb-6"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />

              {/* PRICE */}
              <div className="border-l-4 border-b-4 border-primary rounded-2xl p-4">
                <h6 className="text-xl font-semibold text-center mb-4">Price</h6>

                {[data.price1st, data.price2nd, data.price3rd].map(
                  (price, i) => (
                    <p key={i} className="flex justify-between border-b pb-2 mb-2">
                      <span className="flex items-center gap-2">
                        <Image
                          src={[trophy, trophysilver, trophy3rd][i]}
                          alt="trophy"
                          width={20}
                          height={20}
                        />
                        {i + 1} Place
                      </span>
                      <span className="font-semibold text-green-600">
                        {price}
                      </span>
                    </p>
                  )
                )}
              </div>

              {/* REQUIREMENTS */}
              <div className="pt-4">
                <h6 className="text-xl font-semibold text-center mb-4">
                  Requirement
                </h6>
                <div className="grid grid-cols-2 gap-4">
                  {data.requirements.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                        {i + 1}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* SLOT */}
              <div className="pt-4 flex justify-center gap-3 items-center">
                <Image src={prople} alt="people" width={24} height={24} />
                <span>Slot:</span>
                <strong>{data.slots}</strong>
              </div>

              {/* BUTTON */}
              <div className="pt-6 flex justify-center">
                <Link href="https://client.fliptradegroup.com/trader/registration">
                  <Button
                    btn_name="Join Contest"
                    btn_bg="bg-primary"
                    border_color="border-primary"
                    text_color="text-white"
                    icon={firebtnicon}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
