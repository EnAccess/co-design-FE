import React from "react";
import Data from "../../../public/output.json";
import { dataItem } from "../../utils/dataItem";
import CaseStudyApproach from "./approachEntries/CaseStudyApproach";
import { Entries } from "@/types/interfaces";
import GenderApproach from "./approachEntries/GenderAppraoch";
import TitleCard from "../cards/TitleCard";

const ElementConcept = () => {
  const caseStudy = Data.filter(
    (entry) => entry.PARSED_MANUAL_TAGS.THEME == "Capacity Building & Sharing"
  ) as Entries;

  const gender = Data.filter(
    (entry) =>
      entry.PARSED_MANUAL_TAGS.THEME === "Gender, Disability, & Inclusion"
  ) as Entries;

  return (
    <div className="p-6">
      <div className="flex text-gray-500 justify-center items-center mb-8 text-4xl font-bold">
        <h1>Elements Used to Create Effective Solutions</h1>
      </div>

      <div className="flex gap-6 p-4 ">
        <div className="border-4 border-dashed border-gray-300">
          <TitleCard
            title={dataItem[4].title}
            description={dataItem[4].description}
            className="mr-16 mt-2 ml-2"
          />
          <div className="mt-20 p-6">
            <CaseStudyApproach caseStudyEntries={caseStudy} />
          </div>
        </div>
        <div className="border-4 border-dashed border-gray-300 py-2 p-2 w-1/3">
          <TitleCard
            title={dataItem[5].title}
            description={dataItem[5].description}
          />
        </div>
        <div className="border-4 border-dashed border-gray-300 py-2 p-2 w-1/2">
          <TitleCard
            title={dataItem[6].title}
            description={dataItem[6].description}
          />
          <div className="p-20 mb-20">
            <GenderApproach genderEntries={gender} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementConcept;
