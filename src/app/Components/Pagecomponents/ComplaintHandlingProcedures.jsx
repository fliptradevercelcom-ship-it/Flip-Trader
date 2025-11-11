"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Title from "../Uiux/Title";

import usericon from "../../../../public/icons/usericon.svg";
import Regulation from "../../../../public/icons/Regulation.svg";
import usericonwhite from "../../../../public/icons/usericonwhite.svg";
import Regulationwhite from "../../../../public/icons/Regulationwhite.svg";
import faqicon from "../../../../public/icons/faq.svg";
import pageicon from "../../../../public/icons/page.svg";
import pageiconblack from "../../../../public/icons/pageblack.svg";
import securityblack from "../../../../public/icons/securityblack.svg";
import securitywhite from "../../../../public/icons/securitywhite.svg";
import Disclosurewhite from "../../../../public/icons/Disclosurewhite.svg";
import Disclosureblack from "../../../../public/icons/Disclosureblack.svg";
import lawblack from "../../../../public/icons/lawblack.svg";
import lawwhite from "../../../../public/icons/lawwhite.svg";
import contactblack from "../../../../public/icons/contactblack.svg";
import contactwhite from "../../../../public/icons/contactwhite.svg";

const sections = [
  { id: 1, faqtitle: "Complaint Handling Procedures",             faqicon: pageiconblack,   faqiconwhite: pageicon,        sectioncompoent: Card1 },
  { id: 2, faqtitle: "How to Submit a Complaint?",                 faqicon: usericon,        faqiconwhite: usericonwhite,   sectioncompoent: Card2 },
  { id: 3, faqtitle: "Information Required in a Complaint",        faqicon: Regulation,      faqiconwhite: Regulationwhite, sectioncompoent: Card3 },
  { id: 4, faqtitle: "Complaint Acknowledgment and Reference Number", faqicon: securityblack, faqiconwhite: securitywhite,   sectioncompoent: Card4 },
  { id: 5, faqtitle: "Investigation and Resolution Process",       faqicon: Disclosureblack, faqiconwhite: Disclosurewhite, sectioncompoent: Card5 },
  { id: 6, faqtitle: "Final Response and Escalation",              faqicon: lawblack,        faqiconwhite: lawwhite,        sectioncompoent: Card6 },
  { id: 7, faqtitle: "Commitment to Fairness",                     faqicon: pageiconblack,   faqiconwhite: pageicon,        sectioncompoent: Card7 },
  { id: 8, faqtitle: "Contact Information",                        faqicon: contactblack,    faqiconwhite: contactwhite,    sectioncompoent: Card8 },
];

