"use client";

import { useMemo, useState } from "react";
import searchicon from "../../../../public/icons/search.svg";
import Image from "next/image";
export default function Spreadtable() {
  const instrumentsData = [
    { instrument: "NZDCHF", standardFloating: 6, standardFixed: 12, ecnRaw: 0, vipEcn: 0 },
    { instrument: "NZDHUF", standardFloating: 35, standardFixed: 55, ecnRaw: 6, vipEcn: 6 },
    { instrument: "NZDJPY", standardFloating: 3, standardFixed: 4, ecnRaw: 0, vipEcn: 0 },
    { instrument: "NZDSGD", standardFloating: 10, standardFixed: 10, ecnRaw: null, vipEcn: null },
    { instrument: "PLNJPY", standardFloating: 4, standardFixed: 8, ecnRaw: null, vipEcn: null },
    { instrument: "SEKJPY", standardFloating: 3.2, standardFixed: 7.2, ecnRaw: null, vipEcn: null },
    { instrument: "SGDJPY", standardFloating: 12, standardFixed: 8, ecnRaw: 0, vipEcn: 0 },
    { instrument: "TRYJPY", standardFloating: 6, standardFixed: null, ecnRaw: 4, vipEcn: 4 },

    { instrument: "GBPSEK", standardFloating: 150, standardFixed: 336, ecnRaw: null, vipEcn: null },
    { instrument: "GBPSGD", standardFloating: 9, standardFixed: 12, ecnRaw: 0, vipEcn: 0 },
    { instrument: "GBPTRY", standardFloating: 21, standardFixed: null, ecnRaw: 4, vipEcn: 4 },
    { instrument: "GBPZAR", standardFloating: 300, standardFixed: 300, ecnRaw: 4, vipEcn: 4 },
    { instrument: "HKDJPY", standardFloating: 3, standardFixed: 7, ecnRaw: null, vipEcn: null },
    { instrument: "NOKJPY", standardFloating: 3, standardFixed: 7, ecnRaw: null, vipEcn: null },
    { instrument: "NOKSEK", standardFloating: 7, standardFixed: 7, ecnRaw: null, vipEcn: null },
    { instrument: "NZDCAD", standardFloating: 4.5, standardFixed: 8, ecnRaw: 0, vipEcn: 0 },

    { instrument: "EURZAR", standardFloating: 140, standardFixed: 149, ecnRaw: 6, vipEcn: 6 },
    { instrument: "GBPAUD", standardFloating: 4.8, standardFixed: 8.5, ecnRaw: 0, vipEcn: 0 },
    { instrument: "GBPCAD", standardFloating: 4.8, standardFixed: 6, ecnRaw: 0, vipEcn: 0 },
    { instrument: "GBPDKK", standardFloating: 40, standardFixed: 55, ecnRaw: null, vipEcn: null },
    { instrument: "GBPHUF", standardFloating: 35, standardFixed: 52, ecnRaw: 6, vipEcn: 6 },
    { instrument: "GBPNOK", standardFloating: 100, standardFixed: 200, ecnRaw: null, vipEcn: null },
    { instrument: "GBPNZD", standardFloating: 9.2, standardFixed: 12, ecnRaw: 0, vipEcn: 0 },
    { instrument: "GBPPLN", standardFloating: 25, standardFixed: 25, ecnRaw: null, vipEcn: null },

    { instrument: "EURMXN", standardFloating: 75, standardFixed: 75, ecnRaw: null, vipEcn: null },
    { instrument: "EURNOK", standardFloating: 50, standardFixed: 140, ecnRaw: null, vipEcn: null },
    { instrument: "EURNZD", standardFloating: 6.5, standardFixed: 10, ecnRaw: 0, vipEcn: 0 },
    { instrument: "EURPLN", standardFloating: 38, standardFixed: 75, ecnRaw: 11, vipEcn: 11 },
    { instrument: "EURRUB", standardFloating: 60, standardFixed: 60, ecnRaw: 0.4, vipEcn: 0.4 },
    { instrument: "EURSEK", standardFloating: 50, standardFixed: 69, ecnRaw: null, vipEcn: null },
    { instrument: "EURSGD", standardFloating: 10, standardFixed: 10, ecnRaw: 0, vipEcn: 0 },
    { instrument: "EURTRY", standardFloating: 14, standardFixed: null, ecnRaw: 4, vipEcn: 4 },

    { instrument: "CADCHF", standardFloating: 4.8, standardFixed: 6, ecnRaw: 0, vipEcn: 0 },
    { instrument: "CADJPY", standardFloating: 3.9, standardFixed: 4, ecnRaw: 0, vipEcn: 0 },
    { instrument: "CADNOK", standardFloating: 75, standardFixed: 300, ecnRaw: 1.4, vipEcn: 1.4 },
    { instrument: "CADSEK", standardFloating: 70, standardFixed: 78, ecnRaw: 0, vipEcn: 0 },

    { instrument: "AUDCAD", standardFloating: 4.8, standardFixed: 7.2, ecnRaw: 0.1, vipEcn: 0.1 },
    { instrument: "AUDCHF", standardFloating: 4.9, standardFixed: 7.3, ecnRaw: 0, vipEcn: 0 },
    { instrument: "AUDDKK", standardFloating: 29, standardFixed: 50, ecnRaw: null, vipEcn: null },
    { instrument: "AUDHUF", standardFloating: 190, standardFixed: 190, ecnRaw: 4, vipEcn: 4 },
    { instrument: "AUDJPY", standardFloating: 3.6, standardFixed: 4.9, ecnRaw: 0, vipEcn: 0 },
    { instrument: "AUDNZD", standardFloating: 5.8, standardFixed: 9, ecnRaw: 0, vipEcn: 0 },

    { instrument: "GBPJPY", standardFloating: 3.3, standardFixed: 2.7, ecnRaw: 0, vipEcn: 0.3 },
    { instrument: "GBPUSD", standardFloating: 1.3, standardFixed: 1.7, ecnRaw: 0, vipEcn: 0.3 },
    { instrument: "NZDUSD", standardFloating: 2.2, standardFixed: 2.2, ecnRaw: 0, vipEcn: 0.3 },
    { instrument: "USDCAD", standardFloating: 1.3, standardFixed: 1.4, ecnRaw: 0, vipEcn: 0.3 },
    { instrument: "USDCHF", standardFloating: 1.8, standardFixed: 2, ecnRaw: 0, vipEcn: 0.3 },
    { instrument: "USDJPY", standardFloating: 1.2, standardFixed: 1.2, ecnRaw: 0, vipEcn: 0.3 },
    { instrument: "XAUUSD", standardFloating: 0.25, standardFixed: 0.25, ecnRaw: 0.11, vipEcn: 0.11 },
    { instrument: "XAUEUR", standardFloating: 0.27, standardFixed: 0.27, ecnRaw: 0.14, vipEcn: 0.14 },

    { instrument: "CHFSGD", standardFloating: 12, standardFixed: 8, ecnRaw: 0, vipEcn: 0 },
    { instrument: "EURAUD", standardFloating: 5, standardFixed: 6.2, ecnRaw: 0, vipEcn: 0 },
    { instrument: "EURCAD", standardFloating: 5.2, standardFixed: 6.2, ecnRaw: 0, vipEcn: 0 },
    { instrument: "EURCNH", standardFloating: 38, standardFixed: 150, ecnRaw: 4, vipEcn: 4 },
    { instrument: "EURCZK", standardFloating: 70, standardFixed: 70, ecnRaw: 0.8, vipEcn: 0.8 },
    { instrument: "EURDKK", standardFloating: 12.7, standardFixed: 10, ecnRaw: null, vipEcn: null },
    { instrument: "EURHKD", standardFloating: 20, standardFixed: 20, ecnRaw: null, vipEcn: null },
    { instrument: "EURHUF", standardFloating: 38, standardFixed: 38, ecnRaw: 14, vipEcn: 14 },

    { instrument: "CHFHUF", standardFloating: 22, standardFixed: 34, ecnRaw: 4, vipEcn: 4 },
    { instrument: "CHFJPY", standardFloating: 3, standardFixed: 10, ecnRaw: 0.2, vipEcn: 0.2 },
    { instrument: "CHFNOK", standardFloating: 30, standardFixed: 75, ecnRaw: null, vipEcn: null },
    { instrument: "CHFPLN", standardFloating: 16, standardFixed: 16, ecnRaw: null, vipEcn: null },

    { instrument: "AUDPLN", standardFloating: 28, standardFixed: 28, ecnRaw: null, vipEcn: null },
    { instrument: "AUDSGD", standardFloating: 8, standardFixed: 10, ecnRaw: null, vipEcn: null },

    { instrument: "EURCHF", standardFloating: 1.6, standardFixed: 3.2, ecnRaw: 0, vipEcn: 0.3 },
    { instrument: "EURGBP", standardFloating: 1.2, standardFixed: 1.3, ecnRaw: 0, vipEcn: 0.3 },
    { instrument: "EURJPY", standardFloating: 1.6, standardFixed: 2, ecnRaw: 0, vipEcn: 0.3 },
    { instrument: "EURUSD", standardFloating: 1.2, standardFixed: 1.2, ecnRaw: 0, vipEcn: 0.3 },
    { instrument: "GBPCHF", standardFloating: 3.6, standardFixed: 3.3, ecnRaw: 0, vipEcn: 0.3 }
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
      {/* Search */}
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
              <th className="px-6 py-4 text-center">Instrument</th>
              <th className="px-6 py-4 text-center">Standard Floating</th>
              <th className="px-6 py-4 text-center">Standard Fixed</th>
              <th className="px-6 py-4 text-center">ECN Raw</th>
              <th className="px-6 py-4 text-center">VIP ECN</th>
            </tr>
          </thead>
          <tbody>
            {visibleData.map((row, index) => (
              <tr key={index} className="bg-white">
                <td className={`px-6 py-3 font-medium text-center ${index % 2 === 0 ? "gradient_bg" : "bg-white"}`}>{row.instrument}</td>
                <td className={`px-6 py-3 font-medium text-center ${index % 2 === 0 ? "bg-white" : "gradient_bg"}`}>{row.standardFloating ?? "-"}</td>
                <td className={`px-6 py-3 font-medium text-center ${index % 2 === 0 ? "gradient_bg" : "bg-white"}`}>{row.standardFixed ?? "-"}</td>
                <td className={`px-6 py-3 font-medium text-center ${index % 2 === 0 ? "bg-white" : "gradient_bg"}`}>{row.ecnRaw ?? "-"}</td>
                <td className={`px-6 py-3 font-medium text-center ${index % 2 === 0 ? "gradient_bg" : "bg-white"}`}>{row.vipEcn ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Load More */}
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
