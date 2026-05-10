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
      <p className="text-[20px] text-white font-medium">
        1.1 Company Information
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        FlipTrade Group Ltd (“Company”, “we”, “us”, “our”), incorporated under
        Certificate of Incorporation No. 232118, operates through its website -
        www.fliptradegroup.com and is authorised and regulated by the Financial
        Services Commission (“FSC”) of Mauritius under Licence No.
        GB26205911.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        1.2 Regulatory Framework
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        The Company operates in accordance with applicable financial services
        laws and regulations of Mauritius, including but not limited to relevant
        FSC guidelines, licensing regulations, and compliance requirements
        (collectively referred to as the “Applicable Regulations”).
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        1.3 Purpose of This Notice
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        This Risk Disclosure Notice is provided to help you understand the
        general risks associated with trading financial instruments offered by
        the Company, including Contracts for Difference (“CFDs”), foreign
        exchange (“Forex”), commodities, indices, shares, and other derivative
        instruments (“Securities”).
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        This document does not disclose all risks. Trading involves significant
        risk and may not be suitable for all investors. You should ensure you
        fully understand the risks before engaging in any trading activity.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        1.4 Suitability
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Before opening an account, you should carefully consider whether trading
        is appropriate for you based on your financial situation, experience,
        and investment objectives.
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        If you do not fully understand the risks involved, you should seek
        independent financial advice.
      </p>
    </div>
  );
};

export const Card2 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        2.1 Execution-Only Services
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        The Company provides services on an execution-only basis and does not
        provide investment advice, portfolio management, or personalized
        recommendations. Any information provided (such as market analysis or
        research) is for informational purposes only.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        2.2 No Guarantee of Capital
      </p>

      <div className="ps-6 pt-4">
        {[
          "The return of your initial investment",
          "The performance of any financial instrument",
          "Protection against losses",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>

      <p className="text-base 2xl:text-xl text-white pt-4">
        You may lose part or all of your invested funds.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        2.3 High Risk of Loss
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Trading financial instruments is highly speculative and involves
        significant risk. Losses can occur rapidly and may equal your total
        deposited funds.
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        You should not trade unless you are prepared to lose your entire
        investment.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        2.4 Derivative Products
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        CFDs and other derivatives are non-deliverable products that allow you
        to speculate on price movements without owning the underlying asset.
        These products carry a high level of risk due to leverage.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        2.5 Responsibility to Monitor Positions
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        You are solely responsible for monitoring your trading account and open
        positions at all times. You must ensure continuous access to your
        account, especially when holding open trades.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        2.6 Liquidity Risk
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Some instruments may become illiquid under certain market conditions,
        making it difficult or impossible to execute trades at desired prices.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        2.7 Currency Risk
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        If you trade instruments denominated in a currency different from your
        local currency, exchange rate fluctuations may impact your profits or
        losses.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        2.8 Past Performance
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Past performance is not indicative of future results. Historical data
        should not be relied upon as a guarantee of future performance.
      </p>
    </div>
  );
};

export const Card3 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        3.1 Price Volatility
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Financial markets can be highly volatile. Prices may fluctuate rapidly
        due to economic events, news releases, political developments, or
        market sentiment.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        3.2 Stop Loss Limitations
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        While Stop Loss orders are designed to limit losses, they are not
        guaranteed. Market gaps or rapid price movements may result in execution
        at worse prices than expected.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        3.3 Market Conditions
      </p>

      <div className="ps-6 pt-4">
        {[
          "Execute orders",
          "Close positions",
          "Access accurate pricing",
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
        3.4 Gapping Risk
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Market prices may “gap” between trading sessions or during major
        events, causing significant differences between expected and actual
        execution prices.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        3.5 Over-the-Counter (OTC) Trading
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        CFDs are traded over-the-counter (OTC) and not on regulated exchanges.
        This exposes clients to counterparty risk, as trades are executed
        directly with the Company.
      </p>
    </div>
  );
};

export const Card4 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        4.1 Margin Requirements
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Trading on margin allows you to open larger positions with a smaller
        deposit. However, this increases risk significantly.
      </p>

      <div className="ps-6 pt-4">
        {[
          "Positions may be automatically closed if margin levels fall below required thresholds",
          "The Company may initiate a Stop-Out without prior notice",
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
        4.2 Leverage Risk
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Leverage amplifies both profits and losses. Even small market movements
        can result in substantial losses.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        4.3 Margin Calls
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        You may be required to deposit additional funds to maintain open
        positions. Failure to do so may result in automatic liquidation of your
        positions.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        4.4 Negative Balance Protection
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        The Company may provide negative balance protection; however, this does
        not eliminate trading risk.
      </p>
    </div>
  );
};

