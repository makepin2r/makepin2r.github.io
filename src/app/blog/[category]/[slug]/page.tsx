import { getPageMarkdown, getPostMetadata } from "@/libs/notion/notion";
import PostHeader from "@/components/postDetail/PostHeader";
import PostBody from "@/components/postDetail/PostBody";

interface PageParams {
  category: string;
  slug: string;
}

export const dynamicParams = false;

const page = async (props: { params: Promise<PageParams> }) => {
  const params = await props.params;
  const { slug } = params;
  const post = await getPageMarkdown(slug);
  const postHeader = await getPostMetadata(slug);

  return (
    <section className="prose w-full mx-auto mb-16">
      <PostHeader post={postHeader} />
      <PostBody post={post.parent} />
    </section>
  );
};

export default page;
