"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ResourceTypeCard = ({ text, link }: { text: string; link: string }) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={`flex items-stretch justify-center rounded-lg border-2 border-black bg-[#b3b3b3] font-semibold text-xs place-contetext-center cursor-pointer ${
        pathname === link ? "bg-black text-white" : ""
      }`}
    >
      <p className="w-42 text-center p-6">{text}</p>
    </Link>
  );
};

export default ResourceTypeCard;
