"use client";
import React, { useState } from "react";
import Title from "../Uiux/Title";
import { agreement } from "../../Data/PolicesData";
import AgreementAccordion from "./AgreementAccordion";
const TermCondition = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <div className="inn_container pt-5 md:pt-14">
        <div className="text-center">
          <Title title="Terms & Conditions" color="text-white" ish1={true} />
        </div>
        <div className="pt-12">
         <AgreementAccordion agreement={agreement} />
        </div>
      </div>
    </div>
  );
};

export default TermCondition;
