import React from "react";
import Image from "next/image";
import ResourceSection from "./ResourceSection";
import PracticeSection from "./PracticeSection";
import JourneySection from "./JourneySection";

export const Header = () => {
  return (
    <div className="flex flex-wrap justify-between items-center  gap-y-24 border-b-8 border-dashed px-8 mx-auto">
      <ResourceSection />
      <Image
        src="/public/images/smallArrow.png"
        alt="arrow"
        width={100}
        height={100}
      />
      <PracticeSection />
      <Image
        src="/public/images/smallArrow.png"
        alt="arrowtwo"
        width={100}
        height={100}
      />
      <JourneySection />
    </div>
  );
};
