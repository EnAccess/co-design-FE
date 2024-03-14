import React from "react";
import YellowCard from "../cards/YellowCard";
import { ArcherContainer } from "react-archer";
import Data from "../../../public/output.json";
import InformationCard from "../cards/InformationCard";

const BasicTools = () => {
  const toolSItem = [
    {
      title: "",
      description: "",
    },
  ];
  return (
    <div className="border-4 border-dashed border-gray-200">
      <div>
        <YellowCard title="" description="" />
        <div className="flex flex-wrap justify-center items-center gap-10 pt-6">
          <div className="bg-[#ffcccc]">
            <ArcherContainer>
              <InformationCard data={Data[53]} />
            </ArcherContainer>
          </div>
          <div className="bg-[#ffcccc]">
            <ArcherContainer>
              <InformationCard data={Data[56]} />
            </ArcherContainer>
          </div>
          <div className="bg-[#ffcccc] w-96">
            <ArcherContainer>
              <InformationCard data={Data[39]} />
            </ArcherContainer>
          </div>
          <div className="bg-[#ffcccc] w-58">
            <ArcherContainer>
              <InformationCard data={Data[47]} />
            </ArcherContainer>
          </div>
          <div className="bg-[#ffcccc] w-96">
            <ArcherContainer>
              <InformationCard data={Data[52]} />
            </ArcherContainer>
          </div>
          <div className="bg-[#ffcccc] w-72">
            <ArcherContainer>
              <InformationCard data={Data[108]} />
            </ArcherContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicTools;
