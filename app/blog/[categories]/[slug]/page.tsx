import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "../../utils";
import Container from "@/components/Container";
import { BreadcrumbWithCustomSeparator } from "@/components/Breadcrumb";
import { CustomMDX } from "@/components/mdx";
import { baseUrl } from "@/app/sitemap";
import Script from "next/script";
import { keywords } from "@/lib/constants";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string; category: string };
}) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post?.metadata.category}/${post?.slug}}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    keywords: [
      ...keywords,
      post.metadata.title,
      post.metadata.category,
      post.metadata.description,
    ],
  };
}

export default function Page({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="">
      <Script
        id="schema"
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Santhosh Bhoopal Portfolio Blog",
            },
          }),
        }}
      />

      <Container>
        <div className="mt-7">
          <BreadcrumbWithCustomSeparator
            category={post.metadata.category}
            slug={post.slug}
          />
        </div>
        <h1 className="title font-semibold text-2xl tracking-tighter mt-4">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-4 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
      </Container>
      <Container>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </main>
  );
}
