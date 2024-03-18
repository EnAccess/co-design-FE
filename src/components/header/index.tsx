import React from "react";
import Image from "next/image";
import ResourceSection from "./ResourceSection";
import PracticeSection from "./PracticeSection";
import JourneySection from "./JourneySection";
import { navData } from "./NavLink";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-wrap justify-between items-center gap-y-24 border-b-8 border-dashed px-8 mx-auto">
      <ResourceSection navData={navData} />
      {pathname === "/tools-resources" && (
        <>
          <Image
            src="./images/smallArrow.png"
            alt="arrow"
            width={100}
            height={100}
          />
          <JourneySection />
        </>
      )}
      {(pathname === "/case-studies-and-core-tools" || pathname === "/") && (
        <>
          <Image
            src="./images/smallArrow.png"
            alt="arrow"
            width={100}
            height={100}
          />
          <PracticeSection title={"Select Level of Co-design Practice"} />
          <Image
            src="./images/smallArrow.png"
            alt="arrow"
            width={100}
            height={100}
          />
          <JourneySection />
        </>
      )}
    </div>
  );
};
