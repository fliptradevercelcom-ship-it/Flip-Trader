"use client";
import React, { useState } from "react";
import TextCard from "../Uiux/TextCard";
import ConditionHourFaq from "./ConditionHourFaq";

export const TradingConditions = () => {
  const tradingConditions = [
    {
      id: 1,
      title: "Spreads",
      description:
        "Our spreads are market leading with prices streaming from over 25 different sources at high speed, ensuring you always trade at the best available price. Spreads can go as low as 0.0 pips on our MetaTrader 5 Raw platforms."
    },
    {
      id: 2,
      title: "Execution",
      description:
        "Our average execution speed is under 40ms once the order is received by Flip Trade Group. Trades are executed at one of the fastest speeds in the industry with deep market access and ultra-fast servers located in New York and London."
    },
    {
      id: 3,
      title: "Margin and Leverage",
      description:
        "By offering leverage up to 1:1000, we open access to the forex market for retail traders. Using leverage requires only a small initial margin, but while it can magnify gains, losses can also exceed your initial deposit."
    },
    {
      id: 4,
      title: "Currency Pairs",
      description:
        "Flip Trade Group streams prices on 60 different currency pairs and 4 metals across all trading platforms. By aggregating quotes from over 25 pricing sources, we offer competitive pricing and fast execution for day traders, scalpers, and EA users."
    },
    {
      id: 5,
      title: "Swap Rates",
      description:
        "We offer both long and short swap rates for all currency pairs and metals. Swap rates are based on the overnight interest rate difference between the two currencies and depend on whether the position is long or short."
    },
    {
      id: 6,
      title: "Trading Hours",
      description:
        "Know exactly when the markets are open with clearly defined trading hours across our wide range of products. Trading hours can also be viewed directly within the MetaTrader, cTrader, and TradingView trading platforms."
    }
  ];

  return (
    <div>
      <TextCard data={tradingConditions} p_sec={true} col_2={true} />
    </div>
  );
};

