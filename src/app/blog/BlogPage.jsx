"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Title from "../Components/Uiux/Title";
import Link from "next/link";
import Skeleton from "../Components/Uiux/Skeleton";
import { Pagination } from "@mui/material";

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [blogPage, setBlogPage] = useState(1);
    const [blogLimit] = useState(9)
    const [totalPage, setTotalpgaes] = useState()
    const API_URL=process.env.NEXT_PUBLIC_API_BASE_URL
    useEffect(() => {
        const fetchblog = async () => {
            try {
                const res = await fetch(
                    `${API_URL}/api/blogs?page=${blogPage}&limit=${blogLimit}`
                );
                const data = await res.json();
                setTotalpgaes(data.totalPages)
                setBlogs(data.blogs);
            } catch (error) {
                console.log(error, "Blog Error");
            }
            finally {
                setLoading(false)
            }
        };
        fetchblog()
    }, [blogPage]);
    console.log(totalPage, "totalPages");

    return (
        <div className="inn_container py-12">
            <div className="text-center">
                <Title
                    title={'Blogs'}
                    color={'gradient_text'}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-8">
                {
                    loading ?
                        Array.from({ length: 3 }).map((_, index) => (
                            <div key={index}>
                                <Skeleton
                                    className="h-[450px] w-full"
                                />
                            </div>
                        ))
                        :
                        blogs?.map((blog, index) => {
                            return (
                                <Link
                                    href={`/blog/${blog?.slugUrl}`}
                                    key={index}
                                >
                                    <div className="bg-white py-6  rounded-2xl group md:max-w-[92%] mx-auto">
                                        <div className="">
                                            <img
                                                src={blog?.imageUrl}
                                                alt='Blog Banner'
                                                width={1000}
                                                height={500}
                                                className="w-[95%] mx-auto rounded-lg min-h-[260px] object-cover"
                                            />
                                        </div>

                                        <div className="px-4">
                                            <div className="pt-4">
                                                <h3 className="text-xl line-clamp-2 group-hover:text-(--primary) group-hover:underline duration-300">
                                                    {blog?.heading}
                                                </h3>
                                                <p
                                                    className="line-clamp-2 pt-2"
                                                    dangerouslySetInnerHTML={{ __html: blog?.description }}
                                                />
                                            </div>

                                            <div className="flex justify-between items-center pt-3">
                                                <div className="px-3 py-1 w-fit border-2 border-black rounded-full">
                                                    {blog?.createdAt.split("T")[0]}
                                                </div>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512" className="me-6 group-hover:me-0 duration-500">
                                                        <rect width="512" height="512" fill="none" />
                                                        <path fill="#6a40ec" d="m359.873 121.377l-22.627 22.627l95.997 95.997H16v32.001h417.24l-95.994 95.994l22.627 22.627L494.498 256z" strokeWidth="13" stroke="#6a40ec" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            )
                        })
                }

            </div>
            {!loading && <div className="pt-8">
                <Pagination
                    count={totalPage}
                    page={blogPage}
                    onChange={(e, value) => setBlogPage(value)}
                    shape="rounded"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: 6,

                        "& .MuiPagination-ul": {
                            gap: "8px",
                        },

                        "& .MuiPaginationItem-root": {
                            color: "#fff",
                            backgroundColor: "#212121",
                            border: "1px solid rgba(255,255,255,0.15)",
                            borderRadius: "10px",
                            transition: "all 0.3s ease",
                        },

                        "& .MuiPaginationItem-root:hover": {
                            backgroundColor: "#2a2a2a",
                            borderColor: "#6a40ec",
                            transform: "translateY(-2px)",
                        },

                        "& .Mui-selected": {
                            background: "linear-gradient(135deg, #6a40ec, #b46aff) !important",
                            color: "#fff",
                            border: "none",
                            boxShadow: "0 4px 15px rgba(106,64,236,0.4)",
                        },

                        "& .MuiPaginationItem-previousNext": {
                            backgroundColor: "#181921",
                        },

                        "& .MuiPaginationItem-ellipsis": {
                            color: "#aaa",
                        },
                    }}
                />
            </div>}
        </div>
    );
};

export default BlogPage;
