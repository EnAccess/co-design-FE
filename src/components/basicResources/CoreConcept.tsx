import React from "react";
import { dataItem } from "../../utils/dataItem";
import TitleCard from "../cards/TitleCard";

const CoreConcept = () => {
  return (
    <div className="p-6">
      <div className="flex text-gray-500 justify-center items-center py-6 text-5xl font-bold">
        <h1>Core Concepts of Collaborative Design Process</h1>
      </div>

      <div className="flex gap-8 p-6 w-full">
        <div>
          <TitleCard
            title={dataItem[0].title}
            description={dataItem[0].description}
            Entries={[]}
          />
        </div>
        <div className="w-full">
          <div className="flex gap-4">
            <div>
              <TitleCard
                title={dataItem[1].title}
                description={dataItem[1].description}
                Entries={[]}
              />
            </div>
            <div>
              <TitleCard
                title={dataItem[2].title}
                description={dataItem[2].description}
                Entries={[]}
              />
            </div>
          </div>
          <div>
            <TitleCard
              title={dataItem[3].title}
              description={dataItem[3].description}
              Entries={[]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreConcept;
