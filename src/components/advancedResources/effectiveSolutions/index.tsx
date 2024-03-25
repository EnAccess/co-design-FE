import React from "react";
import Data from "../../../../public/output.json";
import { Entries } from "../../../types/interfaces";
import Card from "../Card";

const EffectiveSolutions = () => {
  const capacityBuildingAndSharing = Data.filter((entry) =>
    entry.PARSED_MANUAL_TAGS.THEME?.includes("Capacity Building & Sharing")
  ) as Entries;
  const partnerships = Data.filter((entry) =>
    entry.PARSED_MANUAL_TAGS.THEME?.includes("Partnerships")
  ) as Entries;
  const gender = Data.filter((entry) =>
    entry.PARSED_MANUAL_TAGS.THEME?.includes("Gender, Disability, & Inclusion")
  ) as Entries;

  return (
    <div className="p-4 flex gap-4 text-sm">
      <Card
        Entries={capacityBuildingAndSharing}
        title="Capacity Bulding, Development & Sharing"
      />
      <Card Entries={partnerships} title="Partnerships" />
      <Card
        Entries={gender}
        title="Gender,
Disability & Inclusion"
      />
    </div>
  );
};

export default EffectiveSolutions;
