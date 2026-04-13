"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";

const MAX_IMAGE_SIZE = 1 * 1024 * 1024; // 1MB

const MenuBar = ({ editor }) => {
  if (!editor) return null;
  const addLink = () => {
    const url = window.prompt("Enter URL");
    if (url) editor.chain().focus().setLink({ href: url }).run();
  };

  return (
    <div className="flex flex-wrap gap-2 p-2 border-b border-gray-300 bg-gray-100 rounded-t-lg">
      <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={`px-3 py-1 rounded border ${editor.isActive("bold") ? "bg-purple-600 text-white" : "bg-white text-black"}`}>Bold</button>
      <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={`px-3 py-1 rounded border ${editor.isActive("italic") ? "bg-purple-600 text-white" : "bg-white text-black"}`}>Italic</button>
      <button type="button" onClick={addLink} className={`px-3 py-1 rounded border ${editor.isActive("link") ? "bg-blue-600 text-white" : "bg-white text-black"}`}>Link</button>
      <button type="button" onClick={() => editor.chain().focus().unsetLink().run()} className="px-3 py-1 rounded bg-red-100 text-red-600 border border-red-200">Unlink</button>
    </div>
  );
};

export default function EditBlog() {
  const router = useRouter();
  const { id } = useParams(); 
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const API_URL=process.env.NEXT_PUBLIC_API_BASE_URL
  const [form, setForm] = useState({
    heading: "",
    pageTitle: "",
    pageDescription: "",
    pageUrl: "",
    slugUrl: "",
    status: true,
  });

  const editor = useEditor({
    extensions: [StarterKit, Link.configure({ openOnClick: false, HTMLAttributes: { class: 'text-blue-600 underline' } })],
    content: "",
    immediatelyRender: false,
    editorProps: { attributes: { class: "prose prose-sm focus:outline-none min-h-[250px] p-4 text-black max-w-none" } },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/api/blogs/${id}`);
        const data = await res.json();
        
        if (res.ok) {
          setForm({
            heading: data.heading || "",
            pageTitle: data.pageTitle || "",
            pageDescription: data.pageDescription || "",
            pageUrl: data.pageUrl || "",
            slugUrl: data.slugUrl || "",
            status: data.status ?? true,
          });
          setPreview(data.image); 
          if (editor) editor.commands.setContent(data.description || "");
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setFetching(false);
      }
    };
    if (id && editor) fetchData();
  }, [id, editor]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_IMAGE_SIZE) {
        alert("Image size must be less than 1MB.");
        setImage(null);
        e.target.value = "";
        return;
      }
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

   const handelCancel  = () => {
    router.push('/admin')
   }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const rawToken = localStorage.getItem("token");
    if (!rawToken) {
      alert("Session expired. Please login again.");
      router.push("/admin/login");
      setLoading(false);
      return;
    }
    const authToken = rawToken.startsWith("Bearer ") ? rawToken : `Bearer ${rawToken}`;
    const formData = new FormData();
    
    if (image) formData.append("image", image);
    formData.append("heading", form.heading);
    formData.append("description", editor.getHTML());
    formData.append("pageTitle", form.pageTitle);
    formData.append("pageDescription", form.pageDescription);
    formData.append("pageUrl", form.pageUrl);
    formData.append("slugUrl", form.slugUrl);
    formData.append("status", form.status);

    const res = await fetch(`${API_URL}/api/blogs/${id}`, {
      method: "PUT",
      headers: { Authorization: authToken },
      body: formData,
    });

    if (res.ok) router.push("/admin");
    else alert("Update failed");
    setLoading(false);
  };

  if (fetching) return <div className="min-h-screen bg-[#121212] flex items-center justify-center text-white">Loading...</div>;

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 md:p-10">
      <div className="max-w-4xl mx-auto bg-[#1e1e1e] p-8 rounded-2xl border border-gray-800 shadow-2xl">
        <h1 className="text-3xl font-bold mb-8 text-purple-400">Edit Blog Post</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1: Heading & Slug */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="heading" value={form.heading} placeholder="Blog Heading" onChange={handleChange} className="input-style" />
            <input name="slugUrl" value={form.slugUrl} placeholder="Slug URL" onChange={handleChange} className="input-style" />
          </div>

          {/* Row 2: Page Title & Page URL */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="pageTitle" value={form.pageTitle} placeholder="SEO Page Title" onChange={handleChange} className="input-style" />
            <input name="pageUrl" value={form.pageUrl} placeholder="Page URL" onChange={handleChange} className="input-style" />
          </div>

          {/* Row 3: Short Description */}
          <textarea name="pageDescription" value={form.pageDescription} placeholder="Short SEO Description" onChange={handleChange} className="input-style min-h-[100px]" />

          {/* Row 4: Image Upload */}
          <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center hover:border-purple-500 transition-colors">
            <label className="cursor-pointer block text-gray-400 mb-2">Featured Image:</label>
            <input type="file" onChange={handleImage} className="text-sm" />
            {preview && <img src={preview} className="mt-4 h-48 w-full object-cover rounded-lg mx-auto" alt="Preview" />}
          </div>

          {/* Row 5: Tiptap Editor */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-inner">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
          </div>
 

           <div className="grid grid-cols-2 gap-5">
               <button type="submit" disabled={loading} className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-bold hover:scale-[1.01] transition-all">
            {loading ? "Updating..." : "Update Blog"}
          </button>

         
         
          <button className="w-full py-4 rounded-xl bg-gradient-to-r from-red-300 to-red-600 font-bold hover:scale-[1.01] transition-all" onClick={ () => handelCancel()}>Cancel</button>
           </div>
          
        </form>
      </div>

      <style jsx>{`
        .input-style { width: 100%; padding: 12px; border-radius: 10px; background: #2a2a2a; border: 1px solid #333; color: white; outline: none; }
        .input-style:focus { border-color: #a855f7; }
      `}</style>
    </div>
  );
}