import React from "react";
import ResourceSection from "./ResourceSection";
import PracticeSection from "./PracticeSection";
import JourneySection from "./JourneySection";
import { navData } from "../utils/NavLink";
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
      <div className="flex h-[32rem] items-stretch justify-between gap-y-24 border-b-8 border-dashed px-8 py-10 mx-auto">
        <ResourceSection navData={navData} />
        <HorzontalArrow />
        <JourneySection />
      </div>
    );

  if (pathname === "/case-studies-and-core-tools" || pathname === "/")
    return (
      <div className="flex  h-[32rem] items-stretch justify-between gap-y-24 border-b-8 border-dashed px-8 py-10 mx-auto">
        <ResourceSection navData={navData} />

        <SmallArrow />
        <PracticeSection title={title} />
        <SmallArrow />
        <JourneySection />
      </div>
    );

  return (
    <div className="flex  h-[32rem] items-stretch justify-between gap-y-24 border-b-8 border-dashed px-8 py-10 mx-auto">
      <ResourceSection navData={navData} />
    </div>
  );
};
