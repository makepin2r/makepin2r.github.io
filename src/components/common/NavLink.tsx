"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  activeClassName?: string;
}

const NavLink: React.FC<NavLinkProps> = ({
  children,
  href,
  className,
  activeClassName,
}) => {
  const pathname = usePathname();
  const isActive = href === "/" ? href === pathname : pathname.includes(href);
  const classNames = `${className} ${isActive ? activeClassName : ""}`;

  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
};

export default NavLink;
