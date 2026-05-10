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
        The Company is committed to acting honestly, fairly, and professionally
        in accordance with the best interests of its clients. We take all
        reasonable steps to obtain the best possible result (“Best Execution”)
        when executing client orders.
      </p>

      <br />

      <p className="text-base 2xl:text-xl text-white font_ternary">
        This Order Execution Policy (“Policy”) forms part of the Company’s Terms
        and Conditions. By entering into an agreement with the Company, you
        agree to the terms outlined in this Policy.
      </p>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        2.1 Scope
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-2">
        This Policy applies to all transactions executed by the Company in
        financial instruments (“Securities”) offered through its trading
        platform.
      </p>

      <p className="text-[20px] text-white font-medium pt-6">
        2.2 Securities
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-2">
        The Company has full discretion in determining which Securities are made
        available for trading and in quoting prices for such instruments.
      </p>

      <p className="text-[20px] text-white font-medium pt-6">
        2.3 Company as Principal
      </p>

      <div className="ps-6 pt-2">
        {[
          "All positions opened with the Company must be closed with the Company",
          "Orders are not executed on external exchanges",
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
        2.4 Market Orders
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-2">
        Orders executed immediately at the current price quoted by the Company.
        Clients may attach:
      </p>

      <div className="ps-6 pt-2">
        {[
          "Stop Loss (to limit losses)",
          "Take Profit (to secure profits)",
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
        2.4 Pending Orders
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-2">
        Orders executed at a future time when a specified price is reached.
        Types include:
      </p>

      <div className="ps-6 pt-2">
        {[
          "Buy Limit",
          "Buy Stop",
          "Sell Limit",
          "Sell Stop",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        Clients may also attach Stop Loss and Take Profit to pending orders.
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        Clients may hold up to 300 open positions (including both Market and
        Pending Orders).
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        Orders may be modified before execution. However, once the price reaches
        the execution level, modifications or cancellations may not be possible.
      </p>
    </div>
  );
};

export const Card4 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        To achieve Best Execution, the Company considers multiple factors,
        including but not limited to:
      </p>

      <div className="ps-6 pt-4">
        {[
          "Price",
          "Costs",
          "Speed of execution",
          "Likelihood of execution",
          "Likelihood of settlement",
          "Order size",
          "Market impact",
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
        No single factor is guaranteed priority; decisions are made based on
        overall circumstances.
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        If a client provides specific instructions, the Company will execute the
        order accordingly, even if it may limit the ability to achieve the best
        possible result.
      </p>
    </div>
  );
};

export const Card5 = () => {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        The Company determines the importance of execution factors based on:
      </p>

      <div className="ps-6 pt-4">
        {[
          "Client characteristics (e.g., retail or professional)",
          "Order characteristics (size, type, urgency)",
          "Nature of the financial instrument",
          "Execution venue conditions",
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
        5.1 Sole Execution Venue
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-2">
        The Company acts as the sole execution venue for all trades.
      </p>

      <p className="text-[20px] text-white font-medium pt-6">
        5.2 No External Markets
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-2">
        Client orders are not transmitted to external markets or exchanges.
      </p>

      <p className="text-[20px] text-white font-medium pt-6">
        5.3 OTC Transactions
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-2">
        Transactions are conducted through the Company’s trading platform
        (off-exchange/OTC).
      </p>
    </div>
  );
};

export const Card7 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        6.1 Off-Exchange Trading
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-2">
        Trading with the Company is conducted over-the-counter (OTC) and not on
        a regulated exchange.
      </p>

      <p className="text-[20px] text-white font-medium pt-6">
        6.2 Additional Risks
      </p>

      <div className="ps-6 pt-2">
        {[
          "Counterparty risk",
          "Pricing differences",
          "Reduced transparency",
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
        6.3 Company Rights
      </p>

      <div className="ps-6 pt-2">
        {[
          "Reject or delay execution due to technical issues",
          "Adjust opening or closing prices in case of system errors or market disruptions",
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
        6.4 Client Responsibilities
      </p>

      <div className="ps-6 pt-2">
        {[
          "Close positions during platform trading hours",
          "Close trades with the same counterparty (the Company)",
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
        7. Monitoring and Review
      </p>

      <div className="ps-6 pt-2">
        {[
          "The Company continuously monitors the effectiveness of this Policy and execution quality",
          "The Policy is reviewed at least annually or whenever a material change occurs",
          "Clients will be notified of any significant updates",
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

export const Card9 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        8. Client Consent
      </p>

      <p className="text-base 2xl:text-xl text-white font_ternary pt-2">
        By accepting the Company’s Terms and Conditions, clients:
      </p>

      <div className="ps-6 pt-2">
        {[
          "Acknowledge that the Company acts as principal",
          "Accept that the Company is the sole execution venue",
          "Consent to off-exchange transaction execution",
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
    title: "Scope & Services",
    icon: scopeblack,
    activeIcon: scopewhite,
    component: Card2,
  },
  {
    id: 3,
    title: "Order Types",
    icon: collectblack,
    activeIcon: collectwhite,
    component: Card3,
  },
  {
    id: 4,
    title: "Best Execution Factors",
    icon: processblack,
    activeIcon: processwhite,
    component: Card4,
  },
  {
    id: 5,
    title: "Execution Criteria",
    icon: legalblack,
    activeIcon: legalwhite,
    component: Card5,
  },
  {
    id: 6,
    title: "Execution Venue",
    icon: shareblack,
    activeIcon: sharewhite,
    component: Card6,
  },
  {
    id: 7,
    title: "Risk Disclosure",
    icon: securityblack,
    activeIcon: securitywhite,
    component: Card7,
  },
  {
    id: 8,
    title: "Monitoring & Review",
    icon: cookieblack,
    activeIcon: cookiewhite,
    component: Card8,
  },
  {
    id: 9,
    title: "Client Consent",
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

const OrderExecutionPolicy = () => {
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
            title="Order Execution Policy"
            color="text-white"
            ish1={true}
          />
        </div>

        <div className="flex flex-col xl:flex-row xl:pt-14 gap-4 relative">

          {/* Desktop Sidebar */}
          <div className="hidden xl:block xl:w-[30%] 2xl:w-[25%]">
            <div className="bg-primary xl:max-w-[380px] p-6 rounded-3xl sticky top-10">
              <p className="text-[30px] font-medium text-white">
                Order Execution Policy
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

export default OrderExecutionPolicy;