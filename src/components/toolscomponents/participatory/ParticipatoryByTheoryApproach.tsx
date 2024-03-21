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
        <div className="border-4 border-dashed border-gray-500 rounded pb-2 p-4">
          <h1 className="text-center font-semibold text-gray-600 text-lg my-3">
            THEORY
          </h1>

          <div className="flex flex-col items-center gap-2">
            {approachEntries.map((data: Entry) => (
              <div key={data.Key} className="w-56 px-2 p-4">
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
