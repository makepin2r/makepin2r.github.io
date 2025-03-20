import React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  className?: string;
  type?: "primary" | "secondary" | "outline";
}

const Badge: React.FC<BadgeProps> = ({
  type = "primary",
  children,
  className = "",
}) => {
  const classNames = `
  px-3 
  py-1 
  rounded-full 
  prose-caption-12-medium 
  box-border 
  leading-none 
  cursor-default 
  border 
  ${className}
  ${
    type === "primary"
      ? "bg-primary-500 border-primary-500 text-white"
      : type === "secondary"
        ? "bg-primary-300 border-primary-300 text-black"
        : "bg-transparent border-gray-100 text-gray-500"
  }`;
  return <span className={classNames}>{children}</span>;
};

export default Badge;
