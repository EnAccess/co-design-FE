import React from "react";
import Data from "../../public/output.json";
import { Entries, LevelEntries } from "../types/interfaces";
import HightlightCaseStudyDetails from "../components/HightlightCaseStudyDetails";
import { categorizeByCoDesignLevel } from "../utils/helpers";
import CaseStudyAndCoreToolsKitsSection from "../components/sections/CaseStudyAndCoreToolsKits";
import HeaderCard from "@/components/cards/Header";

interface SectionContainer {
  title: string;
  categorizedEntries: LevelEntries;
}

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

const SectionContainer = ({ title, categorizedEntries }: SectionContainer) => {
  return (
    <div className="border-gray-300 border-4 border-dashed bg-gray-100">
      <HeaderCard title={title} isToolsBlock={true} />
      <CaseStudyAndCoreToolsKitsSection
        categorizedEntries={categorizedEntries}
        isToolsBlock={true}
      />
    </div>
  );
};

const CaseStudiesAndCoreTools = () => {
  return (
    <div className="p-4 flex flex-col gap-4 text-sm">
      <div className="flex justify-between items-center gap-2 flex-wrap">
        <SectionContainer
          title="CORE Toolkits"
          categorizedEntries={categorizedCoreToolkitEntries}
        />
        <div className="px-4 p-4">
          <HightlightCaseStudyDetails />
        </div>
      </div>
      <div>
        <SectionContainer
          title="Case Studies"
          categorizedEntries={categorizedCaseStudyEntries}
        />
      </div>
    </div>
  );
};

export default CaseStudiesAndCoreTools;
