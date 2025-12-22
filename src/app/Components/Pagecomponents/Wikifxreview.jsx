"use client";
import Link from "next/link";
import React from "react";

/* =======================
   STATIC WIKIFX DATA
======================= */
const wikiFxData = {
    brokerName: "FlipTrade Group",
    score: 5.57,
    scoreOutOf: 10,
    region: "Saint Lucia",
    operatingPeriod: "Within 1 year",
    website: "https://fliptradegroup.com",

    regulation: {
        authority: "FSRA",
        type: "General Registration",
        licenseNo: "2025-00621",
        entity: "Flip Trade Group LTD",
    },

    ratingIndex: {
        regulation: 1.25,
        license: 4.35,
        business: 4.3,
        software: 8.85,
        riskControl: 8.57,
    },

    mtPlatform: {
        platform: "MT5",
        license: "Full License",
        server: "FlipTradeGroup-Server",
        region: "United Kingdom",
    },

    reviews: [
        {
            initials: "KD",
            name: "Kuldeep Dhounsi",
            location: "India",
            rating: 5,
            title: "Trusted & Efficient Global Forex Broker",
            content:
                "Flip Trade Group has proven to be a reliable and client-focused forex broker. Tight spreads, fast execution, and responsive 24/7 support make it a strong choice for intraday and scalping traders.",
            date: "11-19",
            sentiment: "Positive",
        },
        {
            initials: "FX",
            name: "FX3378794420",
            location: "India",
            rating: 5,
            title: "FlipTrade Group is a trusted trading platform",
            content:
                "FlipTrade Group offers access to forex, stocks, commodities, indices, metals, and crypto. Fast execution, no hidden fees, MT5 support, and a low minimum deposit make it beginner friendly.",
            date: "11-14",
            sentiment: "Positive",
        },
    ],
};

/* =======================
   STAR COMPONENT
======================= */
const Star = ({ filled }) => (
    <span className={filled ? "text-yellow-400" : "text-gray-600"}>★</span>
);

/* =======================
   MAIN COMPONENT
======================= */
const Wikifxreview = () => {
    const d = wikiFxData;

    return (
        <section className="bg-black pt-40 pb-16 text-white">
            <div className="inn_container mx-auto px-4">

                {/* HEADER */}
                <div className="rounded-xl border border-white/10 bg-[#0d0d0d] p-6 flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                        <h2 className="text-2xl font-semibold">{d.brokerName}</h2>
                        <p className="text-sm text-white/60 mt-1">
                            {d.region} • {d.operatingPeriod}
                        </p>

                        <a
                            href={d.website}
                            target="_blank"
                            className="inline-block mt-4 px-4 py-2 bg-yellow-500 text-black rounded-md text-sm font-medium"
                        >
                            Visit Website
                        </a>
                    </div>

                    {/* SCORE */}
                    <div className="w-full md:w-56 border border-white/10 rounded-xl p-4 text-center bg-[#111]">
                        <p className="text-sm text-white/60">WikiFX Score</p>
                        <p className="text-4xl font-bold text-yellow-400 mt-2">
                            {d.score}
                        </p>
                        <p className="text-sm text-white/40">/ {d.scoreOutOf}</p>
                    </div>
                </div>

                {/* RATING INDEX */}
                <div className="grid md:grid-cols-5 gap-4 mt-8">
                    {Object.entries(d.ratingIndex).map(([key, val]) => (
                        <div
                            key={key}
                            className="bg-[#0d0d0d] border border-white/10 rounded-lg p-4 text-center"
                        >
                            <p className="text-xs uppercase text-white/50">{key}</p>
                            <p className="text-xl font-semibold mt-2 text-yellow-400">
                                {val}
                            </p>
                        </div>
                    ))}
                </div>

                {/* LICENSE + PLATFORM */}
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-[#0d0d0d] border border-white/10 rounded-xl p-6">
                        <h3 className="font-semibold mb-3">License Information</h3>
                        <p className="text-sm text-white/70">
                            <strong>Authority:</strong> {d.regulation.authority}
                        </p>
                        <p className="text-sm text-white/70">
                            <strong>Type:</strong> {d.regulation.type}
                        </p>
                        <p className="text-sm text-white/70">
                            <strong>License No:</strong> {d.regulation.licenseNo}
                        </p>
                        <p className="text-sm text-white/70">
                            <strong>Entity:</strong> {d.regulation.entity}
                        </p>
                    </div>

                    <div className="bg-[#0d0d0d] border border-white/10 rounded-xl p-6">
                        <h3 className="font-semibold mb-3">Trading Platform</h3>
                        <p className="text-sm text-white/70">
                            <strong>Platform:</strong> {d.mtPlatform.platform}
                        </p>
                        <p className="text-sm text-white/70">
                            <strong>License:</strong> {d.mtPlatform.license}
                        </p>
                        <p className="text-sm text-white/70">
                            <strong>Server:</strong> {d.mtPlatform.server}
                        </p>
                        <p className="text-sm text-white/70">
                            <strong>Region:</strong> {d.mtPlatform.region}
                        </p>
                    </div>
                </div>

                {/* REVIEWS */}
                <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-6">User Reviews</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {d.reviews.map((r, i) => (
                            <div
                                key={i}
                                className="bg-[#0d0d0d] border border-white/10 rounded-xl p-6"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-full bg-yellow-500 text-black flex items-center justify-center font-semibold">
                                        {r.initials}
                                    </div>
                                    <div>
                                        <p className="font-semibold">{r.name}</p>
                                        <p className="text-xs text-white/50">
                                            {r.date} • {r.location}
                                        </p>
                                    </div>
                                </div>

                                <span className="inline-block mt-3 text-xs px-3 py-1 rounded-full bg-green-500/10 text-green-400">
                                    {r.sentiment}
                                </span>

                                <div className="mt-3">
                                    {[...Array(5)].map((_, idx) => (
                                        <Star key={idx} filled={idx < r.rating} />
                                    ))}
                                </div>

                                <h4 className="mt-3 font-semibold">{r.title}</h4>
                                <p className="text-sm text-white/70 mt-2">
                                    {r.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center py-6">
                    <Link
                        href="https://www.wikifx.com/en/dealer/2193463081.html"
                        target="_blank"
                        rel="noopener"
                    >
                        <button className="bg-yellow-400 text-black px-4 py-2 rounded-md cursor-pointer">
                            View all reviews
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Wikifxreview;
