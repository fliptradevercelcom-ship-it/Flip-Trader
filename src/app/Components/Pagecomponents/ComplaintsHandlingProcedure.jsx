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
        <strong>FlipTrade Group Ltd</strong> (“Company”, “we”, “us”, “our”),
        incorporated under Certificate of Incorporation No. 232118, operates
        through its website www.fliptradegroup.com and is authorised and
        regulated by the Financial Services Commission (“FSC”) of Mauritius
        under Licence No. GB26205911.
      </p>

      <br />

      <p className="text-base 2xl:text-xl text-white font_ternary">
        The Company is committed to providing high-quality services to all its
        clients. As part of this commitment, the Company has established and
        maintains this Complaints Handling Procedure (the “Procedure”), which
        ensures that all complaints are handled in a fair, transparent, and
        timely manner.
      </p>

      <br />

      <p className="text-base 2xl:text-xl text-white font_ternary">
        This Procedure outlines:
      </p>

      <div className="ps-6 pt-4">
        {[
          "How clients can submit complaints",
          "The process for handling complaints",
          "Expected timelines for resolution",
          "Record-keeping and monitoring practices",
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
        The Company maintains a record of all complaints received and the
        actions taken to resolve them.
      </p>

      <br />

      <p className="text-base 2xl:text-xl text-white font_ternary">
        A Compliance Officer (“CO”) has been appointed to oversee and manage
        complaints efficiently and impartially.
      </p>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        This Procedure applies to all complaints received from clients or
        potential clients in relation to the Company’s services.
      </p>
    </div>
  );
};

export const Card3 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        3.1 Commitment to Clients
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-3">
        We aim to provide prompt, professional, and transparent service to all
        clients. We value feedback and continuously strive to improve our
        services.
      </p>

      <p className="text-[20px] text-white font-medium pt-6">
        3.2 Continuous Improvement
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-3">
        We acknowledge that issues may arise from time to time. Complaints are
        treated as an opportunity to:
      </p>

      <div className="ps-6 pt-4">
        {[
          "Address concerns promptly",
          "Improve internal processes",
          "Prevent recurrence of similar issues",
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
        3.3 Transparency and Fairness
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-3">
        We maintain clear and effective procedures for handling complaints in
        accordance with applicable laws and regulations.
      </p>
    </div>
  );
};

