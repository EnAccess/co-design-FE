import React from "react";
import Data from "../../../public/output.json";
import { dataItem } from "../../utils/dataItem";
import { Entries } from "../../types/interfaces";
import SystemApproachEntries from "./approachEntries/SystemApproachEntries";
import LocalizationApproach from "./approachEntries/LocalizationApproach";
import ScaleApproach from "./approachEntries/ScaleApproach";
import DocolonizationApproach from "./approachEntries/DecolonizationApproach";
import TitleCard from "../cards/TitleCard";

const CoreConcept = () => {
  const entriesWithTheme = Data.filter(
    (entry) =>
      entry.PARSED_MANUAL_TAGS.THEME === "Systems Approaches to Energy Access"
  ).filter((entry) => {
    return entry.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL === "2";
  }) as Entries;

  const scale = Data.filter(
    (entry) =>
      entry.PARSED_MANUAL_TAGS["SUPPORTING TOOLKIT"] === "Scale & Replicability"
  ) as Entries;

  const localization = Data.filter(
    (entry) => entry.PARSED_MANUAL_TAGS.THEME === "Localisation"
  ).filter(
    (entry) => entry.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL === "3"
  ) as Entries;

  const decolonisation = Data.filter(
    (entry) => entry.PARSED_MANUAL_TAGS.THEME === "Decolonisation"
  ) as Entries;

  return (
    <div className="p-6 w-4/5">
      <div className="flex text-gray-600 justify-center items-center py-6 text-3xl font-bold">
        <h1>Core Concepts of Collaborative Design Process</h1>
      </div>

      <div className="flex gap-4">
        <div className="border-4 border-dotted border-gray-300 flex flex-col">
          <TitleCard
            title={dataItem[0].title}
            description={dataItem[0].description}
            className="w-3/4"
          />
          <div className="flex justify-center mt-6">
            <SystemApproachEntries systemApproach={entriesWithTheme} />
          </div>
        </div>
        <div className="">
          <div className="flex gap-4">
            <div className="border-4 border-dashed border-gray-300 py-2 px-2">
              <TitleCard
                title={dataItem[1].title}
                description={dataItem[1].description}
              />
              <div className="flex justify-end mt-6 mr-6">
                <ScaleApproach scaleEntries={scale} />
              </div>
            </div>
            <div className="border-4 border-dashed border-gray-300 py-2 px-2">
              <TitleCard
                title={dataItem[2].title}
                description={dataItem[2].description}
              />
              <div className="pt-24">
                <LocalizationApproach localizationEntries={localization} />
              </div>
            </div>
          </div>
          <div className="border-4 border-dashed border-gray-300 mt-6 flex">
            <div className="py-2">
              <TitleCard
                title={dataItem[3].title}
                description={dataItem[3].description}
                className="flex flex-col gap-4 w-96 ml-3"
              />
            </div>
            <div className="mt-16">
              <DocolonizationApproach decolonizationEntries={decolonisation} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreConcept;
