import React from "react";
import copytradingbanner from "/public/banners/copytradingbanner.webp";
import firebtn from "/public/icons/firebtnicon.svg";
import Image from "next/image";
import Title from "../../Uiux/Title";
import Discription from "../../Uiux/Discription";
import Button from "../../Uiux/Button";
import Link from "next/link";
const Accountsbanner = ({ title, description, bannerposter }) => {
  return (
    <div
      className=""
      style={{ backgroundImage: `url(${copytradingbanner.src})` }}
    >
      <div className=" pt-40 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 ms-[7%]">
          <div className="flex flex-col justify-center text-center lg:text-start me-[7%] lg:me-0">
            <Title title={title} color={"gradient_text"} />
            <div className="py-6">
              <Discription dispription={description} color={"text-[#D0D0D0]"} />
            </div>
            <Link
              href={"https://client.fliptradegroup.com/trader/registration"}
            >
              <Button
                btn_name="Start Trading"
                border_color="border-primary"
                btn_bg={"bg-primary"}
                shadow={true}
                text_color={"text-white"}
                icon={firebtn}
              />
            </Link>
          </div>
          <div className="pt-12 lg:pt-0">
            <Image
              src={bannerposter}
              alt="side banner"
              width={1000}
              height={500}
              className="max-w-[90%] ms-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountsbanner;
