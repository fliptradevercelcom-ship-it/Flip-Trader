import React from "react";
import pipvaluebanner from "../../../../public/images/pipvalues.webp";
import Image from "next/image";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Worldbrokerbg from "../../../../public/images/Worldbrokerbg.webp";
import Button from "../Uiux/Button";
import fireicon from "../../../../public/icons/firebtniconblue.svg";
const Pipvalue = ({onScrollClick}) => {
  return (
    <div className="inn_container relative bg-no-repeat bg-center bg-cover min-h-[600px] sm:min-h-[500px] md:min-h-[660px] md:rounded-4xl"
     style={{ backgroundImage: `url(${Worldbrokerbg.src})` }}>
      <div className="inn_container py-12 md:py-18 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative  md:-bottom-18 lg:-bottom-24">
            <Image
              src={pipvaluebanner}
              alt="side image"
              width={1500}
              height={500}
              className="max-w-[650px] w-full m-auto"
            />
          </div>
          <div className="flex items-center justify-center lg:justify-start pt-12 lg:pt-0 text-center lg:text-start">
            <div>
              <Title
                title="Calculate Your <br/> Pip Values Instantly"
                color="text-white"
              />
              <div className="pt-2">
                <Discription
                  dispription="Know the value of each pip and make smarter <br /> trading decisions."
                  color="text-white"
                />
              </div>
              <div className="pt-8" onClick={onScrollClick}>
                <Button
                  btn_name="Start Calculating Now"
                  icon={fireicon}
                  border_color="border-white"
                  btn_bg="bg-white"
                  shadow={true}
                  text_color="text-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pipvalue;
