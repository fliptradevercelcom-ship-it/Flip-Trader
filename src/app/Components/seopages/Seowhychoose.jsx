import React from "react";
import Title from "../Uiux/Title";


const Seowhychoose = ({title,carddata}) => {
  return (
    <div>
      <div className="inn_container">
        <div className="text-center">
          <Title
            title={title}
            color={"gradient_text"}
          />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {carddata.map((data, index) =>
            <div
              className="flex flex-col px-8 2xl:px-12 py-12 shadow-[inset_-15px_0_20px_-16px_#6a40ec,inset_15px_0_16px_-15px_#6a40ec] rounded-4xl m-auto group h-full"
              key={index}
            >
              <p className="list_text font-light text-center  pt-6 font_ternary leading-[28px] max-w[330px] text-white">
                {data}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Seowhychoose;
