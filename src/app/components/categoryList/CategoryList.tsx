"use client";
import { CategoryDetail } from "@/config/types";
import CategoryButton from "./CategoryButton";

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
  return (
    <section className="w-full">
      <ul className="flex flex-wrap justify-start md:justify-center items-start gap-1">
        <CategoryButton
          category={{
            dirName: "",
            publicName: "All",
            count: allPostCount,
          }}
          badgeType={currentCategory === undefined ? "primary" : "outline"}
        />
        {categoryList.map((category, i) => (
          <CategoryButton
            key={i}
            category={category}
            badgeType={
              currentCategory === category.dirName ? "primary" : "outline"
            }
          />
        ))}
      </ul>
    </section>
  );
};

export default CategoryList;
