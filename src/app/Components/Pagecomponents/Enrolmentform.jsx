import React from "react";
import Enrolmentformbg from "../../../../public/images/Enrolmentformbg.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Enrolform from "./Enrolform";
const Enrolmentform = () => {
  return (
    <div className="theme pt-12 xl:pt-22 2xl:pt-30 px-[3%]">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url(${Enrolmentformbg.src})` }}
      >
        <div className="inn_container grid xl:grid-cols-2 py-12 md:py-18 xl:py-22 2xl:py-30">
          <div className="h-max my-auto text-center xl:text-start max-w-[80%] m-auto xl:m-0">
            <Title
              title={"Take the First Step Toward Smart  Trading"}
              color={"text-white"}
            />
            <div className="pt-2">
              <Discription
                dispription={
                  "Join our learning program and build real <br/> trading skills with guidance from <br/> professionals."
                }
                color={"text-white"}
              />
            </div>
          </div>
          <div className="pt-12 xl:pt-0">
            <Enrolform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enrolmentform;
