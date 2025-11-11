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
import Cookiesblack from "../../../../public/icons/Cookiesblack.svg";
import Cookieswhite from "../../../../public/icons/Cookieswhite.svg";
import Securityb from "../../../../public/icons/Securityb.svg";
import Securityw from "../../../../public/icons/Securityw.svg";
import otherwhite from "../../../../public/icons/otherwhite.svg";
import otherblack from "../../../../public/icons/otherblack.svg";
import contactblack from "../../../../public/icons/contactblack.svg";
import contactwhite from "../../../../public/icons/contactwhite.svg";

const sections = [
  { id: 1,  faqtitle: "General Information",            faqicon: pageiconblack,   faqiconwhite: pageicon,        sectioncompoent: Card1 },
  { id: 2,  faqtitle: "1. Withdrawal Requests",         faqicon: usericon,        faqiconwhite: usericonwhite,   sectioncompoent: Card2 },
  { id: 3,  faqtitle: "1.1 General Terms",              faqicon: Regulation,      faqiconwhite: Regulationwhite, sectioncompoent: Card3 },
  { id: 4,  faqtitle: "1.2 Processing Time",            faqicon: securityblack,   faqiconwhite: securitywhite,   sectioncompoent: Card4 },
  { id: 5,  faqtitle: "1.3 Minimum Withdrawal Amount",  faqicon: Disclosureblack, faqiconwhite: Disclosurewhite, sectioncompoent: Card5 },
  { id: 6,  faqtitle: "1.4 Fees",                       faqicon: lawblack,        faqiconwhite: lawwhite,        sectioncompoent: Card6 },
  { id: 7,  faqtitle: "2. Refund Policy",               faqicon: Cookiesblack,    faqiconwhite: Cookieswhite,    sectioncompoent: Card7 },
  { id: 8,  faqtitle: "2.1 General Refund Principles",  faqicon: Securityb,       faqiconwhite: Securityw,       sectioncompoent: Card8 },
  { id: 9,  faqtitle: "2.2 Refund Procedure",           faqicon: otherblack,      faqiconwhite: otherwhite,      sectioncompoent: Card9 },
  { id: 10, faqtitle: "2.3 Investigation and Decision", faqicon: pageiconblack,   faqiconwhite: pageicon,        sectioncompoent: Card10 },
  { id: 11, faqtitle: "3. Chargebacks and Fraud Prevention", faqicon: Regulation,  faqiconwhite: Regulationwhite, sectioncompoent: Card11 },
  { id: 12, faqtitle: "4. Currency Conversion",         faqicon: securityblack,   faqiconwhite: securitywhite,   sectioncompoent: Card12 },
  { id: 13, faqtitle: "5. Policy Updates",              faqicon: Disclosureblack, faqiconwhite: Disclosurewhite, sectioncompoent: Card13 },
  { id: 14, faqtitle: "6. Account Termination",         faqicon: lawblack,        faqiconwhite: lawwhite,        sectioncompoent: Card14 },
  { id: 15, faqtitle: "7. Contact",                     faqicon: contactblack,    faqiconwhite: contactwhite,    sectioncompoent: Card15 },
];

