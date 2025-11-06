import React from "react";
import whatcopytradingbg from "../../../../public/images/whatcopytradingbg.webp";
import whatcopytradingleft from "../../../../public/images/whatcopytradingleft.webp";
import firebtn from "../../../../public/icons/firebtnicon.svg";
import Image from "next/image";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import Link from "next/link";
const Whatcopytrading = () => {
  return (
    <div className="bg-theme pt-12 md:pt-18 lg:pt-32 2xl:pt-40">
      <div
        className=" bg-left bg-no-repeat bg-contain"
        style={{ backgroundImage: `url(${whatcopytradingbg.src})` }}
      >
        <div className="inn_container grid lg:grid-cols-2 gap-6">
          <div>
            <Image
              src={whatcopytradingleft}
              alt="whatcopytradingleft"
              width={1500}
              height={500}
              className=""
            />
          </div>
          <div className="text-center lg:text-start">
            <Title
              title={"What Is Social & <br/> Copy Trading?"}
              color={"gradient_text"}
            />
            <div className="py-6">
              <Discription
                dispription={
                  "Social & Copy Trading lets you learn from professionals <br/> and trade like them, without deep market knowledge. <br/> You can watch expert traders, follow their strategies, <br/> and instantly replicate their trades in your own account <br/> — automatically and transparently."
                }
                color={"text-white"}
              />
            </div>
            <Link
              href={"https://client.fliptradegroup.com/trader/registration"}
            >
              <Button
                btn_name="Start Trading Now"
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

export default Whatcopytrading;
