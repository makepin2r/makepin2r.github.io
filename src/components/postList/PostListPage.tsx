import { getPostCategories, getPostList } from "@/libs/notion/notion";
import { NotionDBPost } from "@/config/types";
import CategoryList from "../categoryList/CategoryList";
import PostList from "./PostList";

interface PostListPageProps {
  category?: string;
}

const PostListPage = async ({ category }: PostListPageProps) => {
  const categoryList = await getPostCategories();
  const postList = await getPostList(category);

  return (
    <div className="w-full flex flex-col gap-6">
      <CategoryList categoryList={categoryList} currentCategory={category} />
      <PostList postList={postList as NotionDBPost[]} />
    </div>
  );
};

export default PostListPage;
