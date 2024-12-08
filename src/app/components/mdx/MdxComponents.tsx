import { MDXComponents } from "mdx/types";
import { Image } from "./Image";
import { ExternalLink } from "./Link";

export const MdxComponents: MDXComponents = {
  a: ExternalLink as any,
  img: Image as any,
};
