"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Title from "../Uiux/Title";
import usericon from "../../../../public/icons/usericon.svg";
import Regulation from "../../../../public/icons/Regulation.svg";
import usericonwhite from "../../../../public/icons/usericonwhite.svg";
import Regulationwhite from "../../../../public/icons/Regulationwhite.svg";
import faqicon from "../../../../public/icons/faq.svg"
import pageicon from '../../../../public/icons/page.svg'
import pageiconblack from '../../../../public/icons/pageblack.svg'
import securityblack from "../../../../public/icons/securityblack.svg";
import securitywhite from "../../../../public/icons/securitywhite.svg";
import Disclosurewhite from "../../../../public/icons/Disclosurewhite.svg";
import Disclosureblack from "../../../../public/icons/Disclosureblack.svg";
import lawblack from "../../../../public/icons/lawblack.svg";
import lawwhite from "../../../../public/icons/lawwhite.svg";
import Cookiesblack from "../../../../public/icons/Cookiesblack.svg";
import Cookieswhite from "../../../../public/icons/Cookieswhite.svg";
import Securityb from "../../../../public/icons/Securityb.svg";
import Securityw from "../../../../public/icons/Securityw.svg";
import otherwhite from "../../../../public/icons/otherwhite.svg";
import otherblack from "../../../../public/icons/otherblack.svg";
import contactblack from "../../../../public/icons/contactblack.svg";
import contactwhite from "../../../../public/icons/contactwhite.svg";

import { 
  Card1, Card2, Card3, Card4, Card5, 
  Card6, Card7, Card8, Card9, Card10 
} from "../Pagecomponents/Privacypolicycomponent";

