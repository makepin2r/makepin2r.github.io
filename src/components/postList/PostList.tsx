import React from "react";
import FeedCard from "../layout/FeedCard";
import { NotionDBPost } from "@/config/types";

interface PostListProps {
  postList: NotionDBPost[];
}

const PostList: React.FC<PostListProps> = async ({ postList }) => {
  return (
    <div className="flex flex-col gap-3">
      {postList.map((post, i) => (
        <FeedCard key={i} feed={post} />
      ))}
    </div>
  );
};

export default PostList;
