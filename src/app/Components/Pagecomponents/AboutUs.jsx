// // pages/about-us.jsx
// "use client";
// import React from "react";

// const aboutData = [
//     {
//         type: "badge",
//         title: "About FlipTrade",
//         content: [
//             "FlipTrade Group is a global financial trading platform designed to empower traders of all levels — from beginners to seasoned investors.",
//             "We provide seamless access to over 10,000 tradable instruments, including forex, commodities, indices, stocks, metals and cryptocurrencies — all from a single intuitive interface.",
//             "Our mission is to make professional-grade trading accessible, reliable, and transparent for everyone."
//         ]
//     },
//     {
//         type: "card",
//         title: "Our Mission",
//         icon: "⚡",
//         content: [
//             "Make professional-grade trading tools accessible to everyone",
//             "Deliver advanced technology with transparent pricing",
//             "Support traders with reliable service and real-time insights"
//         ]
//     },
//     {
//         type: "card",
//         title: "What We Offer",
//         icon: "💼",
//         content: [
//             "Ultra-tight spreads & transparent pricing",
//             "Fast order execution with low latency",
//             "Advanced platforms including MetaTrader 5 (MT5)",
//             "Trade anytime, anywhere — desktop or mobile",
//             "Demo account with virtual funds for risk-free learning"
//         ]
//     },
//     {
//         type: "card",
//         title: "Our Vision",
//         icon: "🌟",
//         content: [
//             "We envision a world where trading is accessible, understandable and rewarding for everyone.",
//             "Whether you are starting your financial journey or refining your strategies, we strive to offer the tools and support you need to succeed."
//         ]
//     },
//     {
//         type: "card",
//         title: "Core Values",
//         icon: "💡",
//         content: [
//             "Transparency — We operate with clarity and honesty",
//             "Innovation — Always adopting the latest technology",
//             "Reliability — Platforms and support you can trust",
//             "Education — Helping traders grow through knowledge"
//         ]
//     },
//     {
//         type: "card",
//         title: "Global Reach",
//         icon: "🌍",
//         content: [
//             "Traders from over 50+ countries using our platform",
//             "Multi-lingual support and 24/7 customer service",
//             "Accessible from desktop, mobile, and web trading platforms"
//         ]
//     },
//     {
//         type: "card",
//         title: "Our Projects & Features",
//         icon: "🛠️",
//         content: [
//             "Global Trading Access — Trade on multiple markets from one account",
//             "Cutting-edge Technology — Fast execution and reliable platforms",
//             "Risk Management Tools — Stay in control with advanced tools",
//             "Educational Resources — Learn and grow with our tutorials",
//             "Customer Support — 24/7 assistance for all traders"
//         ]
//     },
//     {
//         type: "badge",
//         title: "Head Office",
//         content: [
//             "📍 Giorgi Leonidze Street, Tbilisi 0105, Georgia",
//             "📧 support@fliptradegroup.com",
//             "📞 +41 265 006 818",
//             "We welcome all inquiries and are ready to support our global trading community."
//         ]
//     }
// ];

// const AboutUs = () => {
//     const topBadge = aboutData.filter(d => d.type === "badge" && d.title === "About FlipTrade");
//     const middleCards = aboutData.filter(d => d.type === "card");
//     const bottomBadge = aboutData.filter(d => d.type === "badge" && d.title === "Head Office");

//     return (
//         <div className="inn_container">
//             <div className="min-h-screen bg-[var(--bgtheme)] text-white font-sans px-6 py-12">
//                 <h1 className="text-5xl font-bold mb-12 text-[var(--primary)] text-center">
//                     About FlipTrade Group
//                 </h1>

//                 {/* Top Badge */}
//                 {topBadge.map((section, idx) => (
//                     <div
//                         key={idx}
//                         className="bg-gradient-to-r from-[var(--primary)] to-[var(--subprimary)] p-10 rounded-3xl shadow-2xl mb-12 text-center transform hover:scale-105 transition-transform duration-300"
//                     >
//                         <h2 className="text-4xl font-bold mb-6">{section.title}</h2>
//                         <ul className="list-disc list-inside text-white space-y-3 text-lg">
//                             {section.content.map((item, i) => (
//                                 <li key={i}>{item}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}

//                 {/* Middle Cards */}
//                 <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//                     {middleCards.map((section, idx) => (
//                         <div
//                             key={idx}
//                             className="bg-[var(--lightsecondry)] p-8 rounded-2xl shadow-lg border border-[var(--ternary)] hover:scale-105 transition-transform duration-300 relative"
//                         >
//                             {section.icon && (
//                                 <span className="absolute -top-5 left-5 text-4xl">{section.icon}</span>
//                             )}
//                             <h2 className="text-2xl font-semibold mb-4 text-[var(--primary)]">{section.title}</h2>
//                             <ul className="list-disc list-inside text-white space-y-2">
//                                 {section.content.map((item, i) => (
//                                     <li key={i}>{item}</li>
//                                 ))}
//                             </ul>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Bottom Badge */}
//                 {bottomBadge.map((section, idx) => (
//                     <div
//                         key={idx}
//                         className="bg-gradient-to-r from-[var(--primary)] to-[var(--subprimary)] p-10 rounded-3xl shadow-2xl text-center transform hover:scale-105 transition-transform duration-300"
//                     >
//                         <h2 className="text-4xl font-bold mb-6">{section.title}</h2>
//                         <ul className="list-disc list-inside text-white space-y-3 text-lg">
//                             {section.content.map((item, i) => (
//                                 <li key={i}>{item}</li>
//                             ))}
//                         </ul>
//                     </div>
//                 ))}