const RefundWithdrawalPolicy = () => {
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
          <Title title="Refund & Withdrawal Policy" color="text-white" ish1={true} />
        </div>

        <div className="flex flex-col xl:flex-row xl:pt-14 gap-4 relative">
          {/* Sidebar */}
          <div className="hidden xl:block xl:w-[30%] 2xl:w-[25%]">
            <div className="bg-primary xl:max-w-[380px] p-6 rounded-3xl sticky top-10">
              <p className="text-[30px] font-medium text-white">Refund & Withdrawal</p>
              <div className="pt-4 grid grid-cols-2 xl:grid-cols-1 gap-3">
                {sections.map((s, i) => (
                  <div
                    key={s.id}
                    className={`p-4 rounded-2xl mt-4 cursor-pointer transition-all duration-300 ${activeSection === s.id ? "bg-white" : "bg-[#4C1BE3]"}`}
                    onClick={() => sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  >
                    <div className="flex items-center gap-3">
                      <Image src={activeSection === s.id ? s.faqicon : s.faqiconwhite} alt="icon" width={24} height={24} className="max-w-[24px]" />
                      <p className={`list_text font-medium ${activeSection === s.id ? "text-black" : "text-white"}`}>{s.faqtitle}</p>
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
              <button className="bg-primary w-max p-3 rounded-full" onClick={() => setFaqTogle(v => !v)} aria-label="Toggle sections">
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
                          className={`p-4 rounded-2xl mt-4 cursor-pointer transition-all duration-300 ${activeSection === s.id ? "bg-white" : "bg-[#4C1BE3]"}`}
                          onClick={() => {
                            sectionRefs.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });
                            setFaqTogle(false);
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <Image src={activeSection === s.id ? s.faqicon : s.faqiconwhite} alt="icon" width={24} height={24} className="max-w-[24px]" />
                            <p className={`list_text font-medium ${activeSection === s.id ? "text-black" : "text-white"}`}>{s.faqtitle}</p>
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
                  <div key={s.id} ref={(el) => (sectionRefs.current[i] = el)} className="p-4 shadow-[1px_1px_0px_0px_#fff] rounded-3xl mt-12">
                    <div className="flex items-center gap-3 max-w-[900px] 2xl:max-w-7xl m-auto">
                      <Image src={s.faqiconwhite} alt="icon" width={34} height={34} className="max-w-[34px]" />
                      {/* your required title element */}
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

export default RefundWithdrawalPolicy;

/* =======================
   Cards (verbatim text)
======================= */

export function Card1() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        At FlipTrade Group, we value transparency, trust, and client satisfaction. We understand that our traders expect smooth and secure fund management. Therefore, our Refund & Withdrawal Policy clearly outlines the process for fund withdrawals, refunds, and related terms.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        Clients can withdraw funds from their trading account at any time, subject to verification and compliance checks. Once a valid withdrawal request is submitted, FlipTrade Group aims to process it within one (1) business day. To ensure faster processing, clients must provide accurate and complete details on the withdrawal form, including account credentials and payment information.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        Before processing any transaction, FlipTrade Group must verify that the sender is a registered account holder. Funds will only be transferred to accounts held in the same name as the trading account. If the name or payment details differ, clients must contact our Compliance Department for approval.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        Refunds will be made only to the original payment source. In case of credit card payments, the refund will be credited back to the same card used for the deposit.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        If FlipTrade Group makes a mistake while transferring funds, the error will be corrected and the amount refunded accordingly. However, we are not responsible for losses resulting from incorrect payment instructions provided by the client.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        Please note, FlipTrade Group is not liable for charges or fees imposed by banks, intermediaries, or payment processors.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        By opening an account and using our services, you acknowledge and agree to this policy.
      </p>
    </div>
  );
}

export function Card2() {
  return null; // heading section only; details are in Card3–Card6
}

export function Card3() {
  const bullets = [
    "Clients may request withdrawals anytime through the secure Client Portal.",
    "All withdrawal requests are subject to KYC (Know Your Customer) and AML (Anti-Money Laundering) verification.",
    "Withdrawals will be processed only through the original deposit method and to accounts in the same name as the trading account holder.",
  ];
  return (
    <div className="pt-6">
      <ul className="ps-6 list-disc">
        {bullets.map((b) => (
          <li key={b} className="text-base 2xl:text-lg text-white pt-2">{b}</li>
        ))}
      </ul>
    </div>
  );
}

export function Card4() {
  return (
    <div className="pt-6">
      <ul className="ps-6 list-disc">
        <li className="text-base 2xl:text-lg text-white pt-2">
          FlipTrade Group processing time: within 1 business day (excluding weekends and public holidays).
        </li>
        <li className="text-base 2xl:text-lg text-white pt-2">
          Bank or payment provider processing: typically 1–7 business days depending on the institution.
        </li>
        <li className="text-base 2xl:text-lg text-white pt-2">
          Processing may be delayed if:
          <ul className="ps-6 list-[circle]">
            <li className="pt-2">Additional verification is required.</li>
            <li className="pt-2">There are open trades or pending margin obligations.</li>
            <li className="pt-2">The client is under compliance review or investigation.</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export function Card5() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white">
        Clients may withdraw funds at any time, provided the account is fully verified and the withdrawal details are correct.
      </p>
      <p className="text-base 2xl:text-xl text-white pt-4">
        The minimum withdrawal amount is USD 10 (or equivalent in other currencies).
      </p>
    </div>
  );
}

export function Card6() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white">
        FlipTrade Group does not charge internal withdrawal fees.
      </p>
      <p className="text-base 2xl:text-xl text-white pt-4">
        However, external payment providers, crypto gateways, or banks may charge transaction fees. All applicable fees will be displayed before confirming the withdrawal.
      </p>
    </div>
  );
}

export function Card7() { return null; }

export function Card8() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white">
        Due to the nature of financial trading, refunds are not normally provided for trading losses or deposits.
      </p>
      <p className="text-base 2xl:text-xl text-white pt-4">Refunds are issued only under specific circumstances:</p>
      <ul className="ps-6 list-disc">
        <li className="text-base 2xl:text-lg text-white pt-2">Duplicate or accidental deposit.</li>
        <li className="text-base 2xl:text-lg text-white pt-2">Unauthorized deposit (e.g., fraud or account compromise).</li>
        <li className="text-base 2xl:text-lg text-white pt-2">Failure of service delivery due to a FlipTrade Group system error.</li>
      </ul>
    </div>
  );
}

