import { db } from "../db";

export async function POST(request: Request) {
  const { slug, title, category } = await request.json();

  try {
    const existingPost = await db.blog.findUnique({
      where: {
        slug,
      },
    });
    if (existingPost) {
      await db.blog.update({
        where: {
          slug,
        },
        data: {
          view_count: { increment: 1 },
        },
      });
    } else {
      await db.blog.create({
        data: {
          slug,
          title,
          category,
        },
      });
    }
  } catch (error) {
    console.log("Error updating page view", error);
    return new Response("Error updating page view", { status: 500 });
  }
  return new Response("Successfully posted to DB", { status: 200 });
}
