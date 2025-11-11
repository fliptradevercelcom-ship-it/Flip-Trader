import React from "react";
import Learntradingbanner from "../Components/Pagecomponents/Learntradingbanner";
import Learnwhy from "../Components/Pagecomponents/Learnwhy";
import Whatyoulearn from "../Components/Pagecomponents/Whatyoulearn";
import Journey from "../Components/Pagecomponents/Journey";

const page = () => {
  return (
    <div>
      <Learntradingbanner />
      <Learnwhy />
      <Whatyoulearn />
      <Journey />
    </div>

  );
};

export default page;
