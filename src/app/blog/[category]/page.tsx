import PostListPage from "@/components/postList/PostListPage";

interface PageParams {
  category: string;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { category } = await params;
  return <PostListPage category={category} />;
}
