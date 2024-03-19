import { Entries, Entry } from "../../../types/interfaces";
import React from "react";
import InformationCard from "../../cards/InformationCard";
import { ArcherContainer } from "react-archer";

interface Props {
  localizationEntries: Entries;
}
const LocalizationApproach = ({ localizationEntries }: Props) => {
  return (
    <>
      <ArcherContainer>
          <div className="flex gap-4 pb-3 px-2">
            {localizationEntries.slice(-2).map((data: Entry) => (
              <div key={data.Key} className="w-44">
                <InformationCard key={data.Key} data={data} />
              </div>
            ))}
          </div>
        </ArcherContainer>
    </>
  );
};

export default LocalizationApproach;
