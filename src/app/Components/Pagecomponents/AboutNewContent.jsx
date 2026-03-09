"use client";
import React, { useState } from "react";
import TextCard from "../Uiux/TextCard";
import Image from "next/image";

export const AboutFlipTradeGroup = () => {
  const aboutcardData = [
    [
      {
        id: 1,
        title: "When was Flip Trade Group Founded?",
        description:
          "Flip Trade Group was incorporated  by a team of professionals in the financial services industry who were instrumental in the success of one of  largest regulated CFD  provider."
      },
      {
        id: 2,
        title: "Why was Flip Trade Group Founded?",
        description: `Flip Trade Group sought to bridge the gap between retail and institutional clients offering a trading solution previously only available to Investment banks and high net worth individuals. Flip Trade Group Raw Spread Connectivity was born, providing superior execution technology, lower spreads and unrivalled liquidity.
      <br/>
      Flip Trade Group is dedicated to innovation, constant improvement and utilising cutting edge technology previously unavailable.
      `
      },
      {
        id: 3,
        title: "Mission Statement",
        description: `Flip Trade Group mission is to create the best and most transparent trading experience for retail and institutional clients alike allowing traders to focus more on their trading. Built by traders for traders Flip Trade Group is dedicated to offering superior spreads, execution and service.`
      }
    ],
    [
      {
        id: 4,
        title: "Regulatory Compliance",
        description: `
      Flip Trade Group acknowledges the importance of compliance with all relevant laws, rules, regulations, policies and standards. Flip Trade Group is committed to having strict management discipline and first-class controls in our compliance environment. As a regulated entity Flip Trade Group is required to meet strict financial standards, including capital adequacy and audit requirements.
      <br/>
      Flip Trade Group holds client money in segregated client money accounts with top tier banking institutions. All client money is managed in accordance with the Client Money Handling rules and held separately to Flip Trade Group company funds. Client money is not used for any operational expenses or purposes.
      `
      },
      {
        id: 5,
        title: "Audit",
        description: `Flip Trade Group has in place an independent, external auditor to supplement our operational processes and ensure regulatory compliance.`
      },
      {
        id: 6,
        title: "Confidentiality",
        description: `Flip Trade Group maintains appropriate controls and monitors the transfer of confidential and sensitive client information within and outside the Company on a need-to-know basis. Flip Trade Group does not deliberately disclose client information unless this is upon request of the client, or as required to do so by law.`
      }
    ]
  ];
  const CoreValues = [
    "Integrity and Trust",
    "Honesty and Fairness",
    "Transparency",
    "Commitments and Responsibility",
    "Reliability",
    "Flexibility",
    "Constant Innovation",
    "Strong Corporate Governance"
  ];

  return (
    <div>
      <p className="description_text font-medium font_ternary text-white">
        Flip Trade Group is one of the most renowned Forex CFD provider,
        offering trading solutions for active day traders and scalpers as well
        as traders that are new to the forex market. Flip Trade Group offers its
        clients cutting edge trading platforms, low latency connectivity and
        superior liquidity.
        <br />
        Flip Trade Group is revolutionizing online forex trading. Traders are
        now able to gain access to pricing previously only available to
        investment banks and high net worth individuals.
      </p>

      <p className="text-2xl font-medium font_ternary text-white pt-6">
        Our management team have significant experience in the Forex, CFD and
        Equity markets in Asia, Europe and North America. It is this experience
        that has enabled us to select the best possible technology solutions and
        hand pick some of the best pricing providers available in the market.
      </p>

      <div>
        <TextCard data={aboutcardData[0]} col_2={true} p_sec={true} />
        <div className={`p-4 shadow-[1px_1px_0px_0px_#fff] rounded-3xl mt-4`}>
          <h4 className={`text-[30px] font-medium text-white `}>Core Values</h4>
          <div className="grid grid-cols-1 max-w-2xl pt-4">
            {CoreValues.map((i, index) =>
              <p
                className="text-xl font-normal  font_ternary text-white pb-3"
                key={index}
              >
                {i}
              </p>
            )}
          </div>
        </div>
        <TextCard data={aboutcardData[1]} col_2={true} p_sec={true} />
      </div>
    </div>
  );
};

