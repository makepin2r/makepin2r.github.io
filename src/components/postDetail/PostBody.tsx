"use-client";
import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { MdxComponents } from "../mdx/MdxComponents";

interface PostBodyProps {
  post: string;
}

const PostBody: React.FC<PostBodyProps> = ({ post }) => {
  return (
    <MDXRemote
      components={MdxComponents}
      source={post}
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
