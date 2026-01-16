import React from "react";
import Contestleaderboard from "../Components/Pagecomponents/Contestleaderboard";
import Pipworkstep from "../Components/Pagecomponents/Pipworkstep";
import Contesttime from "../Components/Pagecomponents/Contesttime";
import Contestdescription from "../Components/Pagecomponents/Contestdescription";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";

const conteststepdata = [
  {
    title: "Sign up",
    description: "Sign up for a free <br/> Fliptrade Group account"
  },
  {
    title: "Choose  Contest",
    description: "Choose the contests you <br/> want to join"
  },
  {
    title: "Trading Rewards",
    description: "Top the leaderboards and earn real <br/> money to trade with"
  }
];
const faqData = [
  {
    question: "What is a trading contest?",
    answer:
      "A trading contest allows traders to compete with each other over a fixed period. Participants are ranked on the leaderboard based on their trading performance."
  },
  {
    question: "How can I join a trading contest?",
    answer:
      "Simply sign up, complete KYC (for live contests), open the required account (demo or live), and click on the 'Join Contest' button."
  },
  {
    question: "What is the difference between Demo and Live Trading contests?",
    answer:
      "Demo contests use virtual funds for practice and learning, while Live Trading contests require real accounts and offer real cash prizes."
  },
  {
    question: "Are there any entry fees for contests?",
    answer:
      "Demo contests are usually free to join. Live Trading contests may require a minimum deposit depending on the contest type."
  },
  {
    question: "How are winners selected?",
    answer:
      "Winners are ranked based on performance metrics such as profit percentage and trading results displayed on the leaderboard."
  },
  {
    question: "What prizes can I win?",
    answer:
      "Prizes include real trading funds and cash rewards such as $5,000, $10,000, or $15,000 depending on the contest."
  },
  {
    question: "Is KYC mandatory to participate?",
    answer:
      "KYC is mandatory for Live Trading contests to ensure compliance and secure prize distribution. Demo contests do not require KYC."
  },
  {
    question: "How many participants can join a contest?",
    answer:
      "Each contest has a limited number of slots, such as 100 or 500 participants. Slots are filled on a first-come, first-served basis."
  },
  {
    question: "Can I participate in multiple contests?",
    answer:
      "Yes, you can join multiple contests as long as you meet the requirements for each contest."
  },
  {
    question: "When will I receive my prize?",
    answer:
      "Prizes are credited to the winner’s account after the contest ends and results are verified."
  }
];

function page() {
  return (
    <div className="pt-18 lg:pt-28 xl:pt-32">
      <Contestleaderboard btn_name={"Open Account"} />
      <Contestdescription />
      <Contesttime />
      
      <Pipworkstep
        title={"Start Your First Trading Contest"}
        dispription={
          "No experience required. Sign up, pick a contest, and begin trading to win real rewards."
        }
        pointstep={conteststepdata}
      />
      <div className="bg-theme">
        <div className="inn_container pt-12 pb-16">
          <div className="text-center">
            <Title
              title={"Frequently Asked <br/> Questions"}
              color={"text-white"}
            />
          </div>
          <div className="pt-8">
            <Faq faqData={faqData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
