"use client";
import React from "react";
// import fotterbackground from "../../../../public/banners/fotterbackground.webp";
import fottercardph from "../../../../public/images/fottercardph.webp";
import logo from "../../../../public/images/Logo.webp";
import Image from "next/image";
import Fotterlinks from "../Pagecomponents/Fotterlinks";
import facebookicon from "../../../../public/icons/facebook.svg";
import Instaicon from "../../../../public/icons/Insta.svg";
import youtue from "../../../../public/icons/youtube.svg";
import Link from "next/link";
import Worldbroker from "../Pagecomponents/Worldbroker";
import telegram from "../../../../public/icons/telegram.svg";
import twitter from "../../../../public/icons/twitter.svg";
import Reviewshowcase from "../Pagecomponents/Reviewshowcase";
import { usePathname } from "next/navigation";
import appqr from "../../../../public/icons/app-download.svg"
import Title from "./Title";
import { useAutoScroll } from "../../../hooks/useAutoScroll";
const footerdata = {
  policydata: [
    { pagelink: "/privacy-policy", pagename: "Privacy Policy" },
    { pagelink: "/aml-ctf-policy", pagename: "AML & CTF Policy" },
    { pagelink: "/refund-withdrawal", pagename: "Refund & Withdrawal" },
    { pagelink: "/risk-warning", pagename: "Risk Warning" },
    { pagelink: "/terms-and-conditions", pagename: "Terms & Conditions" },
  ],
  linkingdata: [
    {
      title: "Company",
      pagelinks: [
        // { pagelink: "/about-us", pagename: "About Us" },
        { pagelink: "/why-fliptrade", pagename: "Why FlipTrade" },
        { pagelink: "/contact-us", pagename: "Contact Us" },
        // { pagelink: "/privacy-policy", pagename: "Privacy Policy" },
        { pagelink: "/faq", pagename: "FAQs" },
        // { pagelink: "/aml-ctf-policy", pagename: "AML & CTF Policy" },
        {
          pagelink: "/complaint-handling-procedures",
          pagename: "Complaint Handling Procedures",
        },
        { pagelink: "/cookies", pagename: "Cookies" },
        // { pagelink: "/refund-withdrawal", pagename: "Refund & Withdrawal" },
        // { pagelink: "/risk-warning", pagename: "Risk Warning" },
        // { pagelink: "/terms-and-conditions", pagename: "Terms & Conditions" }
      ],
    },
    {
      title: "Markets",
      pagelinks: [
        { pagelink: "/forex", pagename: "Forex" },
        { pagelink: "/indices", pagename: "Indices" },
        { pagelink: "/commodities", pagename: "Commodities" },
        { pagelink: "/cryptocurrency", pagename: "Crypto Currency" },
        { pagelink: "/metals", pagename: "Metals" },
        { pagelink: "/stocks", pagename: "Stocks" },
      ],
    },
    {
      title: "Accounts",
      pagelinks: [
        { pagelink: "/accounts-types", pagename: "Account Types Overview" },
        { pagelink: "/standard-account", pagename: "Standard Account" },
        { pagelink: "/classic-account", pagename: "Classic Account" },
        { pagelink: "/enc-account", pagename: "ECN Account" },
        { pagelink: "/professional-account", pagename: "Professional Account" },
      ],
    },
    {
      title: "Tools",
      pagelinks: [
        { pagelink: "/economic-calendar", pagename: "Economic Calendar" },
        { pagelink: "/pip-calculator", pagename: "Pip Calculator" },
      ],
    },
    {
      title: "Platforms",
      pagelinks: [
        { pagelink: "/platform", pagename: "MetaTrader 5 (MT5)" },
        { pagelink: "/web-trading", pagename: "WebTrader" },
        // { pagelink: "/pip-calculator", pagename: "Mobile App" },
        {
          pagelink: "/social-copy-trading",
          pagename: "Social & Copy Trading",
        },
      ],
    },
  ],
  carddata: [
    {
      title: "Head Quarter",
      discription:
        "Giorgi Leonid Ze Street, Tbilisi 0105, <br/> Georgia Office 38.",
      link: false,
    },
    {
      title: "Registered Address",
      discription:
        "Ground Floor, The Sotheby <br/> Building, Rodney  Village, Rodney <br/> Bay, Saint Lucia",
      link: false,
    },
    {
      title: "Registration No.",
      discription: "2025-00621",
      link: false,
    },
    {
      title: "Contact No.",
      discription: "+41 2650 06818",
      link: "tel:+41265006818",
    },
    {
      title: "Email",
      discription: "support@fliptradegroup.com",
      link: "mailto:support@fliptradegroup.com",
    },
  ],
  social_links: [
    {
      alt: "Facebook",
      pagelink: "https://www.facebook.com/profile.php?id=61580314210503",
      icon: facebookicon,
    },
    {
      alt: "Instagram",
      pagelink: "https://www.instagram.com/fliptradegroup/",
      icon: Instaicon,
    },
    // {
    //   alt: "Twitter",
    //   pagelink: "https://www.instagram.com/fliptradegroup/",
    //   icon: twitter
    // },
    {
      alt: "You Tube",
      pagelink: "https://www.youtube.com/@fliptradegroup",
      icon: youtue,
    },
    {
      alt: "Telegram",
      pagelink: "https://t.me/fliptradegroup",
      icon: telegram,
    },
  ],
};
const Fotter = () => {
  useAutoScroll("Download-app", { delay: 800 });
  const pathname = usePathname();

  if (pathname?.startsWith('/promo')) {
    return null;
  }
  return (
    <div>
      <Worldbroker />
      {
        pathname === '/reviews' ?
          null :
          <Reviewshowcase />
      }
      <div className="bg-theme pb-18">
        <div className="inn_container">
          <div className="grid grid-cols-[4fr_2fr]">
            <div className=" relative" id="Download-app">
              <Title
                title={'Your Trading Partner Download the App'}
                color={'text-white'}
              />
            </div>
            <div>
              <div className="bg-white w-fit m-auto p-2 flex flex-col gap-2 rounded-lg">
                <Image
                  src={'/images/googleplay.webp'}
                  alt=""
                  width={1000}
                  height={500}
                  className="max-w-42 m-auto"
                />
                <Image
                  src={appqr}
                  alt="appqr"
                  width={1000}
                  height={500}
                  className="max-w-42 m-auto"
                />
              </div>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 bg-primary py-8 md:py-12 my-[2em]">
            {footerdata.carddata.map((data, index) => (
              <div
                className={`font_secondary  ${index === 4
                  ? null
                  : " md:border-r-[3px] border-dashed md:border-[#C5C6FF80]"
                  }`}
                key={index}
              >
                <div className="w-auto xl:w-max md:m-auto pt-3 md:px-2">
                  <p className="text-lg 2xl:text-2xl font-semibold w-max text-white">
                    {data.title}
                  </p>
                  {data.link !== false ? (
                    <Link href={data.link}>
                      <p
                        className="text-[15px] md:text-[13px] 2xl:text-base pt-1 md:pt-3 2xl:pt-4 font-light hover:underline text-white leading-6"
                        dangerouslySetInnerHTML={{
                          __html: data.discription,
                        }}
                      />
                    </Link>
                  ) : (
                    <p
                      className="text-[15px] md:text-[13px] 2xl:text-base pt-1 md:pt-3 2xl:pt-4 font-light  text-white leading-6 max-w-[90%] lg:max-w-max"
                      dangerouslySetInnerHTML={{
                        __html: data.discription,
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-[1660px] m-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 py-8 lg:py-12 border-[0.5px] gap-y-5 lg:gap-y-0 border-[#ffffff2e] border-b-0 px-[3%] rounded-tl-[30px] md:rounded-tl-[56px] rounded-tr-[30px] md:rounded-tr-[56px]">
              <div>
                <Link href="/">
                  <Image
                    src={logo}
                    alt="Logo"
                    width={1000}
                    height={500}
                    className="max-w-[190px] xl:max-w-[240px] 2xl:max-w-[270px]"
                  />
                </Link>
              </div>
              <div className="flex flex-col md:flex-row justify-end items-center gap-4">
                <a
                  href="mailto:support@fliptradegroup.com"
                  className="text-white underline underline-offset-4 hover:opacity-80 text-base md:text-lg xl:text-xl 2xl:text-[22px]"
                >
                  support@fliptradegroup.com
                </a>
                <a
                  href="mailto:support@fliptradegroup.com"
                  className="border-none outline-none py-3 text-center text-white text text-base md:text-lg xl:text-xl 2xl:text-[22px] rounded-[8.16px] bg-primary max-w-[178px] w-full cursor-pointer hover:opacity-90 transition-opacity"
                >
                  Connect Now
                </a>
              </div>
            </div>
            <div className="border-[0.5px] border-[#ffffff2e] rounded-bl-[30px] md:rounded-bl-[56px] rounded-br-[30px] md:rounded-br-[56px]">
              <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-b-[0.5px] border-[#ffffff2e]">
                {footerdata.linkingdata.map((data, index) => (
                  <div
                    className={`pt-4 md:pt-8 xl:pt-12 pb-4 md:pb-12 xl:pb-16 ${index === 4 ? null : "border-r-[0.5px] border-[#ffffff2e]"
                      }`}
                    key={index}
                  >
                    <Fotterlinks title={data.title} linklist={data.pagelinks} />
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 bg-primary py-4 md:py-6 lg:py-8 xl:py-10 2xl:py-12 gap-3 md:gap-4 lg:gap-4 xl:gap-6 px-4 md:px-6 lg:px-8 xl:px-12">
                {footerdata.policydata.map((data, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <Link href={data.pagelink} className="w-full">
                      <span className="text-[14px] md:text-lg 2xl:text-xl font-light text-white hover:underline">
                        {data.pagename}
                      </span>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4  border-b-[0.5px] border-[#ffffff2e]">
                {footerdata.social_links.map((data, index) => (
                  <div
                    key={index}
                    className={`${index === 4
                      ? null
                      : "border-r-[0.5px] border-t-[0.5px] border-[#ffffff2e]"
                      }`}
                  >
                    <Link href={data.pagelink} target="_blank">
                      <div
                        className={`flex items-center py-4 md:py-8 xl:py-12 w-[85%] xl:w-[70%] m-auto gap-4`}
                      >
                        <div className="w-[32px] md:w-[40px] h-[32px] md:h-[40px] bg-primary rounded-[50%] flex justify-center items-center">
                          <Image
                            src={data.icon}
                            alt={data.alt}
                            width={1000}
                            height={500}
                            className="max-w-[16px] md:max-w-[20px]"
                          />
                        </div>
                        <p className="text-base md:text-lg lg:text-xl 2xl:text-[25px] text-white  duration-500 hover:underline">
                          {data.alt}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div
                className="grid md:hidden grid-cols-1 bg-no-repeat bg-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 bg-cover md:p-12 "
                style={{ backgroundImage: `url(${fottercardph.src})` }}
              >
                <div className="p-6">
                  {footerdata.carddata.map((data, index) => (
                    <div
                      className={`font_secondary ${index === 4
                        ? null
                        : " md:border-r-[3px] border-dashed md:border-[#C5C6FF80]"
                        }`}
                      key={index}
                    >
                      <div className="w-auto xl:w-max md:m-auto pt-3 md:px-2">
                        <p className="text-lg 2xl:text-2xl font-semibold w-max text-white">
                          {data.title}
                        </p>
                        {data.link !== false ? (
                          <Link href={data.link}>
                            <p
                              className="text-[15px] md:text-[13px] 2xl:text-base pt-1 md:pt-3 2xl:pt-4 font-light text-white leading-6 hover:underline"
                              dangerouslySetInnerHTML={{
                                __html: data.discription,
                              }}
                            />
                          </Link>
                        ) : (
                          <p
                            className="text-[15px] md:text-[13px] 2xl:text-base pt-1 md:pt-3 2xl:pt-4 font-light text-white leading-6 max-w-[90%] lg:max-w-max"
                            dangerouslySetInnerHTML={{
                              __html: data.discription,
                            }}
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="py-8 lg:py-12 max-w-[93%] m-auto">
                <div className="text-base 2xl:text-lg text-[#AAAAAA] leading-[32px] 2xl:leading-[40px] font-light font_secondary">
                  <span className="text-white font-medium">
                    Risk statement :{" "}
                  </span>{" "}
                  An investment in derivatives and financial markets involves
                  high risk and may result in losses greater than your initial
                  investment. Trading in securities, forex, commodities,
                  options, and futures is not suitable for everyone, and you
                  should only invest money you can afford to lose. Before
                  investing, ensure such activities are permitted in your
                  country and seek independent financial, legal, or tax advice.
                  FlipTrade Group Limited does not provide services to residents
                  of the United States, Cuba, Iraq, Myanmar, North Korea, or
                  Sudan, and its services are not intended for jurisdictions
                  where they would contravene local laws or regulations. Nothing
                  on this site should be considered financial advice.
                </div>
                <div className="border-t-[0.5px] border-[#ffffff2e] text-center">
                  <div className="pt-6 w-[85%] xl:w-[70%] m-auto  text-[14px] md:text-base lg:text-lg text-[#AAAAAA]">
                    © FlipTrade Group Limited {new Date().getFullYear()} | All Rights Reserved
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

export default Fotter;
