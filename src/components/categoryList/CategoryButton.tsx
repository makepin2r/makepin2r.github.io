import { useRouter } from "next/navigation";
import Badge from "../common/Badge";
import { BASE_BLOG_URL } from "@/config/const";

interface CategoryButtonProps {
  category?: string;
  badgeType: "primary" | "outline";
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  badgeType,
}) => {
  const router = useRouter();

  return (
    <li>
      <button
        onClick={() => {
          router.replace(
            category ? `${BASE_BLOG_URL}${category}` : `${BASE_BLOG_URL}`,
          );
        }}
      >
        <Badge
          className="cursor-pointer 
          prose-caption-12-bold
          hover:text-white 
          hover:bg-primary-300 hover:border-primary-300 transition-all duration-100"
          type={badgeType}
        >
          {category || "All"}
        </Badge>
      </button>
    </li>
  );
};

export default CategoryButton;
