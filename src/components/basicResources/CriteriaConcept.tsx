import React from "react";
import Data from "../../../public/output.json";
import InformationCard from "../cards/InformationCard";
import YellowCard from "../cards/YellowCard";
import { ArcherContainer } from "react-archer";
import { dataItem } from "./dataItem";

const CriteriaConcept = () => {
  return (
    <div className="py-20">
      <div className="flex text-gray-500 justify-center items-center py-4 text-3xl font-semibold">
        <h1>Criteria for Good Design</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4 ">
        <div className="border-4 border-dashed">
          <YellowCard
            title={dataItem[7].title}
            description={dataItem[7].description}
            className="flex flex-col gap-3"
          />
        </div>
        <div className="border-4 border-dashed">
          <YellowCard
            title={dataItem[8].title}
            description={dataItem[8].description}
          />
          <div className="flex lg:ml-96 gap-6 py-8 w-96 mr-2">
            <div>
              <ArcherContainer>
                <InformationCard data={Data[13]} />
              </ArcherContainer>
            </div>
            <div>
              <ArcherContainer>
                <InformationCard data={Data[8]} />
              </ArcherContainer>
            </div>
          </div>
          <div className="w-60 ml-6">
            <ArcherContainer>
              <InformationCard data={Data[138]} />
            </ArcherContainer>
          </div>
        </div>
        <div className="border-4 border-dashed w-1/2">
          <YellowCard
            title={dataItem[9].title}
            description={dataItem[9].description}
          />
          <div className="w-48 mt-5 float-end mr-16">
            <ArcherContainer>
              <InformationCard data={Data[110]} />
            </ArcherContainer>
          </div>
          <div className="ml-10 py-28 w-48">
            <ArcherContainer>
              <InformationCard data={Data[81]} />
            </ArcherContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriteriaConcept;
