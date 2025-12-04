"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Title from "../Uiux/Title";
import Faq from "./Faq";
import starticon from "../../../../public/icons/starticon.svg";
import usericon from "../../../../public/icons/usericon.svg";
import Regulation from "../../../../public/icons/Regulation.svg";
import wallet from "../../../../public/icons/wallet.svg";
import candle from "../../../../public/icons/candle.svg";
import handsheck from "../../../../public/icons/handsheck.svg";
import starticonwhite from "../../../../public/icons/starticonwhite.svg";
import usericonwhite from "../../../../public/icons/usericonwhite.svg";
import walletwhite from "../../../../public/icons/walletwhite.svg";
import Regulationwhite from "../../../../public/icons/Regulationwhite.svg";
import candlewhite from "../../../../public/icons/candlewhite.svg";
import handsheckwhite from "../../../../public/icons/handsheckwhite.svg";
import searchicon from "../../../../public/icons/search.svg";
import faqicon from "../../../../public/icons/faq.svg"
import { useAutoScroll } from "../../../hooks/useAutoScroll";
const faqsmaindata = [
    {
        id: 1,
        faqtitle: "Top Questions",
        faqicon: starticon,
        faqiconwhite: starticonwhite,
        faqlist: [
            {
                question: "Can I Open a Demo Account First?",
                answer:
                    'At FlipTrade Group, once you’re ready to trade live, you can open a real account starting from just $25. Choose the account type that best suits your trading style and start trading your way! <a href="https://www.fliptradegroup.com/accounts-types" target="_blank" rel="noopener noreferrer">Learn more</a>.'
            },
            {
                question: "How can I open a Live Trading Account?",
                answer:
                    'You can register for a trading account via this link: <a href="https://client.fliptradegroup.com/trader/registration" target="_blank" rel="noopener noreferrer">https://client.fliptradegroup.com/trader/registration</a>.'
            },
            {
                question:
                    "How do I change the password for my FlipTrade Group Secure Client Area?",
                answer:
                    'Simply click the ‘Forgot Password’ link on the main login page to reset your password securely. <a href="https://client.fliptradegroup.com/trader" target="_blank" rel="noopener noreferrer">Reset here</a>.'
            },
            {
                question: "How do I deposit into my account?",
                answer:
                    "FlipTrade Group makes depositing simple and secure. You can fund your trading account using bank transfer or cryptocurrency. To deposit, log in to your Client Area, click on “Funding” from the left menu, select “Deposit”, choose your preferred method (Bank Transfer or Crypto), and click “Submit” to complete your transaction."
            },
            {
                question: "What is the minimum deposit for an MT5 account?",
                answer:
                    "At FlipTrade Group, the minimum deposit starts from $25, while the maximum deposit limit is $500 or equivalent."
            },
            {
                question: "How do I withdraw funds from my account?",
                answer:
                    'You can withdraw funds from your FlipTrade Group Client Area. Withdrawals must first return your initial deposit using the same method. After that, you can withdraw any profits using an alternative method for your convenience. <a href="https://client.fliptradegroup.com/trader" target="_blank" rel="noopener noreferrer">Access withdrawal page</a>.'
            },
            {
                question: "How do I download the trading platform?",
                answer:
                    "You can download the FlipTrade Group trading platform by logging in to your Client Area and following the download instructions for MT5."
            },
            {
                question: "What instruments can I trade with FlipTrade Group?",
                answer:
                    "At FlipTrade Group, you can trade Forex, Shares, Metals, Indices, Commodities, and Cryptocurrencies. Choose your preferred trading platform and start your seamless trading experience today."
            },
            {
                question: "How can I get in touch with a representative?",
                answer:
                    'Our dedicated FlipTrade Group support team is available 24/7 via email, live chat, or phone to assist you with any queries. <a href="https://www.fliptradegroup.com/contact-us" target="_blank" rel="noopener noreferrer">Contact us</a>.'
            },
            {
                question: "Which cryptocurrencies are supported?",
                answer:
                    "FlipTrade offers trading on major cryptocurrencies like Bitcoin, Ethereum, Litecoin, and various altcoins, available with secure and fast execution."
            },
            {
                question: "Is crypto trading 24/7?",
                answer:
                    "Yes, cryptocurrency markets are open 24/7, and FlipTrade provides continuous access for traders worldwide without market closing times."
            },
            {
                question: "Are there fees for crypto trading?",
                answer:
                    "Yes, spreads and swap fees may apply, but FlipTrade ensures transparent pricing with competitive spreads on crypto trades."
            },
            {
                question: "Does FlipTrade offer leverage on crypto?",
                answer:
                    "Yes, leverage options are available, allowing traders to maximize exposure while managing risks responsibly within regulatory limits."
            },
            {
                question: "Is my crypto trading account secure?",
                answer:
                    "Yes, FlipTrade uses advanced security measures like encryption and compliance protocols to ensure safe cryptocurrency trading."
            }
        ]
    },
    {
        id: 2,
        faqtitle: "Account Opening",
        faqicon: usericon,
        faqiconwhite: usericonwhite,
        faqlist: [
            {
                question: "Which account types do you provide?",
                answer:
                    "FlipTrade Group offers a range of accounts from Standard ($25 minimum deposit) to Professional ($500 maximum deposit) on the MT5 platform."
            },
            {
                question: "How can I open a Live Trading Account?",
                answer:
                    'You can register for a trading account via this link: <a href="https://client.fliptradegroup.com/trader/registration" target="_blank" rel="noopener noreferrer">https://client.fliptradegroup.com/trader/registration</a>.'
            },
            {
                question: "How long does it take to open an account?",
                answer:
                    "At FlipTrade Group, our onboarding team may take up to one business day to verify your documents, though we aim to have your account ready within the hour."
            },
            {
                question: "Can I register with more than one email address?",
                answer:
                    "At FlipTrade Group, we recommend keeping all your trading accounts under a single Client Area profile using the same email address to avoid confusion."
            },
            {
                question: "Which documents do I need to open an account?",
                answer:
                    "To open a FlipTrade Group account, you need:<br/><br/><strong>Proof of Identity:</strong> Passport, National ID, or Driving License.<br/><br/><strong>Proof of Address:</strong> Recent utility bill or bank statement (within 6 months)."
            },
            {
                question:
                    "Why do I need to submit my documents for account validation?",
                answer:
                    "Submitting documents is part of FlipTrade Group’s KYC process, required to comply with international Anti-Money Laundering (AML) regulations."
            },
            {
                question:
                    "Can I use one document to verify both my identity and address?",
                answer:
                    "Yes. If your government-issued ID (e.g., driver’s license) includes your address, you can use it for both Proof of Identity and Proof of Address. In some cases, FlipTrade Group may request separate documents."
            },
            {
                question:
                    "Do I need to upload my documents again if I open a new trading account?",
                answer:
                    "No, FlipTrade Group does not require additional documents if your first account has already been validated."
            },
            {
                question: "Can I update my personal information?",
                answer:
                    "Yes, you can update your personal information with FlipTrade Group by submitting the relevant supporting documents, such as a marriage certificate for a name change or proof of address for a residential update."
            },
            {
                question: "In which currencies can I open an account?",
                answer:
                    "You can open an account in AUD, USD, EUR, GBP, SGD, CAD, CHF, HKD, JPY, and PLN."
            },
            {
                question: "Can I have multiple trading accounts?",
                answer:
                    "Yes, you can have up to 10 trading accounts with FlipTrade Group."
            },
            {
                question: "How do I close my trading account?",
                answer:
                    "To close your FlipTrade Group trading account, simply request a full withdrawal of your funds if you haven’t done so already."
            },
            {
                question:
                    "What happens if I do not use my trading account? Are there any fees?",
                answer:
                    "At FlipTrade Group, accounts with zero balance and no activity for over three months will be disabled. Unlike other brokers, no admin fees are charged, and your account can be reactivated anytime you wish to resume trading."
            },
            {
                question: "How do I change the password for my Secure Client Area?",
                answer:
                    'At FlipTrade Group, you can reset your password by clicking the ‘Forgot Password’ link on the main login page. <a href="https://client.fliptradegroup.com/trader" target="_blank" rel="noopener noreferrer">Reset here</a>.'
            },
            {
                question: "What is the password requirement?",
                answer:
                    "At FlipTrade Group, passwords must be at least 7 characters long and include 1 uppercase letter, 1 lowercase letter, 1 number, and 1 symbol. Accepted symbols: #$@!%&*. <br/><br/>Example: <strong>FlipTrade123!</strong>"
            }
        ]
    },
    {
        id: 3,
        faqtitle: "Company & Regulation",
        faqicon: Regulation,
        faqiconwhite: Regulationwhite,
        faqlist: [
            {
                question: "Who are FlipTrade Group’s liquidity providers?",
                answer:
                    `Flip Trade Group works with some of the most trusted and globally recognized liquidity providers to ensure deep liquidity, tight spreads, and fast order execution for all our traders. <br/>
                    Our primary liquidity providers include:<br/>
                    • <strong> JP Morgan </strong> – One of the world’s largest financial institutions, providing institutional-grade liquidity and high-confidence pricing.<br/>
                    • <strong> Finalto </strong> – A well-established liquidity provider known for its advanced technology, fast execution, and diversified market access.<br/>
                    • <strong> LMAX </strong> – A globally regulated institutional exchange offering transparent, no-last-look liquidity with ultra-fast execution speeds.<br/>
                    • <strong> Mass Market </strong> – A reliable institutional liquidity source offering stable pricing and consistent market depth.`
            },
            {
                question: "Who is FlipTrade Group regulated by?",
                answer:
                    "FlipTrade Group is a regulated broker registered in Saint Lucia and licensed under Mauritius Forex regulations, providing a secure, fully compliant, and trustworthy trading environment for clients worldwide."
            },
            {
                question: "Why choose FlipTrade Group?",
                answer:
                    "What sets FlipTrade Group apart is our deep understanding of traders’ needs. We know that competitive pricing, fast execution, a wide range of instruments, excellent customer support, advanced technology, and insightful market analysis are essential for giving our clients confidence. Our commitment to excellence ensures a reliable trading experience across Forex, CFDs, indices, crypto, and more."
            },
            {
                question: "How do I contact you?",
                answer:
                    'You can contact FlipTrade Group by visiting our Contact Us page, where you’ll find all the details to reach our support team for assistance. <a href="https://www.fliptradegroup.com/contact-us" target="_blank" rel="noopener noreferrer">Contact Us</a>.'
            }
        ]
    },
    {
        id: 4,
        faqtitle: "Safety and Security of Funds",
        faqicon: wallet,
        faqiconwhite: walletwhite,
        faqlist: [
            {
                question: "Where are my deposits held and is my money safe?",
                answer:
                    "At FlipTrade Group, client funds are held in segregated accounts with 'AA-' rated banks, separate from the company’s funds, ensuring your money is secure and fully protected."
            },
            {
                question: "Are my funds held in segregated bank accounts?",
                answer:
                    "Yes, at FlipTrade Group, all client funds are securely held in segregated bank accounts, keeping them separate from the company’s funds for maximum safety."
            },
            {
                question: "How is my personal information stored?",
                answer:
                    "For full details on how your personal information is stored and protected, please refer to FlipTrade Group’s Privacy Policy here: https://www.fliptradegroup.com/privacy-policy/"
            },
            {
                question: "Can you delete all my records from your system?",
                answer:
                    "Due to regulations, FlipTrade Group retains transaction records securely but will remove you from all mailing lists."
            }
        ]
    },
    {
        id: 5,
        faqtitle: "Funding ",
        faqicon: candle,
        faqiconwhite: candlewhite,
        faqlist: [
            {
                question: "How do I deposit into my account?",
                answer:
                    "To deposit funds into your FlipTrade Group account, simply log in to your Client Portal. From the left-hand menu, click on “Funding”, select “Deposit”, choose the trading account you want to fund, and then click “Submit” to complete your transaction.\nhttps://client.fliptradegroup.com/trader"
            },
            {
                question: "What is the minimum deposit for trading accounts?",
                answer:
                    "The minimum deposit required to open a Standard or Raw account with FlipTrade Group is $100 USD or the equivalent in your local currency."
            },
            {
                question: "Do you charge any fees for deposits?",
                answer: "We do not charge any deposit fees."
            },
            {
                question: "Which currencies do you accept for deposits?",
                answer:
                    "We offer multiple funding currencies for our accounts which include AUD, USD, EUR, GBP, SGD, HKD, NZD, CHF, CAD, JPY, PLN, CZK and AED."
            },
            {
                question: "Do you accept Prepaid cards?",
                answer: "Yes, we do."
            }
        ]
    },
    {
        id: 6,
        faqtitle: "MT5",
        faqicon: handsheck,
        faqiconwhite: handsheckwhite,
        faqlist: [
            {
                question: "Which instruments can I trade?",
                answer:
                    "With FlipTrade Group, you can trade a wide range of CFDs including Forex, Equities, Commodities, Metals, Indices, and Cryptocurrencies."
            },
            {
                question: "What is a CFD?",
                answer:
                    "A CFD (Contract for Difference) is a financial instrument that allows you to trade based on price movements without owning the underlying asset. With FlipTrade Group, you can speculate on whether the price of an asset will rise or fall, giving you flexibility to trade in both market directions."
            },
            {
                question: "What are the market trading hours?",
                answer: "The Forex market is open 24 hours a day, 5 days a week."
            },
            {
                question: "What is your execution model?",
                answer: "We offer Raw pricing on our MT5 account."
            },
            {
                question: "Do you offer guaranteed stop losses?",
                answer:
                    "FlipTrade Group does not offer guaranteed stop losses. Once your stop loss is triggered, the order will be executed at the first available market price, which may differ during periods of high volatility."
            },
            {
                question: "What leverage do you offer?",
                answer:
                    "We offer leverage from 1:1 up to 1:500, depending on your preference and the instrument you are trading."
            },
            {
                question: "Do you allow copy trading?",
                answer: "Yes, we do offer Copy trading program."
            },
            {
                question: "Can I place a trade over the phone?",
                answer:
                    "Yes, our dealing desk will be more than happy to take your instructions over the phone."
            }
        ]

    }
];
const Faqsearch = () => {

    const [search, setSearch] = useState("");
    const [activeSection, setActiveSection] = useState(null);
    const sectionRefs = useRef([]);
    const [faqtogle, setFaqTogle] = useState(false)
    const filteredFaqs = faqsmaindata
        .map(faqGroup => {
            const filteredList = faqGroup.faqlist.filter(item =>
                item.question.toLowerCase().includes(search.toLowerCase())
            );
            return { ...faqGroup, faqlist: filteredList };
        })
        .filter(group => group.faqlist.length > 0);

    const finalData = search ? filteredFaqs : faqsmaindata;

    useEffect(() => {
        const handleScroll = () => {
            sectionRefs.current.forEach((ref, index) => {
                if (!ref) return;
                const rect = ref.getBoundingClientRect();

                if (rect.top >= 0 && rect.top <= 50) {
                    setActiveSection(finalData[index].id);
                }
            });
            if (faqtogle) {
                setFaqTogle(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [finalData, faqtogle]);

    useAutoScroll("faq-scroll", { delay: 800 });
    return (
        <div className="bg-theme">
            <div className="inn_container pt-12 pb-12 xl:pt-24 xl:pb-24">
                <div className="text-center" id="faq-scroll">
                    <Title title="Search for Answers" color="gradient_text" />
                    
                    <div className="flex w-full md:w-max md:mx-auto my-6 items-center gap-4 py-[16px] md:py-[22px] px-[40px] border-2 border-primary rounded-full md:min-w-[65%] bg-white">
                        <Image
                            src={searchicon}
                            alt="search icon"
                            width={1000}
                            height={500}
                            className="max-w-[24px]"
                        />
                        <input
                            type="text"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            placeholder="Search FAQ (e.g., minimum deposit, MT5, IB)..."
                            className="border-none outline-none placeholder-[var(--primary)] list_text font_ternary w-[80%] text-primary"
                            data-np-intersection-state="visible"
                        />
                    </div>
                    <div className="text-center pt-6">
                        <p className="text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-semibold text-white pb-2">
                            How do I use the Help Centre?
                        </p>
                        <span className="text-white list_text">
                            Type your question to get instant answers. If you don’t find what
                            you need, check the <br /> FAQ below or contact us via live chat,
                            email, or callback.
                        </span>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row xl:pt-14 gap-4 relative">
                    <div className={` hidden xl:block xl:w-[30%] 2xl:w-[25%]`}>
                        <div className="bg-primary xl:max-w-[380px] p-6 rounded-3xl sticky top-10">
                            <p className="text-xl md:text-2xl xl:text-[30px] font-medium text-white">FAQ Categories</p>
                            <div className="pt-4 grid grid-cols-2 xl:grid-cols-1 gap-3">
                                {faqsmaindata.map((data, index) => (
                                    <div
                                        key={index}
                                        className={`p-4 rounded-2xl mt-4 cursor-pointer transition-all duration-300 ${activeSection === data.id ? "bg-white" : "bg-[#4C1BE3]"
                                            }`}
                                        onClick={() => {
                                            sectionRefs.current[index]?.scrollIntoView({
                                                behavior: "smooth",
                                                block: "start"
                                            }), setFaqTogle(!faqtogle);
                                        }}
                                    >
                                        <div className="flex items-start gap-3">
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
                            <div className="bg-primary w-max p-3 rounded-full"
                                onClick={() => setFaqTogle(!faqtogle)}
                            >
                                <Image
                                    src={faqicon}
                                    alt="faqicon"
                                    width={1000}
                                    height={500}
                                    className="max-w-[32px]"
                                />
                            </div>

                            <div className={` absolute top-[57px] left-0 ${faqtogle ? ' w-full md:w-[80%]' : ' w-[1px] h-[1px]'} top-[2%] xl:top-0 xl:relative overflow-hidden  xl:h-auto xl:w-[30%] 2xl:w-[25%]`}>
                                <div className={`bg-primary xl:max-w-[380px] p-6 rounded-3xl sticky top-10 ${activeSection === faqsmaindata.length ? 'hidden' : 'block'}`}>
                                    <p className="text-xl md:text-2xl xl:text-[30px] font-medium text-white">FAQ Categories</p>
                                    <div className="pt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-3">
                                        {faqsmaindata.map((data, index) => (
                                            <div
                                                key={index}
                                                className={`p-4 rounded-2xl mt-4 cursor-pointer transition-all duration-300 ${activeSection === data.id ? "bg-white" : "bg-[#4C1BE3]"
                                                    }`}
                                                onClick={() => {
                                                    sectionRefs.current[index]?.scrollIntoView({
                                                        behavior: "smooth",
                                                        block: "start"
                                                    }), setFaqTogle(!faqtogle);
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
                            {finalData.length > 0 ? (
                                finalData.map((data, index) => (
                                    <div
                                        key={data.id}
                                        data-id={data.id}
                                        ref={el => (sectionRefs.current[index] = el)}
                                        className={`${data.id === 1 ? "" : "pt-12"}`}
                                    >
                                        <div className="flex items-center gap-3 max-w-[900px] 2xl:max-w-7xl m-auto">
                                            <Image
                                                src={data.faqiconwhite}
                                                alt="icon"
                                                width={1000}
                                                height={500}
                                                className="max-w-[34px]"
                                            />
                                            <p className={`text-xl md:text-2xl xl:text-[30px] font-medium ${activeSection === data.id ? 'gradient_text' : 'text-white'} `}>
                                                {data.faqtitle}
                                            </p>
                                        </div>
                                        <Faq faqData={data.faqlist} pt={false} />
                                    </div>
                                ))
                            ) : (
                                <p className="list_text font_ternary text-primary">
                                    No FAQs found for "{search}"
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Faqsearch;
