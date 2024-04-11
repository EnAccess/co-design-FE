import React from "react";
import ResoucesCard from "../ResourcesCard";

const BasicResourceSection = ({ themes, filteredData }: any) => {
  return (
    <div className="p-4 grid grid-cols-12 justify-center- gap-4 text-sm">
      {Object.entries(themes).map(([theme, key]) => (
        <ResoucesCard key={`${theme}-${key}`} Entries={filteredData[theme]} />
      ))}
    </div>
  );
};

export default BasicResourceSection;
