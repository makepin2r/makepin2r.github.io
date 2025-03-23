import PostList from "@/components/postList/PostList";
import { NotionDBPost } from "@/config/types";
import { getDatabase } from "@/libs/notion/notion";

export default async function BlogPage() {
  const list = await getDatabase();

  return (
    <div>
      <PostList postList={list.results as NotionDBPost[]} />
    </div>
  );
}
