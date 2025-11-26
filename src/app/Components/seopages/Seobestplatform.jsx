import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";

const Seobestplatform = ({title,description,platyformdata}) => {
  return (
    <div>
      <div className="inn_container pt-12 xl:pt-24 2xl:pt-36">
        <div className="grid grid-col-1  pb-5 text-center  relative z-[2]">
          <Title
            title={title}
            color="text-white"
          />
          <div className="flex justify-center items-center max-w-7xl m-auto">
            <Discription
              dispription={description}
              color="text-white"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pt-12">
          {platyformdata.map((data, index) =>
            <div
              className=" bg-cover bg-no-repeat py-6 shadow-[inset_0_15px_20px_-10px_#6a40ecc2,inset_0_-15px_20px_-10px_#6a40ecc2] rounded-4xl min-h-[130px] flex justify-center items-center relative"
              key={index}
            >
              <p className="md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-white min-w-[200px] text-center pb-2">
                {data}
              </p>
              <span className="h-10 w-10 flex justify-center items-center rounded-[50%] bg-primary text-white text-lg absolute -top-2 -left-2">
                {index + 1}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Seobestplatform;