export const Card5 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        5.1 Ownership of Shares
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Shares represent ownership in a company. The value of shares can
        fluctuate based on company performance and market conditions.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        5.2 Market Risk
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Share prices may rise or fall, and you may receive less than your
        initial investment.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        5.3 Liquidity and Volatility
      </p>

      <div className="ps-6 pt-4">
        {[
          "Highly volatile",
          "Difficult to sell quickly",
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
        5.4 Custody and Nominee Holding
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Shares may be held in the name of a nominee company on your behalf.
        This may limit certain rights, such as voting rights.
      </p>
    </div>
  );
};

export const Card6 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        6.1 Fees and Charges
      </p>

      <div className="ps-6 pt-4">
        {[
          "Spreads",
          "Commissions",
          "Swap/overnight fees",
        ].map((item, index) => (
          <li
            key={index}
            className="text-base 2xl:text-lg text-white list-none pt-2"
          >
            {item}
          </li>
        ))}
      </div>

      <p className="text-base 2xl:text-xl text-white pt-4">
        These may change at any time.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        6.2 Overnight Financing (Swaps)
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Holding positions overnight may result in swap charges or credits,
        which will affect your account balance.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        6.3 Tax Obligations
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        You are responsible for complying with all applicable tax laws. The
        Company does not provide tax advice.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        6.4 Technology Risks
      </p>

      <div className="ps-6 pt-4">
        {[
          "Delays",
          "Failures",
          "Connectivity issues",
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
        6.5 Conflict of Interest
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        The Company or its partners may act in the same markets as clients,
        which may create conflicts of interest.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        6.6 Regulatory Risk
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Changes in laws or regulations may impact trading conditions, costs,
        or market availability.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        6.7 Counterparty Risk
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        The insolvency or default of the Company or its partners may result in
        losses or forced closure of positions.
      </p>

      <p className="text-[20px] text-white font-medium pt-8">
        6.8 Segregation of Funds
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        Client funds are held in segregated accounts where required by
        regulation. However, this does not guarantee full protection in all
        circumstances.
      </p>
    </div>
  );
};

export const Card7 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        7. Amendments
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        The Company reserves the right to amend or update this Risk Disclosure
        Notice at any time without prior notice. The latest version will always
        be available on our website.
      </p>
    </div>
  );
};

export const Card8 = () => {
  return (
    <div className="pt-6">
      <p className="text-[20px] text-white font-medium">
        8. Important Disclaimer
      </p>

      <p className="text-base 2xl:text-xl text-white pt-4">
        This Risk Disclosure Notice is provided for informational purposes only
        and does not form part of any contractual agreement between the Company
        and the Client.
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
    title: "General Risk Warnings",
    icon: scopeblack,
    activeIcon: scopewhite,
    component: Card2,
  },
  {
    id: 3,
    title: "Market Volatility & Trading Risks",
    icon: collectblack,
    activeIcon: collectwhite,
    component: Card3,
  },
  {
    id: 4,
    title: "Margin & Leverage Risks",
    icon: processblack,
    activeIcon: processwhite,
    component: Card4,
  },
  {
    id: 5,
    title: "Specific Risks – Shares",
    icon: legalblack,
    activeIcon: legalwhite,
    component: Card5,
  },
  {
    id: 6,
    title: "Additional Risks & Obligations",
    icon: shareblack,
    activeIcon: sharewhite,
    component: Card6,
  },
  {
    id: 7,
    title: "Amendments",
    icon: securityblack,
    activeIcon: securitywhite,
    component: Card7,
  },
  {
    id: 8,
    title: "Important Disclaimer",
    icon: cookieblack,
    activeIcon: cookiewhite,
    component: Card8,
  },
];

const RiskDisclosure = () => {
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
            title="Risk Disclosure Notice"
            color="text-white"
            ish1={true}
          />

          <p className="text-white pt-4 text-lg">
            Last Updated: May 2026
          </p>
        </div>

        <div className="flex flex-col xl:flex-row xl:pt-14 gap-4 relative">

          {/* Desktop Sidebar */}
          <div className="hidden xl:block xl:w-[30%] 2xl:w-[25%]">
            <div className="bg-primary xl:max-w-[380px] p-6 rounded-3xl sticky top-10">
              <p className="text-[30px] font-medium text-white">
                Risk Disclosure
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

export default RiskDisclosure;