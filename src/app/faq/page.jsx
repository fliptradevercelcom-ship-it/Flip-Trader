import React from "react";
import Faqbanner from "../Components/Pagecomponents/Faqbanner";
import Faqsearch from "../Components/Pagecomponents/Faqsearch";
export const metadata = {
  title: "FAQs – FlipTrade Group: Answers to Your Trading Questions",
  description:
    "Explore clear answers to common queries on Forex, CFDs, account types, deposits & withdrawals with FlipTrade Group’s FAQ page get informed before you trade."
};

function page() {
  return (
    <div>
      <Faqbanner />
      <Faqsearch />
    </div>
  );
}

export default page;
