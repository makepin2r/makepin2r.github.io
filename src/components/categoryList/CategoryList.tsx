"use client";
import CategoryButton from "./CategoryButton";

interface CategoryListProps {
  categoryList: string[];
  currentCategory?: string;
}

const CategoryList: React.FC<CategoryListProps> = ({
  categoryList,
  currentCategory
}) => {
  return (
    <section className="w-full">
      <ul className="w-full flex flex-wrap justify-start md:justify-center items-start gap-1">
        <CategoryButton
          badgeType={currentCategory === undefined ? "primary" : "outline"}
        />
        {categoryList.map((category, i) => (
          <CategoryButton
            key={i}
            category={category}
            badgeType={
              currentCategory === category ? "primary" : "outline"
            }
          />
        ))}
      </ul>
    </section>
  );
};

export default CategoryList;
