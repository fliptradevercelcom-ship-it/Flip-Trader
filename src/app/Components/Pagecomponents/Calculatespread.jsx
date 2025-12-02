import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";

const Calculatespread = () => {
  return (
    <div>
      <div className="inn_container pt-12 md:pt-18 lg:pt-28 xl:pt-32 ">
        <div className="text-center">
          <Title
            title={"How do you <br/> calculate the spread?"}
            color={"gradient_text"}
          />
          <Discription
            dispription={
              "The spread itself is measured in ‘pips’, which is the smallest unit of price movement of a currency pair. So, the spread in the below example is 0.2 Pips. Keep in mind the MT4/5 charts are designed to display prices aligned with raw spreads, regardless of the account type you are using. For Classic accounts, we recommend you keep in mind the spreads associated with it."
            }
            color={"text-white"}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculatespread;
