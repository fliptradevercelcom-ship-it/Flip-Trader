"use client";
import React from "react";
import "./Loader.css"; 

const Loader = () => {
  return (
    <div className="h-[80vh] bg-gradient-to-b from-[#1a0f2e] via-[#0f0820] to-[#060608 flex justify-center items-center">
      <div className="relative w-[120px] h-[90px] mx-auto loader" />
    </div>
  );
};

export default Loader;
