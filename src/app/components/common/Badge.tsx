import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  type?: "primary" | "secondary" | "outline";
}

const Badge: React.FC<BadgeProps> = ({ type = "primary", children }) => {
  const classNames = `
  px-3 
  py-1 
  rounded-full 
  prose-caption-12-medium 
  box-border 
  leading-none 
  ${
    type === "primary"
      ? "bg-primary-500 text-white"
      : type === "secondary"
        ? "bg-primary-300 text-black"
        : "bg-transparent border border-gray-100 text-gray-500"
  }`;
  return <span className={classNames}>{children}</span>;
};

export default Badge;
