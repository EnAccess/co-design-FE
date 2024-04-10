import React from "react";
import { dataItem } from "../../utils/dataItem";
import TitleCard from "../cards/TitleCard";

const CriteriaConcept = () => {
  return (
    <div className="p-6 w-full h-full">
      <div className="flex text-gray-500 justify-center items-center pt-4 mb-10 text-4xl font-bold">
        <h1>Criteria for Good Design</h1>
      </div>
      <div className="flex gap-8 ">
        <div>
          <TitleCard
            title={dataItem[7].title}
            description={dataItem[7].description}
            Entries={[]}
          />
        </div>
        <div>
          <TitleCard
            title={dataItem[8].title}
            description={dataItem[8].description}
            Entries={[]}
          />
        </div>
        <div>
          <TitleCard
            title={dataItem[9].title}
            description={dataItem[9].description}
            Entries={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default CriteriaConcept;
