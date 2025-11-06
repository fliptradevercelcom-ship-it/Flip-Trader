import React from "react";
import Accountsbanner from "../Components/Pagecomponents/Accouttypes/Accountsbanner";
import Accountgetstarted from "../Components/Pagecomponents/Accouttypes/Accountgetstarted";
import Accountchoose from "../Components/Pagecomponents/Accouttypes/Accountchoose";
import Accountcards from "../Components/Pagecomponents/Accouttypes/Accountcards";
import Accountgetstart from "../Components/Pagecomponents/Accouttypes/Accountgetstart";
import standardaccgrap from "../../../public/images/standardaccgrap.webp";
import standardaccgrapph from "../../../public/images/standardaccgrapph.webp";
import Accountgrap from "../Components/Pagecomponents/Accouttypes/Accountgrap";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
import standardbannerright from "/public/images/standardbannerright.webp";
import acountcard1 from "/public/icons/acountcard1.svg";
import acountcard2 from "/public/icons/acountcard2.svg";
import acountcard3 from "/public/icons/acountcard3.svg";
import Righttextgrap from "../Components/Pagecomponents/Righttextgrap";
const faqData = [
  {
    question: "What is the minimum deposit for the Standard Account?",
    answer: "The minimum deposit is $25, making it ideal for beginners."
  },
  {
    question: "Does the Standard Account charge any commission?",
    answer: "No, the Standard Account has zero commission fees."
  },
  {
    question: "Is the Standard Account swap-free?",
    answer: "Yes, it’s swap-free, suitable for all traders."
  },
  {
    question: "Who is the Standard Account best suited for?",
    answer: "It’s perfect for beginner and intermediate traders."
  },
  {
    question: "How do I open a Standard Account?",
    answer: "Simply sign up on FlipTrade Group’s website and complete the quick registration process."
  }
];


const features = [
  {
    icon: acountcard1,
    title: "Experienced Traders",
    description: "Trade frequently with <br/> defined strategies.",
    class: "z-[4]"
  },
  {
    icon: acountcard2,
    title: "High-Capital Traders",
    description: "Maximize efficiency where <br /> spreads matter.",
    class: "xl:w-[120%] left-[-20%] z-[3]"
  },
  {
    icon: acountcard3,
    title: "Algo Traders",
    description: "Seek optimal execution <br /> and speed.",
    class: "xl:w-[120%] left-[-20%] z-[2]"
  }
];

const cardphdata = [
  "Register your account on FlipTrade.",
  "Complete the KYC (Know Your Customer) process.",
  "Deposit at least the minimum ($25).",
  "Choose “Standard Account” as your account type in the dashboard.",
  "Begin trading."
];
export const metadata = {
  title : 'Standard Account – Forex Trading – Trading Account Types',
  description : 'Create your Standard Account with FlipTrade Group: minimum deposit range, no commission, from 1.2 pips spreads. Start forex trading , indices & crypto today.'
}
const page = () => {
  return (
    <div>
      <Accountsbanner
        title={"Standard Account – Your  Step into Trading"}
        description={
          "Get started with minimal risk—our Standard Account is designed for new  traders ready to grow."
        }
        bannerposter={standardbannerright}
      />
      <Accountgetstarted
        description={
          "Essential features designed for new traders—simple, <br/> transparent, and ready for your first trade."
        }
        mini_depo={"$25"}
        spreads_from={"1.2 pips"}
        swap_free={"Yes"}
        commission={"No"}
      />
      <Accountchoose
        title={"Why Choose the <br/> Standard Account?"}
        description={
          "Trade easily, transparently, and flexibly—perfect <br/> for beginners exploring the markets."
        }
        cardtitle1={"Low barrier to entry"}
        card_desc1={"Just a small deposit to begin trading."}
        cardtitle2={"Simple cost structure"}
        card_desc2={"No hidden commissions, clear spreads."}
        cardtitle3={"Flexibility"}
        card_desc3={
          "Suits traders exploring forex, indices, commodities, crypto <br/> and more under the FlipTrade platform."
        }
      />
      <Accountcards
        description={
          "Ideal for beginners, part-time traders, or anyone <br/> starting small before scaling up."
        }
        carddata={features}
      />
      <Accountgetstart
        description={
          "Essential features designed for new traders—simple, <br/> transparent, and ready for your first trade."
        }
        card1desk={"Register your account <br/> on FlipTrade."}
        card2desk={"Complete the KYC (Know <br/> Your Customer) process."}
        card3desk={"Deposit at least the <br/> minimum ($25)."}
        card4desk={
          "Choose “Standard Account” <br/> as your account type in the <br/>  dashboard."
        }
        card5desk={"Begin <br/> trading."}
        cardphdata={cardphdata}
      />
      <div className="inn_container">
        <Righttextgrap
          desktopbanner={standardaccgrap}
          phonetabbanner={standardaccgrapph}
          title={"Trade Easy with <span class='text-primary'> Standard </span>"}
          description={`Open a Standard Account with just $25 and take your first step into the markets.`}
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
