import { notFound } from "next/navigation";
import { getBlogPosts } from "../utils";
import Link from "next/link";
import Container from "@/components/Container";
import CardCategory from "@/components/CardCategory";

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

  //conver slug title into real title and remove hypens and add spaces etc...
  const title = posts[0].metadata.category
    .replace(/-/g, " ")
    .toLocaleUpperCase();

  return (
    <Container>
      <main className="flex flex-col items-start justify-evenly md:flex-row">
        <h1 className="title font-semibold tracking-wider capitalize">
          {title}
        </h1>

        <div className=" flex flex-wrap gap-2 mt-16">
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
                key={Math.random()}
              >
                <CardCategory
                  title={post.metadata.title}
                  summary={post.metadata.summary}
                  date={post.metadata.publishedAt}
                />
              </Link>
            ))}
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
                key={Math.random()}
              >
                <CardCategory
                  title={post.metadata.title}
                  summary={post.metadata.summary}
                  date={post.metadata.publishedAt}
                />
              </Link>
            ))}
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
                key={Math.random()}
              >
                <CardCategory
                  title={post.metadata.title}
                  summary={post.metadata.summary}
                  date={post.metadata.publishedAt}
                />
              </Link>
            ))}
        </div>
      </main>
    </Container>
  );
}
