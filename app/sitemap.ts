import { keywords, POSTS } from "@/lib/constants";
import { getBlogPosts } from "./blog/utils";

export const baseUrl = "https://prodoit.dev";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = POSTS.map((route) => ({
    url: `${baseUrl}${route.href}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  //convert keywords into keyword slugs
  const keywordSlugs = keywords.map((keyword: string) =>
    keyword.toLowerCase().replace(/\s+/g, "-")
  );
  const programmaticSEO = keywordSlugs.map((keywordSlug: string) => ({
    //convert keyword into slug

    url: `${baseUrl}/resources/${keywordSlug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...blogs, ...routes, ...programmaticSEO];
}
