import React from "react";
import ibbanner from "../../../../public/banners/ibbanner.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtn from "../../../../public/icons/firebtnicon.svg";
import Image from "next/image";
import ibpartnerright from "../../../../public/images/ib-partnerright.webp";
import Link from "next/link";
const Ibpartnerbanner = () => {
  return (
    <div className="" style={{ backgroundImage: `url(${ibbanner.src})` }}>
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex flex-col justify-center text-center lg:text-start pt-40 pb-20 lg:py-48">
            <Title
              title={"Become a Fliptrade <br/> IB Partner"}
              color={"gradient_text"}
              ish1={true}
            />
            <div className="py-6">
              <Discription
                dispription={
                  "Earn commissions by referring traders to Fliptrade <br /> simple, transparent, and rewarding."
                }
                color={"text-[#D0D0D0]"}
              />
            </div>
            <Link
              href={"https://client.fliptradegroup.com/trader/registration"}
            >
              <Button
                btn_name="Become IB Partner"
                border_color="border-primary"
                btn_bg={"bg-primary"}
                shadow={true}
                text_color={"text-white"}
                icon={firebtn}
              />
            </Link>
          </div>
          <div className="pt-12 lg:pt-0 flex items-end justify-center">
            <Image
              src={ibpartnerright}
              alt="side banner"
              width={1000}
              height={500}
              className="max-w-[70%] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ibpartnerbanner;
