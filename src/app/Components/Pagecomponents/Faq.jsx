"use client";
import { useState } from "react";
import plus from "../../../../public/icons/plus.svg";
import Image from "next/image";
import { useAutoScroll } from "../../../hooks/useAutoScroll";
const Faq = ({ faqData, pt }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useAutoScroll("faq-scroll", { delay: 800 });
  return (
    <div
      className={`max-w-[900px] 2xl:max-w-7xl m-auto ${pt === false
        ? "pt-8"
        : "pt-6 md:pt-12 xl:pt-16"} `}
        id="faq-scroll"
    >
      <div className="flex flex-col gap-4 md:gap-5 font_secondary">
        {faqData.map((faq, index) =>
          <div
            key={index}
            className="gradient_line_bg px-6 2xl:px-8 py-3 2xl:py-4 rounded-[10px] md:rounded-[20px] 2xl:rounded-3xl  transition-all duration-500 ease-in-out"
          >
            {/* Question */}
            <div
              onClick={() => toggleAnswer(index)}
              className={` cursor-pointer text-[#2D00B9] font_normal font-semibold  text-[17px] md:text-xl 2xl:text-[25px] flex justify-between items-center transition-all duration-500   ease-in-out`}
            >
              {index + 1}. {faq.question}
              <span
                className={`ml-2 transform   transition-all duration-500 ease-in-out ${activeIndex ===
                index
                  ? "rotate-135"
                  : "rotate-0"}`} 
              >
                <Image
                  src={plus}
                  alt="#"
                  width={1000}
                  height={500}
                  className="max-w-[18px] md:max-w-6"
                />
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{
                maxHeight: activeIndex === index ? "200px" : "0px"
              }}
            >
              <div
                className=" text-secondary text-base 2xl:text-xl font-medium py-2 ps-[2%] text-start custome_faq"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
