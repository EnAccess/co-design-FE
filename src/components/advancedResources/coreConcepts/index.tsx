import React from "react";
import Data from "../../../../public/output.json";
import { Entries } from "../../../types/interfaces";
import Card from "../Card";

const themes = {
  "Systems Approaches to Energy Access": "systemsApproachesToEnergyAccess",
  "Scale & Replicability": "scaleAndReplicability",
  Localisation: "localisation",
  Decolonisation: "decolonisation",
};
const filteredData = Object.keys(themes).reduce((acc: any, theme: any) => {
  acc[theme] = Data.filter((entry) =>
    entry.PARSED_MANUAL_TAGS.THEME?.includes(theme)
  ) as Entries;
  return acc;
}, {});
const CoreConcepts = () => {
  return (
    <>
      <div className="p-4 flex gap-4 text-sm">
        {Object.entries(themes).map(([theme, key]) => (
          <Card key={theme} Entries={filteredData[theme]} title={theme} />
        ))}
      </div>
    </>
  );
};

export default CoreConcepts;
