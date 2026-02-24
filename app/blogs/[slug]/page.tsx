import React from "react";
import { client as envClient } from "../sanity";
import { client as libClient } from "@/app/lib/sanity";
import BlogPostClient from "./blog-post-client";
import Link from "next/link";

export const dynamic = "force-dynamic";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  description: string;
  body?: any;
  authorName: string;
}

async function getPost(slug: string): Promise<Post | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      description,
      body,
      "authorName": author->name
    }`;

  try {
    console.log("🔎 getPost: fetching slug=", slug);
    // First try the environment-based client
    let post = await envClient.fetch(query, { slug }, { next: { revalidate: 10 } });
    console.log("ℹ️ envClient returned:", post ? post._id : null);

    // If not found, try the hardcoded lib client as a fallback (helps when env var mismatch)
    if (!post) {
      console.log("⚠️ Post not found with env client, trying libClient fallback");
      post = await libClient.fetch(query, { slug }, { next: { revalidate: 10 } });
      console.log("ℹ️ libClient returned:", post ? post._id : null);
    }

    return post || null;
  } catch (error) {
    console.error("❌ Error fetching post:", error);
    return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className="w-full bg-[#060312]/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden min-h-screen flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">Post Not Found</h1>
          <p className="text-neutral-400 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/blogs"
            className="inline-block px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return <BlogPostClient post={post} />;
}
