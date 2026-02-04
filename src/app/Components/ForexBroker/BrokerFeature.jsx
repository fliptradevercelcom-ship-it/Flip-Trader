import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";

const featureCards = [
  {
    __id: "01",
    title: "Elite products, value, and execution",
    description: [
      "Choose from thousands of CFD markets across a variety of asset classes, including EUR/USD, US SP 500, Tesla and Nvidia.",
      "Enjoy consistently low trading costs and fast, quality execution."
    ],
    cta: "TRADE MARKETS",
    link: "#"
  },
  {
    __id: "02",
    title: "Tools designed for your edge",
    description: [
      "Choose from a variety of platforms and refine your trading with exclusive data tools like Performance Analytics.",
      "Take full command of your analysis with industry-leading TradingView charts and in-platform news feeds."
    ],
    cta: "GET TRADING TOOLS",
    link: "#"
  },
  {
    __id: "03",
    title: "A superior customer experience",
    description: [
      "Access knowledgeable customer support by phone, email or chat and enjoy convenient online account management tools.",
      "VIP traders can experience personalised service and exclusive benefits."
    ],
    cta: "CUSTOMER SUPPORT",
    link: "#"
  },
  {
    __id: "04",
    title: "A trusted global leader",
    description: [
      "We’re a wholly-owned subsidiary of StoneX Group, a Nasdaq-listed Fortune 50 financial giant with operating revenue of $3.4 billion.",
      "Fully regulated and financially stable, providing trading services since 2001."
    ],
    cta: "FINANCIAL STRENGTH",
    link: "#"
  }
];

const BrokerFeature = () => {
  return (
    <div>
      <div className="inn_container py-12 md:py-18">
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] gap-3">
          <div className="text-center lg:text-start">
            <Title
              title={"Why trade with  fliptradegroup.com"}
              color={"gradient_text"}
            />
            <div>
              <Discription
                dispription={`
                  Proudly supporting traders worldwide, we are committed to offering cutting-edge platforms, education, insights and opportunities for market success.
                  <br />
                  That's why over one million traders* have chosen us as their trusted partner.
                 `}
                color={"text-white"}
              />
            </div>
            <div className="pt-8">
              <Button
                btn_name="Open Account"
                icon={firebtnicon}
                border_color="border-primary"
                btn_bg="bg-primary"
                shadow={true}
                text_color="text-white"
              />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:max-w-[90%] m-auto pt-6 xl:pt-0">
              {featureCards.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="py-8 px-4 2xl:px-6 bg-[linear-gradient(180deg,rgba(106,64,236,0.62)_0%,rgba(0,0,0,1)_100%)] rounded-2xl text-white"
                  >
                    <h3 className="text-5xl">
                      {item.__id}
                    </h3>

                    <h3 className="text-xl 2xl:text-2xl mb-4 pt-3">
                      {item.title}
                    </h3>

                    {item.description.map((text, i) =>
                      <p
                        key={i}
                        className="mb-4 text-base opacity-90 font_ternarynormal"
                      >
                        {text}
                      </p>
                    )}

                    <a
                      href={item.link}
                      className="mt-6 inline-flex items-center gap-2"
                    >
                      {item.cta} →
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerFeature;
