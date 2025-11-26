import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";



const Howstart = ({title,description ,howstartstepdata}) => {
  return (
    <div>
      <div className="inn_container  pt-12 xl:pt-24 2xl:pt-36">
        <div className="grid grid-col-1 md:grid-cols-2 pb-5 text-center md:text-start relative z-[2]">
          <Title
            title={title}
            color="gradient_text"
          />
          <div className="flex justify-center items-center">
            <Discription
              dispription={description}
              color="text-white"
            />
          </div>
        </div>

        <div className="pt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {howstartstepdata.map((data, index) =>
            <div
              className="shadow-[0_-15px_20px_-16px_#6a40ec,0_15px_16px_-15px_#6a40ec]  px-12 py-6  rounded-4xl z-[2] flex justify-center flex-col"
              key={index}
            >
              <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium gradient_text text-center lg:text-start">
                {data.title}
              </h5>
              <p
                className="!text-white list_text font-light font_ternary  max-w-[400px]  text-center md:text-start pt-2 lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px]"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Howstart;
