import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import Link from "next/link";

const BrokerFeature = ({ title, description, data }) => {
  return (
    <div>
      <div className="inn_container py-12 md:py-18">
        <div className="grid grid-cols-1 xl:grid-cols-[2fr_3fr] gap-3">
          <div className="text-center lg:text-start">
            <Title title={title} color={"gradient_text"} />
            <div>
              <Discription dispription={description} color={"text-white"} />
            </div>
            <div className="pt-8">
              <Link
                href={"https://client.fliptradegroup.com/trader/registration"}
              >
                <Button
                  btn_name="Open Account"
                  icon={firebtnicon}
                  border_color="border-primary"
                  btn_bg="bg-primary"
                  shadow={true}
                  text_color="text-white"
                />
              </Link>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:max-w-[90%] m-auto pt-6 xl:pt-0">
              {data.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="py-8 px-4 2xl:px-6 bg-[linear-gradient(180deg,rgba(106,64,236,0.62)_0%,rgba(0,0,0,1)_100%)] rounded-2xl text-white"
                  >
                    <h3 className="text-5xl">
                      {item.__id}
                    </h3>

                    <h3 className="text-xl 2xl:text-2xl mb-4 pt-3">
                      {item.title}
                    </h3>

                    {item.description.map((text, i) =>
                      <p
                        key={i}
                        className="mb-4 text-base opacity-90 font_ternarynormal"
                      >
                        {text}
                      </p>
                    )}

                    {/* <a
                      href={item.link}
                      className="mt-6 inline-flex items-center gap-2"
                    >
                      {item.cta} →
                    </a> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrokerFeature;
