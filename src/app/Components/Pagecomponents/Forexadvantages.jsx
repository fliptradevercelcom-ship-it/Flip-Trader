import React from "react";
import TextCard from "../Uiux/TextCard";

const forexFeatures = [
  {
    id: 1,
    title: "24 Hour Market",
    description:
      "The Forex market is open 24 hours a day, 5 days a week. Trading starts when major global financial centres around the world open. The market opens in New Zealand on Sunday evening and ends after the market closes in New York on Friday. The greatest liquidity occurs when multiple time zones overlap."
  },
  {
    id: 2,
    title: "Transparency",
    description:
      "In some exchange based markets, larger players have been known to move stocks or CFDs on commodities in order to gain an unfair advantage. Given the deep liquidity in the foreign exchange market it is almost impossible to interfere with general market forces. This results in a fair and transparent market for all participants."
  },
  {
    id: 3,
    title: "Trade Both Rising and Falling Markets",
    description:
      "There are no restrictions in the Forex market as to which direction you can trade. This means that if you believe a currency pair is going to increase in value you can buy it or go long. Similarly, if you believe the pair is going to decrease in value you could sell it, or go short."
  },
  {
    id: 4,
    title: "Accessibility",
    description:
      "The amount required to trade Forex is generally lower than what would be required to trade other financial markets. In addition to this, multiple desktop and mobile trading platforms make it easy to access the Forex markets at any time."
  },
  {
    id: 5,
    title: "Leverage",
    description:
      "Forex can be traded on leverage. Leverage means a lower initial outlay is required to open a larger position. For example, if you have $1,000 in your trading account and use leverage of 1:100, you would be able to open a position with a value of $100,000. However, although leverage gives traders the ability to open larger positions to maximise potential profits, the potential for loss is equally as large."
  },
  {
    id: 6,
    title: "Volatility",
    description:
      "Due to the huge daily volumes of the Forex market there is always volatility. Increased volatility means more access to trading opportunities. You have the ability to pick currency pairs that suit your trading style."
  },
  {
    id: 7,
    title: "Liquidity",
    description:
      "One of the main benefits of the Forex market is its superior liquidity. The foreign exchange market is the most liquid market in the world. The foreign exchange market turns over more than 5 trillion dollars each day which means assets can be quickly converted to cash without significant price changes."
  },
  {
    id: 8,
    title: "Disadvantages",
    description:
      "You should always consider your risk appetite and investment strategy prior to trading leveraged products. Leverage can work for you as well as against you and can magnify profits as well as losses. In the event of a significant move against you, you may lose more than your initial deposit."
  },
  {
    id: 9,
    title: "Low Cost of Trading",
    description:
      "The cost per transaction in Forex is less than a tenth of the cost of your average stock trade. This represents a huge saving. It also means a lower investment amount is needed to begin trading Forex."
  },
  {
    id: 10,
    title: "Non-Standardised Contract Sizes",
    description:
      "Forex is an over-the-counter market unlike the stock and futures markets. This means Forex traders have flexibility in position sizing and can trade any amount between 0.01 lots (1 micro lot) and 200 lots. This gives traders a greater ability to manage their risk."
  }
];
const Forexadvantages = () => {
  return (
    <div className="inn_container">
      <div className="container mx-auto py-6 md:py-18">
        <p className="description_text font-semibold font_ternary text-white">
          Margin foreign exchange is a contract between two parties agreeing to
          exchange the difference in the value of a currency between the time at
          which the position is opened and the time at which it is closed.
        </p>
        <p className="description_text font-medium font_ternary text-white pt-6">
          The main advantage of foreign exchange (Forex) is that is open around
          the clock 24 hours a day 5 days a week, enabling traders to buy and
          sell from Sunday night to Friday night and access leverage in order to
          speculate from global currency flows and news events. Forex is also
          the largest and most liquid market in the world making it the last of
          the true arenas where fair market competition and real price discovery
          exists.
        </p>
        <p className="description_text font-medium font_ternary text-white">
          Some of the advantages of Forex trading are listed below. Find out why
          Forex is fastest growing market in the world.
        </p>

        <div className="md:pt-6">
          <TextCard data={forexFeatures} p_sec={true} col_2={true} />
        </div>
      </div>
    </div>
  );
};

export default Forexadvantages;
