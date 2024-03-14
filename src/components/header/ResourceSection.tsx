import React, { memo } from "react";
import ResourceTypeCard from "../cards/ResourceTypeCard";

const ResourceSection = () => {
  return (
    <div>
      <p className="text-center text-gray-500 text-xl font-bold mb-3">
        Select Type of Resources in The Co-Design Journey
      </p>
      <div className="bg-[#e6e6e6] border-2 border-black grid grid-cols-2 gap-8 rounded-2xl shadow-2xl p-4 mx-auto">
        {[
          {
            text: "Basic Resources",
            link: "/basic-resources",
          },
          {
            text: "Advanced Resources",
            link: "/",
          },
          {
            text: "Tools Resources",
            link: "/tools-resources",
          },
          {
            text: "Case Studies & CORE Toolkits",
            link: "/case-studies-and-core-tools",
          },
        ].map((item) => (
          <ResourceTypeCard key={item.text} text={item.text} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default memo(ResourceSection);
