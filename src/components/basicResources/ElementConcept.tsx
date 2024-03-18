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
      <div className="flex text-gray-500 justify-center items-center py-4 text-3xl font-semibold">
        <h1>Element Used to Create Effective Solutions</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-3 max-w-full h-full">
        <div className="border-4 border-dashed max-w-[60%]">
          <TitleCard
            title={dataItem[4].title}
            description={dataItem[4].description}
            className="w-3/4 mt-2 ml-2"
          />
          <div className="mt-4 px-2">
            <CaseStudyApproach caseStudyEntries={caseStudy} />
          </div>
        </div>

        <div className="gap-4">
          <div className="flex gap-4">
            <div className="border-4 border-dashed">
              <TitleCard
                title={dataItem[5].title}
                description={dataItem[5].description}
              />
            </div>
            <div className="border-4 border-dashed">
              <TitleCard
                title={dataItem[6].title}
                description={dataItem[6].description}
              />
              <div className="w-64 ml-6 py-28">
                <GenderApproach genderEntries={gender} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementConcept;
