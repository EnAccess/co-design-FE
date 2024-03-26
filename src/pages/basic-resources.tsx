import CoreConcept from "@/components/basicResources/CoreConcept";
import CriteriaConcept from "@/components/basicResources/CriteriaConcept";
import ElementConcept from "@/components/basicResources/ElementConcept";
import React from "react";

const BasicResources = () => {
  return (
    <div className="px-28 mb-4">
      <CoreConcept />
      <ElementConcept />
      <CriteriaConcept />
    </div>
  );
};

export default BasicResources;
