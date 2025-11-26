import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtniconblue from "../../../../public/icons/firebtniconblue.svg";
const Enddescription = ({title,despription}) => {
  return (
    <div>
      <div className="inn_container pt-12 xl:pt-24 2xl:pt-36">
        <div className="text-center max-w-7xl m-auto">
          <Title
            title={title}
            color={"gradient_text"}
          />
          <div className="pt-3">
            <Discription
              dispription={despription}
              color={"text-white"}
            />
          </div>
          <div className="pt-6">
            <Button
              icon={firebtniconblue.src}
              btn_name="Start Trading Now"
              btn_bg="bg-white"
              text_color="text-primary"
              border_color="border-white"
              shadow={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enddescription;
