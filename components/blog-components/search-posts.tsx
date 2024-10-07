"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import Link from "next/link";
import { BlogPosts } from "@/lib/types";

export default function SearchPosts({
  latestPosts,
}: {
  latestPosts: BlogPosts[];
}) {
  const [filterQuery, setFilterQuery] = useState("");
  const posts = latestPosts
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .filter(
      (post) =>
        post.metadata.category
          .toLowerCase()
          .includes(filterQuery.toLowerCase()) ||
        post.metadata.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
        post.metadata.summary.toLowerCase().includes(filterQuery.toLowerCase())
    );

  return (
    <div className=" mt-7">
      <Input
        className="my-4"
        placeholder="Search for what you're looking for.."
        onChange={(e) => {
          setFilterQuery(e.target.value);
        }}
        value={filterQuery}
      />
      {filterQuery ? <h4 className="">Search Results</h4> : <></>}
      {filterQuery.length > 0 ? (
        posts.map((post) => {
          return (
            <article key={Math.random()} className="text-wrap mt-3">
              <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
                <h3 className="font-medium leading-5 underline decoration-violet-400 hover:text-violet-500">
                  {post.metadata.title}
                </h3>
              </Link>
              <p className="font-light mt-1">{post.metadata.summary}</p>
              <p className="text-sm text-muted-foreground">
                {post.metadata.publishedAt}
              </p>
            </article>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
