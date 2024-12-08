import React from "react";
import { getPostDetail, getPostPaths, parsePostAbstract } from "@/libs/post";
import PostBody from "@/app/components/postDetail/PostBody";

interface PageParams {
  category: string;
  slug: string;
}

export const dynamicParams = false;

export function generateStaticParams() {
  const postPaths: string[] = getPostPaths();
  const paramList = postPaths
    .map(path => parsePostAbstract(path))
    .map(item => ({ category: item.categoryPath, slug: item.slug }));
  return paramList;
}

const page = async (props: { params: Promise<PageParams> }) => {
  const params = await props.params;
  const { category, slug } = params;
  const post = await getPostDetail(category, slug);

  return <PostBody post={post} />;
};

export default page;
