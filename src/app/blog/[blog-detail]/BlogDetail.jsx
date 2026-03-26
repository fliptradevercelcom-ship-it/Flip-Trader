"use client";
import React, { useEffect, useState } from "react";
import Title from "../../Components/Uiux/Title";
import Promoform from "../../promo/Promoform";
import Skeleton from "../../Components/Uiux/Skeleton";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const CalendarIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
        >
            <g clipPath="url(#clip0_24_3122)">
                <path
                    d="M5.3335 1.33334V4.00001"
                    stroke="#99A1AF"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10.6665 1.33334V4.00001"
                    stroke="#99A1AF"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12.6667 2.66666H3.33333C2.59695 2.66666 2 3.26361 2 3.99999V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V3.99999C14 3.26361 13.403 2.66666 12.6667 2.66666Z"
                    stroke="#99A1AF"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M2 6.66666H14"
                    stroke="#99A1AF"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_24_3122">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export const HeartIcon = ({ liked }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill={`${liked ? '#99A1AF' : 'none'}`}
        >
            <path
                d="M12.6668 9.33333C13.6602 8.36 14.6668 7.19333 14.6668 5.66667C14.6668 4.69421 14.2805 3.76158 13.5929 3.07394C12.9053 2.38631 11.9726 2 11.0002 2C9.82683 2 9.00016 2.33333 8.00016 3.33333C7.00016 2.33333 6.1735 2 5.00016 2C4.0277 2 3.09507 2.38631 2.40744 3.07394C1.7198 3.76158 1.3335 4.69421 1.3335 5.66667C1.3335 7.2 2.3335 8.36667 3.3335 9.33333L8.00016 14L12.6668 9.33333Z"
                stroke="#99A1AF"
                strokeWidth="1.33333"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export const ShareIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
        >
            <g clipPath="url(#clip0_24_3154)">
                <path
                    d="M12 5.33334C13.1046 5.33334 14 4.43791 14 3.33334C14 2.22877 13.1046 1.33334 12 1.33334C10.8954 1.33334 10 2.22877 10 3.33334C10 4.43791 10.8954 5.33334 12 5.33334Z"
                    stroke="#99A1AF"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M4 10C5.10457 10 6 9.10457 6 8C6 6.89543 5.10457 6 4 6C2.89543 6 2 6.89543 2 8C2 9.10457 2.89543 10 4 10Z"
                    stroke="#99A1AF"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M12 14.6667C13.1046 14.6667 14 13.7712 14 12.6667C14 11.5621 13.1046 10.6667 12 10.6667C10.8954 10.6667 10 11.5621 10 12.6667C10 13.7712 10.8954 14.6667 12 14.6667Z"
                    stroke="#99A1AF"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M5.72656 9.00668L10.2799 11.66"
                    stroke="#99A1AF"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M10.2732 4.34L5.72656 6.99333"
                    stroke="#99A1AF"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_24_3154">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

const BlogDetail = () => {
    const [singleBlog, setsingleBlog] = useState({});
    const [liked, setLiked] = useState(false);
    const [loading, setLoading] = useState(true);
    const path = usePathname().split('/').pop();
    const API_URL=process.env.NEXT_PUBLIC_API_BASE_URL
    
    useEffect(() => {
        const fetchsingleblog = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/blogs/slug/${path}`
                );
                const data = await res.json();
                setsingleBlog(data);
            } catch (error) {
                console.log("Single Blog Error", error);
            }
            finally {
                setLoading(false)
            }
        };
        fetchsingleblog()
    },[]);
    useEffect(() => {
        const storedLike = localStorage.getItem("liked");
        if (storedLike === "true") {
            setLiked(true);
        }
    }, []);
    const date = singleBlog?.createdAt;
    const formattedDate = new Date(date).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    }).replace(/ /g, "-");

    const handleShare = async () => {
        try {
            await navigator.share({
                title: document.title,
                text: "Check out this blog",
                url: window.location.href,
            });
        } catch (error) {
            console.log("Share cancelled or failed", error);
        }
    };
    const handleLike = () => {
        const newValue = !liked;
        setLiked(newValue);
        localStorage.setItem("liked", newValue);
    };
    return (
        <div>
            <div className="inn_container pt-38 xl:pt-44">
                {
                    loading ?
                        <Skeleton
                            className="h-[330px] w-full"
                        />
                        :
                        <div className="bg-[#ffffff3c] py-6 md:py-14 px-4 md:px-12 rounded-2xl leading-[initial]">
                            <h3 className=" text-[22px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[50px] text-white">
                                {singleBlog?.heading}
                            </h3>

                            <div className="">
                                <div className="pt-5 md:px-4">
                                    <div className="flex  items-center text-white gap-3">
                                        <CalendarIcon />
                                        {formattedDate}
                                    </div>
                                </div>
                                <div className="md:px-4 pt-4 flex gap-3">
                                    <div
                                        className="flex items-center gap-2 text-[#99A1AF] py-3 cursor-pointer px-4 bg-[#181921] border-2 border-[#ffffff7b] rounded-full"
                                        onClick={handleLike}
                                    >
                                        <HeartIcon liked={liked} />
                                        Like
                                    </div>
                                    <div
                                        className="flex items-center gap-2 text-[#99A1AF] py-3 cursor-pointer px-4 bg-[#181921] border-2 border-[#ffffff7b] rounded-full"
                                        onClick={handleShare}
                                    >
                                        <ShareIcon />
                                        Share
                                    </div>
                                </div>
                            </div>

                        </div>
                }
                <div className="pt-6 grid relative pt-12">
                    {
                        loading ?
                            <Skeleton
                                className="h-[830px] w-full max-w-6xl mx-auto"
                            />
                            :
                            <div className="max-w-6xl mx-auto">
                                <img src={singleBlog?.imageUrl} alt="" className="max-h-[600px] w-full object-contain" />
                                <div
                                    className="text-white blog_detail_description text-lg 2xl:text-xl font_ternary space-y-3 pt-12"
                                    dangerouslySetInnerHTML={{ __html: singleBlog?.description }}
                                />
                            </div>
                    }

                    {/* <div className="max-w-[90%] mx-auto sticky top-6 h-fit">
                       <Promoform title={'Activate Your Reward'} btnname={'Start Trading'}/>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
