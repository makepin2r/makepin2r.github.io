import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { PostDetail } from "@/config/types";
import { MdxComponents } from "../mdx/MdxComponents";

interface PostBodyProps {
  post: PostDetail;
}

const PostBody: React.FC<PostBodyProps> = ({ post }) => {
  return (
    <MDXRemote
      components={MdxComponents}
      source={post.content}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkBreaks],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: "github-dark",
              },
            ],
            rehypeSlug,
          ],
        },
      }}
    />
  );
};

export default PostBody;
