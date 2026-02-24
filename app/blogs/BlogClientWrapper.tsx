"use client";

import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import BlogClientPage from "./blog-client-page";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  description: string;
  authorName: string;
}

export default function BlogClientWrapper({ posts }: { posts: Post[] }) {
  // client-side noop scroll handlers (can be replaced with real handlers)
  const noOpScroll = () => {};

  return (
    <div className="w-full bg-[#060312]/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden min-h-screen flex flex-col">
      <Navbar
        scrollToAbout={noOpScroll}
        scrollToShopifyStores={noOpScroll}
        scrollToPricing={noOpScroll}
        scrollToFaq={noOpScroll}
        scrollToServices={noOpScroll}
      />
      <BlogClientPage posts={posts} />
      <Footer />
    </div>
  );
}
