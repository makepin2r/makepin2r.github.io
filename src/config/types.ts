// 게시글 front matter
export interface PostMatter {
  title: string;
  description: string;
  date: Date;
  category: string;
  tags: string[];
  cover?: string;
}

export interface Post extends PostMatter {
  url: string;
  slug: string;
  categoryPath: string;
  content: string;
  readingMinutes: number;
  categoryPublicName: string;
}

// export interface CategoryDetail {
//   dirName: string;
//   publicName: string;
//   count: number;
// }

export type PostDetail = Post & PostMatter;

// TODO properties type 별로 정의 필요

export type PostMetadata = {
  id: string;
  title: string;
  created_time: string;
  category: string;
  tags: string[];
};

export type NotionDBPost = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  cover: PostCoverType | null;
  icon: IconType | null;
  parent: {
    type: "database_id";
    database_id: string;
  };
  archived: boolean;
  in_trash: boolean;
  properties: {
    published: {
      id: string;
      type: "checkbox";
      checkbox: boolean;
    };
    tag: {
      id: string;
      type: "multi_select";
      multi_select: {
        id: string;
        name: string;
        color: string;
      }[];
    };
    category: {
      id: string;
      type: "select";
      select: {
        id: string;
        name: string;
        color: string;
      };
    };
    published_date: {
      id: string;
      type: "date";
      date: {
        start: string | null;
        end: string | null;
        timezone: string | null;
      };
    };
    description: {
      id: string;
      type: "rich_text";
      rich_text: RichTextType;
    };
    title: {
      id: "title";
      type: "title";
      title: RichTextType;
    };
  };
  url: string;
  public_url: string | null;
};

type RichTextAnnotionsType = {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
};

type RichTextType = [
  {
    type: "text";
    text: {
      content: string | null;
      link: string | null;
    };
  },
  annotions: RichTextAnnotionsType,
  plain_text: string | null,
  href: string | null,
];

type PostCoverType =
  | { type: "file"; file: { url: string; expiry_time: string } }
  | { type: "external"; external: { url: string } };

type IconType =
  | { type: "emoji"; emoji: string }
  | { type: "external"; external: { url: string } }
  | { type: "file"; file: { url: string; expiry_date: string } };
