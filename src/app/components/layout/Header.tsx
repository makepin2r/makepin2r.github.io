import React from "react";
import NavLink from "../common/NavLink";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const menus: { route: string; name: string }[] = [
  {
    route: "/",
    name: "Home",
  },
  {
    route: "/about",
    name: "About",
  },
];

const Header = () => {
  return (
    <header className="border-b-[1px] border-gray-100 w-full h-16">
      <div className="w-full h-full max-w-[960px] mx-auto px-4 flex justify-between items-center">
        <nav className="h-full flex justify-start items-center gap-2">
          {menus.map(menu => {
            return (
              <NavLink
                href={menu.route}
                className="text-gray-300"
                activeClassName="text-primary-500"
              >
                {menu.name}
              </NavLink>
            );
          })}
        </nav>
        <div>
          <GitHubLogoIcon className="w-5 h-5 text-primary-500" />
        </div>
      </div>
    </header>
  );
};

export default Header;
