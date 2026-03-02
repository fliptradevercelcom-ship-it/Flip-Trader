import React from "react";
import GlobleBanner from "../Components/Uiux/GlobleBanner";
import ReferDescription from "../Components/Pagecomponents/ReferDescription";
import Pipworkstep from "../Components/Pagecomponents/Pipworkstep";
import Title from "../Components/Uiux/Title";
import Faq from "../Components/Pagecomponents/Faq";
import Discription from "../Components/Uiux/Discription";
import Button from "../Components/Uiux/Button";
import firebtn from "../../../public/icons/firebtniconblue.svg";
import referfriend from '../../../public/images/referafrind-banner.webp';
import Image from "next/image";

const workstep = [
  {
    title: "Share Your Referral Link",
    description: "Invite new users by sharing your unique  referral link."
  },
  {
    title: "User Makes First Deposit",
    description:
      "Your referred user signs up and completes their first deposit."
  },
  {
    title: "Earn Your $100 Bonus Reward",
    description:
      "Receive a $100 bonus once the first deposit is successfully made."
  }
];

const faqData = [
{
  question: "How can I earn the $100 referral reward?",
  answer:
    "You can earn a $100 reward when a new user joins the platform through your referral and completes a minimum first deposit of $1000."
},
  {
    question: "When will I receive my $100 reward?",
    answer:
      "The reward is credited automatically once the referred user successfully makes their first deposit."
  },
  {
    question: "Is there a limit on referral earnings?",
    answer:
      "No, there is no limit. You can earn $100 for every new user who completes their first deposit."
  },
  {
    question: "Does the new user need to make a deposit?",
    answer:
      "Yes, the reward is only issued after the referred user completes their first successful deposit."
  },
  {
    question: "Who is eligible for the referral reward?",
    answer:
      "Any registered user who invites new traders that complete their first deposit is eligible for the reward."
  }
];
const page = () => {
  return (
    <div>
      <GlobleBanner
        title={"Earn $100 for Every First Deposit Referral"}
        description={
          "Invite traders to join and get rewarded. Receive a $100 bonus when your referred user makes their first deposit."
        }
        btn_name={"Start Trading"}
        btn_link={"https://client.fliptradegroup.com/trader/registration"}
        banner={referfriend}
      />

      <ReferDescription />

      <div>
        <Pipworkstep
          title={"How it works"}
          only_title={true}
          pointstep={workstep}
          button={true}
          btn_name={"Start Trading"}
          btn_link={"https://client.fliptradegroup.com/trader/registration"}
        />
      </div>
      <div className="ps-4 max-w-[95%] mx-auto border-2 border-white rounded-4xl">
        <div className=" grid lg:grid-cols-2">
          <div className=" py-10">
            <Title
              title={"Discover Reward with Fliptrade Group"}
              color={"text-white"}
            />
            <div className="md:pb-8">
              <Discription
                dispription={
                  "With Fliptrade Group Rewards, you earn benefits as you trade and grow your network. Unlock exclusive rewards and enjoy greater earning opportunities as your activity increases. Redeem your rewards anytime and make the most of your trading journey."
                }
                color={"text-white"}
              />
            </div>
          </div>
          <div className="hidden md:flex items-end">
            <Image
              src={'/images/lowerfooter.webp'}
              alt=""
              width={1000}
              height={500}
              className="h-[90%] rounded-br-4xl object-contain"
            />
          </div>
        </div>
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
