import React from "react";
import CoreConcepts from "@/components/advancedResources/coreConcepts";
import GoodDesign from "@/components/advancedResources/goodDesign";
import EffectiveSolutions from "@/components/advancedResources/effectiveSolutions";

// const themes = {
//   "Gender, Disability, & Inclusion": "Gender, Disability, & Inclusion",
//   "Capacity Building & Sharing": "Capacity Building & Sharing",
//   Partnerships: "Partnerships",
// };

// const filteredData = Object.keys(themes).reduce((acc: any, theme: any) => {
//   acc[theme] = Data.filter((entry) =>
//     entry.PARSED_MANUAL_TAGS.THEME?.includes(theme)
//   ) as Entries;
//   return acc;
// }, {});

// const GoodDesign = () => {
//   const themes = {
//     "AI/ML": "AI/ML",
//     "Humanitarian Principles?": "Humanitarian Principles?",
//     Policy: "Policy",
//   };
//   const filteredData = Object.keys(themes).reduce((acc: any, theme: any) => {
//     acc[theme] = Data.filter((entry) =>
//       entry.PARSED_MANUAL_TAGS.THEME?.includes(theme)
//     ) as Entries;
//     return acc;
//   }, {});

//   const themes = {
//   "Systems Approaches to Energy Access": "systemsApproachesToEnergyAccess",
//   "Scale & Replicability": "scaleAndReplicability",
//   Localisation: "localisation",
//   Decolonisation: "decolonisation",
// };
// const filteredData = Object.keys(themes).reduce((acc: any, theme: any) => {
//   acc[theme] = Data.filter((entry) =>
//     entry.PARSED_MANUAL_TAGS.THEME?.includes(theme)
//   ) as Entries;
//   return acc;
// }, {});

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
