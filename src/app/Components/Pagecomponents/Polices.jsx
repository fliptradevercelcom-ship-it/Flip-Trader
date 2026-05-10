"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Title from "../Uiux/Title";

import introblack from "../../../../public/icons/pageblack.svg";
import introwhite from "../../../../public/icons/page.svg";

import scopeblack from "../../../../public/icons/usericon.svg";
import scopewhite from "../../../../public/icons/usericonwhite.svg";

import collectblack from "../../../../public/icons/Regulation.svg";
import collectwhite from "../../../../public/icons/Regulationwhite.svg";

import processblack from "../../../../public/icons/securityblack.svg";
import processwhite from "../../../../public/icons/securitywhite.svg";

import legalblack from "../../../../public/icons/lawblack.svg";
import legalwhite from "../../../../public/icons/lawwhite.svg";

import shareblack from "../../../../public/icons/Disclosureblack.svg";
import sharewhite from "../../../../public/icons/Disclosurewhite.svg";

import securityblack from "../../../../public/icons/Securityb.svg";
import securitywhite from "../../../../public/icons/Securityw.svg";

import cookieblack from "../../../../public/icons/Cookiesblack.svg";
import cookiewhite from "../../../../public/icons/Cookieswhite.svg";

import otherblack from "../../../../public/icons/otherblack.svg";
import otherwhite from "../../../../public/icons/otherwhite.svg";

import contactblack from "../../../../public/icons/contactblack.svg";
import contactwhite from "../../../../public/icons/contactwhite.svg";

import faqicon from "../../../../public/icons/faq.svg";

/* ===================== CARDS ===================== */

