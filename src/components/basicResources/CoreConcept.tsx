import React from "react";
import Data from "../../../public/output.json";
import InformationCard from "../cards/InformationCard";
import YellowCard from "../cards/YellowCard";
import { ArcherContainer } from "react-archer";
import { dataItem } from "./dataItem";
import { Entries } from "../../types/interfaces";
import SystemApproachEntries from "./approachEntries/SystemApproachEntries";
import LocalizationApproach from "./approachEntries/LocalizationApproach";
import ScaleApproach from "./approachEntries/ScaleApproach";
import DocolonizationApproach from "./approachEntries/DecolonizationApproach";

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
    <>
      <div className="flex text-gray-500 justify-center items-center py-6 text-3xl font-semibold">
        <h1>Core Concepts of Collaborative Design Process</h1>
      </div>

      <div className="flex gap-4 flex-col lg:flex-row md:max-w-full h-full">
        <div className="border-4 border-dashed md:w-1/2">
          <YellowCard
            title={dataItem[0].title}
            description={dataItem[0].description}
            className="w-3/4 mt-2 ml-2"
          />
          <div className="float-end mr-44 mb-4 mt-10 w-48">
            <SystemApproachEntries systemApproach={entriesWithTheme} />
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="border-4 border-dashed">
              <YellowCard
                title={dataItem[1].title}
                description={dataItem[1].description}
              />
              <div className="w-96 mt-10 float-end mr-12 mb-4">
                <ScaleApproach scaleEntries={scale} />
              </div>
            </div>
            <div className="border-4 border-dashed">
              <YellowCard
                title={dataItem[2].title}
                description={dataItem[2].description}
              />
              <div className="ml-3 mt-28 mr-24 gap-3 mb-12 w-96">
                <div>
                  <LocalizationApproach localizationEntries={localization} />
                </div>
              </div>
            </div>
          </div>
          <div className="border-4 border-dashed mt-6 flex flex-wrap lg:flex-row">
            <div className="py-2">
              <YellowCard
                title={dataItem[3].title}
                description={dataItem[3].description}
                className="flex flex-col gap-4 w-96 ml-3"
              />
            </div>
            <div className="flex gap-4 mt-2 ml-4">
              <div className="mt-32">
                {/* <ArcherContainer>
                  <InformationCard data={Data[101]} />
                </ArcherContainer> */}
                <DocolonizationApproach decolonizationEntries={decolonisation} />
              </div>
              {/* <div className="mt-2 lg:w-52">
                <ArcherContainer>
                  <InformationCard data={Data[17]} />
                </ArcherContainer>
              </div>
              <div className="mt-32 lg:w-52 mr-6 mb-4">
                <ArcherContainer>
                  <InformationCard data={Data[11]} />
                </ArcherContainer>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreConcept;
