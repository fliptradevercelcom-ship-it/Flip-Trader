import React from "react";
import faqbanner from "../../../../public/banners/whyfliptradebanner.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtn from "../../../../public/icons/firebtnicon.svg";
import Image from "next/image";
import depositwithdrawalbanner from "../../../../public/images/deposit&withdrawalbanner.png";
import Link from "next/link";
const DepositWithdrawalBanner = () => {
  return (
    <div className="" style={{ backgroundImage: `url(${faqbanner.src})` }}>
      <div className="inn_container pt-40 pb-20 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] ">
          <div className="flex flex-col justify-center text-center lg:text-start">
            <Title title={"Fast & Secure Deposits and Withdrawals"} color={"gradient_text"} ish1={true} />
            <div className="py-6">
              <Discription
                dispription={
                  "FlipTrade offers secure and lightning-fast deposits and withdrawals. Fund your account instantly and withdraw profits with confidence using trusted payment methods and transparent processing."
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
              src={depositwithdrawalbanner}
              alt="side banner"
              width={1000}
              height={500}
              className="max-w-[80%] m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositWithdrawalBanner;

