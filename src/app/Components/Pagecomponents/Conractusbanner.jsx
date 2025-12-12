import React from "react";
import contactus from "../../../../public/banners/contactusnew.webp";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import contactusright from "../../../../public/images/contactusright.webp";
import Image from "next/image";
import Link from "next/link";
function Conractusbanner() {
  return (
    <div
      className="bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${contactus.src})` }}
    >
      <div className="inn_container">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center pt-40 pb-20 lg:py-40 2xl:py-54">
            <div className="text-center lg:text-start">
                <Title title={"Contact Us"} color={"gradient_text"} ish1={true} />
              <div className="pt-4">
                <Discription
                  dispription={
                    "We’re here to assist you. Whether you have questions, <br/> need support, or want to learn more about our <br/> services, feel free to reach out."
                  }
                  color={"text-[#D0D0D0]"}
                />
              </div>
              <div className="pt-12">
                <Link
                  href={"https://client.fliptradegroup.com/trader/registration"}
                >
                  <Button
                    btn_name={"Get in Touch Today"}
                    border_color={"border-primary"}
                    btn_bg={"bg-primary"}
                    shadow={true}
                    icon={firebtnicon.src}
                    text_color={"text-white"}
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center pt-8 lg:pt-0">
            <Image
              src={contactusright}
              alt="contactusright"
              width={1500}
              height={500}
              className="max-w-[99%] mt-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conractusbanner;