export const Card1 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        <strong>FlipTrade Group Ltd</strong> is authorized and regulated by the
        Financial Services Commission (FSC) of Mauritius under License Number
        GB26205911.
      </p>

      <br />

      <p className="text-base 2xl:text-xl text-white font_ternary">
        FlipTrade Group Ltd (“Company”, “we”, “us”, “our”) is firmly committed
        to safeguarding the privacy, confidentiality, and integrity of personal
        data belonging to our clients, partners, and users.
      </p>

      <br />

      <p className="text-base 2xl:text-xl text-white font_ternary">
        This Privacy Policy explains how we collect, use, process, store,
        disclose, and protect your information when you interact with our
        website, mobile applications, trading platforms, customer support
        channels, and related services under the FlipTrade Group brand.
      </p>

      <br />

      <p className="text-base 2xl:text-xl text-white font_ternary">
        By accessing or using our services, you confirm that you have read,
        understood, and agreed to this Privacy Policy.
      </p>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        This Privacy Policy applies globally to all users interacting with
        FlipTrade Group through:
      </p>

      <div className="ps-6 pt-4">
        {[
          "Website: www.fliptradegroup.com",
          "Mobile application(s)",
          "Trading platforms",
          "Customer support channels",
          "Marketing and promotional communications",
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

export const Card3 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        3.1 Personal Information
      </p>

      <div className="ps-6 pt-2">
        {[
          "Full legal name",
          "Date of birth",
          "Email address",
          "Phone number",
          "Residential address",
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
        3.2 Identity Verification Data (KYC)
      </p>

      <div className="ps-6 pt-2">
        {[
          "Government-issued identification",
          "Proof of address",
          "Selfie images or live verification",
          "Biometric or facial recognition data",
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
        3.3 Financial Information
      </p>

      <div className="ps-6 pt-2">
        {[
          "Bank account details",
          "Payment card or wallet information",
          "Deposit and withdrawal history",
          "Trading account activity",
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
        3.4 Technical & Device Information
      </p>

      <div className="ps-6 pt-2">
        {[
          "IP address and approximate location",
          "Device and browser information",
          "App usage logs",
          "Cookies and analytics data",
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

export const Card4 = () => {
  return (
    <div className="pt-6">
      <div className="ps-6">
        {[
          "Creating and managing user accounts",
          "KYC / AML verification",
          "Processing deposits, withdrawals, and trades",
          "Providing customer support",
          "Enhancing platform functionality and security",
          "Sending service-related notifications",
          "Preventing fraud and unauthorized access",
          "Complying with legal obligations",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-6">
        Important: We do not sell, rent, or trade your personal data to third
        parties.
      </p>
    </div>
  );
};

export const Card5 = () => {
  return (
    <div className="pt-6">
      <div className="ps-6">
        {[
          "Contractual Necessity",
          "Legal Obligations",
          "Legitimate Interests",
          "User Consent",
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
          "Payment processors and financial institutions",
          "KYC verification providers",
          "Liquidity providers and trading partners",
          "Regulatory authorities",
          "Hosting and analytics providers",
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
      <p className="text-[20px] text-white font-medium">
        Data Security
      </p>

      <div className="ps-6 pt-2">
        {[
          "SSL encryption",
          "Firewalls and intrusion detection",
          "Secure servers",
          "Two-Factor Authentication (2FA)",
          "Role-based access control",
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
        Data Retention
      </p>

      <div className="ps-6 pt-2">
        {[
          "While account remains active",
          "Compliance with financial regulations",
          "Legal and audit purposes",
          "Dispute resolution requirements",
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

export const Card8 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        Your Rights
      </p>

      <div className="ps-6 pt-2">
        {[
          "Access your personal data",
          "Correct inaccurate information",
          "Request deletion",
          "Restrict or object to processing",
          "Withdraw consent",
          "Request data portability",
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
        Cookies Policy
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-2">
        We use cookies and similar technologies to improve functionality,
        analyze traffic, and personalize user experience.
      </p>
    </div>
  );
};

export const Card9 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        Google Play Compliance
      </p>

      <div className="ps-6 pt-2">
        {[
          "Clear disclosure of data collection",
          "Encrypted data transmission",
          "No selling of personal data",
          "Users can request data deletion",
          "Limited data sharing",
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
        Policy Updates
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-2">
        We reserve the right to modify this Privacy Policy at any time. Updates
        will be published on our website and mobile application.
      </p>
    </div>
  );
};

export const Card10 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
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

      <p className="text-base 2xl:text-xl text-white font_ternary pt-6">
        FlipTrade Group Ltd is authorized and regulated by the Financial
        Services Commission (FSC) of Mauritius under License Number
        GB26205911.
      </p>
    </div>
  );
};

const policyData = [
  {
    id: 1,
    title: "Introduction",
    icon: introblack,
    activeIcon: introwhite,
    component: Card1,
  },
  {
    id: 2,
    title: "Scope of Policy",
    icon: scopeblack,
    activeIcon: scopewhite,
    component: Card2,
  },
  {
    id: 3,
    title: "Information We Collect",
    icon: collectblack,
    activeIcon: collectwhite,
    component: Card3,
  },
  {
    id: 4,
    title: "Purpose of Data Processing",
    icon: processblack,
    activeIcon: processwhite,
    component: Card4,
  },
  {
    id: 5,
    title: "Legal Basis for Processing",
    icon: legalblack,
    activeIcon: legalwhite,
    component: Card5,
  },
  {
    id: 6,
    title: "Sharing of Data",
    icon: shareblack,
    activeIcon: sharewhite,
    component: Card6,
  },
  {
    id: 7,
    title: "Security & Retention",
    icon: securityblack,
    activeIcon: securitywhite,
    component: Card7,
  },
  {
    id: 8,
    title: "Cookies & User Rights",
    icon: cookieblack,
    activeIcon: cookiewhite,
    component: Card8,
  },
  {
    id: 9,
    title: "Compliance & Updates",
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

const Polices = () => {
  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;

        const rect = ref.getBoundingClientRect();

        if (rect.top >= 0 && rect.top <= 100) {
          setActiveSection(policyData[index].id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-theme">
      <div className="inn_container  pb-12 xl:pb-24">
        <div className="text-center mt-5 lg:mt-16">
          <Title title="Privacy Policy" color="text-white" ish1={true} />
        </div>

        <div className="flex flex-col xl:flex-row xl:pt-14 gap-4 relative">
          
          {/* Desktop Sidebar */}
          <div className="hidden xl:block xl:w-[30%] 2xl:w-[25%]">
            <div className="bg-primary xl:max-w-[380px] p-6 rounded-3xl sticky top-10">
              <p className="text-[30px] font-medium text-white">
                Privacy Policy
              </p>

              <div className="pt-4 grid grid-cols-1 gap-3">
                {policyData.map((item, index) => (
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

            {/* Mobile Toggle */}
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

              <div
                className={`${
                  toggle ? "block" : "hidden"
                } absolute top-[60px] left-0 w-full`}
              >
                <div className="bg-primary p-6 rounded-3xl">
                  <div className="grid grid-cols-1 gap-3">
                    {policyData.map((item, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          sectionRefs.current[index]?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });

                          setToggle(false);
                        }}
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
            </div>

            {/* Sections */}
            <div>
              {policyData.map((item, index) => {
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

export default Polices;


