"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Title from "../Uiux/Title";

// Reuse your existing icon set
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
import Cookiesblack from "../../../../public/icons/Cookiesblack.svg";
import Cookieswhite from "../../../../public/icons/Cookieswhite.svg";
import Securityb from "../../../../public/icons/Securityb.svg";
import Securityw from "../../../../public/icons/Securityw.svg";
import otherwhite from "../../../../public/icons/otherwhite.svg";
import otherblack from "../../../../public/icons/otherblack.svg";
import contactblack from "../../../../public/icons/contactblack.svg";
import contactwhite from "../../../../public/icons/contactwhite.svg";

/* ================================================
   Sections list (same structure as your other pages)
================================================= */
const amlSections = [
  { id: 1,  faqtitle: "Purpose",                              faqicon: pageiconblack,   faqiconwhite: pageicon,        sectioncompoent: AMLCard1 },
  { id: 2,  faqtitle: "AML Requirements",                     faqicon: usericon,        faqiconwhite: usericonwhite,   sectioncompoent: AMLCard2 },
  { id: 3,  faqtitle: "What is Money Laundering?",            faqicon: Regulation,      faqiconwhite: Regulationwhite, sectioncompoent: AMLCard3 },
  { id: 4,  faqtitle: "Stages of Money Laundering",           faqicon: securityblack,   faqiconwhite: securitywhite,   sectioncompoent: AMLCard4 },
  { id: 5,  faqtitle: "Suspicious Activity",                  faqicon: Disclosureblack, faqiconwhite: Disclosurewhite, sectioncompoent: AMLCard5 },
  { id: 6,  faqtitle: "Account Opening & Due Diligence",      faqicon: lawblack,        faqiconwhite: lawwhite,        sectioncompoent: AMLCard6 },
  { id: 7,  faqtitle: "Training",                             faqicon: Cookiesblack,    faqiconwhite: Cookieswhite,    sectioncompoent: AMLCard7 },
  { id: 8,  faqtitle: "Record Keeping",                       faqicon: Securityb,       faqiconwhite: Securityw,       sectioncompoent: AMLCard8 },
  { id: 9,  faqtitle: "Terrorist Financing",                  faqicon: otherblack,      faqiconwhite: otherwhite,      sectioncompoent: AMLCard9 },
  { id: 10, faqtitle: "Fraud – Intro & Prevention",           faqicon: pageiconblack,   faqiconwhite: pageicon,        sectioncompoent: AMLCard10 },
  { id: 11, faqtitle: "Fraud – Detection & Reporting",        faqicon: Regulation,      faqiconwhite: Regulationwhite, sectioncompoent: AMLCard11 },
  { id: 12, faqtitle: "Anti-Bribery & Corruption",            faqicon: securityblack,   faqiconwhite: securitywhite,   sectioncompoent: AMLCard12 },
  { id: 13, faqtitle: "Market Abuse – Intro & Examples",      faqicon: Disclosureblack, faqiconwhite: Disclosurewhite, sectioncompoent: AMLCard13 },
  { id: 14, faqtitle: "Market Abuse – Indicators & Reporting",faqicon: lawblack,        faqiconwhite: lawwhite,        sectioncompoent: AMLCard14 },
  { id: 15, faqtitle: "Responsibilities",                     faqicon: Cookiesblack,    faqiconwhite: Cookieswhite,    sectioncompoent: AMLCard15 },
  { id: 16, faqtitle: "Ongoing Monitoring",                   faqicon: Securityb,       faqiconwhite: Securityw,       sectioncompoent: AMLCard16 },
  { id: 17, faqtitle: "Declaration",                          faqicon: contactblack,    faqiconwhite: contactwhite,    sectioncompoent: AMLCard17 },
];

