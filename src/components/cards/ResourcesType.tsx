"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ResourcesType = ({ text, link }: { text: string; link: string }) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`flex items-center h-9 justify-center rounded-lg border-2 border-black bg-[#b3b3b3] font-semibold text-xs  place-contetext-center cursor-pointer ${
        pathname === link ? "bg-black text-white" : ""
      }`}
    >
      {text}
    </Link>
  );
};

export default ResourcesType;
