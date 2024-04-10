import React from "react";
import Data from "../../../../public/output.json";
import { Entries } from "../../../types/interfaces";
import Card from "../Card";

const themes = {
  "Gender, Disability, & Inclusion": "Gender, Disability, & Inclusion",
  "Capacity Building & Sharing": "Capacity Building & Sharing",
  Partnerships: "Partnerships",
};

const filteredData = Object.keys(themes).reduce((acc: any, theme: any) => {
  acc[theme] = Data.filter((entry) =>
    entry.PARSED_MANUAL_TAGS.THEME?.includes(theme)
  ) as Entries;
  return acc;
}, {});

const EffectiveSolutions = () => {
  return (
    <div className="p-4 flex gap-4 text-sm">
      {Object.entries(themes).map(([theme, key]) => (
        <Card key={theme} Entries={filteredData[theme]} title={theme} />
      ))}
    </div>
  );
};

export default EffectiveSolutions;
