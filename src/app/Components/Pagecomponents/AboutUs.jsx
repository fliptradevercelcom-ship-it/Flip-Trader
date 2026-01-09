"use client";
import React, { useState, useEffect } from "react";
import {
    ChevronDown,
    Zap,
    Shield,
    Globe,
    TrendingUp,
    Users,
    Award,
    Target,
    CheckCircle2,
    ArrowRight,
    Cpu,
    BarChart3,
    Landmark
} from "lucide-react";
import Discription from "../Uiux/Discription";
import Title from "../Uiux/Title";
import Button from "../Uiux/Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import Pipworkstep from "./Pipworkstep";
import Image from "next/image";


const aboutFlipTradeData = [
    {
        title: "Why FlipTrade",
        description:
            "We built FlipTrade because we believe trading should not be limited to a select few. Financial markets should be open, transparent, and accessible to anyone willing to learn and grow."
    },
    {
        title: "Our Background",
        description:
            "As traders ourselves, we saw how modern technology could unlock global opportunities. FlipTrade was created to empower individuals with the right tools, education, and support."
    },
    {
        title: "Trust",
        description:
            "FlipTrade is built on transparency and reliability. We prioritize fund safety, fair pricing, and honest trading conditions with no hidden charges or misleading practices."
    },
    {
        title: "Access",
        description:
            "We provide access to thousands of trading instruments including forex, indices, commodities, stocks, metals, and cryptocurrencies — all from one powerful platform."
    },
    {
        title: "Value",
        description:
            "Our focus is on delivering competitive trading costs, fast execution, and advanced tools while building long-term partnerships with our traders."
    },
    {
        title: "Our Commitment",
        description:
            "Every decision we make is guided by our core principles: more trust, more access, and more value — empowering traders to grow with confidence."
    }
];
const stepdata = [
    {
        title: "Create Account",
        description: "Sign up on Fliptrade and <br/> activate your trading account."
    },
    {
        title: "Fund & Choose Market",
        description: "Add funds and select the <br/> market you want to trade."
    },
    {
        title: "Trade & Grow",
        description: "Execute trades with advanced <br/> tools and grow confidently."
    }
];

