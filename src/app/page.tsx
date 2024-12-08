import Image from "next/image";
import PostList from "./components/postList/PostList";

export default function Home({ posts }: { posts: { slug: string }[] }) {
  return (
    <div>
      <PostList />
    </div>
  );
}
