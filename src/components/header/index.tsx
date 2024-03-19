import React from "react";
import Image from "next/image";
import ResourceSection from "./ResourceSection";
import PracticeSection from "./PracticeSection";
import JourneySection from "./JourneySection";
import { navData } from "./NavLink";
import { usePathname } from "next/navigation";
import HorzontalArrow from "../icons/HorzontalArrow";
import SmallArrow from "../icons/SmallArrow";

export const Header = () => {
  const pathname = usePathname();

  let title = "";

  switch (pathname) {
    case "/":
      title = "Select Level of Co-design Practice";
      break;
    case "/case-studies-and-core-tools":
      title = "Explore Case Studies and Core Tools";
      break;
    default:
      title = "";
      break;
  }

  if (pathname === "/basic-resources")
    return (
      <div className="flex flex-wrap justify-between items-center gap-y-24 border-b-8 border-dashed px-8 mx-auto">
        <ResourceSection navData={navData} />
        <HorzontalArrow />
        <JourneySection />
      </div>
    );

  if (pathname === "/case-studies-and-core-tools" || pathname === "/")
    return (
      <div className="flex flex-wrap justify-between items-center gap-y-24 border-b-8 border-dashed px-8 mx-auto">
        <ResourceSection navData={navData} />

        <SmallArrow />
        <PracticeSection title={title} />
        <SmallArrow />
        <JourneySection />
      </div>
    );

  return (
    <div className="flex flex-wrap justify-between items-center gap-y-24 border-b-8 border-dashed px-8 mx-auto">
      <ResourceSection navData={navData} />
    </div>
  );
};