export default function AboutUs() {
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        setIsVisible(true);
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const values = [
        { icon: <Zap className="w-6 h-6" color="white" />, title: "Innovation", desc: "Cutting-edge fintech evolution.", },
        { icon: <Shield className="w-6 h-6" color="white" />, title: "Security", desc: "Bank-level encryption standards." },
        { icon: <Globe className="w-6 h-6" color="white" />, title: "Global Access", desc: "Serving 50+ countries 24/7." },
        { icon: <Users className="w-6 h-6" color="white" />, title: "Community", desc: "A trusted trader ecosystem." },
        { icon: <Award className="w-6 h-6" color="white" />, title: "Excellence", desc: "Premium service, zero hidden fees." },
        // { icon: <Target className="w-6 h-6" color="white" />, title: "Transparency", desc: "Clarity in every transaction." }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#6a40ec]/30 font-sans">

            <section className="relative pt-12 flex items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-[#6a40ec]/15 blur-[120px] rounded-full" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] bg-[#b46aff]/10 blur-[120px] rounded-full" />
                </div>
                <div className="relative z-10 mx-auto px-6 text-center">
                    <div className={`transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
                        {/* <h2 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none italic gradient_text">
                            FLIPTRADE <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6a40ec] via-[#d497ff] to-[#6a40ec] animate-gradient-x">GROUP</span>
                        </h2> */}
                        <Title
                            title={'Fliptrade Group'}
                            color={'gradient_text'}
                        />

                        <Discription
                            dispription={'Empowering global traders with institutional technology and transparent market access.'}
                            color={'text-white max-w-3xl mx-auto '}
                        />
                    </div>
                </div>
            </section>

            <div className="inn_container py-6 md:py-12">
                <div className="max-w-[1440px] m-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 2xl:gap-x-10 gap-y-6">
                    {
                        aboutFlipTradeData.map((data, index) => (
                            <div className="" key={index}>
                                <h4 className="text-xl xl:text-2xl 2xl:text-3xl font-semibold text-primary mb-3">
                                    {data.title} :
                                </h4>

                                <Discription
                                    dispription={data.description}
                                    color={'text-white'}
                                />
                            </div>
                        ))
                    }
                </div>

                <div className="flex pt-12 justify-center">
                    <Button
                        btn_name="Contact Us"
                        icon={firebtnicon}
                        border_color="border-primary"
                        btn_bg="bg-primary"
                        shadow={true}
                        text_color="text-white"
                    />
                </div>
            </div>

            <section className="py-6 md:py-12 inn_container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* LEFT SIDE */}
                    <div className="lg:col-span-6 h-full">
                        <div className="h-full bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-6 md:p-12 hover:border-[#6a40ec]/60 transition-all flex flex-col justify-center">
                            <span className="text-sm uppercase tracking-[0.35em] text-[#6a40ec]">
                                Our Mission
                            </span>
                            <h2 className="text-4xl font-bold mt-4 mb-6">
                                Building a <span className="text-[#6a40ec]">Fair Trading</span> Ecosystem
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed">
                              At Flip Trade Group, our mission is to empower traders by providing secure, transparent, and technology-driven Forex trading solutions. We are committed to delivering fast execution, reliable platforms, and professional support that help our clients trade with confidence.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="lg:col-span-6 h-full">
                        <div className="h-full bg-gradient-to-br from-[#6a40ec] to-[#b46aff] rounded-[2.5rem] p-6 md:p-12 relative overflow-hidden flex flex-col justify-between">
                            <TrendingUp className="absolute -top-6 -right-6 w-32 h-32 opacity-25" />

                            <div>
                                <span className="text-sm uppercase tracking-[0.35em] text-white/80">
                                    Looking Ahead
                                </span>
                                <h2 className="text-4xl font-bold mt-4 mb-6 text-white">
                                    Our Vision for Global Traders
                                </h2>
                                <p className="text-white/80 text-lg leading-relaxed">
                                    Our vision is to become a globally recognized and trusted Forex brand, setting new standards in service quality, innovation, and client satisfaction while creating long-term value for traders and partners worldwide.
                                </p>
                            </div>

                            <div className="mt-10 bg-black/20 rounded-2xl p-6 flex items-center justify-between">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.35em] text-white/70 mb-2">
                                        Trusted By
                                    </p>
                                    <div className="text-5xl font-extrabold text-white">
                                        100K+
                                    </div>
                                    <p className="text-white/70 text-sm mt-1">
                                        Active Traders Worldwide
                                    </p>
                                </div>
                                <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
                                    <TrendingUp className="w-7 h-7 text-white" />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </section>



            <div className="inn_container py-6 md:py-12">
                <div className="text-center">
                    <Title
                        title={'Fliptrade In Numbers'}
                        color={'gradient_text'}
                    />
                </div>

                <div className="pt-12 grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                    <div className="text-center">
                        <div>
                            <Title
                                title={'100K<span class="text-primary font-bold">+ </span>'}
                                color={'text-white'}
                            />
                            <Discription
                                dispription={'ACTIVE TRADERS'}
                                color={'text-white'}
                            />
                        </div>
                        <p className="text-base lg:text-lg 2xl:text-[22px] text-white pt-3">
                            Fliptrade is trusted by over 100,000 active traders worldwide, empowering them with smart tools, fast execution, and reliable trading conditions.
                        </p>
                    </div>

                    <div className="text-center">
                        <div>
                            <Title
                                title={'50<span class="text-primary font-bold">+ </span>'}
                                color={'text-white'}
                            />
                            <Discription
                                dispription={'COUNTRIES'}
                                color={'text-white'}
                            />
                        </div>
                        <p className="text-base lg:text-lg 2xl:text-[22px] text-white pt-3">
                            We serve traders across more than 50 countries, building a global trading community supported by cutting-edge technology and local expertise.
                        </p>
                    </div>

                    <div className="text-center">
                        <div>
                            <Title
                                title={'10<span class="text-primary font-bold">+ </span>'}
                                color={'text-white'}
                            />
                            <Discription
                                dispription={'YEARS OF EXPERIENCE'}
                                color={'text-white'}
                            />
                        </div>
                        <p className="text-base lg:text-lg 2xl:text-[22px] text-white pt-3">
                            With over a decade of experience in the trading industry, Fliptrade focuses on transparency, innovation, and long-term trader success.
                        </p>
                    </div>
                </div>
            </div>

            <Pipworkstep
                title={'What Is Fliptrade? & <br/> How It Works'}
                dispription={
                    "Fliptrade is a modern trading platform  designed to simplify <br/> trading with powerful tools and real-time execution."
                }

                pointstep={stepdata}
            />

            <section className="py-6 md:py-12 bg-[#050505] inn_container relative">
                <div className=" md:px-6">
                    <div className="text-center mb-20">
                        <Title
                            title={'The FlipTrade Pillars'}
                            color={'text-white'}
                        />
                        <div className="h-1.5 w-24 bg-[#6a40ec] mx-auto rounded-full shadow-[0_0_15px_rgba(106,64,236,0.5)]" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                        {values.map((v, i) => (
                            <div
                                key={i}
                                className={`group p-8 rounded-3xl bg-gradient-to-br from-[#6a40ec] to-[#b46aff] border border-white/5 hover:border-[#6a40ec]/40 transition-all duration-500 ${i < 3 ? "md:col-span-2" : i < 5 ? "md:col-span-3" : "md:col-span-6"}`}>
                                <div className="w-14 h-14 rounded-2xl bg-[#6a40ec]/10 flex items-center justify-center mb-6 border-2 border-white group-hover:bg-[#6a40ec] group-hover:text-white transition">
                                    {v.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                                <p className="text-white leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <div className="inn_container">
                <div className="max-w-7xl m-auto flex flex-col-reverse md:grid grid-cols-2 gap-x-6 gap-y-6">
                    <div className="m-auto">
                        <div>
                            <Title
                                title={'CEO Massge'}
                                color={'text-white'}
                            />
                            <h4 className="text-xl lg:text-2xl 2xl:text-3xl text-primary italic mb-5">
                                Chris Henry
                            </h4>

                            <Discription
                                dispription={`Chris Henry, CEO of Flip Trade Group, brings over 7 years of proven experience in the Forex industry. His deep market expertise and strong leadership have helped Flip Trade Group earn the trust of 60,000+ satisfied clients worldwide. With a clear focus on transparency, innovation, and client success, he continues to lead the company toward sustainable global growth.`}
                                color={'text-white'}
                            />
                        </div>
                    </div>
                    <div>
                        <Image
                            src={'/images/ceoimage.png'}
                            alt="CEO"
                            width={1000}
                            height={500}
                            className="h-full"
                        />
                    </div>
                </div>
            </div>
            <style jsx global>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
        </div>
    );
}
