import React from "react";
import { PostDetail } from "@/config/types";
import { getPostDetail, getPostPaths, parsePostAbstract } from "@/libs/post";
import PostBody from "@/app/components/postDetail/PostBody";

interface PageParams {
  category: string;
  slug: string;
}

export const dynamicParams = false;

export function generateStaticParams(): { params: PageParams }[] {
  const postPaths: string[] = getPostPaths();
  const paramList = postPaths
    .map(path => parsePostAbstract(path))
    .map(item => ({
      params: { category: item.categoryPath, slug: item.slug },
    }));
  return paramList;
}

const page = async ({ params }: { params: PageParams }) => {
  const { category, slug } = params;
  const post: PostDetail = await getPostDetail(category, slug);

  return <PostBody post={post} />;
};

export default page;
