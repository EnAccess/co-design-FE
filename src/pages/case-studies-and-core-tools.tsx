import React from "react";
import Data from "../../public/output.json";
import CoreTools from "../components/casestudyandcoretools/CoreTools";
import CaseStudy from "../components/casestudyandcoretools/CaseStudy";
import { Entries } from "../types/interfaces";
import HightlightCaseStudyDetails from "../components/casestudyandcoretools/HightlightCaseStudyDetails";
import { categorizeByCoDesignLevel } from "../utils/Helper";

const CaseStudiesAndCoreTools = () => {
  const entriesWithCoreToolkit = Data.filter(
    (entry) => entry.PARSED_MANUAL_TAGS.CORE_TOOLKIT
  ) as Entries;

  const entriesWithCaseStudy = Data.filter(
    (entry) => entry.PARSED_MANUAL_TAGS["CASE STUDY GROUP"]
  ) as Entries;

  const categorizedCoreToolkitEntries = categorizeByCoDesignLevel(
    entriesWithCoreToolkit
  );
  const categorizedCaseStudyEntries =
    categorizeByCoDesignLevel(entriesWithCaseStudy);

  return (
    <div className="p-4 flex flex-col gap-4 text-sm">
      <div className="flex justify-between items-center gap-2 flex-wrap">
        <div className="border-gray-300 border-4 border-dashed bg-gray-100">
          <h1 className="m-2 text-lg font-semibold">CORE Toolkits</h1>
          <CoreTools categorizedEntries={categorizedCoreToolkitEntries} />
        </div>

        <div className="px-4 p-4">
          <HightlightCaseStudyDetails />
        </div>
      </div>
      <div>
        <div className="border-gray-300 border-4 border-dashed bg-gray-100">
          <h1 className="m-2 text-lg font-semibold">Case Studies</h1>
          <CaseStudy categorizedEntries={categorizedCaseStudyEntries} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesAndCoreTools;
