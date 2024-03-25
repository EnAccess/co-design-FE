import React from "react";
import GroupedData from "@/components/GroupedData";
import CoreConcepts from "@/components/advancedResources/coreConcepts";
import GoodDesign from "@/components/advancedResources/goodDesign";
import EffectiveSolutions from "@/components/advancedResources/effectiveSolutions";

const AdvanceedResources = () => {
  return (
    <section className="mt-10">
      <div className="my-10">
        <h3 className="text-gray-600 font-semibold text-center text-2xl my-10">
          Core concept of collaborative Design Process
        </h3>
        <div>
          <CoreConcepts />
        </div>
      </div>
      <div className="my-10">
        <h3 className="text-gray-600 font-semibold text-center text-2xl">
          Elements Used to Create Effective Solutions
        </h3>
        <div>
          <EffectiveSolutions />
        </div>
      </div>
      <div className="my-10">
        <h3 className="text-gray-600 font-semibold text-center text-2xl">
          Criteria for Good Design
        </h3>
        <div>
          <GoodDesign />
        </div>
      </div>
    </section>
  );
};

export default AdvanceedResources;
