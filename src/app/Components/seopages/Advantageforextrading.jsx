import React from "react";
import Title from "../Uiux/Title";
const carddata = [
  {
    title: "Trade 70+ Currency Pairs",
    carddis: "Access a wide range of markets including USD/JPY, EUR/USD, GBP/USD, and exotic pairs, making us the preferred choice for forex currency trading in the region."
  },
  {
    title: "Fast Execution & Ultra-Low Spreads",
    carddis: "We provide spreads from 0.0 pips and lightning-fast execution, ensuring maximum accuracy during volatility. This gives Dubai traders the edge needed for high-performance trading."
  },
  {
    title: "Regulated Trading Environment",
    carddis: "Safety is a top priority. FlipTrade Group ensures secure deposits, transparent withdrawals, and advanced data protection protocols."
  },
  {
    title: "Multi-Platform Trading Convenience",
    carddis: "Whether you're at home, at work, or traveling, our MT5 mobile and desktop platforms give you full control over your trading activities."
  },
  {
    title: "Professional Support 24/7",
    carddis: "Our global support team is available round the clock to assist with your technical needs, trading questions, or platform guidance—making Forex trading easier for both beginners and experts."
  }
];

const Advantageforextrading = () => {
  return (
    <div>
      <div className="inn_container pt-12 xl:pt-24 2xl:pt-36">
        <div className="text-center">
          <Title
            title={
              "Advantages of Forex Trading in Dubai <br/> with FlipTrade Group"
            }
            color={"text-white"}
          />
        </div>
        <div className="pt-12">
          <div className="pt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6 gap-y-12">
            {carddata.map((data, index) =>
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