export function Card9() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white">Clients requesting a refund must:</p>
      <ul className="ps-6 list-disc">
        <li className="text-base 2xl:text-lg text-white pt-2">
          Submit a formal request to <a href="mailto:support@fliptradegroup.com" className="text-primary">support@fliptradegroup.com</a> within 14 calendar days of the transaction.
        </li>
        <li className="text-base 2xl:text-lg text-white pt-2">Provide valid transaction details, account information, and supporting documents.</li>
      </ul>
    </div>
  );
}

export function Card10() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white">Each refund request is reviewed individually.</p>
      <p className="text-base 2xl:text-xl text-white pt-4">A decision may take up to 10 business days.</p>
      <p className="text-base 2xl:text-xl text-white pt-4">Approved refunds will be returned only to the original funding source.</p>
    </div>
  );
}

export function Card11() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white">
        Initiating a chargeback without contacting FlipTrade Group first may lead to temporary or permanent account suspension.
      </p>
      <p className="text-base 2xl:text-xl text-white pt-4">
        Clients filing unjustified chargebacks will be held responsible for related fees or reversed payments.
      </p>
      <p className="text-base 2xl:text-xl text-white pt-4">
        Fraudulent chargebacks or abusive refund behavior may result in permanent account closure and possible reporting to financial authorities.
      </p>
    </div>
  );
}

export function Card12() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white">
        If your withdrawal or refund involves a currency conversion, the transaction will be processed using the current market exchange rate at the time of execution.
      </p>
      <p className="text-base 2xl:text-xl text-white pt-4">
        FlipTrade Group is not liable for any gain or loss caused by exchange rate fluctuations.
      </p>
    </div>
  );
}

export function Card13() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white">
        FlipTrade Group reserves the right to modify this policy at any time to reflect updates in regulatory requirements or operational improvements. Clients will be notified of major policy changes via email or an in-platform message.
      </p>
    </div>
  );
}

export function Card14() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white">Clients may request to close their trading account at any time.</p>
      <p className="text-base 2xl:text-xl text-white pt-4">Before termination, clients must:</p>
      <ul className="ps-6 list-disc">
        <li className="text-base 2xl:text-lg text-white pt-2">Close all open positions.</li>
        <li className="text-base 2xl:text-lg text-white pt-2">Withdraw all remaining funds.</li>
      </ul>
      <p className="text-base 2xl:text-xl text-white pt-4">
        FlipTrade Group may not process termination requests if there are open trades or unsettled account balances.
      </p>
      <p className="text-base 2xl:text-xl text-white pt-4">
        In cases where termination is requested, the client may be asked to provide a reason for service improvement purposes.
      </p>
      <p className="text-base 2xl:text-xl text-white pt-4">
        For additional information regarding account termination, please review the FlipTrade Group Client Agreement.
      </p>
    </div>
  );
}

export function Card15() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white">
        For any queries or assistance regarding withdrawals, refunds, or payment-related matters, please contact our Finance Department at:
      </p>
      <p className="pt-2 text-base 2xl:text-xl text-white">
        <a href="mailto:support@fliptradegroup.com" className="text-primary">support@fliptradegroup.com</a>
      </p>
    </div>
  );
}
