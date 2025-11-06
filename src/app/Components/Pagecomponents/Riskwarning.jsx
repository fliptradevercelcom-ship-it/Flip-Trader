"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Title from "../Uiux/Title";

// Reuse your icon set
import usericon from "../../../../public/icons/usericon.svg";
import Regulation from "../../../../public/icons/Regulation.svg";
import usericonwhite from "../../../../public/icons/usericonwhite.svg";
import Regulationwhite from "../../../../public/icons/Regulationwhite.svg";
import faqicon from "../../../../public/icons/faq.svg";
import pageicon from "../../../../public/icons/page.svg";
import pageiconblack from "../../../../public/icons/pageblack.svg";
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

/* ================================================
   Sections list (same schema as your other pages)
================================================= */
const riskSections = [
    { id: 1, faqtitle: "Risk Warning – Overview", faqicon: pageiconblack, faqiconwhite: pageicon, sectioncompoent: RiskCard1 },
    { id: 2, faqtitle: "1. Use of Leverage", faqicon: usericon, faqiconwhite: usericonwhite, sectioncompoent: RiskCard2 },
    { id: 3, faqtitle: "2. Instability of Instruments", faqicon: Regulation, faqiconwhite: Regulationwhite, sectioncompoent: RiskCard3 },
    { id: 4, faqtitle: "3. Technical Risks", faqicon: securityblack, faqiconwhite: securitywhite, sectioncompoent: RiskCard4 },
    { id: 5, faqtitle: "4. Market Risks", faqicon: Disclosureblack, faqiconwhite: Disclosurewhite, sectioncompoent: RiskCard5 },
    { id: 6, faqtitle: "5. Regulatory & Legal Risks", faqicon: lawblack, faqiconwhite: lawwhite, sectioncompoent: RiskCard6 },
    { id: 7, faqtitle: "6. Platform Execution Risks", faqicon: Cookiesblack, faqiconwhite: Cookieswhite, sectioncompoent: RiskCard7 },
    { id: 8, faqtitle: "7. Communication Risks", faqicon: Securityb, faqiconwhite: Securityw, sectioncompoent: RiskCard8 },
    { id: 9, faqtitle: "8. Force Majeure Events", faqicon: otherblack, faqiconwhite: otherwhite, sectioncompoent: RiskCard9 },
    { id: 10, faqtitle: "9. Cryptocurrency CFDs", faqicon: pageiconblack, faqiconwhite: pageicon, sectioncompoent: RiskCard10 },
    { id: 11, faqtitle: "10. No Ownership of Assets", faqicon: Regulation, faqiconwhite: Regulationwhite, sectioncompoent: RiskCard11 },
    { id: 12, faqtitle: "11. Gapping Risk", faqicon: securityblack, faqiconwhite: securitywhite, sectioncompoent: RiskCard12 },
    { id: 13, faqtitle: "12. Stop Loss Limitations", faqicon: Disclosureblack, faqiconwhite: Disclosurewhite, sectioncompoent: RiskCard13 },
    { id: 14, faqtitle: "13. Margin Call & Liquidation", faqicon: lawblack, faqiconwhite: lawwhite, sectioncompoent: RiskCard14 },
    { id: 15, faqtitle: "14. Risk of Losing Funds", faqicon: Cookiesblack, faqiconwhite: Cookieswhite, sectioncompoent: RiskCard15 },
    { id: 16, faqtitle: "15. No Profit Guarantee", faqicon: Securityb, faqiconwhite: Securityw, sectioncompoent: RiskCard16 },
    { id: 17, faqtitle: "16. Interest Rate Risk", faqicon: otherblack, faqiconwhite: otherwhite, sectioncompoent: RiskCard17 },
    { id: 18, faqtitle: "17. Legal & Regulatory Changes", faqicon: pageiconblack, faqiconwhite: pageicon, sectioncompoent: RiskCard18 },
    { id: 19, faqtitle: "Final Notice", faqicon: contactblack, faqiconwhite: contactwhite, sectioncompoent: RiskCard19 },
];

