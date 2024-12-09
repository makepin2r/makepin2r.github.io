import { useRouter } from "next/navigation";
import { CategoryDetail } from "@/config/types";
import Badge from "../common/Badge";

interface CategoryButtonProps {
  category: CategoryDetail;
  badgeType: "primary" | "outline";
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  badgeType,
}) => {
  const router = useRouter();
  const BASE_BLOG_URL = "/blog/";
  return (
    <li>
      <button
        onClick={() => {
          router.replace(`${BASE_BLOG_URL}${category.dirName}`);
        }}
      >
        <Badge type={badgeType}>
          {category.publicName}
          <span className="prose-caption-12-regular ml-1">
            {category.count}
          </span>
        </Badge>
      </button>
    </li>
  );
};

export default CategoryButton;
