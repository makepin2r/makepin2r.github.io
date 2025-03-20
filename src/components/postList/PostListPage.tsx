import { getCategoryDetailList, getAllPostCount } from "@/libs/post";
import CategoryList from "../categoryList/CategoryList";
import PostList from "./PostList";

interface PostListPageProps {
  category?: string;
}

const PostListPage = async ({ category }: PostListPageProps) => {
  const categoryList = await getCategoryDetailList();
  const allCount = await getAllPostCount();
  return (
    <div className="w-full flex flex-col gap-6">
      <CategoryList
        categoryList={categoryList}
        allPostCount={allCount}
        currentCategory={category}
      />
      <PostList category={category} />
    </div>
  );
};

export default PostListPage;
