import React from "react";
import Data from "../../../../public/output.json";
import { Entries } from "../../../types/interfaces";
import Card from "../Card";

const CoreConcepts = () => {
  const systemsApproachesToEnergyAccess = Data.filter((entry) =>
    entry.PARSED_MANUAL_TAGS["CASE STUDY THEME"]?.includes(
      "Systems Approaches to Energy Access"
    )
  ) as Entries;
  const scaleAndReplicability = Data.filter((entry) =>
    entry.PARSED_MANUAL_TAGS["SUPPORTING TOOLKIT"]?.includes(
      "Scale & Replicability"
    )
  ) as Entries;
  const localisation = Data.filter((entry) =>
    entry.PARSED_MANUAL_TAGS.THEME?.includes("Localisation")
  ) as Entries;

  const decolonisation = Data.filter((entry) =>
    entry.PARSED_MANUAL_TAGS.THEME?.includes("Decolonisation")
  ) as Entries;

  return (
    <div className="p-4 flex gap-4 text-sm">
      <Card
        Entries={systemsApproachesToEnergyAccess}
        title="Systems Approaches To Energy Access"
      />
      <div>
        <div className="flex gap-2 mb-4 flex-grow text-sm">
          <Card Entries={scaleAndReplicability} title="Scale & Replicability" />
          <Card Entries={localisation} title="Localisation" />
        </div>
        <Card Entries={decolonisation} title="Decolonisation" />
      </div>
    </div>
  );
};

export default CoreConcepts;
