import { Post, PostMatter, PostDetail, CategoryDetail } from "@/config/types";
import dayjs from "dayjs";
import fs from "fs";
import matter from "gray-matter";
import readingTime from "reading-time";
import { sync } from "glob";
import path from "path";

const BASE_PATH = "src/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

// 카테고리별 mdx 파일 경로 조회
export const getPostPaths = (category?: string) => {
  const folder = category || "**";
  const postPaths: string[] = sync(`${POSTS_PATH}/${folder}/*.mdx`);
  return postPaths;
};

// 게시글 개요
export const parsePostAbstract = (postPath: string) => {
  const normalizedPath = postPath.split(path.sep).join("/");
  const filePath = normalizedPath
    .slice(normalizedPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, "")
    .replace(/\.mdx$/, "");

  const [categoryPath, slug] = filePath.split("/");
  const url = `/blog/${categoryPath}/${slug}`;
  const categoryPublicName = getCategoryPublicName(categoryPath);
  return { url, categoryPath, categoryPublicName, slug };
};

// 게시글 내용
const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, { encoding: "utf8" });
  const { data, content } = matter(file);
  const grayMatter = data as PostMatter;
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const dateString = dayjs(grayMatter.date).locale("ko").format("YYYY-MM-DD");
  return { ...grayMatter, content, readingMinutes, dateString };
};

export const getCategoryPublicName = (dirPath: string) => {
  return dirPath
    .split("-")
    .map(token => token[0].toUpperCase() + token.slice(1, token.length))
    .join(" ");
};

// 최신순 정렬
const sortPostList = (postList: Post[]) => {
  return postList.sort((a, b) => (a.date > b.date ? -1 : 1));
};

export const getCategoryList = () => {
  const cgPaths: string[] = sync(`${POSTS_PATH}/*`);
  const cgList = cgPaths.map(p => p.split(path.sep).slice(-1)?.[0]);
  return cgList;
};

// 모든 포스트 목록 조회. 블로그 메인 페이지에서 사용
export const getPostList = async (category?: string): Promise<Post[]> => {
  const postPaths = getPostPaths(category);
  const postList = await Promise.all(
    postPaths.map(postPath => parsePost(postPath)),
  );
  return sortPostList(postList);
};

// post 상세 페이지 내용 조회
export const getPostDetail = async (category: string, slug: string) => {
  const filePath = `${POSTS_PATH}/${category}/${slug}.mdx`;
  const detail = await parsePost(filePath);
  return detail as PostDetail;
};

// 게시글 파싱
const parsePost = async (postPath: string) => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);
  return { ...postAbstract, ...postDetail };
};

// 카테고리 정보 리스트 조회
export const getCategoryDetailList = async () => {
  const postList = await getPostList();
  const result: { [key: string]: number } = {};
  for (const post of postList) {
    if (result[post.categoryPath]) {
      result[post.categoryPath] += 1;
    } else {
      result[post.categoryPath] = 1;
    }
  }
  const detailList: CategoryDetail[] = Object.entries(result).map(
    ([category, count]) => ({
      dirName: category,
      publicName: getCategoryPublicName(category),
      count,
    }),
  );

  return detailList;
};

// 전체 게시글 수 조회
export const getAllPostCount = async () => {
  const postList = await getPostList();
  return postList.length;
};
