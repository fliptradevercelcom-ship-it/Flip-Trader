"use client";
import { useState } from "react";
import plus from "../../../../public/icons/plus.svg";
import Image from "next/image";
import { useAutoScroll } from "../../../hooks/useAutoScroll";

const ConditionHourFaq = ({ faqData, pt }) => {
  const [activeIndex, setActiveIndex] = useState([]);

  const toggleAnswer = index => {
    setActiveIndex(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  useAutoScroll("faq-scroll", { delay: 800 });

  return (
    <div
      id="faq-scroll"
      className={`max-w-[900px] 2xl:max-w-7xl m-auto ${
        pt === false ? "pt-8" : "pt-6 md:pt-12 xl:pt-16"
      }`}
    >
      <div className="flex flex-col gap-4 md:gap-5 font_secondary">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="gradient_line_bg px-6 2xl:px-8 py-3 2xl:py-4 rounded-[10px] md:rounded-[20px] 2xl:rounded-3xl transition-all duration-500 ease-in-out"
          >
            <div
              onClick={() => toggleAnswer(index)}
              className="cursor-pointer text-[#2D00B9] font_normal font-semibold text-[17px] md:text-xl 2xl:text-[25px] flex justify-between items-center transition-all duration-500 ease-in-out"
            >
              <span>
                {index + 1}. {faq.question}
              </span>

              <span
                className={`ml-2 transform transition-all duration-500 ease-in-out ${
                  activeIndex.includes(index) ? "rotate-135" : "rotate-0"
                }`}
              >
                <Image
                  src={plus}
                  alt="plus icon"
                  width={1000}
                  height={500}
                  className="max-w-[18px] md:max-w-6"
                />
              </span>
            </div>

            <div
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                maxHeight: activeIndex.includes(index) ? "5000px" : "0px"
              }}
            >
              <div className="pt-4 space-y-6">
                {faq.answerSections?.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    {section.title && (
                      <h5 className="text-[20px] md:text-[22px] font-semibold text-black pb-3">
                        {section.title}
                      </h5>
                    )}

                    {section.type === "table" && (
                      <div className="overflow-x-auto rounded-[12px] border border-[#d9d9d9] bg-white">
                        <table className="w-full border-collapse">
                          {section.headers?.length > 0 && (
                            <thead>
                              <tr className="bg-primary text-white">
                                {section.headers.map((header, headerIndex) => (
                                  <th
                                    key={headerIndex}
                                    className="text-left px-4 py-3 text-[14px] md:text-[16px] font-semibold border-b border-[#d9d9d9]"
                                  >
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                          )}

                          <tbody>
                            {section.rows?.map((row, rowIndex) => (
                              <tr
                                key={rowIndex}
                                className={`${
                                  row.highlight ? "bg-[#dff3df]" : "bg-white"
                                } border-b border-[#e5e5e5]`}
                              >
                                {row.columns?.map((col, colIndex) => (
                                  <td
                                    key={colIndex}
                                    className="px-4 py-3 text-[14px] md:text-[16px] text-black align-top"
                                  >
                                    {col}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {section.type === "list" && (
                      <ul className="space-y-2">
                        {section.items?.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-[16px] md:text-[17px] text-black list-disc list-inside"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.type === "text" && (
                      <p className="text-[16px] md:text-[17px] text-black leading-relaxed">
                        {section.content}
                      </p>
                    )}
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

export default ConditionHourFaq;