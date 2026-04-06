import React from 'react'
import AboutBanner from '../Components/Pagecomponents/AboutBanner'
import Faq from '../Components/Pagecomponents/Faq';
import Title from '../Components/Uiux/Title';
import RagulationData from '../Components/Pagecomponents/RagulationData';


const faqData = [
    {
        question: "What is FlipTrade Group?",
        answer: "FlipTrade Group is a global online trading platform providing access to forex, commodities, indices, stocks, metals, and cryptocurrencies. We empower traders of all levels with reliable tools, fast execution, and transparent pricing."
    },
    {
        question: "How do I start trading?",
        answer: "To start trading, create a FlipTrade Group account, complete the identity verification process, fund your account, and you can begin trading immediately using our secure platforms."
    },
    {
        question: "Which trading platforms can I use?",
        answer: "You can trade using MetaTrader 5 (MT5), WebTrader, or our mobile apps. All platforms are designed for efficient, fast, and flexible trading on multiple devices."
    },
    {
        question: "Is there a demo account available?",
        answer: "Yes! FlipTrade Group offers a risk-free demo account with virtual funds, allowing you to practice trading and test strategies before going live."
    },
    {
        question: "Are there any hidden fees?",
        answer: "No. FlipTrade Group promotes transparent pricing with no hidden charges on deposits, withdrawals, or trades. You always know the cost upfront."
    },
    {
        question: "How can I get support?",
        answer: "Our dedicated support team is available 24/7 via live chat, email, and phone. We ensure all queries are handled promptly to keep your trading experience smooth."
    },
    {
        question: "What instruments can I trade?",
        answer: "FlipTrade Group offers over 10,000 tradable instruments including forex pairs, global indices, commodities, stocks, metals, and major cryptocurrencies."
    },
    {
        question: "Is FlipTrade Group secure?",
        answer: "Yes. FlipTrade Group uses industry-standard encryption and regulatory-compliant security measures to safeguard your funds and personal data."
    },
    {
        question: "Can I trade from anywhere?",
        answer: "Absolutely. FlipTrade Group platforms are accessible globally from desktop, web, and mobile devices, allowing you to trade anytime, anywhere."
    },
    {
        question: "Does FlipTrade Group provide educational resources?",
        answer: "Yes! We offer tutorials, guides, webinars, and demo accounts to help traders improve their skills and make informed decisions."
    }
];

export const metadata = {
  title: 'FSC Regulated Forex Broker | Flip Trade Group',
  description: 'FlipTrade Group is an FSC regulated forex broker (GB26205911), ensuring compliance, transparency, and investor protection for secure trading.',
  keywords: ['FlipTrade Group', 'GB26205911', 'Regulation'],
};
const page = () => {
    return (
        <div>
            <AboutBanner />
            <RagulationData />
            <div className="bg-theme py-12 md:py-18">
                <div className="inn_container">
                    <div className="text-center">
                        <Title
                            title={"Frequently Asked <br/> Questions"}
                            color="text-white"
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
