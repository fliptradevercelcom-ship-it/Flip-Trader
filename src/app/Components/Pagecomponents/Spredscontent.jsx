import React from "react";
import pipcalculatersidebanner from "../../../../public/images/pipcalculatersidebanner.webp";
import Image from "next/image";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
const Spredscontent = () => {
  return (
    <div className="inn_container pt-12 md:pt-18 lg:pt-28 xl:pt-32">
      <div className="grid lg:grid-cols-[3fr_2fr] gap-y-5 md:gap-y-0">
        <div>
          <div className="max-w-[90%] m-auto text-center md:text-start">
            <Title
              title={"How do you calculate your transaction cost?"}
              color={"gradient_text"}
            />
            <div className="pt-6">
              <Discription
                dispription={`
                To work out the cost of a trade itself (not including swaps, commissions etc.), you take the spread and pip value and multiply it by the number of lots that you’re trading: <br/>
                <strong> Trade Cost = Spread X Trade Size X Pip Value </strong> <br/>
                For example: <br/>
                A trade you have opened has <strong> 1.2 pips spread. </strong> In this example, you’re trading with <strong> mini lots </strong> which are 10,000 base units.
               <strong> The pip value is at $1, so the transaction cost is $1.20 </strong>
                `}
                color={"text-white"}
              />
            </div>
          </div>
        </div>
        <div>
          <Image
            src={pipcalculatersidebanner}
            alt="pipcalculatersidebanner"
            width={1000}
            height={500}
            className="max-w-[90%] m-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Spredscontent;