const ComplaintHandlingProcedures = () => {
  /** @type {React.MutableRefObject<(HTMLDivElement | null)[]>} */
  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(null);
  const [faqtogle, setFaqTogle] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 50) setActiveSection(sections[index].id);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-theme">
      <div className="inn_container pt-12 md:pt-18 lg:pt-28 xl:pt-32 2xl:pt-40 pb-12 xl:pb-24">
        <div className="text-center mt-16">
          <Title title="Complaint Handling Procedures" color="text-white" ish1={true} />
        </div>

        <div className="flex flex-col xl:flex-row xl:pt-14 gap-4 relative">
          {/* Sidebar */}
          <div className="hidden xl:block xl:w-[30%] 2xl:w-[25%]">
            <div className="bg-primary xl:max-w-[380px] p-6 rounded-3xl sticky top-10">
              <p className="text-[30px] font-medium text-white">Complaint Handling</p>
              <div className="pt-4 grid grid-cols-2 xl:grid-cols-1 gap-3">
                {sections.map((s, i) => (
                  <div
                    key={s.id}
                    className={`p-4 rounded-2xl mt-4 cursor-pointer transition-all duration-300 ${
                      activeSection === s.id ? "bg-white" : "bg-[#4C1BE3]"
                    }`}
                    onClick={() =>
                      sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={activeSection === s.id ? s.faqicon : s.faqiconwhite}
                        alt="icon"
                        width={24}
                        height={24}
                        className="max-w-[24px]"
                      />
                      <p className={`list_text font-medium ${activeSection === s.id ? "text-black" : "text-white"}`}>
                        {s.faqtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="xl:w-[70%] 2xl:w-[75%]">
            {/* Mobile categories */}
            <div className="block xl:hidden sticky top-[50px] z-10">
              <button
                className="bg-primary w-max p-3 rounded-full"
                onClick={() => setFaqTogle(v => !v)}
                aria-label="Toggle sections"
              >
                <Image src={faqicon} alt="faqicon" width={32} height={32} className="max-w-[32px]" />
              </button>

              {faqtogle && (
                <div className="absolute top-[57px] left-0 w-full md:w-[80%]">
                  <div className="bg-primary p-6 rounded-3xl">
                    <p className="text-[24px] font-medium text-white">Sections</p>
                    <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {sections.map((s, i) => (
                        <div
                          key={s.id}
                          className={`p-4 rounded-2xl mt-4 cursor-pointer transition-all duration-300 ${
                            activeSection === s.id ? "bg-white" : "bg-[#4C1BE3]"
                          }`}
                          onClick={() => {
                            sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
                            setFaqTogle(false);
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <Image
                              src={activeSection === s.id ? s.faqicon : s.faqiconwhite}
                              alt="icon"
                              width={24}
                              height={24}
                              className="max-w-[24px]"
                            />
                            <p className={`list_text font-medium ${activeSection === s.id ? "text-black" : "text-white"}`}>
                              {s.faqtitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sections */}
            <div>
              {sections.map((s, i) => {
                const Section = s.sectioncompoent;
                return (
                  <div
                    key={s.id}
                    ref={(el) => (sectionRefs.current[i] = el)}
                    className="p-4 shadow-[1px_1px_0px_0px_#fff] rounded-3xl mt-12"
                  >
                    <div className="flex items-center gap-3 max-w-[900px] 2xl:max-w-7xl m-auto">
                      <Image src={s.faqiconwhite} alt="icon" width={34} height={34} className="max-w-[34px]" />
                      <p className="text-xl md:text-2xl xl:text-[30px] font-medium text-white">{s.faqtitle}</p>
                    </div>
                    <div><Section /></div>
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

export default ComplaintHandlingProcedures;

/* =======================
   Cards (verbatim content)
======================= */

export function Card1() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        At FlipTrade Group, client satisfaction and trust are our highest priorities. We are committed to maintaining a transparent, fair, and effective process for handling all client complaints promptly and professionally.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        This Complaint Handling Procedures document outlines how clients can raise concerns and how FlipTrade Group will manage, investigate, and resolve them.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        This policy forms an integral part of the Client Agreement, Terms & Conditions, and all other company policies. Any capitalized term not defined herein shall carry the meaning given in the Client Agreement.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        FlipTrade Group reserves the right to amend this policy at any time. The revised version will become effective once published on our official website. Clients are advised to review this page regularly for updates.
      </p>
    </div>
  );
}

export function Card2() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        If you wish to file a complaint, you may do so through one of the following official channels:
      </p>
      <ul className="ps-6 list-disc">
        <li className="text-base 2xl:text-lg text-white pt-2">Submit a ticket through the Client Portal, or</li>
        <li className="text-base 2xl:text-lg text-white pt-2">
          Send an email to <a href="mailto:support@fliptradegroup.com" className="text-primary">support@fliptradegroup.com</a>, providing a detailed description of the issue, the date and time it occurred, and any relevant supporting documentation.
        </li>
      </ul>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        These are the only official methods to lodge a complaint and receive an accurate response. There is no need to visit our offices or contact employees directly.
      </p>
    </div>
  );
}

export function Card3() {
  const bullets = [
    "Your full name and surname",
    "Your trading account number",
    "Transaction numbers related to the issue (if applicable)",
    "The date and time when the incident occurred",
    "A clear description of the issue",
    "Any supporting documents or evidence (screenshots, statements, etc.)",
  ];
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        To ensure your complaint is processed efficiently, please include the following details:
      </p>
      <ul className="ps-6 list-disc">
        {bullets.map((b) => (
          <li key={b} className="text-base 2xl:text-lg text-white pt-2">{b}</li>
        ))}
      </ul>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        Note: Please refrain from using offensive or inappropriate language in any correspondence with FlipTrade Group or its employees. Such communication will not be accepted as a valid complaint.
      </p>
    </div>
  );
}

export function Card4() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        Upon receipt of a valid complaint, FlipTrade Group will:
      </p>
      <ul className="ps-6 list-disc">
        <li className="text-base 2xl:text-lg text-white pt-2">Send a written acknowledgment email to the client within two (2) working days.</li>
        <li className="text-base 2xl:text-lg text-white pt-2">Provide a unique reference number (URN) that must be used for all future communication regarding the same complaint.</li>
      </ul>
    </div>
  );
}

export function Card5() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        FlipTrade Group will review and investigate each complaint thoroughly, considering all relevant facts and evidence provided by the client.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        Our goal is to reach a final resolution within one (1) month of receiving the initial complaint.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        During the investigation, the company may:
      </p>
      <ul className="ps-6 list-disc">
        <li className="text-base 2xl:text-lg text-white pt-2">Contact the client for additional information or clarification, and</li>
        <li className="text-base 2xl:text-lg text-white pt-2">Provide updates on the progress of the investigation as necessary.</li>
      </ul>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        If a resolution cannot be achieved within the initial one-month period, the client will be notified of:
      </p>
      <ul className="ps-6 list-disc">
        <li className="text-base 2xl:text-lg text-white pt-2">The reason for the delay, and</li>
        <li className="text-base 2xl:text-lg text-white pt-2">The expected timeline for completing the investigation (which shall not exceed an additional one month).</li>
      </ul>
    </div>
  );
}

export function Card6() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        FlipTrade Group strives to resolve all matters in a fair, transparent, and amicable manner.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        If the client remains dissatisfied with the company’s final decision or proposed resolution, they may escalate the complaint to the relevant financial regulatory authority within four (4) months of receiving FlipTrade Group’s final response, but not before the final decision has been issued.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        Details of the appropriate regulatory body will be provided upon request.
      </p>
    </div>
  );
}

export function Card7() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        FlipTrade Group is dedicated to maintaining high standards of integrity and professionalism in all interactions. Every complaint is handled objectively, with respect for our clients’ rights and concerns.
      </p>
    </div>
  );
}

export function Card8() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        For complaint submissions or follow-ups, please contact us via:
      </p>
      <p className="pt-2 text-base 2xl:text-xl text-white">
        <a href="mailto:support@fliptradegroup.com" className="text-primary">support@fliptradegroup.com</a>
      </p>
    </div>
  );
}
