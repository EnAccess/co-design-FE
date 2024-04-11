import React from "react";
import { resourcesData, basicResources } from "../utils/data";
import { filterResourcesDataByThemes } from "../utils/helper";
import BasicResourceSection from "../components/basicResources/BasicResourceSection";
const BasicResources = () => {
  return (
    <section className="mt-10">
      {resourcesData.map((data, index) => (
        <div key={index} className="">
          <h3 className="text-gray-600 font-semibold text-center text-2xl my-10">
            {data.title}
          </h3>
          <div className="flex justify-center w-full">
            <BasicResourceSection
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
