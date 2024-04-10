import React from "react";
import Data from "../../../../public/output.json";
import { Entries } from "../../../types/interfaces";
import Card from "../Card";

const GoodDesign = () => {
  const themes = {
    "AI/ML": "AI/ML",
    "Humanitarian Principles?": "Humanitarian Principles?",
    Policy: "Policy",
  };
  const filteredData = Object.keys(themes).reduce((acc: any, theme: any) => {
    acc[theme] = Data.filter((entry) =>
      entry.PARSED_MANUAL_TAGS.THEME?.includes(theme)
    ) as Entries;
    return acc;
  }, {});
  return (
    <div className="p-4 flex gap-4 text-sm">
      {Object.entries(themes).map(([theme, key]) => (
        <Card
          key={`${theme}-${key}`}
          Entries={filteredData[theme]}
          title={theme}
        />
      ))}
    </div>
  );
};

export default GoodDesign;
