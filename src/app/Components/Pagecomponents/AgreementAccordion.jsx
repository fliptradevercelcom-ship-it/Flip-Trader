"use client";
import { useState } from "react";
import Image from "next/image";
import plus from "../../../../public/icons/plus.svg";

const AgreementAccordion = ({ agreement }) => {
  const [activeIndex, setActiveIndex] = useState([]);

  const toggle = (index) => {
    setActiveIndex((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="max-w-[900px] 2xl:max-w-7xl mx-auto pt-10 font_secondary">
      <div className="flex flex-col gap-4">

        {agreement?.chapters?.map((chapter, index) => (
          <div
            key={index}
            className="gradient_line_bg px-6 2xl:px-8 py-4 rounded-[12px] md:rounded-[20px] 2xl:rounded-3xl transition-all duration-500"
          >

            {/* HEADER */}
            <div
              onClick={() => toggle(index)}
              className="cursor-pointer text-black font-semibold text-[17px] md:text-xl 2xl:text-[24px] flex justify-between items-center"
            >
              {index + 1}. {chapter.chapter} - {chapter.chapterTitle}

              <span
                className={`transition-all duration-500 ${
                  activeIndex.includes(index) ? "rotate-45" : "rotate-0"
                }`}
              >
                <Image
                  src={plus}
                  alt="plus icon"
                  width={20}
                  height={20}
                  className="max-w-[18px] md:max-w-6"
                />
              </span>
            </div>

            {/* BODY */}
            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                maxHeight: activeIndex.includes(index) ? "2000px" : "0px"
              }}
            >
              <div className="pt-4 space-y-5">

                {chapter.sections?.map((sec) => (
                  <div key={sec.id} className="border-b border-white/10 pb-4">

                    {/* QUESTION */}
                    <p className="text-[15px] md:text-[17px] 2xl:text-[19px] text-black font-medium">
                       {sec.title}
                    </p>

                    {/* ANSWER */}
                    <div className="ps-5 pt-2 space-y-2">
                      {sec.points.map((point, i) => (
                        <p
                          key={i}
                          className="text-[14px] 2xl:text-[16px] text-black/80 leading-relaxed"
                        >
                          {point}
                        </p>
                      ))}
                    </div>

                  </div>
                ))}

              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default AgreementAccordion;