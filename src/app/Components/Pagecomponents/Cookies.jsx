import React from "react";
import Title from "../Uiux/Title";
import Image from "next/image";
import Cookieswhite from "../../../../public/icons/Cookieswhite.svg";

const Cookies = () => {
    return (
        <div className="bg-theme">
            <div className="inn_container pt-12 md:pt-18 lg:pt-28 xl:pt-32 2xl:pt-40 pb-12 xl:pb-24">
                <div className="text-center mt-16">
                    <Title title="Cookies Policy" color="text-white" ish1={true} />
                </div>

                <div className="py-4 px-8 shadow-[0px_1px_20px_1px_#fff] rounded-4xl mt-12">
                    <div className="flex gap-4">
                        <Image
                            src={Cookieswhite}
                            alt="Cookies Icon"
                            width={1000}
                            height={500}
                            className="max-w-[34px]"
                        />
                        <p className="text-[30px] font-medium text-white">
                            What Are Cookies?
                        </p>
                    </div>

                    <div className="pt-6">
                        <p className="text-base 2xl:text-xl text-white font_ternary pb-4">
                            Cookies are small text files stored on your device that help websites function efficiently and improve your browsing experience. FlipTrade Group does <strong>not</strong> store any personally identifiable information such as credit card or banking details within cookies.
                        </p>

                        <p className="text-base 2xl:text-xl text-white font_ternary pb-4">
                            We use cookies to:
                        </p>

                        <div className="ps-6">
                            {[
                                "Verify your identity and ensure platform security",
                                "Recognize your browser type and preferences",
                                "Personalize content and advertising based on your interests"
                            ].map((data, index) => (
                                <li className="text-base 2xl:text-lg text-white list-none pt-2" key={index}>
                                    {data}
                                </li>
                            ))}
                        </div>

                        <p className="text-base 2xl:text-xl text-white font_ternary pt-4 pb-4">
                            You can manage or disable cookies anytime via your browser settings. However, disabling them may affect certain website features.
                        </p>

                        {/* Our Cookies Policy */}
                        <p className="text-[17px] md:text-xl 2xl:text-[22px] text-white pt-4">
                            Our Cookies Policy
                        </p>

                        {/* Essential Cookies */}
                        <p className="text-[17px] md:text-xl 2xl:text-[22px] text-white pt-4">
                            Essential Cookies
                        </p>
                        <p className="text-base 2xl:text-xl text-white font_ternary pb-4">
                            These are required for website and trading platform functionality. Disabling them may cause features to break.
                        </p>

                        {/* Functional Cookies */}
                        <p className="text-[17px] md:text-xl 2xl:text-[22px] text-white pt-4">
                            Functional Cookies
                        </p>
                        <p className="text-base 2xl:text-xl text-white font_ternary pb-4">
                            These remember your preferences to provide a consistent experience—language selection, layout, etc.
                        </p>

                        {/* Analytical & Performance Cookies */}
                        <p className="text-[17px] md:text-xl 2xl:text-[22px] text-white pt-4">
                            Analytical & Performance Cookies
                        </p>
                        <p className="text-base 2xl:text-xl text-white font_ternary pb-4">
                            These collect anonymous data to improve website performance and user experience.
                        </p>

                        {/* Marketing Cookies */}
                        <p className="text-[17px] md:text-xl 2xl:text-[22px] text-white pt-4">
                            Marketing Cookies
                        </p>
                        <p className="text-base 2xl:text-xl text-white font_ternary pb-4">
                            Used to display relevant ads based on browsing history. May include third-party ad partners.
                        </p>

                        {/* Table-like Section */}
                        <p className="text-[17px] md:text-xl 2xl:text-[22px] text-white pt-4 pb-2">
                            Types of Cookies We Use
                        </p>

                        <div className="ps-6">
                            {[
                                "Google Ads – Personalized ads based on user activity",
                                "Facebook – Improve advertising and engagement performance",
                                "Twitter (X) – Deliver & analyze relevant ads and content"
                            ].map((data, index) => (
                                <li className="text-base 2xl:text-lg text-white list-none pt-2" key={index}>
                                    {data}
                                </li>
                            ))}
                        </div>

                        {/* Security Note */}
                        <p className="text-base 2xl:text-xl text-white font_ternary pt-6 pb-4">
                            Protecting your information is our top priority. All cookie data is handled securely in line with our Privacy Policy.
                        </p>

                        <p className="text-base 2xl:text-xl text-white font_ternary pb-4">
                            For any questions or concerns regarding cookies or data protection, please contact us at
                            <a href="mailto:support@fliptradegroup.com" className="text-primary"> support@fliptradegroup.com</a>.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cookies;
