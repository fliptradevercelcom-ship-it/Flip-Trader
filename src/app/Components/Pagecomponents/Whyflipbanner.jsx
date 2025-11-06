import React from "react";
import faqbanner from "../../../../public/banners/whyfliptradebanner.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtn from "../../../../public/icons/firebtnicon.svg";
import Image from "next/image";
import whyfliptrade from "../../../../public/images/whyfliptrade.webp";
import Link from "next/link";
const Whyflipbanner = () => {
  return (
    <div className="" style={{ backgroundImage: `url(${faqbanner.src})` }}>
      <div className="inn_container pt-40 pb-20 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="flex flex-col justify-center text-center lg:text-start">
            <Title title={"Why FlipTrade"} color={"gradient_text"} />
            <div className="py-6">
              <Discription
                dispription={
                  "FlipTrade empowers traders at every level with account <br/> types tailored to your skills, goals, and trading style. <br/> Choose the one that fits you best."
                }
                color={"text-[#D0D0D0]"}
              />
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
          <div>
            <Image
              src={whyfliptrade}
              alt="side banner"
              width={1000}
              height={500}
              className="max-w-[60%] m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyflipbanner;
