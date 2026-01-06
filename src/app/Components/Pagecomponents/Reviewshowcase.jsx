"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

const reviewSummary = {
  rating: "4.3",
  totalReviews: 9,
  stars: [
    { label: "5-star", value: 100 },
    { label: "4-star", value: 0 },
    { label: "3-star", value: 0 },
    { label: "2-star", value: 0 },
    { label: "1-star", value: 0 },
  ],
};

const baseReviews = [
  {
    initials: "GL",
    name: "Gopalan Lal",
    location: "GB • 172 reviews",
    rating: 5,
    title: "I recently started using FlipTrade…",
    content:
      "I've been trading with FlipTrade Group for 6 months now. I really appreciate their transparency with fees—no hidden costs when withdrawing. Execution is fast, and trading metals and indices feels stress free.",
    date: "October 29, 2025",
    badge: "Unprompted review",
    offsetMinutes: 42,
  },
  {
    initials: "HK",
    name: "Hriday Khan",
    location: "GB • 30 reviews",
    rating: 5,
    title: "The demo account was an excellent way…",
    content:
      "The demo account was an excellent way to practice and build confidence before trading with real money. Now I'm comfortably using the live account, and I really like how simple and efficient the MT5 platform is on my phone.",
    date: "May 3, 2025",
    badge: "Unprompted review",
    offsetMinutes: 120,
  },
];

const StarIcon = ({ filled }) => (
  <svg
    viewBox="0 0 20 20"
    aria-hidden="true"
    className={`h-4 w-4 ${filled ? "text-[#00B67A]" : "text-gray-300"}`}
    fill="currentColor"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.088 3.355a1 1 0 00.95.69h3.53c.969 0 1.371 1.24.588 1.81l-2.857 2.076a1 1 0 00-.364 1.118l1.089 3.356c.3.921-.755 1.688-1.54 1.118l-2.857-2.076a1 1 0 00-1.175 0l-2.857 2.076c-.785.57-1.84-.197-1.54-1.118l1.089-3.356a1 1 0 00-.364-1.118L2.893 8.782c-.783-.57-.38-1.81.588-1.81h3.53a1 1 0 00.95-.69l1.088-3.355z" />
  </svg>
);

const formatTimeAgo = (pastDate, currentDate) => {
  const diffInSeconds = Math.floor(
    (currentDate.getTime() - pastDate.getTime()) / 1000
  );

  if (diffInSeconds <= 0) {
    return "Just now";
  }

  if (diffInSeconds < 60) {
    return diffInSeconds === 1
      ? "1 second ago"
      : `${diffInSeconds} seconds ago`;
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return diffInMinutes === 1
      ? "1 minute ago"
      : `${diffInMinutes} minutes ago`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return diffInHours === 1 ? "1 hour ago" : `${diffInHours} hours ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) {
    return diffInDays === 1 ? "1 day ago" : `${diffInDays} days ago`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return diffInMonths === 1 ? "1 month ago" : `${diffInMonths} months ago`;
  }

  const diffInYears = Math.floor(diffInDays / 365);
  return diffInYears === 1 ? "1 year ago" : `${diffInYears} years ago`;
};

const Reviewshowcase = () => {
  const reviews = useMemo(() => {
    const baseTime = Date.now();
    return baseReviews.map((review) => ({
      ...review,
      publishedAt:
        review.publishedAt ??
        new Date(
          baseTime - (review.offsetMinutes ?? 0) * 60 * 1000
        ).toISOString(),
    }));
  }, []);

  const [currentTime, setCurrentTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-theme py-16">
      {/* <!-- TrustBox widget - Review Collector --> */}
      <div
        className="trustpilot-widget mb-[2rem]"
        data-locale="en-US"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="69046aa8755d9734fd93cc46"
        data-style-height="52px"
        data-style-width="100%"
        data-token="cabb707c-961e-4e76-8313-3679442f36b7"
      >
        <a
          href="https://www.trustpilot.com/review/fliptradegroup.com"
          target="_blank"
          rel="noopener"
        >
          Trustpilot
        </a>
      </div>
      {/* <!-- End TrustBox widget --> */}
      <div className="inn_container">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[340px_1fr] xl:gap-16">
          <Link
            href="https://www.trustpilot.com/review/fliptradegroup.com"
            target="_blank"
            rel="noopener"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur h-full">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <StarIcon filled={true} />
                  <span className="text-3xl font-semibold text-white">
                    {reviewSummary.rating}
                  </span>
                </div>
                <span className="text-sm font-medium text-white/70">
                  All reviews
                </span>
              </div>
              <p className="pt-4 text-sm text-white/60">
                {reviewSummary.totalReviews} total • Write a review
              </p>

              <div className="mt-8 space-y-3">
                {reviewSummary.stars.map(({ label, value }) => (
                  <div className="flex items-center gap-3" key={label}>
                    <span className="w-14 text-xs font-medium uppercase tracking-wide text-white/70">
                      {label}
                    </span>
                    <div className="h-2 flex-1 rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-[#00B67A]"
                        style={{ width: `${value}%` }}
                      />
                    </div>
                    <span className="w-10 text-right text-xs text-white/60">
                      {value}%
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-10 text-xs text-white/50">
                We perform checks on reviews to ensure authenticity and quality.
              </p>
            </div>
          </Link>
          <div className="space-y-6">
            {reviews.map((review,index) => (
                <Link
                  href="https://www.trustpilot.com/review/fliptradegroup.com"
                  target="_blank"
                  rel="noopener"
                  key={index}
                >
                  <article
                    key={review.name}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur mb-[2rem]"
                  >
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                        {review.initials}
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white">
                          {review.name}
                        </p>
                        <p className="text-sm text-white/60">
                          {review.location}
                        </p>
                      </div>
                      <span className="ml-auto text-sm text-white/40">
                        {formatTimeAgo(
                          new Date(review.publishedAt),
                          currentTime
                        )}
                      </span>
                    </div>

                    <div className="mt-4 flex gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <StarIcon key={index} filled={index < review.rating} />
                      ))}
                    </div>

                    <h3 className="mt-3 text-xl font-semibold text-white">
                      {review.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-white/70">
                      {review.content}
                    </p>

                    <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-white/60">
                      <span>{review.date}</span>
                      {review.badge ? (
                        <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-wide text-white/60">
                          {review.badge}
                        </span>
                      ) : null}
                    </div>

                    {/* <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/50">
                  <button className="flex items-center gap-2 hover:text-white">
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M6 10h8m-4-4v8"
                      />
                    </svg>
                    Useful
                  </button>
                  <button className="hover:text-white">Share</button>
                  <button className="hover:text-white">Reply</button>
                </div> */}
                  </article>
                </Link>
            ))}
          </div>
        </div>
      </div>
      {/* <button className="bg-primary text-white px-4 py-2 rounded-md">View all reviews</button> */}
      <div className="text-center">
        <Link
          href="https://www.trustpilot.com/review/fliptradegroup.com"
          target="_blank"
          rel="noopener"
        >
          <button className="bg-primary text-white px-4 py-2 rounded-md cursor-pointer">
            View all reviews
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Reviewshowcase;