export const Card4 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        A complaint is any written expression of dissatisfaction submitted by a
        client regarding the Company’s services, including but not limited to:
      </p>

      <div className="ps-6 pt-4">
        {[
          "Issues related to trading accounts, transactions, or contracts",
          "Concerns regarding execution of orders or pricing",
          "Dissatisfaction with responses, delays, or service quality",
          "Requests for information that were denied or inadequately addressed",
          "Any perceived breach of the Company’s Terms, Policies, or obligations",
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
        5.1 Submission Method
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-3">
        Clients may submit complaints via email to:
      </p>

      <div className="pt-4">
        <a
          href="mailto:complaints@fliptradegroup.com"
          className="text-white underline text-base 2xl:text-xl"
        >
          complaints@fliptradegroup.com
        </a>
      </div>

      <p className="text-[20px] text-white font-medium pt-6">
        5.2 Timeframe
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-3">
        Complaints should be submitted as soon as possible, preferably within
        three (3) business days from the date of the incident.
      </p>

      <p className="text-[20px] text-white font-medium pt-6">
        5.3 Required Information
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-3">
        To ensure efficient handling, clients should provide:
      </p>

      <div className="ps-6 pt-4">
        {[
          "Trading Account Number (if applicable)",
          "Date of the incident",
          "Description of the issue",
          "Disputed amount (if any)",
          "Supporting documents or evidence",
          "Any additional relevant information",
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
        5.4 Acknowledgment
      </p>

      <div className="ps-6 pt-4">
        {[
          "A written acknowledgment will be sent within five (5) business days",
          "A unique complaint reference number will be provided",
          "Details of this Procedure will be shared if requested",
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
      <p className="text-[20px] text-white font-medium">
        6.1 Investigation
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-3">
        Upon receiving a complaint, the Company will:
      </p>

      <div className="ps-6 pt-4">
        {[
          "Review all relevant information and evidence",
          "Conduct an impartial investigation",
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
        6.2 Resolution Timeline
      </p>

      <div className="ps-6 pt-4">
        {[
          "The Company aims to resolve complaints within fifteen (15) business days",
          "If more time is required, the client will be notified with reasons for the delay",
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
        6.3 Final Response
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-3">
        A final response will be provided within sixty (60) business days at the
        latest.
      </p>

      <p className="text-[20px] text-white font-medium pt-6">
        6.4 Escalation
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-3">
        If the client is not satisfied with the final response, they may
        escalate the complaint to the Financial Services Commission (FSC) of
        Mauritius:
      </p>

      <div className="pt-4">
        <p className="text-white text-base 2xl:text-xl">
          FSC House, 54 Cybercity, Ebene, Mauritius
        </p>

        <p className="text-white text-base 2xl:text-xl pt-2">
          +(230) 403 7000
        </p>

        <a
          href="https://www.fscmauritius.org"
          target="_blank"
          className="text-white underline text-base 2xl:text-xl pt-2 inline-block"
        >
          https://www.fscmauritius.org
        </a>
      </div>
    </div>
  );
};

export const Card7 = () => {
  return (
    <div className="pt-6">
      <div className="ps-6">
        {[
          "The Company maintains a complaints register with full details of each case",
          "All complaints are monitored to ensure timely resolution",
          "Clients may be asked to provide additional information where necessary",
          "All records are kept securely and confidentially for a minimum of seven (7) years",
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
      <p className="text-base 2xl:text-xl text-white font_ternary">
        This Complaints Handling Procedure does not apply to any outstanding
        debts owed by the client to the Company.
      </p>

      <br />

      <p className="text-base 2xl:text-xl text-white font_ternary">
        The Company reserves the right to take legal action for the recovery of
        any unpaid amounts.
      </p>
    </div>
  );
};

export const Card9 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        Nothing in this Procedure limits the right of either party to seek:
      </p>

      <div className="ps-6 pt-4">
        {[
          "Interim relief",
          "Injunctive relief",
          "Any other legal remedies available under applicable law",
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

      <p className="text-base 2xl:text-xl text-white font_ternary pt-3">
        The Company reserves the right to amend or update this Procedure at any
        time to reflect regulatory changes or operational improvements.
      </p>
    </div>
  );
};

export const Card10 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        For any queries regarding this Procedure, please contact:
      </p>

      <br />

      <p className="text-base 2xl:text-xl text-white">
        Compliance Department
      </p>

      <p className="pt-2 text-base 2xl:text-xl text-white">
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
          href="mailto:complaints@fliptradegroup.com"
          className="text-white underline text-base 2xl:text-xl"
        >
          complaints@fliptradegroup.com
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
    title: "Scope of the Procedure",
    icon: scopeblack,
    activeIcon: scopewhite,
    component: Card2,
  },
  {
    id: 3,
    title: "Our Culture",
    icon: collectblack,
    activeIcon: collectwhite,
    component: Card3,
  },
  {
    id: 4,
    title: "Definition of a Complaint",
    icon: processblack,
    activeIcon: processwhite,
    component: Card4,
  },
  {
    id: 5,
    title: "How to Make a Complaint",
    icon: legalblack,
    activeIcon: legalwhite,
    component: Card5,
  },
  {
    id: 6,
    title: "How We Handle Complaints",
    icon: shareblack,
    activeIcon: sharewhite,
    component: Card6,
  },
  {
    id: 7,
    title: "Monitoring of Complaints",
    icon: securityblack,
    activeIcon: securitywhite,
    component: Card7,
  },
  {
    id: 8,
    title: "Recovery of Debts",
    icon: cookieblack,
    activeIcon: cookiewhite,
    component: Card8,
  },
  {
    id: 9,
    title: "Relief & Policy Updates",
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

const ComplaintsHandlingProcedure = () => {
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
            title="Complaints Handling Procedure"
            color="text-white"
            ish1={true}
          />
        </div>

        <div className="flex flex-col xl:flex-row xl:pt-14 gap-4 relative">
          {/* Desktop Sidebar */}
          <div className="hidden xl:block xl:w-[30%] 2xl:w-[25%]">
            <div className="bg-primary xl:max-w-[380px] p-6 rounded-3xl sticky top-10">
              <p className="text-[30px] font-medium text-white">
                Complaints Handling
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

export default ComplaintsHandlingProcedure;