const Amlctfpolicy = () => {
  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(null);
  const [faqtogle, setFaqTogle] = useState(false); // mobile drawer

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 50) setActiveSection(amlSections[index].id);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-theme">
      <div className="inn_container pt-12 md:pt-18 lg:pt-28 xl:pt-32 2xl:pt-40 pb-12 xl:pb-24">
        <div className="text-center mt-16">
          <Title title="AML & CTF Policy" color="text-white" ish1={true} />
        </div>

        <div className="flex flex-col xl:flex-row xl:pt-14 gap-4 relative">
          {/* Sidebar (desktop) */}
          <div className="hidden xl:block xl:w-[30%] 2xl:w-[25%]">
            <div className="bg-primary xl:max-w-[380px] p-6 rounded-3xl sticky top-10">
              <p className="text-[30px] font-medium text-white">AML & CTF Policy</p>
              <div className="pt-4 grid grid-cols-2 xl:grid-cols-1 gap-3">
                {amlSections.map((data, index) => (
                  <div
                    key={data.id}
                    className={`p-4 rounded-2xl mt-4 cursor-pointer transition-all duration-300 ${
                      activeSection === data.id ? "bg-white" : "bg-[#4C1BE3]"
                    }`}
                    onClick={() =>
                      sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={activeSection === data.id ? data.faqicon : data.faqiconwhite}
                        alt="icon"
                        width={24}
                        height={24}
                        className="max-w-[24px]"
                      />
                      <p className={`list_text font-medium ${activeSection === data.id ? "text-black" : "text-white"}`}>
                        {data.faqtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content column */}
          <div className="xl:w-[70%] 2xl:w-[75%]">
            {/* Mobile toggle */}
            <div className="block xl:hidden sticky top-[50px] z-10">
              <button className="bg-primary w-max p-3 rounded-full" onClick={() => setFaqTogle(v => !v)} aria-label="Toggle sections">
                <Image src={faqicon} alt="faqicon" width={32} height={32} className="max-w-[32px]" />
              </button>

              {faqtogle && (
                <div className="absolute top-[57px] left-0 w-full md:w-[80%]">
                  <div className="bg-primary p-6 rounded-3xl">
                    <p className="text-[24px] font-medium text-white">Sections</p>
                    <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {amlSections.map((data, index) => (
                        <div
                          key={data.id}
                          className={`p-4 rounded-2xl mt-4 cursor-pointer transition-all duration-300 ${
                            activeSection === data.id ? "bg-white" : "bg-[#4C1BE3]"
                          }`}
                          onClick={() => {
                            sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
                            setFaqTogle(false);
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <Image
                              src={activeSection === data.id ? data.faqicon : data.faqiconwhite}
                              alt="icon"
                              width={24}
                              height={24}
                              className="max-w-[24px]"
                            />
                            <p className={`list_text font-medium ${activeSection === data.id ? "text-black" : "text-white"}`}>
                              {data.faqtitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Section cards */}
            <div>
              {amlSections.map((data, index) => {
                const Section = data.sectioncompoent;
                return (
                  <div key={data.id} ref={el => (sectionRefs.current[index] = el)} className="p-4 shadow-[1px_1px_0px_0px_#fff] rounded-3xl mt-12">
                    <div className="flex items-center gap-3 max-w-[900px] 2xl:max-w-7xl m-auto">
                      <Image src={data.faqiconwhite} alt="icon" width={34} height={34} className="max-w-[34px]" />
                      <p className="text-xl md:text-2xl xl:text-[30px] font-medium text-white">{data.faqtitle}</p>
                    </div>
                    <div>{Section && <Section />}</div>
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

export default Amlctfpolicy;

/* ================================================
   Cards – content mapped from your policy text
================================================= */

export function AMLCard1() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        The purpose of this AML & CTF Policy is to ensure that FlipTrade Group and its employees comply
        with legal and regulatory obligations to prevent money laundering, terrorist financing, and financial crime.
        It promotes staff awareness and defines internal controls to detect and deter such activities.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        Being used in connection with financial crime exposes a firm to reputational, legal, and regulatory risk.
        This Policy supports our Code of Conduct (integrity, transparency, compliance) and is approved by the Board.
        It is reviewed annually or as needed for effectiveness.
      </p>
      <div className="ps-6 pt-4">
        {[
          "FlipTrade Group’s KYC & Due Diligence Procedures",
          "Client Onboarding & Risk Assessment (incl. PEPs & Sanctions)",
          "Compliance Monitoring Procedures",
        ].map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>
        ))}
      </div>
    </div>
  );
}

export function AMLCard2() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        FlipTrade Group operates globally and maintains strict AML standards aligned with international laws.
        We implement effective measures to prevent, detect, and report any instances of money laundering.
      </p>
    </div>
  );
}

export function AMLCard3() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        Money laundering is the process of disguising the origins of illegally obtained funds to make them appear legitimate.
        Financial institutions are often targeted, so employees must remain vigilant.
      </p>
    </div>
  );
}

export function AMLCard4() {
  const items = [
    "Placement: Introducing illicit funds into the financial system (e.g., large cash deposits).",
    "Layering: Moving funds through multiple transactions to obscure origin (e.g., transfers across accounts/jurisdictions/assets).",
    "Integration: Reintroducing laundered funds as apparently legitimate assets.",
  ];
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">The three stages typically are:</p>
      <div className="ps-6 pt-2">
        {items.map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>
        ))}
      </div>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        FlipTrade Group is most exposed at the layering stage due to trading and fund transfer activities.
      </p>
    </div>
  );
}

export function AMLCard5() {
  const redFlags = [
    "Deposits inconsistent with known trading activity or profile",
    "Third-party payments or unexplained withdrawals",
    "Unusual trading patterns or excessive wire transfers",
    "Reluctance to provide identification or proof of funds",
    "Activity from/to high-risk jurisdictions",
  ];
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">Employees must remain alert to suspicious behavior:</p>
      <div className="ps-6 pt-2">
        {redFlags.map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>
        ))}
      </div>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        All suspicious activities must be reported immediately to the Head of Compliance (AML/CTF Reporting Officer),
        who determines if escalation to authorities/regulators is required.
      </p>
    </div>
  );
}

export function AMLCard6() {
  const points = [
    "Risk-based approach to customer verification (individual & corporate).",
    "Identify & verify clients using reliable, independent documentation and sources.",
    "Screen all clients against PEP and Sanctions lists; any positive matches are referred to Compliance before approval.",
  ];
  return (
    <div className="pt-6">
      <div className="ps-6">
        {points.map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>
        ))}
      </div>
    </div>
  );
}

