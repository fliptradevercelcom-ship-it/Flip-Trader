"use client";
import React, { useState } from "react";
import Title from "../../Uiux/Title";
import Discription from "../../Uiux/Discription";
import Forexgraph from "./Forexgraph";
import Indicesgraph from "./Indicesgraph";
import Commoditiesgraph from "./Commoditiesgraph";
import Cryptocurrencygraph from "./Cryptocurrencygraph";
import Metalgraph from "./Metalgraph";
import Stocksgraph from "./Stocksgraph";
import Economicgraph from "../Economicgraph";
import { useAutoScroll } from "../../../../hooks/useAutoScroll";
import { usePathname } from "next/navigation";
const Graphhome = ({ title, discription, pagepath }) => {
  const [darkMode, setDarkMode] = useState("light");
  const currentpath = usePathname();
  const toggleDarkMode = () => {
    setDarkMode(prev => (prev === "light" ? "dark" : "light"));
  };
  useAutoScroll("graph", { delay: 800 });
  return (
    <div className={` ${currentpath ? "pt-12 relative" : "py-12 pt-[8rem] relative"}`}>
      {currentpath === "/economic-calendar"
        ? null
        : <video
            className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none "
            src="/videos/marketsgraphbg.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />}

      <div className="inn_container">
        {pagepath === "/economic-calendar"
          ? null
          : <div className="grid  text-center xl:text-start xl:grid-cols-2 max-w-[700px] md:max-w-[unset]">
              <div className="flex justify-center xl:justify-start" id="graph">
                <Title title={title} color={"gradient_text"} />
              </div>
              <div className="flex justify-center xl:justify-start">
                <Discription dispription={discription} color={"text-white"} />
              </div>
            </div>}

        <div className="pt-12 2xl:max-w-[1380px] m-auto relative">
          {pagepath === "/forex"
            ? <Forexgraph darkMode={darkMode} />
            : pagepath === "/indices"
              ? <Indicesgraph darkMode={darkMode} />
              : pagepath === "/commodities"
                ? <Commoditiesgraph darkMode={darkMode} />
                : pagepath === "/cryptocurrency"
                  ? <Cryptocurrencygraph darkMode={darkMode} />
                  : pagepath === "/metals"
                    ? <Metalgraph darkMode={darkMode} />
                    : pagepath === "/stocks"
                      ? <Stocksgraph darkMode={darkMode} />
                      : pagepath === "/economic-calendar"
                        ? <Economicgraph darkMode={darkMode} />
                        : null}

          <div className="absolute top-[10px] right-3 cursor-pointer">
            <button
              onClick={toggleDarkMode}
              className="relative w-16 h-8 rounded-full bg-gray-300 transition-colors duration-500 p-1"
            >
              <span
                className={`absolute top-1 left-1 w-6 h-6 bg-theme rounded-full shadow-md transform transition-transform duration-500
                ${darkMode === "dark" ? "translate-x-8" : "translate-x-0"}`}
              />
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-yellow-500 text-xs">
                ☀️
              </span>
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 text-xs">
                🌙
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graphhome;
