import React from "react";
import ForexBrokerBanner from "../Components/ForexBroker/ForexBrokerBanner";
import CustomersSay from "../Components/ForexBroker/CustomersSay";
import BrokerFeature from "../Components/ForexBroker/BrokerFeature";
import firebtnicon from "../../../public/icons/firebtnicon.svg";
import firebtniconblue from "../../../public/icons/firebtniconblue.svg";
import Button from "../Components/Uiux/Button";
import Spreadtable from "../Components/Pagecomponents/Spreadtable";
import Title from "../Components/Uiux/Title";
import OurPlatform from "../Components/ForexBroker/OurPlatform";
import TradingEducation from "../Components/Pagecomponents/TradingEducation";
import Faq from "../Components/Pagecomponents/Faq";
const pointstep = [
  {
    title: "Register",
    description: "to open an account"
  },
  {
    title: "Deposit",
    description: "safely and securely"
  },
  {
    title: "Start trading",
    description: "on web, mobile & desktop"
  }
];
const faqData = [
  {
    question: "What is Forex and CFD trading?",
    answer:
      "Forex and CFD trading allows traders to speculate on the price movements of currencies, indices, commodities, shares, and cryptocurrencies without owning the underlying assets."
  },
  {
    question: "Who can open a trading account with your broker?",
    answer:
      "Anyone who meets the eligibility criteria and successfully completes the registration and verification process can open a trading account with us."
  },
  {
    question: "Which trading platform do you offer?",
    answer:
      "We offer MetaTrader 5 (MT5), a powerful and advanced trading platform available on Web, Desktop, and Mobile devices."
  },
  {
    question: "What are the benefits of using MetaTrader 5 (MT5)?",
    answer:
      "MT5 offers advanced charting tools, multiple timeframes, built-in technical indicators, faster order execution, and support for automated trading strategies."
  },
  {
    question: "Is my money safe with your brokerage?",
    answer:
      "Yes, client funds are held in segregated accounts and protected with industry-standard security protocols to ensure a high level of fund safety."
  },
  {
    question: "Do you provide a demo account on MT5?",
    answer:
      "Yes, we offer a free MT5 demo account with virtual funds, allowing traders to practice strategies and explore platform features without any risk."
  },
  {
    question: "What trading instruments are available on MT5?",
    answer:
      "You can trade Forex pairs, indices, commodities, shares, and cryptocurrencies as CFDs using the MT5 platform."
  },
  {
    question: "What is leverage and how does it work in Forex trading?",
    answer:
      "Leverage allows traders to control larger positions with a smaller amount of capital. While leverage can increase profits, it also significantly increases risk."
  },
  {
    question: "What risk management tools are available?",
    answer:
      "MT5 provides risk management tools such as Stop Loss, Take Profit, pending orders, and negative balance protection to help traders manage risk effectively."
  },
  {
    question: "How can I deposit and withdraw funds?",
    answer:
      "Deposits and withdrawals can be made securely through the client portal using supported payment methods after completing the verification process."
  }
];


const page = () => {
  return (
    <div>
      <ForexBrokerBanner />
      <CustomersSay />
      <BrokerFeature />
      <OurPlatform />
      <div className="md:pt-10  max-w-7xl m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl m-auto gap-y-3">
          {pointstep.map((data, index) =>
            <div key={index}>
              <div className="m-auto w-[75px] xl:w-[90px] 2xl:w-[122px] h-[75px] xl:h-[90px] 2xl:h-[122px] bg-primary rounded-[50%] text-2xl xl:text-3xl 2xl:text-[40px] font_ternary flex items-center justify-center text-white">
                0{index + 1}
              </div>
              <div className="pt-3 md:pt-10">
                <div className="text-center">
                  <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl xl:pb-3 font-medium gradient_text text-center">
                    {data.title}
                  </p>
                  <span
                    className="list_text font-light text-center font_ternary leading-6 xl:leading-[28px] text-white"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="pt-6 md:pt-12 flex justify-center gap-6">
          <Button
            btn_name="Open Account"
            icon={firebtnicon}
            border_color="border-primary"
            btn_bg="bg-primary"
            shadow={true}
            text_color="text-white"
          />
          <Button
            btn_name="Try a Demo"
            icon={firebtniconblue}
            border_color="border-primary"
            btn_bg="bg-white"
            shadow={true}
            text_color="text-primary"
          />
        </div>
      </div>
      <div className="pt-12 md:pt-18">
        <div className="cus_container">
          <div className="text-center">
            <Title
              title={"Tight Spreads, Lightning <br/> Fast Execution"}
              color={"gradient_text"}
            />
          </div>
        </div>
        <Spreadtable />
      </div>
      <TradingEducation />
      <div className="bg-theme">
        <div className="inn_container pt-12 pb-16">
          <div className="text-center">
            <Title
              title={"Frequently Asked <br/> Questions"}
              color={"text-white"}
            />
          </div>
          <div className="pt-8">
            <Faq faqData={faqData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