export function AMLCard7() {
  const points = [
    "Mandatory AML & financial-crime training during onboarding.",
    "Regular refresher courses to maintain awareness and competence.",
    "Ad-hoc/specialized training when new regulations or risks arise.",
  ];
  return (
    <div className="pt-6">
      <div className="ps-6">
        {points.map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>
        ))}
      </div>
    </div>
  );
}

export function AMLCard8() {
  const points = [
    "Maintain accurate records for client identity, transactions, and compliance checks.",
    "Retain client identification records for five years after the relationship ends.",
    "Retain transaction records for five years from completion.",
    "Training records are securely stored by Compliance.",
  ];
  return (
    <div className="pt-6">
      <div className="ps-6">
        {points.map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>
        ))}
      </div>
    </div>
  );
}

export function AMLCard9() {
  const lines = [
    "Terrorism involves actions intended to influence governments or intimidate the public to advance political, religious, or ideological causes.",
    "‘Terrorist property’ includes funds or assets likely to be used to fund terrorism; sources may be illicit or legitimate (donations/business revenue).",
    "FlipTrade Group must monitor, detect, and report activity potentially linked to terrorist financing; suspicious findings are escalated to authorities.",
  ];
  return (
    <div className="pt-6">
      <div className="ps-6">
        {lines.map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>
        ))}
      </div>
    </div>
  );
}