export const Regulation = () => {
  const regulationData = [
    {
      id: 1,
      title: "Segregation of Client Funds",
      description:
        "When funding your trading account, your funds are held in client-segregated accounts with top-tier banking institutions. Flip Trade Group complies with the Securities Act and the Securities (Conduct of Business) Regulations, ensuring strict adherence to policies and procedures governing the maintenance and operation of these accounts."
    },
    {
      id: 2,
      title: "Anti-Money Laundering",
      description: `In compliance with the FSC Anti-Money Laundering and Counter-Terrorism Financing Act, Flip Trade Group has implemented comprehensive policies and procedures to ensure compliance with the law. These measures are designed to prevent money laundering and related activities. Flip Trade Group' Anti-Money Laundering and KYC requirements specify the necessary documents that clients must provide before opening an account.`
    },
    {
      id: 3,
      title: "Licence",
      description: `Flip Trade Group Ltd' is authorised by the Seychelles Financial Services Authority as a Securities Dealer for the provision of financial services under License NO *******`
    }
  ];
  return (
    <div>
      <div className="max-w-2xl">
        <div className="flex flex-col items-start w-fit gap-3">
          <Image
            src={"/images/fsc.jpg"}
            alt=""
            width={1000}
            height={500}
            className="max-w-25 rounded-2xl"
          />

          <h5 className="text-5xl text-white font-semibold">FSC</h5>
          <p className="text-3xl text-white">Financial Services Commission</p>
        </div>
        <p className="pt-4 text-2xl font-normal  font_ternary text-white">
          Fliptrade Group complies with the FSC regulatory requirements and has
          in place internal risk management controls to ensure that it is
          sufficiently capitalized to support its operations.
          <br />
          <br />
          External audits supplement Fliptrade Group operational and accounting
          process and ensure full regulatory compliance.
        </p>
      </div>
      <div>
        <TextCard data={regulationData} col_2={true} p_sec={true} />
      </div>
    </div>
  );
};
const AboutNewContent = () => {
  const [activeTab, setActiveTab] = useState(1);

  const renderComponent = () => {
    switch (activeTab) {
      case 1:
        return <AboutFlipTradeGroup />;
      case 2:
        return <Regulation />;
      case 3:
        return <p>Tab 3</p>;
      case 4:
        return <p>Tab 4</p>;
      default:
        return <p>Tab 4</p>;
    }
  };
  return (
    <div>
      <div className="container mx-auto py-12 md:py-18">
        <div className="grid grid-cols-4 gap-5 cursor-pointer py-3 border-b-2 border-white">
          <p
            className={`text-2xl ${activeTab === 1
              ? "text-subprimary underline"
              : "text-white"} text-center border-r-2 border-white`}
            onClick={() => setActiveTab(1)}
          >
            About Fliptrade Group
          </p>
          <p
            className={`text-2xl ${activeTab === 2
              ? "text-subprimary underline"
              : "text-white"} text-center border-r-2 border-white`}
            onClick={() => setActiveTab(2)}
          >
            Regulation
          </p>
          <p
            className={`text-2xl ${activeTab === 3
              ? "text-subprimary underline"
              : "text-white"} text-center border-r-2 border-white`}
            onClick={() => setActiveTab(3)}
          >
            Careers
          </p>
          <p
            className={`text-2xl ${activeTab === 4
              ? "text-subprimary underline"
              : "text-white"} text-center border-r-2 border-white`}
            onClick={() => setActiveTab(4)}
          >
            Contact Us
          </p>
        </div>

        <div className="pt-14">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default AboutNewContent;
