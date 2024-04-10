import React from "react";
import Data from "../../public/output.json";
import AdvancedResourcesCard from "@/components/advancedResources/AdvancedResourcesCard";
import { filterAdvancedResourcesDataByThemes } from "@/utils/helpers";

const advancedResourcesData = [
  {
    title: "Core concept of collaborative Design Process",
    themes: {
      "Systems Approaches to Energy Access": "systemsApproachesToEnergyAccess",
      "Scale & Replicability": "scaleAndReplicability",
      Localisation: "localisation",
      Decolonisation: "decolonisation",
    },
  },
  {
    title: "Elements Used to Create Effective Solutions",

    themes: {
      "Capacity Building & Sharing": "Capacity Building & Sharing",
      Partnerships: "Partnerships",
      "Gender, Disability, & Inclusion": "Gender, Disability, & Inclusion",
    },
  },
  {
    title: "Criteria for Good Design",
    themes: {
      "AI/ML": "AI/ML",
      "Humanitarian Principles?": "Humanitarian Principles?",
      Policy: "Policy",
    },
  },
];

const AdvanceedResources = () => {
  return (
    <section className="mt-10">
      {advancedResourcesData.map((data, index) => (
        <div key={index} className="m-auto">
          <h3 className="text-gray-600 font-semibold text-center text-2xl my-10">
            {data.title}
          </h3>
          <div className="flex justify-center flex-wrap">
            <AdvancedResourcesCard
              themes={data.themes}
              filteredData={filterAdvancedResourcesDataByThemes(
                Data,
                data.themes
              )}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default AdvanceedResources;
