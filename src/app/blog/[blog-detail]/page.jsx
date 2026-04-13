import React from 'react';
import BlogDetail from './BlogDetail';
const API_URL=process.env.NEXT_PUBLIC_API_BASE_URL
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams["blog-detail"];

  try {
    const res = await fetch(
      `${API_URL}/api/blogs/slug/${slug}`,
      { cache: "no-store" }
    );
    const data = await res.json();

    return {
      title: data?.pageTitle,
      description: data?.pageDescription,
      openGraph: {
        title: data?.metaTitle || data?.heading,
        description: data?.metaDescription,
        images: [data?.imageUrl],
      },
    };
  } catch (e) {
    return {
      title: "Blog",
      description: "Blog detail",
    };
  }
}
export default async function Page({ params }) {
  const resolvedParams = await params;
  return <BlogDetail slug={resolvedParams["blog-detail"]} />;
}
