import React from "react";
import Data from "../../../public/output.json";
import { dataItem } from "./dataItem";
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
    <div className="mt-20">
      <div className="flex text-gray-600 justify-center items-center py-4 text-3xl font-bold">
        <h1>Element Used to Create Effective Solutions</h1>
      </div>

      <div className="flex gap-3">
        <div className="border-4 border-dashed border-gray-300">
          <TitleCard
            title={dataItem[4].title}
            description={dataItem[4].description}
            className="mr-16 mt-2 ml-2"
          />
          <div className="mt-20 px-6">
            <CaseStudyApproach caseStudyEntries={caseStudy} />
          </div>
        </div>
        <div className="border-4 border-dashed border-gray-300 py-2 px-2">
          <TitleCard
            title={dataItem[5].title}
            description={dataItem[5].description}
          />
        </div>
        <div className="border-4 border-dashed border-gray-300 py-2 px-2">
          <TitleCard
            title={dataItem[6].title}
            description={dataItem[6].description}
          />
          <div className="ml-10 mt-16 mb-24">
            <GenderApproach genderEntries={gender} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementConcept;
