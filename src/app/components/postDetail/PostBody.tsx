import React from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkA11yEmoji from "@fec/remark-a11y-emoji";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { PostDetail } from "@/config/types";

type PostBodyProps = {
  post: PostDetail;
};

const PostBody: React.FC<PostBodyProps> = ({ post }: PostBodyProps) => {
  return (
    <MDXRemote
      source={post.content}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm, remarkA11yEmoji, remarkBreaks],
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                theme: "github-light",
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
