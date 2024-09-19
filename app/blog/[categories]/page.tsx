import { notFound } from "next/navigation";
import { getBlogPosts } from "../utils";
import Link from "next/link";
import Container from "@/components/Container";
import CardCategory from "@/components/CardCategory";
import Header from "@/components/Header";

// export async function generateStaticParams() {
//   const posts = getBlogPosts();

//   return posts.map((post) => ({
//     category: post.metadata.category,
//   }));
// }

// export function generateMetadata({ params }: { params: { category: string } }) {
//   const { category } = params;

//   return {
//     title: category.toLocaleUpperCase(),
//     description: `All articles reagarding ${category}`,
//   };
// }

export default function Page({ params }: { params: { categories: string } }) {
  const posts = getBlogPosts().filter(
    (post) => post.metadata.category === params.categories
  );

  if (!posts.length) {
    notFound();
  }
  return (
    <>
        <h1 className="title font-semibold text-2xl tracking-wider mt-4 uppercase ml-2">
          {posts[0]?.metadata.category}
        </h1>
      <Container>
        <div className="flex flex-wrap gap-4 mt-10 items-center justify-center">
          {posts
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <Link
                href={`/blog/${post.metadata.category}/${post.slug}`}
                key={post.slug}
              >
                <CardCategory
                  title={post.metadata.title}
                  summary={post.metadata.summary}
                  date={post.metadata.publishedAt}
                />
              </Link>
            ))}
        </div>
      </Container>
    </>
  );
}
