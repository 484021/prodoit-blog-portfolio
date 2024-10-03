import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";

export default function LatestPosts() {
  const latestPosts = getBlogPosts();
  return (
    <>
      <h1 className="inline-block font-semibold tracking-wide">Recent</h1>
      {latestPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .slice(0, 6)
        .map((post) => (
          <article key={Math.random()} className="text-wrap mt-3">
            <Link href={`/blog/${post.metadata.category}/${post.slug}`}>
              <h3 className="font-medium leading-5 underline decoration-violet-400 hover:text-violet-500">
                {post.metadata.title}
              </h3>
            </Link>
            <p className="font-light mt-1">{post.metadata.summary}</p>
            <p className="text-sm text-muted-foreground">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </article>
        ))}
    </>
  );
}
