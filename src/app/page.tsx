import Image from "next/image";
import PostList from "./components/post_list/PostList";

export default function Home({ posts }: { posts: { slug: string }[] }) {
  return (
    <div>
      <PostList />
    </div>
  );
}
