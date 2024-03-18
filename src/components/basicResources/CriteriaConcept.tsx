import React from "react";
import Data from "../../../public/output.json";
import { dataItem } from "./dataItem";
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
    <div className="py-20">
      <div className="flex text-gray-500 justify-center items-center py-4 text-3xl font-semibold">
        <h1>Criteria for Good Design</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className="border-4 border-dashed">
          <TitleCard
            title={dataItem[7].title}
            description={dataItem[7].description}
            className="flex flex-col gap-3"
          />
        </div>
        <div className="border-4 border-dashed">
          <TitleCard
            title={dataItem[8].title}
            description={dataItem[8].description}
          />
          <div className="flex justify-end py-4 mr-3">
            <HumanitarianApproach humanitarianEntries={humanitarianEntries} />
          </div>
          <div className="px-3 mb-3">
            <HumanitarianPolicy humanitarianEntries={humanitarianPolicy} />
          </div>
        </div>
        <div className="border-4 border-dashed">
          <TitleCard
            title={dataItem[9].title}
            description={dataItem[9].description}
          />
          <div className="py-4 px-3">
            <PolicyApproach policyEntries={policyEntries} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriteriaConcept;