const Riskwarning = () => {
    const sectionRefs = useRef([]);
    const [activeSection, setActiveSection] = useState(null);
    const [faqtogle, setFaqTogle] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            sectionRefs.current.forEach((ref, index) => {
                if (!ref) return;
                const rect = ref.getBoundingClientRect();
                if (rect.top >= 0 && rect.top <= 50) setActiveSection(riskSections[index].id);
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="bg-theme">
            <div className="inn_container pt-28 xl:pt-32 2xl:pt-40 pb-12 xl:pb-24">
                <div className="text-center">
                    <Title title="Risk Warning" color="text-white" />
                </div>

                <div className="flex flex-col xl:flex-row xl:pt-14 gap-4 relative">
                    {/* Sidebar (Desktop) */}
                    <div className="hidden xl:block xl:w-[30%] 2xl:w-[25%]">
                        <div className="bg-primary xl:max-w-[380px] p-6 rounded-3xl sticky top-10">
                            <p className="text-[30px] font-medium text-white">Risk Warning</p>
                            <div className="pt-4 grid grid-cols-2 xl:grid-cols-1 gap-3">
                                {riskSections.map((data, index) => (
                                    <div
                                        key={data.id}
                                        className={`p-4 rounded-2xl mt-4 cursor-pointer transition-all duration-300 ${activeSection === data.id ? "bg-white" : "bg-[#4C1BE3]"
                                            }`}
                                        onClick={() =>
                                            sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" })
                                        }
                                    >
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={activeSection === data.id ? data.faqicon : data.faqiconwhite}
                                                alt="icon"
                                                width={24}
                                                height={24}
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

                    {/* Content */}
                    <div className="xl:w-[70%] 2xl:w-[75%]">
                        {/* Mobile Toggle */}
                        <div className="block xl:hidden sticky top-[50px] z-10">
                            <button
                                className="bg-primary w-max p-3 rounded-full"
                                onClick={() => setFaqTogle((v) => !v)}
                                aria-label="Toggle sections"
                            >
                                <Image src={faqicon} alt="faqicon" width={32} height={32} className="max-w-[32px]" />
                            </button>

                            {faqtogle && (
                                <div className="absolute top-[57px] left-0 w-full md:w-[80%]">
                                    <div className="bg-primary p-6 rounded-3xl">
                                        <p className="text-[24px] font-medium text-white">Sections</p>
                                        <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {riskSections.map((data, index) => (
                                                <div
                                                    key={data.id}
                                                    className={`p-4 rounded-2xl mt-4 cursor-pointer transition-all duration-300 ${activeSection === data.id ? "bg-white" : "bg-[#4C1BE3]"
                                                        }`}
                                                    onClick={() => {
                                                        sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
                                                        setFaqTogle(false);
                                                    }}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <Image
                                                            src={activeSection === data.id ? data.faqicon : data.faqiconwhite}
                                                            alt="icon"
                                                            width={24}
                                                            height={24}
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
                            )}
                        </div>

                        {/* Sections */}
                        <div>
                            {riskSections.map((data, index) => {
                                const Section = data.sectioncompoent;
                                return (
                                    <div
                                        key={data.id}
                                        ref={(el) => (sectionRefs.current[index] = el)}
                                        className="p-4 shadow-[1px_1px_0px_0px_#fff] rounded-3xl mt-12"
                                    >
                                        <div className="flex items-center gap-3 max-w-[900px] 2xl:max-w-7xl m-auto">
                                            <Image src={data.faqiconwhite} alt="icon" width={34} height={34} className="max-w-[34px]" />
                                            {/* Your requested title element */}
                                            <p className="text-xl md:text-2xl xl:text-[30px] font-medium text-white">{data.faqtitle}</p>
                                        </div>
                                        <div>{Section && <Section />}</div>
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

export default Riskwarning;

/* ================================================
   Cards – content mapped from your statement
================================================= */

export function RiskCard1() {
    return (
        <div className="pt-6">
            <p className="text-base 2xl:text-xl text-white font_ternary">
                This Risk Disclosure Statement informs you of potential risks in trading with FlipTrade Group.
                Trading financial markets carries a high level of risk and may not suit all investors. Consider
                your financial situation and risk tolerance carefully. This is not an exhaustive list of risks.
            </p>
        </div>
    );
}

export function RiskCard2() {
    return (
        <div className="pt-6">
            <p className="text-base 2xl:text-xl text-white font_ternary">
                Trading on margin lets you control larger positions with smaller capital, amplifying gains and losses.
                Small market moves can materially impact your equity. If markets move against you, you may lose your initial
                investment and additional funds used to maintain positions. You are fully responsible for leverage risks.
            </p>
        </div>
    );
}

export function RiskCard3() {
    return (
        <div className="pt-6">
            <p className="text-base 2xl:text-xl text-white font_ternary">
                Prices of metals, commodities, indices, cryptocurrencies and other instruments can fluctuate significantly.
                Such volatility can rapidly create profits or losses; conditions may change unexpectedly.
            </p>
        </div>
    );
}

export function RiskCard4() {
    const items = [
        "Losses due to failures in your internet, device, or trading platform are your responsibility.",
        "By using MT5 you accept risks from: (A) hardware/software faults, (B) misconfiguration, (C) missing updates, (D) not following instructions.",
        "FlipTrade Group does not own/control MetaTrader 5 and cannot support its internal functionality.",
    ];
    return (
        <div className="pt-6">
            <div className="ps-6">{items.map((t) => <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>)}</div>
        </div>
    );
}

export function RiskCard5() {
    return (
        <div className="pt-6">
            <p className="text-base 2xl:text-xl text-white font_ternary">
                Under abnormal conditions, execution times may vary or increase. Orders can be delayed or rejected due
                to volatility or limited liquidity.
            </p>
        </div>
    );
}

export function RiskCard6() {
    return (
        <div className="pt-6">
            <p className="text-base 2xl:text-xl text-white font_ternary">
                You must ensure your trading complies with your local laws. Trading may be restricted or prohibited in
                some jurisdictions.
            </p>
        </div>
    );
}

export function RiskCard7() {
    const items = [
        "Instructions are processed sequentially on our servers. Multiple submissions before confirmation may be rejected.",
        "Closing a chart or order window does not cancel a pending order.",
        "Only quotes from FlipTrade Group servers are valid; terminal-server connection issues can cause quote delays.",
    ];
    return (
        <div className="pt-6">
            <div className="ps-6">{items.map((t) => <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>)}</div>
        </div>
    );
}

export function RiskCard8() {
    const items = [
        "Unencrypted email or unsecured networks may be intercepted.",
        "FlipTrade Group is not responsible for losses caused by delayed or failed communication.",
        "You must keep credentials confidential; losses from unauthorized access due to negligence are not compensated.",
    ];
    return (
        <div className="pt-6">
            <div className="ps-6">{items.map((t) => <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>)}</div>
        </div>
    );
}

export function RiskCard9() {
    return (
        <div className="pt-6">
            <p className="text-base 2xl:text-xl text-white font_ternary">
                We are not liable for losses caused by events beyond our control, including natural disasters, power failure,
                wars, terrorism, strikes, riots, system failures, or regulatory changes.
            </p>
        </div>
    );
}

export function RiskCard10() {
    const items = [
        "Crypto CFD markets are highly volatile and largely unregulated; prices are influenced by news, regulation, and sentiment.",
        "Cryptocurrencies have no intrinsic value and may become worthless; leverage can cause substantial, rapid losses.",
        "Trade crypto CFDs only if you fully understand the risks and can bear potential losses.",
    ];
    return (
        <div className="pt-6">
            <div className="ps-6">{items.map((t) => <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">{t}</li>)}</div>
        </div>
    );
}

export function RiskCard11() {
    return (
        <div className="pt-6">
            <p className="text-base 2xl:text-xl text-white font_ternary">
                When trading CFDs you do not own the underlying asset (e.g., equities, indices, commodities). You do not
                receive dividends, voting rights, or ownership privileges.
            </p>
        </div>
    );
}

export function RiskCard12() {
    return (
        <div className="pt-6">
            <p className="text-base 2xl:text-xl text-white font_ternary">
                Markets can “gap” with sudden price jumps. Gapping may prevent placing or closing trades at expected levels,
                leading to unexpected losses.
            </p>
        </div>
    );
}

export function RiskCard13() {
    return (
        <div className="pt-6">
            <p className="text-base 2xl:text-xl text-white font_ternary">
                Stop Loss orders help manage risk but cannot guarantee execution at your set price during rapid moves or
                market closures. Final fill price may differ.
            </p>
        </div>
    );
}

export function RiskCard14() {
    return (
        <div className="pt-6">
            <p className="text-base 2xl:text-xl text-white font_ternary">
                Open CFD positions require sufficient margin. If equity falls below requirements you may receive a margin
                call or be liquidated automatically. Maintain adequate funds to reduce liquidation risk.
            </p>
        </div>
    );
}

export function RiskCard15() {
    return (
        <div className="pt-6">
            <p className="text-base 2xl:text-xl text-white font_ternary">
                Adverse movements can cause total loss of your account balance. In exceptional cases, FlipTrade Group limits
                losses to your current account balance so you cannot lose more than deposited.
            </p>
        </div>
    );
}

export function RiskCard16() {
    return (
        <div className="pt-6">
            <p className="text-base 2xl:text-xl text-white font_ternary">
                There is no assurance of profit. Past performance is not indicative of future results. FlipTrade Group does
                not guarantee success or avoidance of losses.
            </p>
        </div>
    );
}

export function RiskCard17() {
    return (
        <div className="pt-6">
            <p className="text-base 2xl:text-xl text-white font_ternary">
                Changes in interest rates or yield curves can affect instrument values and profitability—positively or
                negatively.
            </p>
        </div>
    );
}

export function RiskCard18() {
    return (
        <div className="pt-6">
            <p className="text-base 2xl:text-xl text-white font_ternary">
                Government actions or regulatory changes can alter market conditions, increase costs, or affect asset
                profitability. Such changes are unpredictable and can impact outcomes.
            </p>
        </div>
    );
}

export function RiskCard19() {
    return (
        <div className="pt-6">
            <p className="text-base 2xl:text-xl text-white font_ternary">
                Before trading with FlipTrade Group, ensure you fully understand all risks. Seek independent financial
                advice if unsure about any aspect of trading or risk management. Trading can result in loss of invested
                capital—only trade with funds you can afford to lose.
            </p>
        </div>
    );
}

