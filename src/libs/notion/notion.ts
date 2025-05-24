import { PostMetadata } from "@/config/types";
import { notion, n2m } from "./notion-api";
import { MdStringObject } from "@/types";
import {
  ListBlockChildrenResponse,
  QueryDatabaseResponse,
  PageObjectResponse,
  PartialPageObjectResponse,
  PartialDatabaseObjectResponse,
  DatabaseObjectResponse,
  GetDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

/**
 * 데이터베이스 정보 가져오기
 * @param category 카테고리명
 * @returns QueryDatabaseResponse
 */
const getDatabase = async (
  category?: string,
): Promise<QueryDatabaseResponse> => {
  let query: any = {
    database_id: process.env.NOTION_DB_ID as string,
    filter: {
      and: [
        {
          property: "published",
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  };

  if (category) {
    query.filter.and.push({
      property: "category",
      select: {
        equals: category,
      },
    });
  }

  return await notion.databases.query(query);
};

// 데이터베이스 객체 정보 가져오기
export const getDatabaseInfo = async (): Promise<GetDatabaseResponse> => {
  return await notion.databases.retrieve({
    database_id: process.env.NOTION_DB_ID as string,
  });
};

/**
 * 페이지 목록 가져오기
 * @param category
 * @returns Promise<(PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse)[]>
 */
export const getPostList = async (
  category?: string,
): Promise<
  (
    | PageObjectResponse
    | PartialPageObjectResponse
    | PartialDatabaseObjectResponse
    | DatabaseObjectResponse
  )[]
> => {
  const res = await getDatabase(category);
  return res.results;
};

/**
 * 페이지 내용 가져오기
 * @param pageId
 * @returns ListBlockChildrenResponse
 */
export const getPage = async (
  pageId: string,
): Promise<ListBlockChildrenResponse> => {
  return await notion.blocks.children.list({ block_id: pageId });
};

/**
 * 단일 페이지 내용 markdown 문자열 형태로 가져오기
 * @param pageId
 * @returns MdStringObject
 */
export const getPageMarkdown = async (
  pageId: string,
): Promise<MdStringObject> => {
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdBlocks);

  return mdString;
};

/**
 * 카테고리 정보 가져오기
 */
export const getPostCategories = async (): Promise<string[]> => {
  const res = await getDatabaseInfo();

  if (res.properties.category) {
    // NOTE notionhq에 정의된 데이터 타입과 실제 데이터 구조가 다름
    //@ts-ignore
    const result = res.properties.category.select?.options.map(
      (item: {
        id: string;
        name: string;
        color: string;
        description: string | null;
      }) => item.name,
    );
    return result;
  } else {
    return [];
  }
};

/**
 * 페이지 메타 데이터 가져오기
 * @param id 글 아이디
 * @returns PostMetadata
 */
export const getPostMetadata = async (id: string): Promise<PostMetadata> => {
  const res = (await notion.pages.retrieve({
    page_id: id,
  })) as PageObjectResponse;

  const title =
    res.properties.title.type === "title"
      ? res.properties.title.title[0].plain_text
      : "";

  const tags =
    res.properties.tag.type === "multi_select" &&
    res.properties.tag.multi_select
      ? res.properties.tag.multi_select.map(tag => tag.name)
      : [];

  const category =
    res.properties.category.type === "select" && res.properties.category.select
      ? res.properties.category?.select?.name
      : "";

  const result: PostMetadata = {
    id: res.id,
    title,
    created_time: res.created_time,
    category,
    tags,
  };

  return result;
};
