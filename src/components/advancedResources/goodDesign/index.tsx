import React from "react";
import Data from "../../../../public/output.json";
import { Entries } from "../../../types/interfaces";
import Card from "../Card";

const GoodDesign = () => {
  const artificialInelligence = Data.filter((entry) =>
    entry.PARSED_MANUAL_TAGS.THEME?.includes("AI/ML")
  ) as Entries;
  const humanitarianPrinciples = Data.filter((entry) =>
    entry.PARSED_MANUAL_TAGS.THEME?.includes("Humanitarian Principles?")
  ) as Entries;
  const policy = Data.filter((entry) =>
    entry.PARSED_MANUAL_TAGS.THEME?.includes("Policy")
  ) as Entries;

  return (
    <div className="p-4 flex gap-4 text-sm">
      <Card
        Entries={artificialInelligence}
        title="Artificial Intelligence &
Machine Learning"
      />
      <Card Entries={humanitarianPrinciples} title="Humanitarian Principles?" />
      <Card Entries={policy} title="Policy" />
    </div>
  );
};

export default GoodDesign;
