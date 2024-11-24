import React from "react";
import Link from "next/link";
import Image from "next/image";
import Badge from "../common/Badge";
import { CalendarIcon, TimerIcon } from "@radix-ui/react-icons";

interface FeedCardProps {
  thumbnail: string;
  href: string;
  title: string;
  subtitle?: string;
  tags: string[];
  category: string;
  createdAt: string;
  estimatedTime: string;
}

const FeedCard: React.FC<FeedCardProps> = ({
  thumbnail,
  href,
  title,
  subtitle,
  tags,
  category,
  createdAt,
  estimatedTime,
}) => {
  return (
    <Link href={href}>
      <article className="w-full rounded-md border border-gray-100 transition-border overflow-hidden hover:border-primary-300">
        <div className="w-full max-h-[200px] relative overflow-hidden">
          <Image
            src={thumbnail}
            alt={title}
            fill={true}
            className="!relative object-cover object-center "
          />
        </div>
        <div className="flex flex-col justify-start items-start gap-1 p-4">
          <span className="prose-body-13-medium text-primary-500">
            {category}
          </span>
          <h6 className="prose-body-16-bold line-clamp-2">{title}</h6>
          {subtitle && (
            <p className="prose-body-14-medium line-clamp-1">{subtitle}</p>
          )}
          <p className="flex justify-start gap-1 py-2">
            {tags.map(tag => (
              <Badge type="outline">{tag}</Badge>
            ))}
          </p>
          <div className="w-full flex justify-between items-center gap-2">
            <p className="flex justify-start items-center gap-1 prose-body-14-regular text-gray-500">
              <CalendarIcon />
              {createdAt}
            </p>
            <p className="flex justify-start items-center gap-1 prose-body-14-regular text-gray-500">
              <TimerIcon />
              {estimatedTime} 분
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default FeedCard;
