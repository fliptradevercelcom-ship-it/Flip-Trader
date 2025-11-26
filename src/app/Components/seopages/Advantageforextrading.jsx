import React from "react";
import Title from "../Uiux/Title";


const Advantageforextrading = ({title,advantageforextrading}) => {
  return (
    <div>
      <div className="inn_container pt-12 xl:pt-24 2xl:pt-36">
        <div className="text-center">
          <Title
            title={title}
            color={"text-white"}
          />
        </div>
        <div className="pt-12">
          <div className="pt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6 gap-y-12">
            {advantageforextrading.map((data, index) =>
              <div
                className="flex flex-col px-8 2xl:px-12 py-12 shadow-[inset_-15px_0_20px_-16px_#6a40ec,inset_15px_0_16px_-15px_#6a40ec] rounded-4xl h-full m-auto group"
                key={index}
              >
                <h5 className="text-2xl lg:text-3xl 2xl:text-4xl pt-8  font-medium gradient_text text-center">
                  {data.title}
                </h5>
                <div className="list_text font-light text-center  pt-6 font_ternary leading-[28px] max-w[330px] text-white">
                  {data.carddis}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantageforextrading;
