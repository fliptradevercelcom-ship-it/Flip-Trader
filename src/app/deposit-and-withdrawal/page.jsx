import React from 'react'
import PaymentMethods from '../Components/Pagecomponents/PaymentMethods'
import Title from '../Components/Uiux/Title'
import Faq from '../Components/Pagecomponents/Faq'
import DepositWithdrawalBanner from '../Components/Pagecomponents/DepositWithdrawalBanner';
const faqData = [
    {
        question: "What payment methods are available for deposits and withdrawals?",
        answer:
            "FlipTrade supports multiple payment methods including Bank Transfer, Crypto Payments, Wire Transfer, Neteller, PayPal, and Skrill, allowing users to choose the most convenient option."
    },
    {
        question: "What is the minimum deposit and withdrawal amount?",
        answer:
            "The minimum deposit and withdrawal amount depends on the payment method. Bank Transfer starts from $10, Crypto Payments from $25, Wire Transfer from $100, while Neteller, PayPal, and Skrill require a minimum of $500."
    },
    {
        question: "Which currencies are supported for deposits and withdrawals?",
        answer:
            "Supported currencies vary by payment method. Bank and Wire Transfers support USD, EUR, GBP, and ZAR, while Crypto Payments, Neteller, PayPal, and Skrill support USD, EUR, and GBP."
    },
    {
        question: "How long does it take to process deposits?",
        answer:
            "Crypto deposits are processed instantly and are available 24/7. Neteller, PayPal, and Skrill deposits are instant, while Bank and Wire Transfer deposits are processed within one working day."
    },
    {
        question: "How long do withdrawals take?",
        answer:
            "Withdrawal processing times depend on the method used. Most withdrawals are completed within one working day after approval, including Bank Transfer, Wire Transfer, and e-wallet methods."
    },
    {
        question: "Are there any fees or commissions on deposits and withdrawals?",
        answer:
            "FlipTrade does not charge commissions on deposits or withdrawals. However, third-party providers or banks may apply their own fees."
    },
    {
        question: "Can I use a different payment method for withdrawal than my deposit?",
        answer:
            "For security and compliance reasons, withdrawals are generally processed using the same payment method that was used for the deposit."
    },
    {
        question: "Is it safe to deposit and withdraw funds with FlipTrade?",
        answer:
            "Yes, FlipTrade follows strict security protocols, including encryption and verification procedures, to ensure all deposit and withdrawal transactions are safe and secure."
    }
];

const page = () => {
    return (
        <div>
            <DepositWithdrawalBanner />
            <PaymentMethods />
            <div className="bg-theme">
                <div className="inn_container pt-16 pb-16">
                    <div className="text-center">
                        <Title
                            title={"Frequently Asked <br/> Questions"}
                            color={"text-white"}
                        />
                    </div>
                    <div>
                        <Faq faqData={faqData} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
