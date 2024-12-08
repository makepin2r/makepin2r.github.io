import { PropsWithChildren } from "react";
import { LinkProps } from "next/link";

export const ExternalLink = ({
  children,
  href,
  ...props
}: PropsWithChildren<LinkProps>) => {
  return (
    <a
      target="_blank"
      href={href.toString() || ""}
      className="text-primary-500 hover:text-primary-300 no-underline transition-color duration-100"
      {...props}
    >
      {children}
    </a>
  );
};
