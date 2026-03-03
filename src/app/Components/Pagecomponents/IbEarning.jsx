import React from "react";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";
import Link from "next/link";
import Button from "../Uiux/Button";
import firebtn from "../../../../public/icons/firebtnicon.svg";
import Image from "next/image";
const IbEarning = () => {
    return (
        <div className="relative py-12 md:py-18 lg:py-24 ">

            <section className="relative bg-bgtheme overflow-hidden z-10">
                <div className="absolute  py-12 md:py-18 lg:py-24 top-0 left-0 w-full h-full ">
                    <Image
                        src={'/images/ibreferbg.webp'}
                        alt=""
                        width={1000}
                        height={500}
                        className="inn_container w-full opacity-35 "
                    />
                </div>
                <div className="inn_container relative z-10">
                    <div className="bg-white/5  border border-white/10 rounded-[30px] p-0 md:p-16 shadow-[0_0_60px_rgba(106,64,236,0.15)]">
                        <div className="grid md:grid-cols-[4fr_1fr_4fr] items-center gap-y-5">
                            <div className="text-center md:text-left">
                                <Title
                                    title={
                                        'IB Partner <span class="text-primary">Earnings</span>'
                                    }
                                    color={"gradient_text"}
                                />

                                <Discription
                                    dispription={`Join Fliptrade Group as an Introducing Broker (IB) Partner and earn competitive, volume-based rebates on every standard lot traded by your referred clients. As an IB Partner, you can earn a <span class="text-subprimary font-semibold"> minimum of $3</span> and up to <span class="text-subprimary font-semibold"> $11 per lot</span> depending on trading volume — with full transparency and real-time tracking.`}
                                    color={"text-white"}
                                />
                            </div>

                            <div className="hidden md:flex justify-center">
                                <div className="relative h-72 w-16 bg-white/10 rounded-full overflow-hidden border border-white/20">
                                    <div className="absolute bottom-0 w-full h-[85%] bg-gradient-to-t from-primary to-subprimary rounded-full animate-pulse" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 md:gap-14">
                                <div className="relative">
                                    <Image
                                        src={'/images/11$.png'}
                                        alt=""
                                        width={1000}
                                        height={500}
                                        className="max-w-[70%] m-auto"
                                    />
                                </div>

                               <div className="flex justify-center">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IbEarning;
