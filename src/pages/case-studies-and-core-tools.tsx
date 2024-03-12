import React from "react";
import Data from "../../public/output.json";
import Coretools from "@/components/casestudyandcoretools/Coretools";
import Casestudy from "@/components/casestudyandcoretools/Casestudy";
import { categorizeByCoDesignLevel } from "../components/casestudyandcoretools/CategorisedByLevel";
import { Entries } from "@/types/interfaces";
import HightlightCaseStudyDetails from "@/components/casestudyandcoretools/HightlightCaseStudyDetails";
const CaseStudiesAndCoreTools = () => {
  const entriesWithCoreToolkit = Data.filter(
    (entry) => entry.PARSED_MANUAL_TAGS.CORE_TOOLKIT
  ) as Entries;

  const entriesWithCaseStudy = Data.filter(
    (entry) => entry.PARSED_MANUAL_TAGS["CASE STUDY THEME"]
  ) as Entries;

  const categorizedCoreToolkitEntries = categorizeByCoDesignLevel(
    entriesWithCoreToolkit
  );
  const categorizedCaseStudyEntries =
    categorizeByCoDesignLevel(entriesWithCaseStudy);

  return (
    <div className="p-4 flex flex-col gap-4 text-sm">
      <div className="flex justify-between items-center gap-2 flex-wrap">
        <div className="border-gray-300 border-2 border-dashed bg-gray-100">
          <h1 className="m-2">core tools</h1>
          <Coretools categorizedEntries={categorizedCoreToolkitEntries} />
        </div>
        <div className="px-4 p-4">
          <HightlightCaseStudyDetails />
        </div>
      </div>
      <div>
        <div className="border-gray-300 border-2 border-dashed bg-gray-100">
          <h1 className="m-2">case studies</h1>
          <Casestudy categorizedEntries={categorizedCaseStudyEntries} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesAndCoreTools;
