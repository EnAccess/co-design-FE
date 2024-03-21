import React from "react";
import Data from "../../../public/output.json";
import { dataItem } from "../../utils/dataItem";
import { Entries } from "@/types/interfaces";
import HumanitarianApproach from "./approachEntries/HumanitarianApproach";
import PolicyApproach from "./approachEntries/PolicyApproach";
import HumanitarianPolicy from "./approachEntries/HumanitarianPolicy";
import TitleCard from "../cards/TitleCard";

const CriteriaConcept = () => {
  const humanitarianEntries = Data.filter(
    (entry) => entry.PARSED_MANUAL_TAGS.THEME === "Humanitarian Principles?"
  ) as Entries;

  const humanitarianPolicy = Data.filter(
    (entry) => entry.PARSED_MANUAL_TAGS.THEME === "Humanitarian Principles?"
  ).filter(
    (entry) => entry.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL === "2"
  ) as Entries;
  console.log(humanitarianPolicy);

  const policyEntries = Data.filter(
    (entry) => entry.PARSED_MANUAL_TAGS.THEME === "Policy"
  ) as Entries;

  return (
    <div className="p-6 w-full h-full">
      <div className="flex text-gray-500 justify-center items-center  pt-4 mb-10 text-4xl font-bold">
        <h1>Criteria for Good Design</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className="border-4 border-dashed border-gray-300 p-2 w-1/3">
          <TitleCard
            title={dataItem[7].title}
            description={dataItem[7].description}
            className="flex flex-col gap-3"
          />
        </div>
        <div className="border-4 border-dashed border-gray-300 p-2">
          <TitleCard
            title={dataItem[8].title}
            description={dataItem[8].description}
          />
          <div className="flex justify-end pt-10 mr-8">
            <HumanitarianApproach humanitarianEntries={humanitarianEntries} />
          </div>
          <div className="p-6">
            <HumanitarianPolicy humanitarianEntries={humanitarianPolicy} />
          </div>
        </div>
        <div className="border-4 border-dashed border-gray-300 py-2 px-2">
          <TitleCard
            title={dataItem[9].title}
            description={dataItem[9].description}
          />
          <div className="p-16">
            <PolicyApproach policyEntries={policyEntries} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriteriaConcept;