export function AMLCard10() {
  const points = [
    "Fraud is deliberate misrepresentation or concealment of material facts to obtain unlawful gain; risks include identity theft/impersonation.",
    "Code of Conduct: employees must act with honesty and integrity.",
    "Client Authentication: no instruction processed without proper verification.",
    "Payment Controls: transactions verified against registered account details.",
    "Awareness & Training: fraud prevention included in AML education.",
  ];
  return (
    <div className="pt-6">
      <div className="ps-6">
        {points.map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>
        ))}
      </div>
    </div>
  );
}

export function AMLCard11() {
  const lines = [
    "Employees must immediately report suspected fraud to the AML/CTF Reporting Officer.",
    "The Reporting Officer reviews and determines whether external reporting is necessary.",
  ];
  return (
    <div className="pt-6">
      <div className="ps-6">
        {lines.map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>
        ))}
      </div>
    </div>
  );
}

export function AMLCard12() {
  const points = [
    "Bribery: offering/giving/receiving value to improperly influence actions. Corruption: misuse of entrusted power for personal gain.",
    "Whistleblowing Policy enables confidential reporting.",
    "Gifts & Hospitality: all gifts/entertainment from clients must be reported to Compliance.",
    "Regular policy reviews by Compliance; mandatory anti-bribery training for all staff.",
    "PEP & Sanctions screening is mandatory for all clients; no risk-based exemption.",
  ];
  return (
    <div className="pt-6">
      <div className="ps-6">
        {points.map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>
        ))}
      </div>
    </div>
  );
}

export function AMLCard13() {
  const examples = [
    "Insider trading or misuse of confidential information",
    "Manipulative trading (e.g., false orders, spoofing)",
    "Spreading false or misleading market information",
  ];
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        Market abuse is behavior that manipulates markets or gives a false impression of supply, demand, or price.
        As FlipTrade Group offers CFDs and OTC instruments, it remains subject to market-abuse regulations.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">Examples include:</p>
      <div className="ps-6">
        {examples.map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>
        ))}
      </div>
    </div>
  );
}

export function AMLCard14() {
  const indicators = [
    "Unusual trading volumes before news releases",
    "Sudden, inconsistent trades vs. historical activity",
    "Urgent large trades without clear rationale",
    "Instructions inconsistent with financial capability",
  ];
  const report = [
    "All suspected market abuse must be reported immediately to the AML/CTF Reporting Officer or the Compliance Department.",
  ];
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">Suspicious transaction indicators:</p>
      <div className="ps-6 pt-2">
        {indicators.map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>
        ))}
      </div>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">Reporting:</p>
      <div className="ps-6">
        {report.map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>
        ))}
      </div>
    </div>
  );
}

export function AMLCard15() {
  const lines = [
    "The Board of Directors oversees implementation of this Policy.",
    "AML/CTF matters are reviewed quarterly; Annual Risk Assessment is approved by the Board.",
    "The AML/CTF Reporting Officer prepares annual AML control reports, maintains the AML Risk Assessment, investigates internal SARs, and reports well-founded suspicions to authorities/FIU.",
  ];
  return (
    <div className="pt-6">
      <div className="ps-6">
        {lines.map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>
        ))}
      </div>
    </div>
  );
}

export function AMLCard16() {
  const lines = [
    "Compliance conducts weekly reviews of newly opened accounts.",
    "Daily monitoring of deposits above set thresholds.",
    "Continuous transaction monitoring to identify anomalies.",
    "No third-party deposits are accepted; deposits must match the verified client name.",
    "FlipTrade may decline or block any transaction suspected of financial crime.",
    "By law, we may be prohibited from informing clients if a report is made to authorities.",
  ];
  return (
    <div className="pt-6">
      <div className="ps-6">
        {lines.map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>
        ))}
      </div>
    </div>
  );
}

export function AMLCard17() {
  const lines = [
    "All employees must sign that they have read, understood, and agree to comply with FlipTrade Group’s AML & CTF Policy and related procedures.",
    "Signed declarations must be submitted to the Compliance Department for record keeping.",
  ];
  return (
    <div className="pt-6">
      <div className="ps-6">
        {lines.map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>
        ))}
      </div>
    </div>
  );
}

