import React from "react";
import Link from "next/link";
import Image from "next/image";
import Badge from "../common/Badge";
import { CalendarIcon, TimerIcon } from "@radix-ui/react-icons";
import { Post } from "@/config/types";
import fallbackImg from "/public/images/img-fallback.jpg";

interface FeedCardProps {
  thumbnail?: string;
  feed: Post;
}

const FeedCard: React.FC<FeedCardProps> = ({ thumbnail, feed }) => {
  return (
    <Link href={feed.url}>
      <article className="w-full rounded-md border border-gray-100 transition-border overflow-hidden hover:border-primary-300">
        <div className="w-full max-h-[200px] relative overflow-hidden">
          <Image
            src={thumbnail ?? fallbackImg}
            alt={feed.title ?? "abc"}
            fill={true}
            className="!relative object-cover object-center "
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-1 p-4">
          <span className="prose-body-13-medium text-primary-500">
            {feed.categoryPublicName}
          </span>
          <h6 className="prose-body-16-bold line-clamp-2">{feed.title}</h6>
          {feed.description && (
            <p className="prose-body-14-medium line-clamp-1">
              {feed.description}
            </p>
          )}
          <p className="flex justify-start gap-1 py-2">
            {feed.tags?.map((tag, i) => (
              <Badge type="outline" key={`${feed.title}-${i}`}>
                {tag}
              </Badge>
            ))}
          </p>
          <div className="w-full flex justify-between items-center gap-2">
            <p className="flex justify-start items-center gap-1 prose-body-14-regular text-gray-500">
              <CalendarIcon />
              {feed.dateString}
            </p>
            <p className="flex justify-start items-center gap-1 prose-body-14-regular text-gray-500">
              <TimerIcon />
              {feed.readingMinutes} 분
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default FeedCard;
