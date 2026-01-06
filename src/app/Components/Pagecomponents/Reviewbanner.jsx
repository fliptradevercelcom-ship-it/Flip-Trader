import React from "react";
import ibbanner from "../../../../public/banners/ibbanner.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtn from "../../../../public/icons/firebtnicon.svg";
import Image from "next/image";
import ibpartnerright from "../../../../public/images/ib-partnerright.webp";
import Link from "next/link";
const Reviewbanner = () => {
  return (
    <div className="" style={{ backgroundImage: `url(${ibbanner.src})` }}>
      <div className="inn_container">
        <div className="grid grid-cols-1">
          <div className="flex flex-col justify-center text-center  pt-40 pb-20 lg:pt-48">
            <Title
              title={"Fliptrade Trading Platform  <br/> Honest Review"}
              color={"gradient_text"}
              ish1={true}
            />
            <div className="py-6">
              <Discription
                dispription={
                  "We analyze Fliptrade’s platform, tools, costs, <br/> security & user experience."
                }
                color={"text-[#D0D0D0]"}
              />
            </div>
            <Link
              href={"https://www.trustpilot.com/review/fliptradegroup.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector"}
            >
              <Button
                btn_name="Check Full Review"
                border_color="border-primary"
                btn_bg={"bg-primary"}
                shadow={true}
                text_color={"text-white"}
                icon={firebtn}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewbanner;
