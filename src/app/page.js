import React from "react";
import Banner from "./Components/Pagecomponents/Banner";
import Homemarquee from "./Components/Pagecomponents/Homemarquee";
import Buildtrader from "./Components/Pagecomponents/Buildtrader";
import Exploremarket from "./Components/Pagecomponents/Exploremarket";
import Workprocess from "./Components/Pagecomponents/Workprocess";
import Tradingaccounts from "./Components/Pagecomponents/Tradingaccounts";
import Tradeyourway from "./Components/Pagecomponents/Tradeyourway";
import Nextgennew from "./Components/Pagecomponents/Nextgennew";
import Calculatepipvalue from "./Components/Pagecomponents/Calculatepipvalue";
import Contestleaderboard from "./Components/Pagecomponents/Contestleaderboard";

function page() {
  return (
    <div className="bg-black">
      <Banner />
      <Homemarquee />
      <Buildtrader />
      <Nextgennew />
      <Exploremarket />
      <Calculatepipvalue />
      <Workprocess />
      <Contestleaderboard btn_name={'Join the Contest Now'}/>
      <Tradingaccounts />
      <Tradeyourway />
    </div>
  );
}

export default page;
