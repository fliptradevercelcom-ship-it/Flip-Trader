"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Title from "../Uiux/Title";

import introblack from "../../../../public/icons/pageblack.svg";
import introwhite from "../../../../public/icons/page.svg";

import legalblack from "../../../../public/icons/lawblack.svg";
import legalwhite from "../../../../public/icons/lawwhite.svg";

import cookieblack from "../../../../public/icons/Cookiesblack.svg";
import cookiewhite from "../../../../public/icons/Cookieswhite.svg";

import securityblack from "../../../../public/icons/securityblack.svg";
import securitywhite from "../../../../public/icons/securitywhite.svg";

import otherblack from "../../../../public/icons/otherblack.svg";
import otherwhite from "../../../../public/icons/otherwhite.svg";

import contactblack from "../../../../public/icons/contactblack.svg";
import contactwhite from "../../../../public/icons/contactwhite.svg";

import faqicon from "../../../../public/icons/faq.svg";

/* ========================= CARDS ========================= */

export const Card1 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        This Cookies Policy explains how <strong>FlipTrade Group Ltd</strong>
        (“Company”, “we”, “our”, “us”) uses cookies and similar technologies to
        recognize you when you visit our website or use our mobile application.
      </p>

      <br />

      <p className="text-base 2xl:text-xl text-white font_ternary">
        Cookies help us provide a more personalized and efficient experience by
        understanding your preferences and improving our services.
      </p>

      <br />

      <p className="text-base 2xl:text-xl text-white font_ternary">
        By continuing to use our website or application, you agree to the use
        of cookies as outlined in this policy.
      </p>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        Cookies are small text files stored on your device when you visit a
        website.
      </p>

      <br />

      <p className="text-base 2xl:text-xl text-white font_ternary">
        These files help websites function efficiently and improve user
        experience.
      </p>

      <br />

      <p className="text-base 2xl:text-xl text-white font_ternary">
        You can choose to accept or decline cookies through your browser
        settings.
      </p>
    </div>
  );
};

export const Card3 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        Where applicable, we request your consent before placing non-essential
        cookies on your device.
      </p>

      <br />

      <p className="text-base 2xl:text-xl text-white font_ternary">
        If you do not agree to the use of cookies, you should adjust your
        browser settings or discontinue use of our website.
      </p>
    </div>
  );
};

