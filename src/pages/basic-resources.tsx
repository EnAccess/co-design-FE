import CoreConcept from "@/components/basicResources/CoreConcept";
import CriteriaConcept from "@/components/basicResources/CriteriaConcept";
import ElementConcept from "@/components/basicResources/ElementConcept";
import React from "react";

const BasicResources = () => {
  return (
    <div className="gap-20 px-10 lg:px-40">
      <CoreConcept />
      <ElementConcept />
      <CriteriaConcept />
    </div>
  );
};

export default BasicResources;
