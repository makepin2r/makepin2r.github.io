// 게시글 front matter
export interface PostMatter {
  title: string;
  description: string;
  date: Date;
  dateString: string;
  tags: string[];
  draft?: boolean;
}

export interface Post extends PostMatter {
  url: string;
  slug: string;
  categoryPath: string;
  content: string;
  readingMinutes: number;
  categoryPublicName: string;
}

export interface PostDetail {
  content: string;
  readingMinutes: number;
  dateString: string;
  title: string;
  description: string;
  date: Date;
  tags: string[];
  draft?: boolean | undefined;
  url: string;
  categoryPath: string;
  categoryPublicName: void;
  slug: string;
}

export interface CategoryDetail {
  dirName: string;
  publicName: string;
  count: number;
}
