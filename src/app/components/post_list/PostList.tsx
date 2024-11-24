import React from "react";
import FeedCard from "../layout/FeedCard";
import { getPostList } from "@/libs/post";

interface PostListProps {
  category?: string;
}

const PostList: React.FC<PostListProps> = async ({ category }) => {
  const postList = await getPostList(category);
  return (
    <div>
      {postList.map((post, i) => (
        <FeedCard key={i} feed={post} />
      ))}
    </div>
  );
};

export default PostList;
