"use client";
import { useEffect, useState } from "react";
import Title from "../Uiux/Title";
import trophy from "../../../../public/icons/trophy.svg";
import trophysilver from "../../../../public/images/trophysilver.png"
import trophy3rd from "../../../../public/images/trophy3rd.png"
import prople from "../../../../public/icons/contest-people.svg";
import Image from "next/image";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import Link from "next/link";

const accounttype_data = [
  {
    title: "Demo Contest",
    accountType: "Demo Account",
    price1st: '$5000',
    price2nd: '$2500',
    price3rd: '$1000',
    requirements: [
      "Sign Up",
      "KYC",
      "Open Demo A/C",
      "Join Contest"
    ],
    slots: 100,
  },
  {
    title: "Live Trading Contest <br/> <span class='text-green-700'> $50 </span>",
    accountType: "Live Trading Account",
    price1st: '$10000',
    price2nd: '$5000',
    price3rd: '$2500',
    requirements: [
      "Sign Up",
      "KYC",
      "Open Live A/C",
      "Join Contest"
    ],
    slots: 500,
  },
  {
    title: "Live Trading Contest <br/> <span class='text-green-700'> $100 </span>",
    accountType: "Live Trading Account",
    price1st: '$15000',
    price2nd: '$10000',
    price3rd: '$5000',
    requirements: [
      "Sign Up",
      "KYC",
      "Open Live A/C",
      "Join Contest"
    ],
    slots: 1000,
  },
]
export default function Contesttime() {
  const END_DATE = "2025-12-25T00:00:00";

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
        <div>
          <div className="pt-12">
            <div className="md:max-w-[50%] m-auto">
              <h6 className="text-white text-xl md:text-2xl lg:text-3xl text-center pb-4">
                Contest ends in
              </h6>
              <div className="flex items-center gap-4 justify-center">
                <Image
                  src={trophy}
                  alt="trophy"
                  width={1000}
                  height={500}
                  className="max-w-16.25 md:max-w-22.5 hidden md:block"
                />
                <div className="grid grid-cols-4  bg-primary py-8 px-1 rounded-3xl w-[85%]">
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
                <Image
                  src={trophy}
                  alt="trophy"
                  width={1000}
                  height={500}
                  className="max-w-16.25 md:max-w-22.5 hidden md:block"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-24">
          {
            accounttype_data.map((data, index) => (
              <div className="bg-white rounded-4xl py-5 px-4 shadow-lg w-full 2xl:max-w-[90%] m-auto relative h-full flex items-center justify-center" key={index}>
                <div>
                  <div className="hidden md:block max-w-40 2xl:max-w-50 absolute w-full top-[1%] left-[-13%] rotate-323">
                    <div className="grid grid-cols-4  bg-subprimary py-2 px-1 rounded-3xl">
                      <div className="text-white text-[12px] 2xl:text-[14px] leading-3 2xl:leading-4  md:font-bold text-center">
                        {String(timeLeft.days).padStart(2, "0")}
                        <p className="text-white text-[10px] leading-2.5 font-normal">Days</p>
                      </div>
                      <div className="text-white text-[12px] 2xl:text-[14px] leading-3 2xl:leading-4  md:font-bold text-center">
                        {String(timeLeft.hours).padStart(2, "0")}
                        <p className="text-white text-[10px] leading-2.5 font-normal">Hours</p>
                      </div>
                      <div className="text-white text-[12px] 2xl:text-[14px] leading-3 2xl:leading-4  md:font-bold text-center">
                        {String(timeLeft.minutes).padStart(2, "0")}
                        <p className="text-white text-[10px] leading-2.5 font-normal">Min.</p>
                      </div>
                      <div className="text-white text-[12px] 2xl:text-[14px] leading-3 2xl:leading-4  md:font-bold text-center">
                        {String(timeLeft.seconds).padStart(2, "0")}
                        <p className="text-white text-[10px] leading-2.5 font-normal">Sec.</p>
                      </div>
                    </div>
                  </div>
                  <h5 className="text-center text-2xl 2xl:text-3xl font-bold text-gray-800 mb-6 px-6"
                    dangerouslySetInnerHTML={{ __html: data.title }}
                  />
                  <div className=" border-gray-200 p-3 2xl:p-4 pt-0 border-l-4 border-b-4 border-primary rounded-2xl">
                    <h6 className="text-xl 2xl:text-2xl font-semibold text-gray-700 mb-4 text-center">
                      Price
                    </h6>

                    <div className="ps-4 space-y-3 w-full  mx-auto">
                      <p className="text-xl 2xl:text-2xl flex justify-between items-center border-b pb-2">
                        <span className="flex items-center font-medium text-primary">
                          <Image
                            src={trophy}
                            alt="trophy"
                            width={1000}
                            height={500}
                            className="max-w-5 me-2"
                          />

                          1st Place
                        </span>
                        <span className="text-2xl font-semibold text-green-600">
                          {data.price1st}
                        </span>
                      </p>

                      <p className="text-[19px] 2xl:text-[22px] flex justify-between items-center border-b pb-2">
                        <span className="flex items-center font-medium text-gray-600">
                          <Image
                            src={trophysilver}
                            alt="trophy"
                            width={1000}
                            height={500}
                            className="max-w-[18px] me-2"
                          />
                          2nd Place
                        </span>
                        <span className="text-2xl font-semibold text-green-600">
                          {data.price2nd}
                        </span>
                      </p>

                      <p className="text-lg 2xl:text-xl flex justify-between items-center pt-1">
                        <span className="flex items-center font-medium text-amber-800">
                          <Image
                            src={trophy3rd}
                            alt="trophy"
                            width={1000}
                            height={500}
                            className="max-w-[16px] me-2"
                          />
                          3rd Place
                        </span>
                        <span className="text-2xl font-semibold text-green-600">
                          {data.price3rd}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="pt-3">
                    <h6 className="text-xl 2xl:text-2xl font-semibold text-gray-700 mb-4 text-center">
                      Requirement
                    </h6>

                    <div className="grid grid-cols-2 gap-4">
                      {
                        data.requirements.map((item, index) => (
                          <div className={`flex items-center gap-2 text-lg 2xl:text-xl ${index % 2 === 0 ? '' : 'justify-end'}`} key={index}>
                            <span className="w-3 2xl:w-4 h-3 2xl:h-4 bg-primary rounded-[50%] flex items-center justify-center p-4 m-0 text-lg 2xl:text-xl text-white">
                              {index + 1}
                            </span>{" "}
                            {item}
                          </div>
                        ))
                      }
                    </div>
                  </div>
                  <div className="pt-3">
                    <div className="flex items-center justify-center gap-6">
                      <div className="flex items-center text-xl gap-2">
                        <Image
                          src={prople}
                          alt="prople"
                          width={1000}
                          height={500}
                          className="max-w-10"
                        />
                        Slot
                      </div>
                      <p className="text-xl 2xl:text-2xl">{data.slots}</p>
                    </div>
                  </div>
                  <div className="pt-5 flex justify-center">
                    <Link
                      href={'https://client.fliptradegroup.com/trader/registration'}
                    >
                      <Button
                        btn_name={"Join Contest"}
                        btn_bg={"bg-primary"}
                        border_color={"border-primary"}
                        text_color={'text-white'}
                        icon={firebtnicon}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
