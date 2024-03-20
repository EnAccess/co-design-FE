import { Entry } from "../../../types/interfaces";
import React from "react";
import InformationCard from "../../cards/InformationCard";
import { ArcherContainer } from "react-archer";

interface Props {
  approachEntries: Entry[];
}
const ParticipatoryByTheoryApproch = ({ approachEntries }: Props) => {
  return (
    <div>
      <ArcherContainer>
        <div className="border-4 border-dashed border-gray-500 rounded h-full p-10">
          <h1 className="text-center font-semibold text-gray-600 text-lg">
            THEORY
          </h1>

          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {approachEntries.map((data: Entry) => (
              <div key={data.Key} className="w-56">
                <InformationCard key={data.Key} data={data} />
              </div>
            ))}
          </div>
        </div>
      </ArcherContainer>
    </div>
  );
};

export default ParticipatoryByTheoryApproch;
