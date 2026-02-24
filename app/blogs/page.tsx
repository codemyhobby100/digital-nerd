import React from "react";
import { client } from "./sanity";
import BlogClientWrapper from "./BlogClientWrapper";

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

async function getPosts(): Promise<Post[]> {
  try {
    // First, try to fetch all documents to debug
    const allDocsQuery = `*[_type == "post"] { _id, title, _rev }`;
    const allDocs = await client.fetch(allDocsQuery, {}, { next: { revalidate: 10 } });
    console.log("✅ All post documents:", JSON.stringify(allDocs, null, 2));

    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      description,
      "authorName": author->name
    }`;
    const data = await client.fetch(query, {}, { next: { revalidate: 10 } });
    console.log("✅ Fetched posts count:", data.length);
    if (data.length > 0) {
      console.log("✅ First post:", JSON.stringify(data[0], null, 2));
    }
    return data;
  } catch (error) {
    console.error("❌ Error fetching posts:", error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();
  console.log("Posts on page:", posts);
  return <BlogClientWrapper posts={posts} />;
}