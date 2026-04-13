"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Title from "../Components/Uiux/Title";
import Button from "../Components/Uiux/Button";
import firebtnicon from '../../../public/icons/firebtnicon.svg'
export default function MainNav() {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const API_URL=process.env.NEXT_PUBLIC_API_BASE_URL
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/admin/login");
    } else {
      fetchBlogs();
    }
  }, []);

  const fetchBlogs = async () => {
    const res = await fetch(`${API_URL}/api/blogs`);
    const data = await res.json();
    setBlogs(data.blogs || []);
  };

  const handleDelete = async (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this blog?");
    if (!isConfirmed) return;

    
    const rawToken = localStorage.getItem("token");
    if (!rawToken) {
      router.push("/admin/login");
      return;
    }
    const authToken = rawToken.startsWith("Bearer ") ? rawToken : `Bearer ${rawToken}`;

    await fetch(`${API_URL}/api/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: authToken,
      },
    });

    fetchBlogs();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[#212121] text-white p-6 py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">


        <h1 className="text-3xl font-bold text-center">Admin Dashboard</h1>

        <div onClick={handleLogout}>
         <Button
              btn_name="Logout"
              // icon={firebtnicon}
              border_color="border-primary"
              btn_bg="bg-primary"
              shadow={true}
              text_color="text-white"
            />
        </div>
      </div>

      {/* Create Button */}
      <div className="mb-6">
        <div
          onClick={() => router.push("/admin/create-blog")}
          className=""
        >
          
           <Button
              btn_name="+ Create Blog"
              icon={firebtnicon}
              border_color="border-primary"
              btn_bg="bg-primary"
              shadow={true}
              text_color="text-white"
            />
           
        </div>
      </div>

      {/* Blog List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="bg-[#2a2a2a] rounded-2xl p-4 shadow-lg"
          >
            <img
              src={blog.imageUrl}
              alt="blog"
              className="w-full min-h-50 max-h-50 object-cover rounded-lg mb-3"
            />

            <h2 className="text-lg font-semibold mb-2 line-clamp-2">
              {blog.heading}
            </h2>

            <p className="text-gray-400 text-sm mb-4 line-clamp-2"
              dangerouslySetInnerHTML={{__html : blog.description}}
            />
            

            <div className="flex justify-between gap-2">
              <button
                onClick={() => router.push(`/admin/edit-blog/${blog._id}`)}
                className="flex-1 py-2 rounded-lg bg-[#434343]"
              >
                Edit
              </button>

              <button
                onClick={() => handleDelete(blog._id)}
                className="flex-1 py-2 rounded-lg bg-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
