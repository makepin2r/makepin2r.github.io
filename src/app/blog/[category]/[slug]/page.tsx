import { getPageMarkdown, getPostMetadata } from "@/libs/notion/notion";
import PostHeader from "@/components/postDetail/PostHeader";
import PostBody from "@/components/postDetail/PostBody";

interface PageParams {
  category: string;
  slug: string;
}

export default async function DetailPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { slug } = await params;
  const post = await getPageMarkdown(slug);
  const postHeader = await getPostMetadata(slug);

  return (
    <section className="prose w-full mx-auto mb-16">
      <PostHeader post={postHeader} />
      <PostBody post={post.parent} />
    </section>
  );
}