export const Card4 = () => {
  return (
    <div className="pt-6">
      <div className="ps-6">
        {[
          "Enable core website functionality",
          "Maintain secure login sessions",
          "Improve website performance",
          "Understand user interaction",
          "Personalize trading experience",
          "Support marketing campaigns",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export const Card5 = () => {
  return (
    <div className="pt-6">

      <p className="text-[20px] text-white font-medium">
        5.1 Session Cookies
      </p>

      <div className="ps-6 pt-2">
        {[
          "Navigation between pages",
          "Secure login sessions",
          "Client area access",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>

      <p className="text-[20px] text-white font-medium pt-6">
        5.2 Persistent Cookies
      </p>

      <div className="ps-6 pt-2">
        {[
          "Recognize returning users",
          "Store preferences",
          "Analyze user behavior",
          "Deliver relevant content",
          "Prevent repetitive surveys",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>

      <p className="text-[20px] text-white font-medium pt-6">
        5.3 Third-Party Cookies
      </p>

      <div className="ps-6 pt-2">
        {[
          "Google Ads",
          "Google Analytics",
          "Campaign tracking",
          "Website usage analytics",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export const Card6 = () => {
  return (
    <div className="pt-6">
      <div className="ps-6">
        {[
          "IP address",
          "Device and browser information",
          "Pages visited",
          "Time spent on pages",
          "Navigation patterns",
          "Approximate geographic location",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export const Card7 = () => {
  return (
    <div className="pt-6">

      <p className="text-base 2xl:text-xl text-white font_ternary">
        You have the right to control and manage cookies at any time.
      </p>

      <div className="ps-6 pt-4">
        {[
          "Delete cookies stored on your device",
          "Block cookies through browser settings",
          "Set preferences for websites",
          "Receive alerts when cookies are used",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>

      <br />

      <p className="text-base 2xl:text-xl text-white font_ternary">
        Important: Disabling cookies may limit access to secure areas such as
        your trading account.
      </p>
    </div>
  );
};

export const Card8 = () => {
  return (
    <div className="pt-6">

      <p className="text-base 2xl:text-xl text-white font_ternary">
        Our mobile applications may use technologies such as:
      </p>

      <div className="ps-6 pt-4">
        {[
          "SDKs (Software Development Kits)",
          "Device identifiers",
          "Local storage",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>

      <br />

      <p className="text-base 2xl:text-xl text-white font_ternary">
        These technologies improve app performance, security, and user
        experience.
      </p>
    </div>
  );
};

export const Card9 = () => {
  return (
    <div className="pt-6">

      <p className="text-base 2xl:text-xl text-white font_ternary">
        FlipTrade Group reserves the right to update or modify this Cookies
        Policy at any time.
      </p>

      <br />

      <p className="text-base 2xl:text-xl text-white font_ternary">
        Updates will be posted on this page with a revised effective date.
      </p>
    </div>
  );
};

export const Card10 = () => {
  return (
    <div className="pt-6">

      <p className="text-base 2xl:text-xl text-white">
        FlipTrade Group Ltd
      </p>

      <p className="pt-2 text-base 2xl:text-xl text-white">
        4th Floor, The Docks 4,
      </p>

      <p className="pt-2 text-base 2xl:text-xl text-white">
        The Docks, Caudan,
      </p>

      <p className="pt-2 text-base 2xl:text-xl text-white">
        C/o Renark Management Solutions Ltd,
      </p>

      <p className="pt-2 text-base 2xl:text-xl text-white">
        Port Louis, Mauritius
      </p>

      <div className="pt-4">
        <a
          href="mailto:support@fliptradegroup.com"
          className="text-white underline text-base 2xl:text-xl"
        >
          support@fliptradegroup.com
        </a>
      </div>

      <div className="pt-2">
        <a
          href="https://fliptradegroup.com"
          target="_blank"
          className="text-white underline text-base 2xl:text-xl"
        >
          fliptradegroup.com
        </a>
      </div>
    </div>
  );
};

/* ========================= DATA ========================= */

const cookiesPolicyData = [
  {
    id: 1,
    title: "Introduction",
    icon: introblack,
    activeIcon: introwhite,
    component: Card1,
  },
  {
    id: 2,
    title: "What Are Cookies?",
    icon: cookieblack,
    activeIcon: cookiewhite,
    component: Card2,
  },
  {
    id: 3,
    title: "Legal Basis & Consent",
    icon: legalblack,
    activeIcon: legalwhite,
    component: Card3,
  },
  {
    id: 4,
    title: "How We Use Cookies",
    icon: securityblack,
    activeIcon: securitywhite,
    component: Card4,
  },
  {
    id: 5,
    title: "Types of Cookies",
    icon: cookieblack,
    activeIcon: cookiewhite,
    component: Card5,
  },
  {
    id: 6,
    title: "Data Collected",
    icon: securityblack,
    activeIcon: securitywhite,
    component: Card6,
  },
  {
    id: 7,
    title: "Managing Cookies",
    icon: cookieblack,
    activeIcon: cookiewhite,
    component: Card7,
  },
  {
    id: 8,
    title: "Mobile Applications",
    icon: securityblack,
    activeIcon: securitywhite,
    component: Card8,
  },
  {
    id: 9,
    title: "Policy Updates",
    icon: otherblack,
    activeIcon: otherwhite,
    component: Card9,
  },
  {
    id: 10,
    title: "Contact Us",
    icon: contactblack,
    activeIcon: contactwhite,
    component: Card10,
  },
];

/* ========================= MAIN COMPONENT ========================= */

const CookiesPolicy = () => {

  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      sectionRefs.current.forEach((ref, index) => {

        if (!ref) return;

        const rect = ref.getBoundingClientRect();

        if (rect.top >= 0 && rect.top <= 100) {
          setActiveSection(cookiesPolicyData[index].id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <div className="bg-theme">

      <div className="inn_container pb-12 xl:pb-24">

        <div className="text-center mt-5 md:mt-16">
          <Title title="Cookies Policy" color="text-white" ish1={true} />
        </div>

        <div className="flex flex-col xl:flex-row xl:pt-14 gap-4 relative">

          {/* Sidebar */}
          <div className="hidden xl:block xl:w-[30%] 2xl:w-[25%]">

            <div className="bg-primary xl:max-w-[380px] p-6 rounded-3xl sticky top-10">

              <p className="text-[30px] font-medium text-white">
                Cookies Policy
              </p>

              <div className="pt-4 grid grid-cols-1 gap-3">

                {cookiesPolicyData.map((item, index) => (

                  <div
                    key={index}
                    onClick={() =>
                      sectionRefs.current[index]?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                      activeSection === item.id
                        ? "bg-white"
                        : "bg-[#4C1BE3]"
                    }`}
                  >

                    <div className="flex items-center gap-3">

                      <Image
                        src={
                          activeSection === item.id
                            ? item.icon
                            : item.activeIcon
                        }
                        alt="icon"
                        width={1000}
                        height={500}
                        className="max-w-[24px]"
                      />

                      <p
                        className={`list_text font-medium ${
                          activeSection === item.id
                            ? "text-black"
                            : "text-white"
                        }`}
                      >
                        {item.title}
                      </p>

                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="xl:w-[70%] 2xl:w-[75%]">

            <div className="block xl:hidden sticky top-[50px] z-50">

              <div
                className="bg-primary w-max p-3 rounded-full"
                onClick={() => setToggle(!toggle)}
              >

                <Image
                  src={faqicon}
                  alt="faq"
                  width={1000}
                  height={500}
                  className="max-w-[32px]"
                />
              </div>
            </div>

            <div>

              {cookiesPolicyData.map((item, index) => {

                const Section = item.component;

                return (
                  <div
                    key={index}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    className="p-4 shadow-[1px_1px_0px_0px_#fff] rounded-3xl mt-2 md:mt-12"
                  >

                    <div className="flex items-center gap-3 max-w-[900px] 2xl:max-w-7xl m-auto">

                      <Image
                        src={item.activeIcon}
                        alt="icon"
                        width={1000}
                        height={500}
                        className="max-w-[34px]"
                      />

                      <p className="text-[30px] font-medium text-white">
                        {item.title}
                      </p>

                    </div>

                    <Section />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;