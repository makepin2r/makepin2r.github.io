import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";

const PostBody = ({ post }: any) => {
  return <MDXRemote source={post.content} />;
};

export default PostBody;
