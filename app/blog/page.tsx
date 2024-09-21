import LatestPosts from "@/components/blog-components/latest-post";
import PopularPosts from "@/components/blog-components/popular-posts";
import TopCategories from "@/components/blog-components/top-categories";
import React from "react";

export default function Blog() {
  return (
    <main className="max-w-[60ch] lg:min-w-[60ch] mx-auto w-full space-y-6">
      <div>
        <LatestPosts />
      </div>
      <div className="h-screen">
        <div>
          <h1 className="font-bold mb-4">TOP CATEGORIES</h1>
          <TopCategories />
        </div>
        <div className="mt-10 sticky top-4">
          <h1 className="font-bold mb-4">POPULAR POSTS</h1>
          <PopularPosts />
        </div>
      </div>
    </main>
  );
}
