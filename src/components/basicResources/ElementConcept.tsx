import React from "react";
import Data from "../../../public/output.json";
import InformationCard from "../cards/InformationCard";
import YellowCard from "../cards/YellowCard";
import { ArcherContainer } from "react-archer";
import { dataItem } from "./dataItem";

const ElementConcept = () => {
  return (
    <div className="mt-20">
      <div className="flex text-gray-500 justify-center items-center py-4 text-3xl font-semibold">
        <h1>Element Used to Create Effective Solutions</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-3 max-w-full h-full">
        <div className="border-4 border-dashed max-w-[60%]">
          <YellowCard
            title={dataItem[4].title}
            description={dataItem[4].description}
            className="w-3/4 mt-2 ml-2"
          />
          <div className="w-44 mt-4 ml-12">
            <ArcherContainer>
              <InformationCard data={Data[32]} />
            </ArcherContainer>
          </div>
          <div className="float-end w-52 mt-10 mr-4 mb-2">
            <ArcherContainer>
              <InformationCard data={Data[135]} />
            </ArcherContainer>
          </div>
        </div>

        <div className="gap-4">
          <div className="flex gap-4">
            <div className="border-4 border-dashed">
              <YellowCard
                title={dataItem[5].title}
                description={dataItem[5].description}
              />
            </div>
            <div className="border-4 border-dashed">
              <YellowCard
                title={dataItem[6].title}
                description={dataItem[6].description}
              />
              <div className="w-64 ml-6 py-28">
                <ArcherContainer>
                  <InformationCard data={Data[3]} />
                </ArcherContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementConcept;
