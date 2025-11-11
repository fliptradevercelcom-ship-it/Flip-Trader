import React from "react";
import faqbanner from "../../../../public/banners/defaultbgbanner.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtn from "../../../../public/icons/firebtnicon.svg";
import Image from "next/image";
import faqsideimage from "../../../../public/images/faqsideimage.webp";
import Link from "next/link";
const Faqbanner = () => {
  return (
    <div className="" style={{ backgroundImage: `url(${faqbanner.src})` }}>
      <div className="inn_container pt-40 pb-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex flex-col justify-center text-center lg:text-start">
            <Title title={"FlipTrade FAQ"} color={"gradient_text"} ish1={true} />
            <div className="py-6">
              <Discription
                dispription={
                  "Find quick answers about account <br/> opening, trading, deposits, <br/> withdrawals, and more."
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
          <div>
            <Image
              src={faqsideimage}
              alt="side banner"
              width={1000}
              height={500}
              className="max-w-[100%] m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqbanner;
