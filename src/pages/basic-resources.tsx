import CoreConcept from "@/components/basicResources/CoreConcept";
import CriteriaConcept from "@/components/basicResources/CriteriaConcept";
import ElementConcept from "@/components/basicResources/ElementConcept";
import React from "react";

const BasicResources = () => {
  return (
    <div className="gap-20 px-40">
      <div>
        <CoreConcept />
      </div>
      <div>
        <ElementConcept />
      </div>
      <div>
        <CriteriaConcept/>
      </div>
    </div>
  );
};

export default BasicResources;
