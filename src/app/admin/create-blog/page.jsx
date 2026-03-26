"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  const addLink = () => {
    const url = window.prompt("Enter URL");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  return (
    <div className="flex flex-wrap gap-2 p-2 border-b border-gray-300 bg-gray-100 rounded-t-lg">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`px-3 py-1 rounded ${editor.isActive("bold") ? "bg-purple-600 text-white" : "bg-white text-black border"}`}
      >
        Bold
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`px-3 py-1 rounded ${editor.isActive("italic") ? "bg-purple-600 text-white" : "bg-white text-black border"}`}
      >
        Italic
      </button>
      <button
        type="button"
        onClick={addLink}
        className={`px-3 py-1 rounded ${editor.isActive("link") ? "bg-blue-600 text-white" : "bg-white text-black border"}`}
      >
        Link
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive("link")}
        className="px-3 py-1 rounded bg-red-100 text-red-600 border border-red-200 disabled:opacity-50"
      >
        Unlink
      </button>
    </div>
  );
};

export default function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
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
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: 'text-blue-600 underline cursor-pointer' },
      }),
    ],
    content: "",
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: "prose prose-sm focus:outline-none min-h-[250px] p-4 text-black max-w-none",
      },
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/admin/login");
  }, [router]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };
   const handelCancel  = () => {
    router.push('/admin')
   }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!editor) return;

    setLoading(true);
    const token = localStorage.getItem("token");
    const formData = new FormData();
    
    formData.append("image", image);
    formData.append("heading", form.heading);
    formData.append("description", editor.getHTML());
    formData.append("pageTitle", form.pageTitle);
    formData.append("pageDescription", form.pageDescription);
    formData.append("pageUrl", form.pageUrl);
    formData.append("slugUrl", form.slugUrl);
    formData.append("status", form.status);

    const res = await fetch(`${API_URL}/api/blogs`, {
      method: "POST",
      headers: { Authorization: token },
      body: formData,
    });

    if (res.ok) router.push("/admin");
    else alert("Error creating blog");
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white p-4 md:p-10">
      <div className="max-w-4xl mx-auto bg-[#1e1e1e] p-8 rounded-2xl shadow-xl border border-gray-800">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Create New Blog
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="heading" placeholder="Blog Heading" onChange={handleChange} className="input-style" />
            <input name="slugUrl" placeholder="Slug (e.g. my-first-blog)" onChange={handleChange} className="input-style" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="pageTitle" placeholder="SEO Page Title" onChange={handleChange} className="input-style" />
            <input name="pageUrl" placeholder="Page URL" onChange={handleChange} className="input-style" />
          </div>

          <textarea
            name="pageDescription"
            placeholder="Short SEO Description"
            onChange={handleChange}
            className="input-style min-h-[80px]"
          />

          {/* Image Upload Section */}
          <div className="border-2 border-dashed border-gray-700 rounded-xl p-6 text-center hover:border-purple-500 transition-colors">
            <label className="cursor-pointer">
              <span className="text-gray-400">Featured Image: </span>
              <input type="file" onChange={handleImage} className="ml-2 text-sm" />
            </label>
            {preview && <img src={preview} className="mt-4 h-48 w-full object-cover rounded-lg mx-auto" alt="Preview" />}
          </div>

          {/* Editor Section */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-300 shadow-inner">
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
          </div>
           

           <div className="grid grid-cols-2 gap-5">
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#6a40ec] to-[#b46aff] text-white font-bold text-lg hover:scale-[1.02] transition-transform active:scale-95 disabled:opacity-50"
          >
            {loading ? "Processing..." : "Publish Blog Post"}
          </button>
           <button className="w-full py-4 rounded-xl bg-gradient-to-r from-red-300 to-red-600 font-bold hover:scale-[1.01] transition-all" onClick={ () => handelCancel()}>Cancel</button>
           </div>
        </form>
      </div>

      <style jsx>{`
        .input-style {
          width: 100%;
          padding: 12px;
          border-radius: 10px;
          background: #2a2a2a;
          border: 1px solid #333;
          color: white;
          outline: none;
        }
        .input-style:focus {
          border-color: #6a40ec;
        }
      `}</style>
    </div>
  );
}