export const TradingHour = () => {
  const faqData = [
    {
      question: "Currency Pairs",
      answerSections: [
        {
          type: "table",
          title: "Currency Pairs",
          headers: ["Currency Pairs", "Trading Hours (server time)"],
          rows: [
            {
              columns: ["All", "00:01 – 23:59 (Friday: 00:01 – 23:57)"]
            }
          ]
        }
      ]
    },
    {
      question: "Metals",
      answerSections: [
        {
          type: "table",
          title: "Metals",
          headers: ["Metals", "Trading Hours (server time)"],
          rows: [
            {
              columns: ["XAU/USD", "01:02 - 23:59 (Friday: 01:02 - 23:57)"]
            },
            {
              columns: ["XAU/EUR", "01:02 - 23:59 (Friday: 01:02 - 23:57)"]
            },
            {
              columns: ["XAU/AUD", "01:02 - 23:59 (Friday: 01:02 - 23:57)"]
            },
            {
              columns: ["XAG/USD", "01:02 - 23:59 (Friday: 01:02 - 23:57)"]
            },
            {
              columns: ["XAG/EUR", "01:02 - 23:59 (Friday: 01:02 - 23:57)"]
            },
            {
              columns: ["XPT/USD", "01:02 - 23:59 (Friday: 01:02 - 23:57)"]
            },
            {
              columns: ["XPD/USD", "01:02 - 23:59 (Friday: 01:02 - 23:57)"]
            }
          ]
        }
      ]
    },
    {
      question: "Spot Energies",
      answerSections: [
        {
          type: "table",
          title: "Spot Energies",
          headers: ["Spot Energies", "Trading Hours (server time)"],
          rows: [
            {
              columns: ["XTI/USD", "01:00 – 23:59 (Friday: 01:00 – 23:57)"]
            },
            {
              columns: ["XNG/USD", "01:00 – 23:59 (Friday: 01:00 – 23:57)"]
            },
            {
              columns: [
                "XBR/USD",
                "Monday: 01:00 – 23:59 ; Tuesday – Thursday: 03:00 – 23:59 ; Friday: 03:00 – 23:57"
              ]
            }
          ]
        }
      ]
    },
    {
      question: "Soft CFDs on Commodities",
      answerSections: [
        {
          type: "table",
          title: "Soft CFDs on Commodities",
          headers: [
            "Soft CFDs on Commodities",
            "Daily Trading hours (server time)",
            "Daily Break (server time)"
          ],
          rows: [
            {
              columns: ["Corn", "03:00 – 21:20", "15:45 – 16:30, 21:20 – 03:00"]
            },
            {
              columns: ["Coffee", "11:16 – 20:30", "20:30 – 11:16"]
            },
            {
              columns: [
                "Soybean",
                "03:00 – 21:15",
                "15:45 – 16:30, 21:15 – 03:00"
              ]
            },
            {
              columns: ["Sugar", "11:31 – 20:00", "20:00 – 10:31"]
            },
            {
              columns: [
                "Wheat",
                "03:00 – 21:20",
                "15:45 – 16:30, 21:20 – 03:00"
              ]
            },
            {
              columns: ["Cotton", "04:00 – 21:20", "21:20 – 04:00"]
            },
            {
              columns: ["OJ", "15:00 – 21:00", "21:00 – 15:00"]
            },
            {
              columns: ["Cocoa", "11:50 – 20:30", "20:30 – 11:50"]
            }
          ]
        }
      ]
    },
    {
      question: "Indices CFDs",
      answerSections: [
        {
          type: "table",
          title: "Indices CFDs",
          headers: [
            "Index",
            "Reference",
            "Daily Trading hours (server time)",
            "Daily Break (server time)"
          ],
          rows: [
            {
              columns: [
                "UK100",
                "FTSE 100 Index",
                "01:05 – 23:59 (Monday Open 01:05, Friday Close 22:59)",
                "23:59 – 01:05"
              ]
            },
            {
              columns: [
                "US2000",
                "Russell 2000 Index",
                "01:00 – 23:59 (Monday Open 01:00, Friday Close 23:55)",
                "23:59 – 01:00"
              ]
            },
            {
              columns: ["US30", "DJIA Index", "01:00 – 23:59", "23:59 – 01:00"]
            },
            {
              columns: [
                "US500",
                "E-mini S&P 500 Index",
                "01:00 – 23:59 (Monday Open 01:00, Friday Close 23:55)",
                "23:59 – 01:00"
              ]
            },
            {
              columns: [
                "USTEC",
                "E-mini Nasdaq 100",
                "01:00 – 23:59",
                "23:59 – 01:00"
              ]
            },
            {
              columns: [
                "AUS200",
                "Australia 200 Index",
                "02:50 – 09:30, 10:10 – 23:59",
                "09:30 – 10:10, 23:59 – 02:50"
              ]
            },
            {
              columns: [
                "CA60",
                "Canada 60 TSX Index",
                "16:35 – 22:58",
                "22:58 – 16:35"
              ]
            }
          ]
        }
      ]
    },
    {
      question: "Futures CFDs",
      answerSections: [
        {
          type: "table",
          title: "Futures CFDs",
          headers: [
            "Futures",
            "Trading Hours (server time)",
            "Daily Break (server time)"
          ],
          rows: [
            {
              columns: [
                "Brent Crude Oil Futures (BRENTxx)",
                "Monday: 01:00 – 23:59; Tuesday – Friday: 00:00 – 00:59, 03:00 – 23:59",
                "00:59 – 03:00"
              ]
            },
            {
              columns: [
                "WTI Crude Oil Futures (WTIxx)",
                "01:00 – 23:59",
                "00:00 – 01:00"
              ]
            },
            {
              columns: [
                "US Volatility Index Futures (VIXxx)",
                "01:00 – 23:15",
                "23:15 – 01:00"
              ]
            },
            {
              columns: [
                "US Dollar Index Futures (DXYxx)",
                "03:00 – 23:59 (Friday: 03:00 – 23:57)",
                "00:00 – 03:00"
              ]
            }
          ]
        }
      ]
    },
    {
      question: "Cryptocurrency CFDs",
      answerSections: [
        {
          type: "table",
          title: "Cryptocurrency CFDs (MT4 & MT5)",
          headers: ["Cryptocurrency", "MT4 & MT5"],
          rows: [
            {
              columns: [
                "BCHUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "BTCUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "ETHUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "LTCUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "XRPUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "XLMUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "DOTUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "LNKUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "DSHUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "ADAUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "XTZUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "DOGUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "UNIUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "BNBUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "SOLUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "MTCUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "KSMUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "GLMUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "AVXUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            }
          ]
        },
        {
          type: "table",
          title: "Cryptocurrency CFDs (cTrader)",
          headers: ["Cryptocurrency", "cTrader"],
          rows: [
            {
              columns: [
                "BCHUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "BTCUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "ETHUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "LTCUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            },
            {
              columns: [
                "DSHUSD",
                "Monday – Thursday 00:05-23:59 Friday 00:05-23:55 Saturday 00:45-23:59 Sunday 00:05-23:59"
              ]
            }
          ]
        }
      ]
    },
    {
      question: "Stocks CFDs",
      answerSections: [
        {
          type: "table",
          title: "Stocks CFDs",
          headers: ["Stocks", "Stock Exchange Name", "Trading sessions"],
          rows: [
            { columns: ["ASX", "Australian Stock Exchange", "03:10 - 08:55"] },
            { columns: ["NYSE", "New York Stock Exchange", "16:35 - 22:55"] },
            {
              columns: [
                "NYSE 24/7",
                "New York Stock Exchange + Blue Ocean",
                "00:05 - 23:55"
              ]
            },
            { columns: ["NAS", "NASDAQ Basic", "16:35 - 22:55"] },
            {
              columns: [
                "NAS 24/7",
                "NASDAQ Basic + Blue Ocean",
                "00:05 - 23:55"
              ]
            },
            {
              columns: ["ETR", "Xetra German Stock Exchange", "10:05 - 18:25"]
            },
            { columns: ["AMS", "Amsterdam Stock Exchange", "10:05 - 18:25"] },
            { columns: ["PAR", "Paris Stock Exchange", "10:05 - 18:25"] },
            { columns: ["MAD", "Madrid Stock Exchange", "10:05 - 18:25"] },
            { columns: ["LSE", "London Stock Exchange", "10:05 - 18:25"] }
          ]
        }
      ]
    },
    {
      question: "Bond Futures",
      answerSections: [
        {
          type: "table",
          title: "Bond Futures",
          headers: ["Symbol", "Name", "Trading hours"],
          rows: [
            { columns: ["ITBIOY", "BTP Italian Bonds", "10:00 - 20:59"] },
            { columns: ["EURBBL", "Euro Bobl", "03:15 - 23:59"] },
            { columns: ["EURBND", "Euro Bund", "03:15 - 23:59"] },
            { columns: ["EURSCA", "Euro Schatz", "03:15 - 23:59"] },
            { columns: ["UKGB", "UK Long Gilt", "11:00 - 20:59"] },
            { columns: ["UST10Y", "US 10 YR T-Note", "01:00 - 23:55"] },
            { columns: ["UST05Y", "US 5 YR T-Note", "01:00 - 23:55"] },
            { columns: ["UST30Y", "US 30 YR T-Note", "01:00 - 23:55"] },
            {
              columns: [
                "JGB10Y",
                "Japanese 10yr",
                "03:00 - 12:10, 13:30 - 19:00"
              ]
            }
          ]
        }
      ]
    }
  ];
  return (
    <div>
      <p className="description_text font-semibold font_ternary text-white">
        See at a glance the market hours for all our tradable products below.
        Please note that FlipTrade Group server time and charts are GMT+2 or
        GMT+3 (when daylight savings is in effect).
      </p>
      <p className="description_text font-medium font_ternary text-white pt-6">
        The trading hours for all currency pairs is 00:01 server time to 23:59
        server time daily (23:57 on Friday), whereas for Gold is 01:02 server
        time to 23:57. All other Metals (XAG, XPD, XPT) open for trading at
        01:02 server time (Monday) and close at 23:59 server time daily (23:57
        on Friday).
        <br />
        You will also be able to view the Trading Hours from within your
        MetaTrader trading terminal by following the process outlined below.
        <br />
        Right click on any instrument in the ‘Market Watch’ section, then left
        click on the ‘Specification’ button, a new window will open that shows
        the Trading Hours for the pair selected.
        <br />
        Trading Hours are subject to change. The most accurate details are those
        displayed in your account through the electronic trading system.
      </p>
      <p className="description_text font-medium font_ternary text-white">
        Some of the advantages of Forex trading are listed below. Find out why
        Forex is fastest growing market in the world.
      </p>

      <div>
        <ConditionHourFaq faqData={faqData} />
      </div>
    </div>
  );
};
const TradingConditionsHour = () => {
  const [activeTab, setActiveTab] = useState(1);
  const renderComponent = () => {
    switch (activeTab) {
      case 1:
        return <TradingConditions />;
      case 2:
        return <TradingHour />;
      default:
        return <p>sdff</p>;
    }
  };
  //   onClick={() => setActiveTab(2)}   {renderComponent()}
  return (
    <div className="container mx-auto py-6 md:py-18">
      <div className="grid grid-cols-2 gap-5 cursor-pointer py-3 border-b-2 border-white">
        <p
          className={`text-base md:text-2xl ${activeTab === 1
            ? "text-subprimary underline"
            : "text-white"} text-center md:border-r-2 border-white`}
          onClick={() => setActiveTab(1)}
        >
          Trading Conditions
        </p>
        <p
          className={`text-base md:text-2xl ${activeTab === 2
            ? "text-subprimary underline"
            : "text-white"} text-center md:border-r-2 border-white`}
          onClick={() => setActiveTab(2)}
        >
          Trading Hours
        </p>
      </div>

      <div className="pt-4 md:pt-8 inn_container">
        {renderComponent()}
      </div>
    </div>
  );
};

export default TradingConditionsHour;
