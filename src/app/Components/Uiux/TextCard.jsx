import React from "react";
import Title from "./Title";

const TextCard = ({ data, col_2, title, p_sec}) => {
  return (
    <div className={`inn_container px-0! md:px-[unset]! ${p_sec ? 'py-6' : 'py-12 md:py-18'} `}>
      {
        title &&
        <div className="text-center">
          <Title
            title={title}
            color={'text-white'}
          />
        </div>
      }

      <div className={`grid ${col_2 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}  gap-x-6  md:gap-y-6 `}>
        {data.map((item, index) => {
          return (
            <div className={`p-4 shadow-[1px_1px_0px_0px_#fff] rounded-3xl ${p_sec ? 'mt-4' : 'mt-12'}`} key={index}>
              <h4 className={`text-2xl md:text-[30px] font-medium text-white `}>{item.title}</h4>
              <div className="">
                <p
                  className="text-base md:text-xl font-normal  font_ternary text-white"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>

  );
};

export default TextCard;
