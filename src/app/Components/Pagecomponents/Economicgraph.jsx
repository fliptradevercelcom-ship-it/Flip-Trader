"use client";
import React, { useEffect, useRef, memo } from "react";

const Economicgraph = ({ darkMode }) => {
  const container = useRef();

  useEffect(() => {
    // Clear existing widget before re-embedding
    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.type = "text/javascript";
    script.async = true;

    script.innerHTML = JSON.stringify({
      colorTheme: darkMode, // "dark" or "light"
      isTransparent: false,
      locale: "en",
      countryFilter:
        "ar,au,br,ca,cn,fr,de,in,id,it,jp,kr,mx,ru,sa,za,tr,gb,us,eu",
      importanceFilter: "-1,0,1",
      height: "550",
    });

    container.current.appendChild(script);
  }, [darkMode]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};

export default memo(Economicgraph);
