"use client";

import { useRouter } from "next/navigation";
import { CategoryDetail } from "@/config/types";
import Badge from "../common/Badge";

interface CategoryListProps {
  categoryList: CategoryDetail[];
  currentCategory?: string;
  allPostCount?: number;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categoryList,
  currentCategory,
  allPostCount = 0,
}) => {
  const router = useRouter();
  return (
    <section className="w-full">
      <ul className="flex flex-wrap justify-start md:justify-center items-start gap-1">
        <li>
          <button
            onClick={() => {
              router.replace(`/blog`);
            }}
          >
            <Badge type={currentCategory === undefined ? "primary" : "outline"}>
              All
              <span className="prose-caption-12-regular ml-1">
                {allPostCount}
              </span>
            </Badge>
          </button>
        </li>
        {categoryList.map((category, i) => (
          <li key={i}>
            <button
              onClick={() => {
                router.replace(`/blog/${category.dirName}`);
              }}
            >
              <Badge
                type={
                  currentCategory === category.dirName ? "primary" : "outline"
                }
              >
                {category.dirName}
                <span className="prose-caption-12-regular ml-1">
                  {category.count}
                </span>
              </Badge>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoryList;
