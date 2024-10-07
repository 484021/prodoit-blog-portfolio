import LatestPosts from "@/components/blog-components/latest-post";
// import PopularPosts from "@/components/blog-components/popular-posts";
import TopCategories from "@/components/blog-components/top-categories";
import Container from "@/components/Container";
import React from "react";
import { getBlogPosts } from "./utils";
import SearchPosts from "@/components/blog-components/search-posts";

export default function Blog() {
  const latestPosts = getBlogPosts();

  return (
    <Container>
      <main className="max-w-[60ch] lg:min-w-[60ch] mx-auto w-full space-y-6 relative">
        <div>
          <h1 className="font-bold mb-4">Categories</h1>
          <TopCategories />
        </div>
        <SearchPosts latestPosts={latestPosts} />
        <div>
          <LatestPosts searchQuery="" />
        </div>
        {/* <div className="">
          <div className="mt-10 sticky top-4">
            <h1 className="font-bold mb-4">Trending</h1>
            <PopularPosts />
          </div>
        </div> */}
      </main>
    </Container>
  );
}
