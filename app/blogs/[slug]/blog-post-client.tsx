"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../sanity";
import { motion } from "framer-motion";

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

export default function BlogPostClient({ post }: { post: Post }) {
  return (
    <div className="w-full bg-[#060312]/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden min-h-screen flex flex-col">
      {/* Header */}
      <div className="relative z-10 w-full pt-20 px-4 sm:px-6 md:px-8 max-w-3xl mx-auto">
        <Link
          href="/blogs"
          className="text-red-500 hover:text-red-400 font-semibold flex items-center gap-2 mb-8 transition"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blogs
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-neutral-50 bg-opacity-50 pb-4 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-neutral-400 mb-8">
            <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            {post.authorName && (
              <>
                <span>•</span>
                <span>By {post.authorName}</span>
              </>
            )}
          </div>

          {post.mainImage && (
            <div className="relative w-full h-96 rounded-2xl overflow-hidden mb-12">
              <Image
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          )}
        </motion.div>
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative z-10 w-full px-4 sm:px-6 md:px-8 max-w-3xl mx-auto pb-20"
      >
        <div className="prose prose-invert max-w-none">
          {/* Description */}
          <p className="text-xl text-neutral-300 leading-relaxed mb-8 border-l-4 border-red-500 pl-6">
            {post.description}
          </p>

          {/* Body content - if you add rich text editor later */}
          {post.body && (
            <div className="text-neutral-300 leading-relaxed space-y-4">
              {/* This will display Portable Text content if you add it to your schema */}
              {typeof post.body === "string" ? (
                <p>{post.body}</p>
              ) : (
                <div>{JSON.stringify(post.body)}</div>
              )}
            </div>
          )}

          {!post.body && (
            <p className="text-neutral-400 italic">
              Full content coming soon...
            </p>
          )}
        </div>
      </motion.div>

      {/* Related/Navigation */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 max-w-3xl mx-auto pb-12">
        <Link
          href="/blogs"
          className="inline-block px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
        >
          ← Back to All Blogs
        </Link>
      </div>
    </div>
  );
}
