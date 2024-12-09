import { Post } from "@/config/types";
import Badge from "../common/Badge";
import { CalendarIcon, TimerIcon } from "@radix-ui/react-icons";

interface PostHeaderProps {
  post: Post;
}

const PostHeader: React.FC<PostHeaderProps> = ({ post }) => {
  return (
    <header className="w-full text-center mt-8 mb-12 flex flex-col gap-4">
      <p className="prose-body-14-medium text-primary-500 my-0">
        {post.categoryPublicName}
      </p>
      <h1 className="mb-0">{post.title}</h1>
      <p className="flex justify-center gap-1 my-0">
        {post.tags?.map((tag, i) => (
          <Badge type="outline" key={`${post.title}-${i}`}>
            {tag}
          </Badge>
        ))}
      </p>
      <div className="w-full flex justify-center items-center gap-2">
        <p className="flex justify-start items-center gap-1 prose-body-14-regular text-gray-500 my-0">
          <CalendarIcon />
          {post.dateString}
        </p>
        <p className="flex justify-start items-center gap-1 prose-body-14-regular text-gray-500 my-0">
          <TimerIcon />
          {post.readingMinutes} 분
        </p>
      </div>
    </header>
  );
};

export default PostHeader;
