import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import fireicon from "../../../../public/icons/firebtnicon.svg";
import fireiconblue from "../../../../public/icons/firebtniconblue.svg";
import Link from "next/link";
const marketsname = [
  {
    pagename: "Forex",
    pagelink: "/forex"
  },
  {
    pagename: "Indices",
    pagelink: "/indices"
  },
  {
    pagename: "Crypto",
    pagelink: "/crypto"
  },
  {
    pagename: "Metals",
    pagelink: "/metals"
  },
  {
    pagename: "Commodities",
    pagelink: "/commodities"
  },
  {
    pagename: "Forex share market assets",
    pagelink: "/stocks"
  }
];
const Tradingmarket = () => {
  return (
    <div>
      <div className="inn_container  pt-12 xl:pt-24 2xl:pt-36">
        <div className="grid grid-col-1 md:grid-cols-2 pb-5 text-center md:text-start ">
          <Title title="Forex Market Trading Dubai" color="text-white" />
          <div className="flex justify-center items-center">
            <Discription
              dispription={`Dubai’s diverse financial landscape makes it a hotspot <br/> for global opportunities. With FlipTrade Group, <br/> traders can access`}
              color="text-white"
            />
          </div>
        </div>

        <div className="pt-12 grid grid-cols-3 gap-8">
          {marketsname.map((data, index) =>
            <div className="flex justify-center" key={index}>
              <Link href={data.pagelink}>
                <Button
                  icon={index % 2 == 0 ? fireicon : fireiconblue}
                  btn_name={data.pagename}
                  btn_bg={index % 2 == 0 ? "bg-primary" : "bg-white"}
                  text_color={index % 2 == 0 ? "text-white" : "text-primary"}
                  border_color={
                    index % 2 == 0 ? "border-primary" : "border-white"
                  }
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tradingmarket;
