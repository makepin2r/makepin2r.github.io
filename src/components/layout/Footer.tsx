import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { BLOG_USERID, GITHUB_URL, LINKEDIN_URL } from "@/config/const";

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-gray-100 w-full box-border">
      <div className="w-full max-w-[960px] mx-auto px-4 py-10">
        <div className="flex justify-center items-start gap-2">
          <Link href={GITHUB_URL} target="_blank">
            <GitHubLogoIcon className="w-5 h-5 text-gray-700" />
          </Link>
          <Link href={LINKEDIN_URL} target="_blank">
            <LinkedInLogoIcon className="w-5 h-5 text-gray-700" />
          </Link>
        </div>
        <p className="mt-2 prose-caption-12-regular text-gray-700 text-center">
          © {format(new Date(), "yyyy")}. {BLOG_USERID} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
