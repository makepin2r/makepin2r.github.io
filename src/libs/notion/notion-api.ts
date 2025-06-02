import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "./n2m";

export const notion = new Client({
  auth: process.env.NEXT_PUBLIC_NOTION_API_SECRET,
  notionVersion: "2022-06-28",
});

export const n2m = new NotionToMarkdown({ notionClient: notion });
