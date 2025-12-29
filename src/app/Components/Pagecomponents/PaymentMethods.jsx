"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Uiux/Button";
import firebtniconblue from "../../../../public/icons/firebtniconblue.svg";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import accountcardbg from "../../../../public/images/accountcardbg.webp";
import Title from "../Uiux/Title";
const paymentMethods = [
    {
        id: 1,
        name: "Bank Transfer",
        logo: "/images/bank-transfer.png",
        currencies: "USD, EUR, GBP, ZAR",
        minDeposit: "$10",
        minWithdrawal: "$10",
        processingDeposit: "Within 1 Working <br/> Day",
        processingWithdrawal: "Within 1 Working <br/> Day",
    },
    {
        id: 2,
        name: "Crypto Payments",
        logo: "/images/crypto-payments.png",
        currencies: "USD, EUR, GBP",
        minDeposit: "$25",
        minWithdrawal: "$25",
        processingDeposit: "24/7 Instant",
        processingWithdrawal: "Within 1 Working <br/> Day",
    },
    {
        id: 3,
        name: "Wire Transfer",
        logo: "/images/wire-transfer.png",
        currencies: "USD, EUR, GBP, ZAR",
        minDeposit: "$100",
        minWithdrawal: "$100",
        processingDeposit: "Instant*",
        processingWithdrawal: "Within 1 Working <br/> Day",
    },
    {
        id: 4,
        name: "Neteller",
        logo: "/images/neteller.png",
        currencies: "USD, EUR, GBP",
        minDeposit: "$500",
        minWithdrawal: "$500",
        processingDeposit: "Instant*",
        processingWithdrawal: "Within 1 Working <br/> Day",
    },
    {
        id: 5,
        name: "PayPal",
        logo: "/images/paypal.png?sfsdf",
        currencies: "USD, EUR, GBP",
        minDeposit: "$500",
        minWithdrawal: "$500",
        processingDeposit: "Instant*",
        processingWithdrawal: "Within 1 Working <br/> Day",
    },
    {
        id: 6,
        name: "Skrill",
        logo: "/images/skrill.png",
        currencies: "USD, EUR, GBP",
        minDeposit: "$500",
        minWithdrawal: "$500",
        processingDeposit: "Instant*",
        processingWithdrawal: "Within 1 Working <br/> Day",
    },
];
const PaymentMethods = () => {
    return (
        <div className="inn_container py-12 md:py-16">
            <div className="text-center">
                <Title
                    title={"Payment Methods"}
                    color={"gradient_text"}
                />
            </div>
            <div className="max-w-[1440px] px-[3%] m-auto pt-12 md:pt-16">
                <div className="max-w-[1440px] px-[3%] xl:px-[unset] m-auto relative bottom-[20%]">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 gap-y-16">
                        {paymentMethods.map((data, index) =>
                            <div
                                key={index}
                                className="max-w-[95%] md:max-w-[350px] xl:max-w-[350px] 2xl:max-w-[380px] m-auto rounded-3xl border-transparent relative z-[2] bg-no-repeat bg-cover"
                                style={{ backgroundImage: `url(${accountcardbg.src})` }}
                            >
                                {/* {
                                    data.name === "Crypto Payments" ?
                                        <div className="absolute left-[-10%] md:left-[-14%] top-[2%] rotate-318 bg-white p-3 rounded-2xl shadow-[0px_1px_5px_#997DF2]">
                                            <p className="text-[12px] md:text-base text-center">
                                                Payment Partner
                                            </p>
                                            <div className="grid grid-cols-2">
                                                <div>
                                                    <Image
                                                        src={'/images/logo-match2pay.png'}
                                                        alt=""
                                                        width={1000}
                                                        height={500}
                                                        className="max-w-[60px] md:max-w-[100px]"
                                                    />
                                                </div>
                                                <div>
                                                    <Image
                                                        src={'/images/coingate 1.png'}
                                                        alt=""
                                                        width={1000}
                                                        height={500}
                                                        className="max-w-[60px] md:max-w-[100px]"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        null
                                } */}
                                <div className="p-3">
                                    <div className={`py-1 xl:py-3 2xl:py-5 px-16 lg:px-10 2xl:px-12 text-center bg-white rounded-tl-[18px] rounded-tr-[18px]`}>
                                        <Image
                                            src={data.logo}
                                            alt=""
                                            width={1000}
                                            height={500}
                                            className={`max-w-[80%] m-auto  h-[66px] object-contain`}
                                        />
                                    </div>
                                    <div className="bg-traborder-transparent border-2 border-white rounded-bl-[14px] rounded-br-[14px] flex flex-col items-center">
                                        <li className="list-none text-center py-2  min-w-[220px] border-b-3 border-dashed border-white ">
                                            <p className="text-base lg:text-lg text-center">
                                                Currencies
                                            </p>
                                            <span className="text-[15px] lg:text-base text-ternary ">
                                                {data.currencies}
                                            </span>
                                        </li>
                                        <li className="list-none text-center py-2  min-w-[220px] border-b-3 border-dashed border-white ">
                                            <p className="text-base lg:text-lg text-center">
                                                Min Deposit
                                            </p>
                                            <span className="text-[15px] lg:text-base text-ternary ">
                                                {data.minDeposit}
                                            </span>
                                        </li>
                                        <li className="list-none text-center py-2  min-w-[220px] border-b-3 border-dashed border-white ">
                                            <p className="text-base lg:text-lg text-center">
                                                Min Withdrawal
                                            </p>
                                            <span className="text-[15px] lg:text-base text-ternary ">
                                                {data.minWithdrawal}
                                            </span>
                                        </li>

                                        <p className="text-base lg:text-lg 2xl:text-2xl text-center pt-2">
                                            Processing Time
                                        </p>
                                        <div className="grid grid-cols-2 gap-2">
                                            <li className="list-none text-center py-2  border-b-3 border-dashed border-white ">
                                                <p className="text-base lg:text-lg ">
                                                    On Deposit
                                                </p>
                                                <span className="text-[14px] leading-4 text-ternary "
                                                    dangerouslySetInnerHTML={{ __html: data.processingDeposit }}
                                                />
                                            </li>
                                            <li className="list-none  py-2 text-center border-b-3 border-dashed border-white ">
                                                <p className="text-base lg:text-lg ">
                                                    On Withdrawal
                                                </p>
                                                <span className="text-[14px] leading-4 text-ternary "
                                                    dangerouslySetInnerHTML={{ __html: data.processingWithdrawal }}
                                                />
                                            </li>
                                        </div>
                                        <div className="grid grid-cols-2 gap-2">
                                            <li className="list-none text-center py-2  border-b-3 border-dashed border-white ">
                                                <p className="text-base lg:text-lg ">
                                                    Commission
                                                </p>
                                                <p className="text-[14px] leading-4 text-ternary ">
                                                    Deposit 1%
                                                </p>
                                                <p className="text-[14px] leading-4 text-ternary ">
                                                    Withdrawal 1%
                                                </p>
                                            </li>
                                            <li className="list-none  py-2 text-center border-b-3 border-dashed border-white ">
                                                <p className="text-base lg:text-lg ">
                                                    Operating Hours
                                                </p>
                                                <p className="text-[14px] leading-4 text-ternary ">
                                                    Deposit 24/7
                                                </p>
                                                <p className="text-[14px] leading-4 text-ternary ">
                                                    Withdrawal 24/5
                                                </p>
                                            </li>
                                        </div>
                                        <div className="relative top-8">
                                            {index % 2 === 0
                                                ? <Link href={'https://client.fliptradegroup.com/trader/registration'}>
                                                    <Button
                                                        btn_name={"Fund Now"}
                                                        icon={firebtniconblue.src}
                                                        btn_bg="bg-white"
                                                        text_color="text-primary"
                                                        border_color="border-white"
                                                        shadow={true}
                                                    />
                                                </Link>
                                                : <Link href={'https://client.fliptradegroup.com/trader/registration'}>
                                                    <Button
                                                        btn_name={"Fund Now"}
                                                        icon={firebtnicon.src}
                                                        btn_bg="bg-primary"
                                                        text_color="text-white"
                                                        border_color="border-primary"
                                                        shadow={true}
                                                    />
                                                </Link>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethods;
