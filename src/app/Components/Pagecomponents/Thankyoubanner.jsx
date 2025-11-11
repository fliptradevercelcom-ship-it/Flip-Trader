import React from "react";

function Thankyoubanner() {
  return (
    <div className="pt-42">
      <div className="min-h-[475px]  p-4 lg:p-10 border-2 border-[#00000033] rounded-[44px] flex justify-center items-center">
        <div className="text-center space-y-6">
          <h1 className="gradient_text text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">
            Thank You!
          </h1>
          <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/90">
            Your form has been submitted. Our team will connect with you shortly.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Thankyoubanner;
