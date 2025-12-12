import React from "react";
import Accountsbanner from "../Components/Pagecomponents/Accouttypes/Accountsbanner";
import Accountgetstarted from "../Components/Pagecomponents/Accouttypes/Accountgetstarted";
import Accountchoose from "../Components/Pagecomponents/Accouttypes/Accountchoose";
import Accountcards from "../Components/Pagecomponents/Accouttypes/Accountcards";
import Accountgetstart from "../Components/Pagecomponents/Accouttypes/Accountgetstart";
import classicaccgrap from "../../../public/images/classicaccgrap.webp";
import classicaccgrapph from "../../../public/images/classicaccgrapph.webp";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
import classicbannerright from "/public/images/classicbannerright.webp";
import acountcard1 from "../../../public/icons/acountcard1.svg";
import acountcard2 from "../../../public/icons/acountcard2.svg";
import acountcard3 from "../../../public/icons/acountcard3.svg";
import Righttextgrap from "../Components/Pagecomponents/Righttextgrap";

export const metadata = {
  title: "Classic Account – Forex Trading Platforms | Fliptrade Group",
  description:
    "Explore the Classic Account at FlipTrade Group: enjoy tighter spread, low minimum deposit, and advanced tools for serious traders. Sign up and start trading today."
};
const faqData = [
  {
    question: "What is the minimum deposit for a Classic Account?",
    answer: "The minimum deposit is $100 to start trading."
  },
  {
    question: "Are spreads lower than the Standard Account?",
    answer:
      "Yes, Classic Account offers tighter spreads than the Standard Account."
  },
  {
    question: "Can I trade swap-free?",
    answer: "Yes, the Classic Account supports swap-free trading."
  },
  {
    question: "Is there any commission on trades?",
    answer: "No, there’s no commission on Classic Account trades."
  },
  {
    question: "Who is the Classic Account for?",
    answer:
      "It’s designed for experienced traders seeking better spreads and flexibility."
  }
];

const features = [
  {
    icon: acountcard1,
    title: "Experienced Traders",
    description: "For those ready to trade <br/> more consistently.",
    class: "z-[4]"
  },
  {
    icon: acountcard2,
    title: "Cost-Efficient Trading",
    description: "Tighter spreads without <br/> commissions.",
    class: "xl:w-[120%] left-[-20%] z-[3]"
  },
  {
    icon: acountcard3,
    title: "Swap-Free Flexibility",
    description: "Trade without paying or <br/> receiving swaps.",
    class: "xl:w-[120%] left-[-20%] z-[2]"
  }
];

const cardphdata = [
  "Sign in / register with FlipTrade.",
  "Pass the required verification / KYC.",
  "Deposit at least $100.",
  "Select the Classic Account type.",
  "Set up your trading platform and strategies."
];
const page = () => {
  return (
    <div>
      <Accountsbanner
        title={"Classic Account – Trade with Confidence"}
        description={
          "Step up your trading game with the Classic Account — perfect  for traders who want tighter spreads, faster execution, and  more control over their strategies."
        }
        bannerposter={classicbannerright}
      />
      <Accountgetstarted
        description={
          "Advanced features for growing traders—competitive, <br/> reliable, and built for consistent performance."
        }
        mini_depo={"$100"}
        spreads_from={"0.8 pips"}
        swap_free={"No"}
        commission={"No"}
      />
      <Accountchoose
        title={"Why Choose the <br/> Classic Account?"}
        description={
          "Trade with greater precision, tighter spreads, and <br/> enhanced tools—ideal for traders ready to take <br/> their skills to the next level."
        }
        cardtitle1={"Tighter Spreads"}
        card_desc1={
          "Lower trading costs compared to Standard, <br/> giving you more value per trade."
        }
        cardtitle2={"Swap-Free Option"}
        card_desc2={
          "Available for traders who cannot pay or receive swaps <br/> due to regulatory or religious reasons."
        }
        cardtitle3={"Optimized for Serious Traders"}
        card_desc3={
          "Designed for cost-conscious traders ready to <br/> trade with precision and confidence."
        }
      />
      <Accountcards
        description={
          "Perfect for growing traders, part-time traders, or anyone <br/> ready to step up from a Standard Account."
        }
        carddata={features}
      />
      <Accountgetstart
        description={
          "Essential features designed for new traders—simple, <br/> transparent, and ready for your first trade."
        }
        card1desk={"Sign in / register with <br/> FlipTrade."}
        card2desk={"Pass the required <br/> verification / KYC."}
        card3desk={"Deposit at least <br /> $100."}
        card4desk={"Select the Classic <br/> Account type."}
        card5desk={"Set up your trading <br/> platform and strategies."}
        cardphdata={cardphdata}
      />
      <div className="inn_container">
        <Righttextgrap
          desktopbanner={classicaccgrap}
          phonetabbanner={classicaccgrapph}
          title={"Classic Trading <br/> Made Easy"}
          description={`Open a Classic Account with just $100 and <br/> elevate your trading experience.`}
          btnname={"Open Account Now"}
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