const privatepolicy = [
    {
        id: 1,
        faqtitle: "Introduction",
        faqicon: pageiconblack,
        faqiconwhite: pageicon,
        sectioncompoent: Card1
    },
    {
        id: 2,
        faqtitle: "Who We Are?",
        faqicon: usericon,
        faqiconwhite: usericonwhite,
        sectioncompoent: Card2
    },
    {
        id: 3,
        faqtitle: "Information We Collect",
        faqicon: Regulation,
        faqiconwhite: Regulationwhite,
        sectioncompoent: Card3
    },
    {
        id: 4,
        faqtitle: "How We Use Your Information?",
        faqicon: securityblack,
        faqiconwhite: securitywhite,
        sectioncompoent: Card4


    },
    {
        id: 5,
        faqtitle: "Disclosure of Information ",
        faqicon: Disclosureblack,
        faqiconwhite: Disclosurewhite,
        sectioncompoent: Card5


    },
    {
        id: 6,
        faqtitle: "Lawful Basis for Processing",
        faqicon: lawblack,
        faqiconwhite: lawwhite,
        sectioncompoent: Card6

    },
    {
        id: 7,
        faqtitle: "Cookies",
        faqicon: Cookiesblack,
        faqiconwhite: Cookieswhite,
        sectioncompoent: Card7

    },
    {
        id: 8,
        faqtitle: "Security of Information",
        faqicon: Securityb,
        faqiconwhite: Securityw,
        sectioncompoent: Card8

    },
    {
        id: 9,
        faqtitle: "Disclaimer & Updates",
        faqicon: otherblack,
        faqiconwhite: otherwhite,
        sectioncompoent: Card9

    },
    {
        id: 10,
        faqtitle: "Contact Us",
        faqicon: contactblack,
        faqiconwhite: contactwhite,
        sectioncompoent: Card10

    },
];
const Privacypolicy = () => {

    const sectionRefs = useRef([]);
    const [activeSection, setActiveSection] = useState(null);
    const [faqtogle, setFaqTogle] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            sectionRefs.current.forEach((ref, index) => {
                if (!ref) return;
                const rect = ref.getBoundingClientRect();

                if (rect.top >= 0 && rect.top <= 50) {
                    setActiveSection(privatepolicy[index].id);
                }
            });

        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-theme">
            <div className="inn_container pt-12 md:pt-18 lg:pt-28 xl:pt-32 2xl:pt-40 pb-12 xl:pb-24">
                <div className="text-center">
                    <Title title="Privacy Policy" color="text-white" />

                </div>

                <div className="flex flex-col xl:flex-row xl:pt-14 gap-4 relative">
                    <div className={` hidden xl:block xl:w-[30%] 2xl:w-[25%]`}>
                        <div className="bg-primary xl:max-w-[380px] p-6 rounded-3xl sticky top-10">
                            <p className="text-[30px] font-medium text-white">Privacy Policy</p>
                            <div className="pt-4 grid grid-cols-2 xl:grid-cols-1 gap-3">
                                {privatepolicy.map((data, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-2xl mt-4 cursor-pointer transition-all duration-300 ${activeSection === data.id ? "bg-white" : "bg-[#4C1BE3]"
                                            }`}
                                        onClick={() => {
                                            sectionRefs.current[index]?.scrollIntoView({
                                                behavior: "smooth",
                                                block: "start"
                                            })
                                        }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={activeSection === data.id ? data.faqicon : data.faqiconwhite}
                                                alt="icon"
                                                width={1000}
                                                height={500}
                                                className="max-w-[24px]"
                                            />
                                            <p
                                                className={`list_text font-medium ${activeSection === data.id ? "text-black" : "text-white"
                                                    }`}
                                            >
                                                {data.faqtitle}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className=" xl:w-[70%] 2xl:w-[75%]">
                        <div className="block xl:hidden sticky top-[50px]">
                            <div
                                className="bg-primary w-max p-3 rounded-full"
                                onClick={() => setFaqTogle((prev) => !prev)}
                            >
                                <Image
                                    src={faqicon}
                                    alt="faqicon"
                                    width={1000}
                                    height={500}
                                    className="max-w-[32px]"
                                />
                            </div>

                            <div className={`${faqtogle ? "block" : "hidden"} absolute top-[57px] left-0 w-full md:w-[80%] xl:top-0 xl:relative overflow-hidden  xl:h-auto xl:w-[30%] 2xl:w-[25%]`}>
                                <div className={`bg-primary xl:max-w-[380px] p-6 rounded-3xl sticky top-10 ${activeSection === privatepolicy.length ? 'hidden' : 'block'}`}>
                                    <p className="text-[30px] font-medium text-white">FAQ Categories</p>
                                    <div className="pt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3">
                                        {privatepolicy.map((data, index) => (
                                            <div
                                                key={index}
                                                className={`p-4 rounded-2xl mt-4 cursor-pointer transition-all duration-300 ${activeSection === data.id ? "bg-white" : "bg-[#4C1BE3]"
                                                    }`}
                                                onClick={() => {
                                                    sectionRefs.current[index]?.scrollIntoView({
                                                        behavior: "smooth",
                                                        block: "start"
                                                    });
                                                    setFaqTogle(false);
                                                }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src={activeSection === data.id ? data.faqicon : data.faqiconwhite}
                                                        alt="icon"
                                                        width={1000}
                                                        height={500}
                                                        className="max-w-[24px]"
                                                    />
                                                    <p
                                                        className={`list_text font-medium ${activeSection === data.id ? "text-black" : "text-white"
                                                            }`}
                                                    >
                                                        {data.faqtitle}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            {
                                privatepolicy.map((data, index) => {
                                    const Sectioncard = data.sectioncompoent;
                                    console.log("Component: ", data.sectioncompoent);

                                    return (
                                        <div key={index} ref={el => (sectionRefs.current[index] = el)} className="p-4 shadow-[1px_1px_0px_0px_#fff] rounded-3xl mt-12">
                                            <div className="flex items-center gap-3 max-w-[900px] 2xl:max-w-7xl m-auto">
                                                <Image
                                                    src={data.faqiconwhite}
                                                    alt="icon"
                                                    width={1000}
                                                    height={500}
                                                    className="max-w-[34px]"
                                                />
                                                <p className={`text-[30px] font-medium text-white `}>
                                                    {data.faqtitle}
                                                </p>
                                            </div>
                                            <div>
                                            {Sectioncard && <Sectioncard />}
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Privacypolicy;

