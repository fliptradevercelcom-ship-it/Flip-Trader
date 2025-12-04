import React from "react";
import Spredsbanner from "../Components/Pagecomponents/Spredsbanner";
import Spredswhy from "../Components/Pagecomponents/Spredswhy";
import Spreadtable from "../Components/Pagecomponents/Spreadtable";
import Calculatespread from "../Components/Pagecomponents/Calculatespread";
import Spredscontent from "../Components/Pagecomponents/Spredscontent";

function page() {
  return (
    <div>
      <Spredsbanner />
      <Spreadtable />
      <Spredswhy />
      <Calculatespread />
      <Spredscontent />
    </div>
  );
}

export default page;
