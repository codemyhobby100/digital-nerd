"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "./sanity";
import Navbar from "@/components/navbar";
import Footer from "@/app/footer";
import { motion } from "framer-motion";

// Interface for the Post data
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  description: string;
  authorName: string;
}

// Dummy scroll function for Navbar since we are on a different page
const noOpScroll = () => {};

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    description,
    "authorName": author->name
  }`;
  const data = await client.fetch(query);
  return data;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div className="w-full bg-[#060312]/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden min-h-screen flex flex-col">
      <Navbar
        scrollToAbout={noOpScroll}
        scrollToShopifyStores={noOpScroll}
        scrollToPricing={noOpScroll}
        scrollToFaq={noOpScroll}
        scrollToServices={noOpScroll}
      />

      <div className="relative z-10 w-full pt-32 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-red-500 to-neutral-50 bg-opacity-50 pb-4">
            DigitalNerdHQ Blog
          </h1>
          <p className="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto">
            Insights, strategies, and success stories from the freelancing world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          {posts.map((post, index) => (
            <motion.div
              key={post._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href={`/blogs/${post.slug.current}`} className="group block h-full">
                <div className="bg-[#0a0b13]/80 border border-neutral-800/60 rounded-3xl overflow-hidden hover:border-red-500/50 transition-all duration-300 h-full flex flex-col hover:shadow-2xl hover:shadow-red-500/10">
                  {post.mainImage && (
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).url()}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-red-400 mb-3 font-medium uppercase tracking-wider">
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      {post.authorName && (
                        <>
                          <span>•</span>
                          <span>{post.authorName}</span>
                        </>
                      )}
                    </div>
                    <h2 className="text-xl font-bold text-neutral-100 mb-3 group-hover:text-red-500 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-neutral-400 text-sm line-clamp-3 mb-4 flex-grow">
                      {post.description}
                    </p>
                    <div className="text-red-500 font-semibold text-sm flex items-center gap-1 mt-auto">
                      Read Article 
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}