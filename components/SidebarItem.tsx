import Link from "next/link";
import React from "react";
import { IconType } from "react-icons/lib";
import { twMerge } from "tailwind-merge";

interface SidebarItemProps {
  icon: IconType;
  label: string;
  active?: boolean;
  href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  active = false,
  href,
}) => {
  return;
  <Link
    href={href}
    className={twMerge(
      `flex
    flex-row h-auto items-center w-full gap-x-4 text-md
    cursor-pointer
    hover:text-white
    text-neutral-400
    py-1
    `,
      active && "text-white"
    )}
  ></Link>;
};

export default SidebarItem;
