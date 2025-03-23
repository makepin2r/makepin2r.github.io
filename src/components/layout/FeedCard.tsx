import React from "react";
import Link from "next/link";
import Image from "next/image";
import Badge from "../common/Badge";
import { CalendarIcon } from "@radix-ui/react-icons";
import { NotionDBPost } from "@/config/types";
import fallbackImg from "/public/images/img-fallback.jpg";
import { BASE_BLOG_URL } from "@/config/const";

interface FeedCardProps {
  feed: NotionDBPost;
}

const FeedCard: React.FC<FeedCardProps> = ({ feed }) => {
  return (
    <Link
      href={`${BASE_BLOG_URL}${feed.properties.category.select.name}/${feed.id}`}
    >
      <article className="w-full rounded-md border border-gray-100 transition-border overflow-hidden hover:border-primary-300 flex gap-1 justify-between flex-col-reverse md:flex-row">
        <div className="flex flex-col justify-start items-start gap-1 p-4 w-full">
          <span className="prose-body-13-medium text-primary-500">
            {feed.properties.category.select.name}
          </span>
          <h6 className="prose-body-16-bold line-clamp-1">
            {feed.properties.title.title[0].text.content?.toString()}
          </h6>
          {feed.properties.description && (
            <p className="prose-body-14-regular line-clamp-1 break-all text-gray-500">
              {feed.properties.description.rich_text[0].text.content ?? ""}
            </p>
          )}
          <p className="flex justify-start gap-1 py-2">
            {feed.properties.tag &&
              feed.properties.tag.multi_select.map((tag, i) => (
                <Badge type="outline" key={`${tag.name}-${i}`}>
                  {tag.name}
                </Badge>
              ))}
          </p>
          <div className="w-full flex justify-between items-center gap-2">
            <p className="flex justify-start items-center gap-1 prose-body-14-regular text-gray-500">
              <CalendarIcon />
              {feed.properties.published_date.date.start}
            </p>
          </div>
        </div>
        {feed.cover && (
          <div className="w-full md:w-[300px] h-[200px] md:h-auto relative overflow-hidden">
            <Image
              src={
                feed.cover.type === "file"
                  ? `/api/image-proxy?url=${encodeURIComponent(feed.cover.file.url)}`
                  : (`/api/image-proxy?url=${encodeURIComponent(feed.cover?.external?.url ?? "")}` ??
                    fallbackImg)
              }
              alt={feed.properties.title.title[0].text.content || "new post"}
              fill={true}
              className="!relative object-cover object-center"
            />
          </div>
        )}
      </article>
    </Link>
  );
};

export default FeedCard;
