import React from "react";
import GlobleBanner from "../Components/Uiux/GlobleBanner";
import TextCard from "../Components/Uiux/TextCard";

 const riskDisclosureData = [
  {
    title: "Risk Warning",
    description:
      "Trading in financial markets, including Forex, CFDs, commodities, indices, and cryptocurrencies, involves a high level of risk and may not be suitable for all investors. The possibility exists that you could lose some or all of your invested capital, therefore you should not invest money that you cannot afford to lose."
  },
  {
    title: "Investor Responsibility",
    description:
      "Before deciding to trade, you should carefully consider your investment objectives, level of experience, and risk appetite. If necessary, seek advice from an independent financial advisor."
  },
  {
    title: "No Investment Advice",
    description:
      "The information provided on this website is intended for general informational purposes only and does not constitute investment advice, financial advice, trading advice, or any other form of recommendation. Users are solely responsible for their trading decisions."
  },
  {
    title: "Market Risks",
    description:
      "Financial markets are volatile and prices may fluctuate rapidly due to various factors including economic events, geopolitical developments, and market sentiment. Past performance of any trading system, strategy, or financial instrument does not guarantee future results."
  },
  {
    title: "Leverage Risk",
    description:
      "Trading with leverage can significantly increase both potential profits and potential losses. While leverage can amplify gains, it can also lead to substantial losses within a short period of time."
  },
  {
    title: "Third-Party Risks",
    description:
      "Our platform may include links or integrations with third-party services such as payment providers, liquidity providers, and technology platforms. Flip Trade Group is not responsible for the policies, actions, or services provided by third parties."
  },
  {
    title: "Technology & Execution Risks",
    description:
      "Online trading relies on internet connectivity, electronic systems, and third-party infrastructure. Technical failures, connectivity issues, or system errors may result in delays or disruptions in order execution."
  },
  {
    title: "Jurisdiction Restrictions",
    description:
      "Services offered by Flip Trade Group may not be available in certain jurisdictions or countries where such services would be contrary to local laws or regulations. It is the responsibility of the user to ensure compliance with their local laws before using our services."
  },
  {
    title: "Legal Disclaimer",
    description:
      "By accessing or using this website, you acknowledge that you have read, understood, and agreed to the risks associated with trading and the terms outlined in this disclosure."
  }
];
const page = () => {
  return (
    <div>
      <GlobleBanner
        title={"Risk Disclosure"}
        description={
          "Trading in Forex and CFDs involves a high level of risk and may not be suitable for all investors. FlipTrade Group advises traders to carefully consider their investment objectives and risk tolerance before participating in the financial markets"
        }
        btn_name={"Trade Forex"}
        btn_link={"https://client.fliptradegroup.com/trader/registration"}
      />

      <div className="inn_container pt-12">
        <TextCard data={riskDisclosureData} p_sec={true}  col_2={true}/>
      </div>
    </div>
  );
};

export default page;
