"use client";
import React, { useEffect, useState } from "react";
import TextCard from "../Uiux/TextCard";
import Image from "next/image";
import AboutUniqFaq from "./AboutUniqFaq";
import { title } from "process";
import Link from "next/link";
import Contactfrom from "./Contactfrom";
import { useSearchParams } from "next/navigation";

export const AboutFlipTradeGroupTab = () => {
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
        <span className="text-primary"> Flip Trade Group </span> is one of the
        most renowned Forex CFD provider, offering trading solutions for active
        day traders and scalpers as well as traders that are new to the forex
        market. Flip Trade Group offers its clients cutting edge trading
        platforms, low latency connectivity and superior liquidity.
        <br />
        Flip Trade Group is revolutionizing online forex trading. Traders are
        now able to gain access to pricing previously only available to
        investment banks and high net worth individuals.
      </p>

      <p className="text-base md:text-2xl font-medium font_ternary text-white pt-6">
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
                className="text-base font-normal  font_ternary text-white pb-3"
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

export const RegulationTab = () => {
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
      description: `Flip Trade Group Ltd' is authorised by the Seychelles Financial Services Authority as a Securities Dealer for the provision of financial services under License NO <span class='text-primary'> GB26205911 </span> , its registered office is at C/o Renark Management Solutions Ltd Port Louis, Mauritius / 4th Floor, The Docks 4, The Docks, Caudan C/o Renark Management Solutions Ltd Port Louis, Mauritius`
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

export const CareersTab = () => {
  const faqdata = [
    {
      question: "Customer Support Operator",
      quickListData: [
        {
          quicklistTitle: "Job role and responsibilities:",
          quickList: [
            "Assisting clients in a friendly, helpful manner via Live Chat, telephone and email.",
            "Educating clients in the company’s platforms, trading products, account opening/deposit/withdrawal procedures.",
            "Analysing and investigating trades.",
            "Maintaining the company’s high standard of client communication.",
            "Working as part of a team to ensure department KPI’s are met, particularly with regards to response times and client satisfaction levels.",
            "Handling complaints professionally and courteously.",
            "Flexible with work hours including weekends."
          ]
        },
        {
          quicklistTitle: "Candidate requirements:",
          quickList: [
            "Fluent in verbal and written English to business standard.",
            "Enthusiastic and ‘can do’ approach to customer service.",
            "Ability to remain calm and focused in a fast paced environment.",
            "Previous experience in a similar role considered an advantage.",
            "A broad understanding of financial markets and trading, preferably with foreign exchange.",
            "Mandatory:",
            "Willing to work in a regulated environment and observe the guidelines set by the relevant governing body.",
            "A high level of professionalism and personal integrity."
          ]
        }
      ]
    },
    {
      question: "Client Relations Officer (Multiple languages)",
      quickListData: [
        {
          quicklistTitle: "Job role and responsibilities:",
          quickList: [
            "Assist clients throughout the onboarding process.",
            "Relationship management with new and existing clients.",
            "Relationship management with new and existing Partners",
            "Educate clients on how to use the company’s trading platforms and products, deposit and withdrawal methods.",
            "Researching regional business opportunities"
          ]
        },
        {
          quicklistTitle: "Candidate requirements:",
          quickList: [
            "Fluent in either Portuguese, Arabic, Italian or German to a business standard, in addition to English.",
            "Excellent communication and written skills as well as attention to detail.",
            "At least one year experience with forex in a similar role."
          ]
        }
      ]
    },
    {
      question: "Client Accounts / Backoffice Administrator",
      quickListData: [
        {
          quicklistTitle: "Job role and responsibilities:",
          quickList: [
            "Initial due diligence on clients’ accounts",
            "Verification and monitoring of Know Your Customer documentation",
            "Monitoring and subsequently investigating incoming deposit transactions.",
            "Processing of manual client inter account / profile transfers.",
            "Review and approval of IB commission related withdrawal requests",
            "Assisting clients with their Accounts related queries via email",
            "Providing Support team additional Accounts related information / feedback relating to client’s requests"
          ]
        },
        {
          quicklistTitle: "Candidate requirements:",
          quickList: [
            "Experience in back office administration/accounting would be an advantage",
            "Excellent written and verbal communication skills",
            "Basic knowledge of Excel and other Microsoft Office tools",
            "Attention to detail and good organizational skills",
            "Open minded team player and willingness to learn"
          ]
        }
      ]
    },
    {
      question: "Technical Writer",
      quickListData: [
        {
          quicklistTitle: "Job role and responsibilities:",
          quickList: [
            "Create and maintain the software development information architecture and work closely with developers to obtain in-depth understanding of products.",
            "Work with internal teams to obtain an in-depth understanding of products, services and the documentation requirements.",
            "Produce high-quality documentation that meets industry standards and is developed appropriately for end user audience."
          ]
        },
        {
          quicklistTitle: "Candidate requirements:",
          quickList: [
            "Minimum of 3 years experience in a similar position or related field is a must.",
            "Previous experience within FX Industry will be considered an advantage.",
            "Experience in Software Development documentation writing.",
            "Ability to quickly grasp complex technical concepts and make them easily understandable",
            "Demonstrated ability to to independently scope out and write technically accurate, concise, and thorough content.",
            "Professionalism, good work ethic, self-motivation and a desire to succeed."
          ]
        }
      ]
    },
    {
      question: "Partners Account Manager",
      quickListData: [
        {
          quicklistTitle: "Duties and Responsibilities:",
          quickList: [
            "Assisting with the on-boarding of new partners and clients via live chat, telephone and email.",
            "Relationship management with new and existing partners to build loyalty.",
            "Acquisition of new partners",
            "Continual due diligence and monitoring of partners and money managers.",
            "Educate clients on the company’s platforms, trading products, account opening/deposit/withdrawal procedures",
            "Working with the team to ensure KPI’s are met.",
            "Monthly reports for partner performance.",
            "Supporting and assisting with all departments as required.",
            "Problem solving with a positive and can-do approach.",
            "Organizing and managing your workflow.",
            "Report directly to the Head of Partners Team."
          ]
        },
        {
          quicklistTitle: "Requirements:",
          quickList: [
            "Fluent in verbal and written English to a business standard. Additional languages will be considered an advantage.",
            "Excellent communication and written skills as well as attention to detail.",
            "Confident telephone manner.",
            "Proficient in Microsoft Office, specifically Excel.",
            "At least 1 year experience in the Forex industry in a sales/support or similar role.",
            "A good understanding of financial markets and preferably foreign exchange.",
            "Strong negotiation and pitching skills",
            "Great listening skills",
            "Ability to work to deadlines",
            "Excellent customer service skills"
          ]
        },
        {
          quicklistTitle: "Compulsory:",
          quickList: [
            "Willing to work in a regulated environment and observe the guidelines set by the relevant governing body.",
            "A high level of professionalism and personal integrity.",
            "The ability to work on a weekly shift pattern (8am to 4pm, 2pm to 10pm) Monday to Friday"
          ]
        },
        {
          quicklistTitle: "Benefits:",
          quickList: [
            "Competitive fixed basic salary",
            "Private medical insurance after completing a probationary period of 3 months."
          ]
        }
      ]
    }
  ];
  return (
    <div>
      <p className="description_text font-medium font_ternary text-white">
        We recognise that our continued growth is dependent upon attracting and
        retaining high calibre employees, so we are always looking for the best
        talent available. If you are looking for the chance to enhance and
        develop your career within a fast growing and innovative company, then{" "}
        <span className="text-primary"> Flip Trade Group </span> could be the
        place for you.
      </p>

      <div className={`p-4 shadow-[1px_1px_0px_0px_#fff] rounded-3xl mt-4`}>
        <h4 className={`text-2xl md:text-[30px] font-medium text-white `}>
          Expand your Career
        </h4>
        <div className="pt-4">
          <p className="text-base md:text-base font-normal  font_ternary text-white">
            As Flip Trade Group continues to experience strong growth, we are
            rapidly expanding our workforce around the world. This means there
            are frequent new opportunities within the company’s main areas:
            Trading, Marketing, Legal/Compliance, Sales, Support, Finance, IT
            Development/Production, Operations, Human Resources.
            <br />
            We aim to provide a challenging and rewarding working environment.
          </p>
        </div>
      </div>

      <div>
        <AboutUniqFaq faqData={faqdata} />
      </div>
      <div className={`p-8 shadow-[1px_1px_0px_0px_#fff] rounded-3xl mt-4`}>
        <div className="pt-0">
          <p className="text-base md:text-xl font-normal  font_ternary text-white">
            For more information on vacancies, or to submit your CV and covering
            letter, please email{" "}
            <a
              className="text-primary"
              href="mailto:careers@fliptradegroup.com"
            >
              careers@fliptradegroup.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
const AboutNewContent = () => {

    const searchparams = useSearchParams()
    const newQuery = new URLSearchParams(Array.from(searchparams.entries()));
    const tradingHour = newQuery.get("current-tab");
    const [activeTab, setActiveTab] = useState(tradingHour || '1');
    useEffect(() => {
    setActiveTab(tradingHour);
  }, [tradingHour]);
  const renderComponent = () => {
    switch (activeTab) {
      case '1':
        return <AboutFlipTradeGroupTab />;
      case '2':
        return <RegulationTab />;
      case '3':
        return <CareersTab />;
      case '4':
        return <Contactfrom/>;
      default:
        return <AboutFlipTradeGroupTab />;
    }
  };
  return (
    <div className="inn_container">
      <div className="container mx-auto py-12 md:py-18">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 cursor-pointer py-3 border-b-2 border-white">
          <p
            className={`text-base md:text-2xl ${activeTab === '1'
              ? "text-subprimary underline"
              : "text-white"} text-center md:border-r-2 border-white`}
            onClick={() => setActiveTab('1')}
          >
            About Fliptrade Group
          </p>
          <p
            className={`text-base md:text-2xl ${activeTab === '2'
              ? "text-subprimary underline"
              : "text-white"} text-center md:border-r-2 border-white`}
            onClick={() => setActiveTab('2')}
          >
            Regulation
          </p>
          <p
            className={`text-base md:text-2xl ${activeTab === '3'
              ? "text-subprimary underline"
              : "text-white"} text-center md:border-r-2 border-white`}
            onClick={() => setActiveTab('3')}
          >
            Careers
          </p>
          {/* <Link href={"/contact-us"}> */}
            <p
              className={`text-base md:text-2xl ${activeTab === '4'
                ? "text-subprimary underline"
                : "text-white"} text-center md:border-r-2 border-white`}
              onClick={() => setActiveTab('4')}
            >
              Contact Us
            </p>
          {/* </Link> */}
        </div>

        <div className="pt-4 md:pt-14">
          {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default AboutNewContent;
