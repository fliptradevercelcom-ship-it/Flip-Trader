import React from "react";
import Title from "../Uiux/Title";

const descriptionlist = [
  "As forex trading in Dubai grows year after year, FlipTrade Group continues to lead the market with innovative tools, fair pricing, and a seamless trading experience.",
  "We offer access to a broad spectrum of instruments, including Forex, Metals, Commodities, Cryptocurrencies, Indices, and the forex share market, giving traders unlimited potential to diversify and maximize opportunities.",
  "By choosing FlipTrade Group, you are selecting a regulated global broker committed to transparency, speed, and trader success. Whether you’re trading currencies, precious metals, or global indices, our platform brings the world’s markets to your fingertips."
];
const Seowhychoose = () => {
  return (
    <div>
      <div className="inn_container">
        <div className="text-center">
          <Title
            title={"Why Choose FlipTrade Group for Forex Trading in Dubai?"}
            color={"gradient_text"}
          />
        </div>
        <div className="grid grid-cols-3 gap-6 pt-12">
          {descriptionlist.map((data, index) =>
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
