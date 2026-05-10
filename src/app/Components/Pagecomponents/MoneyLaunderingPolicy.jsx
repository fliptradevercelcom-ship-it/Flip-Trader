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
      <p className="text-base 2xl:text-xl text-white">
        FlipTrade Group Ltd (“Company”, “we”, “us”, “our”), incorporated under
        Certificate of Incorporation No. 232118, operates through its website
        www.fliptradegroup.com and is authorised and regulated by the Financial
        Services Commission (“FSC”) of Mauritius under Licence No. GB26205911.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        1. Introduction
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        The Company is fully committed to complying with all applicable laws and
        regulations relating to the prevention of money laundering and terrorist
        financing. These obligations are enforced in accordance with the
        regulatory framework of Mauritius and applicable international
        standards.
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Money laundering involves disguising the origin of funds derived from
        criminal activities to make them appear legitimate. It is a global
        concern that facilitates illegal operations, including terrorism
        financing.
      </p>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        2. Our Commitment
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        FlipTrade Group maintains a strict Anti-Money Laundering (AML) and
        Counter-Terrorist Financing (CTF) framework designed to prevent misuse
        of its services. The Company is committed to:
      </p>

      <div className="ps-6 pt-4">
        {[
          "Preventing the use of its platform for unlawful financial activities",
          "Ensuring transparency in all client transactions",
          "Fully cooperating with regulatory and law enforcement authorities",
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
        3. AML Measures and Procedures
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        To meet its regulatory obligations, the Company implements the following
        measures:
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        3.1 Client Identification (KYC)
      </p>

      <div className="ps-6 pt-4">
        {[
          "All clients must complete identity verification prior to account activation",
          "The Company may request valid identification documents such as:",
          "Government-issued ID (Passport, National ID, Driving Licence)",
          "Proof of address (Utility bill, Bank statement)",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>

      <p className="text-[20px] text-white font-medium pt-8">
        3.2 Transaction Monitoring
      </p>

      <div className="ps-6 pt-4">
        {[
          "Continuous monitoring of client transactions to detect unusual or suspicious activity",
          "Identification of patterns that may indicate money laundering or fraud",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>

      <p className="text-[20px] text-white font-medium pt-8">
        3.3 Record Keeping
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        The Company maintains all client and transaction records for a legally
        required period after termination of the business relationship.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        3.4 Reporting Obligations
      </p>

      <div className="ps-6 pt-4">
        {[
          "Any suspicious transactions or activities will be reported to relevant regulatory authorities without prior notice to the client",
          "The Company strictly adheres to “no tipping-off” requirements",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>

      <p className="text-[20px] text-white font-medium pt-8">
        3.5 Staff Training
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Employees receive ongoing AML/CTF training to identify and handle
        suspicious activities effectively.
      </p>
    </div>
  );
};

export const Card4 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        4. Verification and Due Diligence
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        The Company reserves the right to:
      </p>

      <div className="ps-6 pt-4">
        {[
          "Request additional documentation at any stage of the business relationship",
          "Verify the source of funds before processing deposits or withdrawals",
          "Delay or refuse transactions until verification is completed",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>

      <p className="text-base 2xl:text-xl text-white pt-6">
        Clients acknowledge that all information provided may be shared with
        competent authorities where required by law.
      </p>
    </div>
  );
};

export const Card5 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        5. Refusal of Service
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        FlipTrade Group reserves the right to refuse, suspend, or terminate
        services in cases where:
      </p>

      <div className="ps-6 pt-4">
        {[
          "There is suspicion of money laundering or illegal activity",
          "Provided information is false, misleading, or incomplete",
          "Transactions appear to be linked to criminal conduct",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>

      <p className="text-base 2xl:text-xl text-white pt-6">
        The Company may also block accounts or withhold funds where required
        under applicable laws.
      </p>
    </div>
  );
};

export const Card6 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        6. Legal Disclosure
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        The Company is legally obligated to report suspicious activities and is
        prohibited from informing clients if such reports have been filed. Any
        attempt to misuse the platform may result in:
      </p>

      <div className="ps-6 pt-4">
        {[
          "Immediate account suspension",
          "Reporting to authorities",
          "Legal action and possible criminal prosecution",
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
        7. Data Sharing and Transparency
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Clients should be aware that their information may be made available to:
      </p>

      <div className="ps-6 pt-4">
        {[
          "Regulatory authorities in Mauritius",
          "Authorities in the country of origin of funds",
          "Authorities in the destination country of withdrawals",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>

      <p className="text-base 2xl:text-xl text-white pt-6">
        This is done strictly in accordance with legal and regulatory
        requirements.
      </p>
    </div>
  );
};

export const Card8 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        8. Policy Updates
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        The Company reserves the right to amend or update this Money Laundering
        Prevention Policy at any time without prior notice, in line with
        regulatory changes or internal policy enhancements.
      </p>
    </div>
  );
};

export const Card9 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        9. Non-Contractual Nature
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        This policy is provided for informational and compliance purposes only.
        It does not form part of the Company’s Terms and Conditions and does not
        create contractual obligations beyond those required by law.
      </p>
    </div>
  );
};

export const Card10 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        10. Contact Information
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        For any questions regarding this policy, please contact:
      </p>

      <p className="text-base 2xl:text-xl text-white pt-6">
        Compliance Department
      </p>

      <p className="text-base 2xl:text-xl text-white pt-2">
        FlipTrade Group
      </p>

      <div className="pt-4">
        <a
          href="https://www.fliptradegroup.com"
          target="_blank"
          className="text-white underline text-base 2xl:text-xl"
        >
          www.fliptradegroup.com
        </a>
      </div>

      <div className="pt-4">
        <a
          href="mailto:compliance@fliptradegroup.com"
          className="text-white underline text-base 2xl:text-xl"
        >
          compliance@fliptradegroup.com
        </a>
      </div>
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
    title: "Our Commitment",
    icon: scopeblack,
    activeIcon: scopewhite,
    component: Card2,
  },
  {
    id: 3,
    title: "AML Measures & Procedures",
    icon: collectblack,
    activeIcon: collectwhite,
    component: Card3,
  },
  {
    id: 4,
    title: "Verification & Due Diligence",
    icon: processblack,
    activeIcon: processwhite,
    component: Card4,
  },
  {
    id: 5,
    title: "Refusal of Service",
    icon: legalblack,
    activeIcon: legalwhite,
    component: Card5,
  },
  {
    id: 6,
    title: "Legal Disclosure",
    icon: shareblack,
    activeIcon: sharewhite,
    component: Card6,
  },
  {
    id: 7,
    title: "Data Sharing & Transparency",
    icon: securityblack,
    activeIcon: securitywhite,
    component: Card7,
  },
  {
    id: 8,
    title: "Policy Updates",
    icon: cookieblack,
    activeIcon: cookiewhite,
    component: Card8,
  },
  {
    id: 9,
    title: "Non-Contractual Nature",
    icon: otherblack,
    activeIcon: otherwhite,
    component: Card9,
  },
  {
    id: 10,
    title: "Contact Information",
    icon: contactblack,
    activeIcon: contactwhite,
    component: Card10,
  },
];

const MoneyLaunderingPolicy = () => {
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
      <div className="inn_container pb-12 xl:pb-24">
        <div className="text-center mt-5 md:mt-16">
          <Title
            title="Money Laundering Prevention Policy"
            color="text-white"
            ish1={true}
          />
        </div>

        <div className="flex flex-col xl:flex-row xl:pt-14 gap-4 relative">

          {/* Desktop Sidebar */}
          <div className="hidden xl:block xl:w-[30%] 2xl:w-[25%]">
            <div className="bg-primary xl:max-w-[380px] p-6 rounded-3xl sticky top-10">
              <p className="text-[30px] font-medium text-white">
                AML Policy
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

export default MoneyLaunderingPolicy;