import HomePage from "@/components/home-page";
import React from "react";
import { getBlogPosts } from "./blog/utils";

type BlogPost = {
  metadata: {
      [key: string]: string;
  };
  slug: string;
  content: string;
};

export default function Page() {
  const latestBlogPosts: BlogPost[] = getBlogPosts()

  return (
    <>
      <HomePage latestBlogPosts={latestBlogPosts} />
    </>
  );
}
