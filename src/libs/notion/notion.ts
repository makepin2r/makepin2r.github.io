import { type ExtendedRecordMap } from "notion-types";
import { notion } from "./notion-api";

export const getPage = async (pageId: string): Promise<ExtendedRecordMap> => {
  return await notion.getPage(pageId);
};