//                 <p className="text-[var(--ternary)] mt-12 text-sm italic text-center">
//                     Disclaimer: Trading financial markets involves risk. Ensure you understand the risks before trading.
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default AboutUs;

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
        { icon: <Zap className="w-6 h-6" color="white" />, title: "Innovation", desc: "Cutting-edge fintech evolution." ,  },
        { icon: <Shield className="w-6 h-6" color="white"  />, title: "Security", desc: "Bank-level encryption standards." },
        { icon: <Globe className="w-6 h-6" color="white"  />, title: "Global Access", desc: "Serving 50+ countries 24/7." },
        { icon: <Users className="w-6 h-6" color="white"  />, title: "Community", desc: "A trusted trader ecosystem." },
        { icon: <Award className="w-6 h-6" color="white"  />, title: "Excellence", desc: "Premium service, zero hidden fees." },
        { icon: <Target className="w-6 h-6" color="white"  />, title: "Transparency", desc: "Clarity in every transaction." }
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
                        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none italic">
                            FLIPTRADE <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6a40ec] via-[#d497ff] to-[#6a40ec] animate-gradient-x">GROUP</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Empowering global traders with institutional technology and transparent market access.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-18 relative overflow-hidden bg-[#080808]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-[#6a40ec] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Our Identity</span>
                            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter leading-tight">
                                About <br /> <span className="text-white">FlipTrade Group</span>
                            </h2>
                            <div className="space-y-6">
                                <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-[#6a40ec] pl-6">
                                    FlipTrade Group is a global financial trading platform designed to empower traders of all levels — from beginners to seasoned investors.
                                </p>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We provide seamless access to over <span className="text-white font-bold">10,000+ tradable instruments</span>, including forex, commodities, indices, stocks, metals, and cryptocurrencies — all from a single intuitive interface.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#6a40ec]" />
                                        <span className="text-sm font-medium">Global Access</span>
                                    </div>
                                    <div className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#6a40ec]" />
                                        <span className="text-sm font-medium">Regulated Standards</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 flex flex-col justify-between h-48">
                                <Globe className="text-[#6a40ec] w-8 h-8" />
                                <div>
                                    <div className="text-3xl font-black mb-1">50+</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Countries</div>
                                </div>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-[#6a40ec]/20 to-transparent border border-[#6a40ec]/30 flex flex-col justify-between h-48">
                                <TrendingUp className="text-[#b46aff] w-8 h-8" />
                                <div>
                                    <div className="text-3xl font-black mb-1">10ms</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Execution Speed</div>
                                </div>
                            </div>
                            <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex flex-col justify-between h-48 col-span-1 sm:col-span-2">
                                <Shield className="text-[#6a40ec] w-8 h-8" />
                                <div>
                                    <div className="text-3xl font-black mb-1">Tier-1 Security</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Client Fund Protection</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-8 bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] backdrop-blur-sm hover:border-[#6a40ec]/50 transition-colors">
                        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            To democratize financial markets by providing retail traders with the same high-performance tools used by institutional giants. We believe in a level playing field where technology bridges the gap between ambition and success.
                        </p>
                    </div>
                    <div className="md:col-span-4 bg-gradient-to-br from-[#6a40ec] to-[#b46aff] p-10 rounded-[2rem] flex flex-col justify-end group overflow-hidden relative">
                        <TrendingUp className="absolute top-6 right-6 w-24 h-24 opacity-20 group-hover:scale-110 transition-transform" />
                        <h3 className="text-2xl font-bold mb-2">Growth Driven</h3>
                        <p className="text-white/80 italic">Scaling potential with 1ms execution.</p>
                    </div>

                    <div className="md:col-span-4 bg-white/[0.03] border border-white/10 p-8 rounded-[2rem] flex items-center gap-4">
                        <div className="text-4xl font-bold text-[#6a40ec]">100K+</div>
                        <div className="text-sm text-gray-400 uppercase tracking-widest">Active <br /> Customer</div>
                    </div>
                    <div className="md:col-span-8 bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] hover:border-[#b46aff]/50 transition-colors">
                        <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
                        <p className="text-gray-400 text-lg">
                            A world where financial literacy and professional trading are accessible to anyone, anywhere, refining their strategies through our tools and support.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-[#050505] relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold mb-4 tracking-tighter">The FlipTrade Pillars</h2>
                        <div className="h-1.5 w-24 bg-[#6a40ec] mx-auto rounded-full shadow-[0_0_15px_rgba(106,64,236,0.5)]" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((v, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-gradient-to-br from-[#6a40ec] to-[#b46aff] border border-white/5  hover:border-[#6a40ec]/40 transition-all duration-500">
                                <div className="w-14 h-14 rounded-2xl bg-[#6a40ec]/10 flex items-center justify-center text-[#6a40ec] mb-6 group-hover:bg-[#6a40ec] group-hover:text-white transition-all duration-500 border-2 border-white">
                                    {v.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                                <p className="text-white transition-colors leading-relaxed">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
