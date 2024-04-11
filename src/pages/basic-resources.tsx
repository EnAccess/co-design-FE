import BasicResourcesCard from "@/components/basicResources/BasicResourcesCard";


import React from "react";
import { resourcesData, basicResources } from "@/utils/data";
import { filterResourcesDataByThemes } from "@/utils/helper";
const BasicResources = () => {
  return (
  

      <section className="mt-10">
      {resourcesData.map((data, index) => (
        <div key={index} className="">
          <h3 className="text-gray-600 font-semibold text-center text-2xl my-10">
            {data.title}
          </h3>
          <div className="flex justify-center w-full">
            <BasicResourcesCard
              themes={data.themes}
              filteredData={filterResourcesDataByThemes(
                basicResources,
                data.themes
              )}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default BasicResources;
