import React from "react";
import Data from "../../public/output.json";
import AdvancedResourcesCard from "@/components/advancedResources/AdvancedResourcesCard";
import { filterAdvancedResourcesDataByThemes } from "@/utils/helpers";
import { advancedResourcesData } from "@/utils/data";

const AdvanceedResources = () => {
  return (
    <section className="mt-10">
      {advancedResourcesData.map((data, index) => (
        <div key={index} className="">
          <h3 className="text-gray-600 font-semibold text-center text-2xl my-10">
            {data.title}
          </h3>
          <div className="flex justify-center w-full">
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
