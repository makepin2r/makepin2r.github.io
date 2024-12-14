import { getCategoryList } from "@/libs/post";
import PostListPage from "@/app/components/postList/PostListPage";

interface PageParams {
  category: string;
}

export const dynamicParams = false;
export function generateStaticParams() {
  const categoryList = getCategoryList();
  const paramList = categoryList.map(category => ({ category }));
  return paramList;
}

export default async function Home(props: { params: Promise<PageParams> }) {
  const params = await props.params;
  const { category } = params;
  return <PostListPage category={category} />;
}
