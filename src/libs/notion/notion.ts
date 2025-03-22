import { notion, n2m } from "./notion-api";
import { MdStringObject } from "@/types";
import {
  ListBlockChildrenResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

/**
 * 데이터베이스 정보 가져오기
 */
export const getDatabase = async (): Promise<QueryDatabaseResponse> => {
  return await notion.databases.query({
    database_id: process.env.NOTION_DB_ID as string,
  });
};

/**
 * 페이지 내용 가져오기
 */
export const getPage = async (
  pageId: string,
): Promise<ListBlockChildrenResponse> => {
  return await notion.blocks.children.list({ block_id: pageId });
};

/**
 * 단일 페이지 내용 markdown 문자열 형태로 가져오기
 */
export const getPageMarkdown = async (
  pageId: string,
): Promise<MdStringObject> => {
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  const mdString = n2m.toMarkdownString(mdBlocks);

  return mdString;
};
