import React from "react";
import Accountsbanner from "../Components/Pagecomponents/Accouttypes/Accountsbanner";
import Accountgetstarted from "../Components/Pagecomponents/Accouttypes/Accountgetstarted";
import Accountchoose from "../Components/Pagecomponents/Accouttypes/Accountchoose";
import Accountcards from "../Components/Pagecomponents/Accouttypes/Accountcards";
import Accountgetstart from "../Components/Pagecomponents/Accouttypes/Accountgetstart";
import proaccgrap from "../../../public/images/proaccgrap.webp";
import proaccgrapph from "../../../public/images/proaccgrapph.webp";
import Accountgrap from "../Components/Pagecomponents/Accouttypes/Accountgrap";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
import probannerright from "/public/images/probannerright.webp";
import acountcard1 from "/public/icons/acountcard1.svg";
import acountcard2 from "/public/icons/acountcard2.svg";
import acountcard3 from "/public/icons/acountcard3.svg";
import Righttextgrap from "../Components/Pagecomponents/Righttextgrap";
const faqData = [
  {
    question: "What is the minimum deposit for a Professional Account?",
    answer: "The minimum deposit is $500 to access premium trading features."
  },
  {
    question: "Who is eligible for a Professional Account?",
    answer:
      "It’s ideal for experienced and institutional traders seeking advanced conditions."
  },
  {
    question: "Are spreads better than Classic or ECN Accounts?",
    answer:
      "Yes, Professional Accounts offer ultra-low spreads for higher trading volumes."
  },
  {
    question: "What additional services are included?",
    answer:
      "Access to priority support, advanced tools, and personalized trading analytics."
  },
  {
    question: "Can I trade with advanced tools and high liquidity?",
    answer:
      "Yes, you can trade with top-tier liquidity and cutting-edge trading platforms."
  }
];

const features = [
  {
    icon: acountcard1,
    title: "Full-Time Traders",
    description: "Manage significant <br/> capital with precision.",
    class: "z-[4]"
  },
  {
    icon: acountcard2,
    title: "Institutions & Firms",
    description: "Hedge funds, prop trading, and <br/> serious investors.",
    class: "xl:w-[120%] left-[-20%] z-[3]"
  },
  {
    icon: acountcard3,
    title: "Premium Traders",
    description: "Seek top-tier pricing, <br/> service, and flexibility.",
    class: "xl:w-[120%] left-[-20%] z-[2]"
  }
];

const cardphdata = [
  "Register or log in to FlipTrade.",
  "Complete enhanced verification.",
  "Deposit a minimum of $500.",
  "Choose “Professional Account.”",
  "Confirm Benefits with Your Rep"
];
export const metadata = {
  title: "Professional Account – Forex Market | Fliptrade Group Trading",
  description:
    "Open the Professional Account with FlipTrade Group: minimum deposit, raw spreads, commission-based pricing, and swap-free options ideal for serious traders."
};
const page = () => {
  return (
    <div>
      <Accountsbanner
        title={"Professional Account – Trade with Expertise"}
        description={
          "Designed for expert traders who want advanced features, tighter spreads, and precise control over their strategies."
        }
        bannerposter={probannerright}
      />
      <Accountgetstarted
        description={
          "Premium features for experienced traders—fast, precise, <br/> and designed for high-performance trading."
        }
        mini_depo={"$500"}
        spreads_from={"Raw Spreads"}
        swap_free={"No"}
        commission={"Yes"}
      />
      <Accountchoose
        title={"Why Choose the <br/> Professional Account?"}
        description={
          "Premium features for experienced traders—fast, <br/> precise, and designed for high-performance trading."
        }
        cardtitle1={"Elite Pricing"}
        card_desc1={
          "Get the best spreads and trading conditions <br/> available on FlipTrade."
        }
        cardtitle2={"Professional-Grade Service"}
        card_desc2={
          "Enjoy priority support, faster withdrawals, and potentially <br/> a dedicated account manager."
        }
        cardtitle3={"Advanced Tools & Liquidity"}
        card_desc3={
          "Optimized for high-volume traders and <br/> institutional-level trading."
        }
      />
      <Accountcards
        description={
          "Ideal for experienced traders, high-volume traders, and <br/> professionals seeking premium execution and <br/> advanced trading conditions."
        }
        carddata={features}
      />
      <Accountgetstart
        description={
          "Register, verify, deposit $500 or more, and start <br/> trading with Professional Account conditions."
        }
        card1desk={"Register or log in to <br /> FlipTrade."}
        card2desk={"Complete enhanced <br/> verification."}
        card3desk={"Deposit a <br/> minimum of $500."}
        card4desk={"Choose <br/> “Professional Account.” "}
        card5desk={"Confirm Benefits <br/> with Your Rep"}
        cardphdata={cardphdata}
      />
    <div className="inn_container">
        <Righttextgrap
          desktopbanner={proaccgrap}
          phonetabbanner={proaccgrapph}
          title={"<span class='text-primary'> Professional </span> Trading Made Premium"}
          description={`Open a Professional Account with just $500 <br/> and access elite trading conditions.`}
          btnname={"Open Account Now"}
          position={'top-[22%] xl:w-[41%] right-0'}
        />
      </div>
      <div className="bg-theme py-12 md:py-18 lg:py-24">
        <div className="inn_container">
          <div className="text-center">
            <Title
              title={"Frequently Asked <br/> Questions"}
              color="text-white"
            />
          </div>
          <div>
            <Faq faqData={faqData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
