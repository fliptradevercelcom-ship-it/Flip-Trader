import React from "react";
import Contestleaderboard from "../Components/Pagecomponents/Contestleaderboard";
import Pipworkstep from "../Components/Pagecomponents/Pipworkstep";
import Contesttime from "../Components/Pagecomponents/Contesttime";

const conteststepdata = [
  {
    title: "Sign up",
    description: "Sign up for a free <br/> PrimeXBT account"
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
function page() {
  return (
    <div className="pt-18 lg:pt-28 xl:pt-32">
      <Contestleaderboard btn_name={"Open Account"} />
      <Pipworkstep
        title={"What Is a Pip? & <br/> How it works"}
        dispription={
          "A pip (percentage in point) is the <br/> smallest price movement a currency <br/> pair can make based on market convention."
        }
        pointstep={conteststepdata}
      />
      <Contesttime />
    </div>
  );
}

export default page;
