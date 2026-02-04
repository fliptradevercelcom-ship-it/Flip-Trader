"use client";

import { useMemo, useState } from "react";
import searchicon from "../../../../public/icons/search.svg";
import Image from "next/image";
export default function Spreadtable() {
  const instrumentsData = [
    { instrument: "EURUSD", standardFloating: 1.2, standardFixed: 1, ecnRaw: 0.1, vipEcn: 0.1 },
    { instrument: "EURCNH", standardFloating: 1.9, standardFixed: 1.6, ecnRaw: 0.9, vipEcn: 0.5 },
    { instrument: "EURCAD", standardFloating: 1.5, standardFixed: 1.3, ecnRaw: 1.1, vipEcn: 1 },
    { instrument: "EURNZD", standardFloating: 3.8, standardFixed: 2.8, ecnRaw: 2, vipEcn: 1 },
    { instrument: "EURJPY", standardFloating: 1.9, standardFixed: 1.7, ecnRaw: 0.8, vipEcn: 0.5 },
    { instrument: "EURCHF", standardFloating: 1.7, standardFixed: 1.5, ecnRaw: 0.8, vipEcn: 0.4 },
    { instrument: "EURAUD", standardFloating: 2.6, standardFixed: 2.3, ecnRaw: 1.1, vipEcn: 1 },
    { instrument: "EURGBP", standardFloating: 1.5, standardFixed: 1.3, ecnRaw: 0.3, vipEcn: 0.1 },
    { instrument: "EURNOK", standardFloating: 87.3, standardFixed: 82.5, ecnRaw: 72.5, vipEcn: 50 },
    { instrument: "EURPLN", standardFloating: 45.1, standardFixed: 40, ecnRaw: 21, vipEcn: 12 },
    { instrument: "EURSEK", standardFloating: 60, standardFixed: 54, ecnRaw: 44, vipEcn: 35 },
    { instrument: "EURSGD", standardFloating: 3.9, standardFixed: 2.9, ecnRaw: 2.3, vipEcn: 2 },
    { instrument: "EURCZK", standardFloating: 150, standardFixed: 130, ecnRaw: 120, vipEcn: 100 },
    { instrument: "EURDKK", standardFloating: 2.4, standardFixed: 2.3, ecnRaw: 1.4, vipEcn: 1 },
    { instrument: "EURHKD", standardFloating: 7.3, standardFixed: 4.9, ecnRaw: 3.5, vipEcn: 2.4 },
    { instrument: "EURZAR", standardFloating: 15.3, standardFixed: 23.5, ecnRaw: 12.2, vipEcn: 11 },
    { instrument: "EURHUF", standardFloating: 120, standardFixed: 52, ecnRaw: 15, vipEcn: 0.9 },
    { instrument: "EURMXN", standardFloating: 90, standardFixed: 87, ecnRaw: 76, vipEcn: 30 },

    { instrument: "GBPUSD", standardFloating: 1.2, standardFixed: 1.1, ecnRaw: 0.5, vipEcn: 0.2 },
    { instrument: "GBPCHF", standardFloating: 3.1, standardFixed: 1.4, ecnRaw: 1, vipEcn: 0.4 },
    { instrument: "GBPJPY", standardFloating: 2.8, standardFixed: 2.6, ecnRaw: 1, vipEcn: 0.7 },
    { instrument: "GBPAUD", standardFloating: 2.2, standardFixed: 1.9, ecnRaw: 1.6, vipEcn: 1 },
    { instrument: "GBPCAD", standardFloating: 3.3, standardFixed: 3, ecnRaw: 1.5, vipEcn: 0.5 },
    { instrument: "GBPNZD", standardFloating: 3.6, standardFixed: 3.5, ecnRaw: 3.1, vipEcn: 2 },
    { instrument: "GBPDKK", standardFloating: 130, standardFixed: 99, ecnRaw: 80, vipEcn: 50 },
    { instrument: "GBPHUF", standardFloating: 43.8, standardFixed: 43.5, ecnRaw: 42.6, vipEcn: 33 },
    { instrument: "GBPNOK", standardFloating: 310, standardFixed: 111, ecnRaw: 110, vipEcn: 87 },
    { instrument: "GBPPLN", standardFloating: 535, standardFixed: 530, ecnRaw: 268, vipEcn: 214 },
    { instrument: "GBPSEK", standardFloating: 137, standardFixed: 112, ecnRaw: 81.6, vipEcn: 76.3 },
    { instrument: "GBPSGD", standardFloating: 4.5, standardFixed: 4.2, ecnRaw: 3, vipEcn: 2.4 },
    { instrument: "GBPTRY", standardFloating: 167.7, standardFixed: 167.6, ecnRaw: 166.7, vipEcn: 145.4 },
    { instrument: "GBPZAR", standardFloating: 95.1, standardFixed: 90, ecnRaw: 89, vipEcn: 76 },

    { instrument: "XAGUSD", standardFloating: 67, standardFixed: 64, ecnRaw: 61, vipEcn: 45 },
    { instrument: "XAUUSD", standardFloating: 2.3, standardFixed: 1.6, ecnRaw: 0.7, vipEcn: 0.7 },
    { instrument: "XAGAUD", standardFloating: 5.6, standardFixed: 4.9, ecnRaw: 1, vipEcn: 0.5 },
    { instrument: "XAUAUD", standardFloating: 171, standardFixed: 164, ecnRaw: 155, vipEcn: 145 },
    { instrument: "XPDUSD", standardFloating: 440, standardFixed: 400, ecnRaw: 424, vipEcn: 345 },
    { instrument: "XAGEUR", standardFloating: 5.6, standardFixed: 5.4, ecnRaw: 5.2, vipEcn: 4.7 },

    { instrument: "AUDUSD", standardFloating: 1.4, standardFixed: 1.2, ecnRaw: 1, vipEcn: 0.8 },
    { instrument: "AUDNZD", standardFloating: 2.8, standardFixed: 2.5, ecnRaw: 1.8, vipEcn: 1.3 },
    { instrument: "AUDCAD", standardFloating: 1.9, standardFixed: 1.6, ecnRaw: 0.8, vipEcn: 0.3 },
    { instrument: "AUDCHF", standardFloating: 2, standardFixed: 1.9, ecnRaw: 0.8, vipEcn: 0.2 },
    { instrument: "AUDJPY", standardFloating: 2.4, standardFixed: 2.3, ecnRaw: 1.5, vipEcn: 1.1 },
    { instrument: "AUDNOK", standardFloating: 184, standardFixed: 183, ecnRaw: 61, vipEcn: 43 },
    { instrument: "AUDSEK", standardFloating: 900, standardFixed: 829, ecnRaw: 620, vipEcn: 558 },
    { instrument: "AUDSGD", standardFloating: 2.9, standardFixed: 2.7, ecnRaw: 1.7, vipEcn: 0.6 },

    { instrument: "USDCHF", standardFloating: 1.5, standardFixed: 1.4, ecnRaw: 0.4, vipEcn: 0.2 },
    { instrument: "USDJPY", standardFloating: 1.4, standardFixed: 1.2, ecnRaw: 1, vipEcn: 0.3 },
    { instrument: "USDCAD", standardFloating: 1.8, standardFixed: 1.6, ecnRaw: 0.8, vipEcn: 0.4 },
    { instrument: "USDNOK", standardFloating: 140, standardFixed: 138, ecnRaw: 10.4, vipEcn: 0.9 },
    { instrument: "USDSEK", standardFloating: 48.5, standardFixed: 45.2, ecnRaw: 35.8, vipEcn: 36.6 },
    { instrument: "USDCZK", standardFloating: 82.1, standardFixed: 82, ecnRaw: 81.1, vipEcn: 76.3 },
    { instrument: "USDZAR", standardFloating: 76, standardFixed: 67, ecnRaw: 62, vipEcn: 45 },
    { instrument: "USDMXN", standardFloating: 6.8, standardFixed: 6.5, ecnRaw: 5.3, vipEcn: 4.3 },

    { instrument: "NZDUSD", standardFloating: 1.6, standardFixed: 1.5, ecnRaw: 0.7, vipEcn: 0.3 },
    { instrument: "NZDCAD", standardFloating: 2.3, standardFixed: 2.2, ecnRaw: 1.5, vipEcn: 1.1 },
    { instrument: "NZDCHF", standardFloating: 2.1, standardFixed: 2, ecnRaw: 1.1, vipEcn: 0.4 },
    { instrument: "NZDJPY", standardFloating: 2.4, standardFixed: 2.2, ecnRaw: 1.6, vipEcn: 1.3 },
    { instrument: "NZDSGD", standardFloating: 3.6, standardFixed: 3.2, ecnRaw: 1.6, vipEcn: 1.2 },

    { instrument: "CADSGD", standardFloating: 3.5, standardFixed: 3.2, ecnRaw: 2.5, vipEcn: 1.4 },
    { instrument: "CADJPY", standardFloating: 2.6, standardFixed: 2, ecnRaw: 1.7, vipEcn: 1.6 },
    { instrument: "CADCHF", standardFloating: 2.3, standardFixed: 2.2, ecnRaw: 1.3, vipEcn: 1.3 },

    { instrument: "CHFSGD", standardFloating: 2.9, standardFixed: 2.5, ecnRaw: 1.2, vipEcn: 1 },
    { instrument: "CHFSEK", standardFloating: 282, standardFixed: 281, ecnRaw: 272, vipEcn: 178 },
    { instrument: "CHFPLN", standardFloating: 558, standardFixed: 552, ecnRaw: 248, vipEcn: 233 },
    { instrument: "CHFNOK", standardFloating: 294, standardFixed: 288, ecnRaw: 57, vipEcn: 44 },
    { instrument: "CHFDKK", standardFloating: 120, standardFixed: 89, ecnRaw: 60, vipEcn: 56 },
    { instrument: "CHFJPY", standardFloating: 3.2, standardFixed: 2.7, ecnRaw: 1.6, vipEcn: 1.3 },

    { instrument: "ENJUSD", standardFloating: 1, standardFixed: 1, ecnRaw: 0, vipEcn: 0 },
    { instrument: "SNXUSD", standardFloating: 400, standardFixed: 350, ecnRaw: 200, vipEcn: 150 },
    { instrument: "EMCUSD", standardFloating: 289, standardFixed: 222, ecnRaw: 200, vipEcn: 160 },
    { instrument: "MBTUSD", standardFloating: 102, standardFixed: 100, ecnRaw: 80, vipEcn: 60 },

    { instrument: "LTCJPY", standardFloating: 1500, standardFixed: 1300, ecnRaw: 1000, vipEcn: 888 },
    { instrument: "LTCCNY", standardFloating: 1140, standardFixed: 1100, ecnRaw: 1000, vipEcn: 968 },
    { instrument: "LTCCNH", standardFloating: 8295, standardFixed: 8010, ecnRaw: 7534, vipEcn: 6545 },
    { instrument: "LTCEUR", standardFloating: 725, standardFixed: 700, ecnRaw: 650, vipEcn: 543 },
    { instrument: "LTCBTC", standardFloating: 1.3, standardFixed: 1.2, ecnRaw: 1, vipEcn: 0.3 },

    { instrument: "ETHBTC", standardFloating: 1, standardFixed: 0.9, ecnRaw: 0, vipEcn: 0 },
    { instrument: "ETCETH", standardFloating: 246, standardFixed: 240, ecnRaw: 236, vipEcn: 200 },
    { instrument: "ETCBTC", standardFloating: 1.3, standardFixed: 1.2, ecnRaw: 3, vipEcn: 2.5 },

    { instrument: "BTCJPY", standardFloating: 1355, standardFixed: 1300, ecnRaw: 1100, vipEcn: 978 },
    { instrument: "ETHUSD", standardFloating: 291, standardFixed: 290, ecnRaw: 290, vipEcn: 276 },
    { instrument: "XRPUSD", standardFloating: 7, standardFixed: 5.5, ecnRaw: 0, vipEcn: 0 },
    { instrument: "TRXUSD", standardFloating: 3, standardFixed: 2, ecnRaw: 1, vipEcn: 0.4 },
    { instrument: "LRCUSD", standardFloating: 124, standardFixed: 110, ecnRaw: 100, vipEcn: 76 },
    { instrument: "DOTUSD", standardFloating: 6.2, standardFixed: 5.2, ecnRaw: 5, vipEcn: 4.7 },
    { instrument: "DOGUSD", standardFloating: 224, standardFixed: 220, ecnRaw: 200, vipEcn: 195 },
    { instrument: "CRVUSD", standardFloating: 101, standardFixed: 76, ecnRaw: 20, vipEcn: 1.5 },
    { instrument: "XPTUSD", standardFloating: 750, standardFixed: 720, ecnRaw: 650, vipEcn: 654 },
    { instrument: "BTCUSD", standardFloating: 2, standardFixed: 1, ecnRaw: 1, vipEcn: 0.4 },

    { instrument: "BRNUSD", standardFloating: 3.8, standardFixed: 2.8, ecnRaw: 2, vipEcn: 1.4 },
    { instrument: "NGCUSD", standardFloating: 175, standardFixed: 165, ecnRaw: 110, vipEcn: 89 },
    { instrument: "WTIUSD", standardFloating: 3.8, standardFixed: 3.2, ecnRaw: 2.5, vipEcn: 2.1 },

    { instrument: "US500", standardFloating: 4.3, standardFixed: 4, ecnRaw: 3, vipEcn: 2.2 },
    { instrument: "US30", standardFloating: 23.9, standardFixed: 20, ecnRaw: 22, vipEcn: 24 },
    { instrument: "UK100", standardFloating: 23.2, standardFixed: 19, ecnRaw: 10, vipEcn: 0.4 },
    { instrument: "NAS100", standardFloating: 147, standardFixed: 142, ecnRaw: 120, vipEcn: 116 },
    { instrument: "HK50", standardFloating: 95, standardFixed: 90, ecnRaw: 84, vipEcn: 76 },
    { instrument: "GER40", standardFloating: 50, standardFixed: 45, ecnRaw: 20, vipEcn: 1.9 },
    { instrument: "FRA40", standardFloating: 165, standardFixed: 155, ecnRaw: 130, vipEcn: 110 },
    { instrument: "AUS200", standardFloating: 113, standardFixed: 111, ecnRaw: 98, vipEcn: 67 },

    { instrument: "NGCUSD", standardFloating: 175, standardFixed: 172, ecnRaw: 162, vipEcn: 160 }
  ];
  const STEP = 20;
  const [visible, setVisible] = useState(STEP);
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return instrumentsData.filter(item =>
      item.instrument.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const visibleData = filteredData.slice(0, visible);

  return (
    <div className="w-full max-w-7xl mx-auto mt-6 px-2">
      <div>
        <div className="flex w-full md:w-max md:mx-auto my-6 items-center gap-4 py-3 md:py-4.5 px-10 border-2 border-primary rounded-full md:min-w-[55%] bg-white">
          <Image
            src={searchicon}
            alt="search icon"
            width={1000}
            height={500}
            className="max-w-6"
          />
          <input
            type="text"
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setVisible(STEP);
            }}
            placeholder="Search Instrument"
            className="border-none outline-none placeholder-[var(--primary)] list_text font_ternary w-[80%] text-primary uppercase"
            data-np-intersection-state="visible"
          />
        </div>
      </div>
      <div className="overflow-x-auto border rounded-2xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="px-3 py-4 text-center">Instrument</th>
              <th className="px-3 py-4 text-center">Standard Account</th>
              <th className="px-3 py-4 text-center">Classic Account</th>
              <th className="px-3 py-4 text-center">ECN Raw</th>
              <th className="px-3 py-4 text-center">Professional Account</th>
            </tr>
          </thead>
          <tbody>
            {visibleData.map((row, index) => (
              <tr key={index} className="bg-white">
                <td className={`px-3 py-3 font-medium text-center ${index % 2 === 0 ? "gradient_bg" : "bg-white"}`}>{row.instrument}</td>
                <td className={`px-3 py-3 font-medium text-center ${index % 2 === 0 ? "bg-white" : "gradient_bg"}`}>{row.standardFloating ?? "-"}</td>
                <td className={`px-3 py-3 font-medium text-center ${index % 2 === 0 ? "gradient_bg" : "bg-white"}`}>{row.standardFixed ?? "-"}</td>
                <td className={`px-3 py-3 font-medium text-center ${index % 2 === 0 ? "bg-white" : "gradient_bg"}`}>{row.ecnRaw ?? "-"}</td>
                <td className={`px-3 py-3 font-medium text-center ${index % 2 === 0 ? "gradient_bg" : "bg-white"}`}>{row.vipEcn ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {visible < filteredData.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisible(prev => prev + STEP)}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-purple-700 transition"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
