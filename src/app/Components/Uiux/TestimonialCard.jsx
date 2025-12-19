'use client'
import React, { useEffect, useState } from "react";

const TestimonialCard = ({ person_name, review, rating_start, id }) => {
  const fullReview = review;
  const words = fullReview.split(" ");
  const [expanded, setExpanded] = useState(false);
  const previewText = words.slice(0, 10).join(" ");
  const name = person_name;
  const firstletter = name.charAt(0);
  const storageKey = `testimonial_like_${id}`;
  const [likecomment, setLikecomment] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem(storageKey) === "true";
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, likecomment);
  }, [likecomment, storageKey]);


  return (
    <div className="h-full flex items-center justify-center relative ">
      <div className="relative max-w-[400px] w-full rounded-[28px] p-6 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center bg-white text-primary font-bold text-xl">
            {firstletter}
          </div>
          <div>
            <h4 className="text-primary font-semibold text-lg">{name}</h4>
          </div>
        </div>
        <p className={`text-white text-lg leading-relaxed font-medium mb-2 ${expanded ? '' : 'line-clamp-2'} `}>
         {review}
        </p>
        {words.length > 4 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-cyan-400 text-sm font-medium hover:underline mb-4"
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1 bg-white/10 px-4 py-2 rounded-full">
              {Array.from({ length: rating_start }).map((_, i) => (
                <span key={i} className="text-lime-400 text-lg">★</span>
              ))}
            </div>
            <span className="text-white/70 text-sm">5k+ more reviews</span>
          </div>
          <div
            className="flex gap-4"
            onClick={() => setLikecomment(!likecomment)}
          >
            <ActionIcon
              icon={likecomment ? "❤" : "♡"}
              text_color={likecomment ? "text-primary" : "text-white"}
            />
          </div>

        </div>

        <div className="absolute -top-6 right-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center">
          <span className="text-subprimary text-xl">❤</span>
        </div>
      </div>
    </div>
  );
};

const ActionIcon = ({ icon, text_color }) => {
  return (
    <div className={`w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center ${text_color} text-3xl cursor-pointer hover:bg-white/20 transition`}>
      {icon}
    </div>
  );
};

export default TestimonialCard;