import PostListPage from "@/components/postList/PostListPage";

interface PageParams {
  category: string;
}

export const dynamicParams = false;

export default async function Home(props: { params: Promise<PageParams> }) {
  const params = await props.params;
  const { category } = params;
  return <PostListPage category={category} />;
}
