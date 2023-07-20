"use client"; //
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/Bi";
import Box from "./Box";

interface SidebarProps {
  children: React.ReactNode;
}
const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    []
  );
  return (
    <div className="flex h-full">
      <div
        className="hidden md:flex flex-col gap-y-2 bg-black h-full
    w-[300px] p-2"
      >
        <Box>Sidebar</Box>
        <Box className="overflow-y-auto h-full">Song Library</Box>
      </div>
    </div>
  );
};

export default Sidebar;
// React.ReactNode is a type that can represent any valid thing that can be rendered in React, such as a string, a number, a React element, or an array of these things.

// 'children' is a props that hasbeen passed to the 'Sidebar' component and 'React.FC<SidebarProps> ' specifying the data type of the 'children' prop, right???

// this is proper way of passing server component inside client component
