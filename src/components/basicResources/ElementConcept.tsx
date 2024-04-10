import React from "react";
import { dataItem } from "../../utils/dataItem";
import TitleCard from "../cards/TitleCard";

const ElementConcept = () => {
  return (
    <div className="p-6">
      <div className="flex text-gray-500 justify-center items-center mb-8 text-4xl font-bold">
        <h1>Elements Used to Create Effective Solutions</h1>
      </div>

      <div className="flex gap-8 p-4 ">
        <div>
          <TitleCard
            title={dataItem[4].title}
            description={dataItem[4].description}
            Entries={[]}
          />
        </div>
        <div>
          <TitleCard
            title={dataItem[5].title}
            description={dataItem[5].description}
            Entries={[]}
          />
        </div>
        <div>
          <TitleCard
            title={dataItem[6].title}
            description={dataItem[6].description}
            Entries={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default ElementConcept;
