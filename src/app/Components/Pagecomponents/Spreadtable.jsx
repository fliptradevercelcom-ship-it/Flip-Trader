"use client";
import { useState } from "react";

export default function Spreadtable() {
  const tabs = [
    { id: "forex", label: "FOREX" },
    { id: "stocks", label: "STOCK INDICES" },
    { id: "commodities", label: "COMMODITIES" },
    { id: "crypto", label: "CRYPTOCURRENCIES" }
  ];

  const data = {
    forex: [
      {
        instrument: "AUDCAD",
        min: "0",
        typical: "1.3",
        long: "1.85",
        short: "-5.83"
      },
      {
        instrument: "AUDCHF",
        min: "0",
        typical: "0.9",
        long: "4.24",
        short: "-6.66"
      },
      {
        instrument: "AUDJPY",
        min: "0",
        typical: "0.9",
        long: "8.22",
        short: "-11.5"
      },
      {
        instrument: "AUDNZD",
        min: "0",
        typical: "1.4",
        long: "1.76",
        short: "-4.83"
      },
      {
        instrument: "AUDUSD",
        min: "0",
        typical: "0.8",
        long: "4.12",
        short: "-7.21"
      },
      {
        instrument: "CADCHF",
        min: "0",
        typical: "1.1",
        long: "2.33",
        short: "-6.41"
      },
      {
        instrument: "CADJPY",
        min: "0",
        typical: "0.9",
        long: "8.05",
        short: "-12.24"
      },
      {
        instrument: "CHFJPY",
        min: "0",
        typical: "1.5",
        long: "3.87",
        short: "-9.78"
      },
      {
        instrument: "EURAUD",
        min: "0",
        typical: "1.2",
        long: "-3.15",
        short: "-6.22"
      },
      {
        instrument: "EURCAD",
        min: "0",
        typical: "1.4",
        long: "-4.12",
        short: "-7.65"
      },
      {
        instrument: "EURCHF",
        min: "0",
        typical: "0.9",
        long: "-1.22",
        short: "-3.71"
      },
      {
        instrument: "EURGBP",
        min: "0",
        typical: "0.6",
        long: "-2.83",
        short: "-4.87"
      },
      {
        instrument: "EURJPY",
        min: "0",
        typical: "0.7",
        long: "5.88",
        short: "-10.73"
      },
      {
        instrument: "EURNZD",
        min: "0",
        typical: "1.8",
        long: "-3.77",
        short: "-6.64"
      },
      {
        instrument: "EURUSD",
        min: "0",
        typical: "0.5",
        long: "-3.43",
        short: "-5.22"
      },
      {
        instrument: "GBPJPY",
        min: "0",
        typical: "1.6",
        long: "9.15",
        short: "-15.2"
      },
      {
        instrument: "GBPUSD",
        min: "0",
        typical: "0.7",
        long: "-3.45",
        short: "-6.12"
      },
      {
        instrument: "NZDUSD",
        min: "0",
        typical: "1.4",
        long: "2.95",
        short: "-5.88"
      },
      {
        instrument: "USDCAD",
        min: "0",
        typical: "1.2",
        long: "-3.11",
        short: "-7.32"
      },
      {
        instrument: "USDCHF",
        min: "0",
        typical: "1.0",
        long: "1.55",
        short: "-8.22"
      },
      {
        instrument: "USDJPY",
        min: "0",
        typical: "0.9",
        long: "6.88",
        short: "-10.66"
      }
    ],

    stocks: [
      {
        instrument: "AFRICA40",
        min: "9",
        typical: "17.74",
        long: "-27.26",
        short: "11.28"
      },
      {
        instrument: "AUS200",
        min: "1",
        typical: "1",
        long: "-1.27",
        short: "0.44"
      },
      {
        instrument: "CHINA50",
        min: "6",
        typical: "10",
        long: "-2.49",
        short: "0.7"
      },
      {
        instrument: "EURO50",
        min: "2",
        typical: "3.5",
        long: "-2.88",
        short: "1.15"
      },
      {
        instrument: "FRA40",
        min: "1",
        typical: "1.5",
        long: "-1.34",
        short: "0.52"
      },
      {
        instrument: "GER40",
        min: "1",
        typical: "1.5",
        long: "-1.65",
        short: "0.76"
      },
      {
        instrument: "HK50",
        min: "6",
        typical: "8",
        long: "-3.15",
        short: "0.44"
      },
      {
        instrument: "INDIA50",
        min: "1",
        typical: "1",
        long: "-0.78",
        short: "0.33"
      },
      {
        instrument: "JPN225",
        min: "6",
        typical: "10",
        long: "-3.44",
        short: "1.55"
      },
      {
        instrument: "NAS100",
        min: "1",
        typical: "1.2",
        long: "-1.17",
        short: "0.22"
      },
      {
        instrument: "SPX500",
        min: "0.5",
        typical: "1",
        long: "-1.06",
        short: "0.42"
      },
      {
        instrument: "UK100",
        min: "1",
        typical: "1.5",
        long: "-1.11",
        short: "0.49"
      },
      {
        instrument: "US30",
        min: "1",
        typical: "1.8",
        long: "-1.22",
        short: "0.55"
      }
    ],

    commodities: [
      {
        instrument: "ALUMINIUM",
        min: "4.35",
        typical: "4.5",
        long: "-0.69",
        short: "-0.27"
      },
      {
        instrument: "BRENT",
        min: "0.04",
        typical: "0.04",
        long: "1.49",
        short: "-2.53"
      },
      {
        instrument: "COCOA",
        min: "4",
        typical: "4",
        long: "-7.35",
        short: "0.19"
      },
      {
        instrument: "COFFEE",
        min: "0.4",
        typical: "0.4",
        long: "-2.14",
        short: "0.37"
      },
      {
        instrument: "CORN",
        min: "0.3",
        typical: "0.5",
        long: "-1.12",
        short: "0.45"
      },
      {
        instrument: "COTTON",
        min: "0.3",
        typical: "0.4",
        long: "-2.28",
        short: "0.12"
      },
      {
        instrument: "GASOLINE",
        min: "0.02",
        typical: "0.03",
        long: "1.75",
        short: "-2.97"
      },
      {
        instrument: "GOLD",
        min: "0.15",
        typical: "0.17",
        long: "-3.44",
        short: "0.95"
      },
      {
        instrument: "NATGAS",
        min: "0.01",
        typical: "0.02",
        long: "-1.89",
        short: "0.77"
      },
      {
        instrument: "NICKEL",
        min: "6",
        typical: "7",
        long: "-3.44",
        short: "0.2"
      },
      {
        instrument: "OIL WTI",
        min: "0.03",
        typical: "0.04",
        long: "1.61",
        short: "-2.81"
      },
      {
        instrument: "PLATINUM",
        min: "0.3",
        typical: "0.35",
        long: "-4.55",
        short: "1.11"
      },
      {
        instrument: "SILVER",
        min: "0.02",
        typical: "0.03",
        long: "-2.25",
        short: "0.77"
      },
      {
        instrument: "SUGAR",
        min: "0.1",
        typical: "0.15",
        long: "-2.95",
        short: "0.27"
      },
      {
        instrument: "WHEAT",
        min: "0.3",
        typical: "0.4",
        long: "-1.44",
        short: "0.39"
      }
    ],

    crypto: [
      {
        instrument: "ADAUSD",
        min: "0.007",
        typical: "0.02",
        long: "0",
        short: "0"
      },
      {
        instrument: "AVAXUSD",
        min: "0.07",
        typical: "0.15",
        long: "0",
        short: "0"
      },
      {
        instrument: "BCHUSD",
        min: "0.03",
        typical: "0.05",
        long: "0",
        short: "0"
      },
      {
        instrument: "BTCUSD",
        min: "0.1",
        typical: "0.2",
        long: "0",
        short: "0"
      },
      {
        instrument: "DOGEUSD",
        min: "0.001",
        typical: "0.002",
        long: "0",
        short: "0"
      },
      {
        instrument: "DOTUSD",
        min: "0.01",
        typical: "0.02",
        long: "0",
        short: "0"
      },
      {
        instrument: "ETHUSD",
        min: "0.03",
        typical: "0.05",
        long: "0",
        short: "0"
      },
      {
        instrument: "LTCUSD",
        min: "0.02",
        typical: "0.03",
        long: "0",
        short: "0"
      },
      {
        instrument: "MATICUSD",
        min: "0.002",
        typical: "0.01",
        long: "0",
        short: "0"
      },
      {
        instrument: "SOLUSD",
        min: "0.03",
        typical: "0.07",
        long: "0",
        short: "0"
      },
      {
        instrument: "XLMUSD",
        min: "0.001",
        typical: "0.003",
        long: "0",
        short: "0"
      },
      {
        instrument: "XRPUSD",
        min: "0.002",
        typical: "0.006",
        long: "0",
        short: "0"
      }
    ]
  };

  const [active, setActive] = useState("forex");
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const currentData = data[active];
  const totalPages = Math.ceil(currentData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = currentData.slice(startIndex, endIndex);

  const handleTabChange = tabId => {
    setActive(tabId);
    setCurrentPage(1);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 mx-1 rounded ${currentPage === i
            ? "bg-purple-600 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="w-full max-w-6xl mx-auto mt-6 px-2">
      <div className="grid grid-cols-2 lg:grid-cols-4"> 
        {tabs.map(t =>
          <button
            key={t.id}
            onClick={() => handleTabChange(t.id)}
            className={`px-4 md:px-8 py-2 md:py-3 text-sm md:text-[16px] transition rounded-t-4xl cursor-pointer
              ${active === t.id ? "bg-primary text-white" : "text-white"}
            `}
          >
            {t.label}
          </button>
        )}
      </div>

      <div className="overflow-x-auto border-t border-white rounded-[30px] border-tl-[0px]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-6 py-5 text-left font-normal text-xl">
                Instrument
              </th>
              <th className="px-6 py-5 text-left font-normal text-xl">
                Minimum Spread
              </th>
              <th className="px-6 py-5 text-left font-normal text-xl">
                Typical Spread
              </th>
              <th className="px-6 py-5 text-left font-normal text-xl">
                Long Position
              </th>
              <th className="px-6 py-5 text-left font-normal text-xl">
                Short Position
              </th>
            </tr>
          </thead>

          <tbody>
            {currentRows.map((row, i) =>
              <tr
                key={i}
                className={`${i % 2 === 0
                  ? "bg-gray-100"
                  : "bg-white"} border-b`}
              >
                <td
                  className={`px-6 py-3 underline hover:bg-[var(--primary)] hover:text-white cursor-pointer transition-all duration-500 text-center ${i %
                    2 ===
                  0
                    ? "gradient_bg"
                    : ""}`}
                >
                  {row.instrument}
                </td>
                <td
                  className={`px-6 py-3 hover:bg-[var(--primary)] hover:text-white cursor-pointer transition-all duration-500 text-center ${i %
                    2 ===
                  0
                    ? ""
                    : "gradient_bg"}`}
                >
                  {row.min}
                </td>
                <td
                  className={`px-6 py-3 hover:bg-[var(--primary)] hover:text-white cursor-pointer transition-all duration-500 text-center ${i %
                    2 ===
                  0
                    ? "gradient_bg"
                    : ""}`}
                >
                  {row.typical}
                </td>
                <td
                  className={`px-6 py-3 hover:bg-[var(--primary)] hover:text-white cursor-pointer transition-all duration-500 text-center ${i %
                    2 ===
                  0
                    ? ""
                    : "gradient_bg"}`}
                >
                  {row.long}
                </td>
                <td
                  className={`px-6 py-3 hover:bg-[var(--primary)] hover:text-white cursor-pointer transition-all duration-500 text-center ${i %
                    2 ===
                  0
                    ? "gradient_bg"
                    : ""}`}
                >
                  {row.short}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {totalPages > 1 &&
        <div className="flex justify-center items-center mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded ${currentPage === 1
              ? "bg-subprimary text-gray-500 cursor-not-allowed"
              : "bg-primary text-white hover:bg-purple-700"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 16 16"
            >
              <rect width="16" height="16" fill="none" />
              <path
                fill="#B6CCFF"
                d="M10.843 13.069L6.232 8.384a.546.546 0 0 1 0-.768l4.61-4.685a.55.55 0 0 0 0-.771a.53.53 0 0 0-.759 0l-4.61 4.684a1.65 1.65 0 0 0 0 2.312l4.61 4.684a.53.53 0 0 0 .76 0a.55.55 0 0 0 0-.771"
              />
            </svg>
          </button>

          <div className="flex items-center">
            {renderPageNumbers()}
          </div>

          <button
            onClick={() =>
              setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`p-2 rounded ${currentPage === totalPages
              ? "bg-subprimary text-gray-500 cursor-not-allowed"
              : "bg-primary text-white hover:bg-purple-700"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 1024 1024"
            >
              <rect width="1024" height="1024" fill="none" />
              <path
                fill="#B6CCFF"
                d="M340.864 149.312a30.59 30.59 0 0 0 0 42.752L652.736 512L340.864 831.872a30.59 30.59 0 0 0 0 42.752a29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
                strokeWidth="26"
                stroke="#B6CCFF"
              />
            </svg>
          </button>
        </div>}

      {/* <div className="text-center mt-4 text-gray-600">
        Showing {startIndex + 1} to {Math.min(endIndex, currentData.length)} of {currentData.length} entries
      </div> */}
    </div>
  );
}
