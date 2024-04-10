import TitleCard from "../components/cards/TitleCard";
import {
  systemEntries,
  scale,
  localization,
  decolonisation,
  caseStudy,
  gender,
  humanitarian,
  policy,
} from "../utils";
import { dataItem } from "../utils/dataItem";

import React from "react";

const BasicResources = () => {
  return (
    <div className="px-28 mb-4 p-6">
      <div className="flex text-gray-500 justify-center items-center py-6 text-5xl font-bold">
        <h1>Core Concepts of Collaborative Design Process</h1>
      </div>
      <div className="flex gap-8 p-6 w-full">
        <div>
          <TitleCard
            title={dataItem[0].title}
            description={dataItem[0].description}
            Entries={[systemEntries[9]]}
          />
        </div>
        <div className="w-full">
          <div className="flex gap-4">
            <div>
              <TitleCard
                title={dataItem[1].title}
                description={dataItem[1].description}
                Entries={scale}
              />
            </div>
            <div>
              <TitleCard
                title={dataItem[2].title}
                description={dataItem[2].description}
                Entries={[localization[3], localization[4]]}
              />
            </div>
          </div>
          <div>
            <TitleCard
              title={dataItem[3].title}
              description={dataItem[3].description}
              Entries={[
                decolonisation[3],
                decolonisation[1],
                decolonisation[0],
              ]}
            />
          </div>
        </div>
      </div>
      <div className="flex text-gray-500 justify-center items-center mb-8 text-4xl font-bold">
        <h1>Elements Used to Create Effective Solutions</h1>
      </div>

      <div className="flex gap-8 p-4 ">
        <div>
          <TitleCard
            title={dataItem[4].title}
            description={dataItem[4].description}
            Entries={[caseStudy[2], caseStudy[5]]}
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
            Entries={[gender[0]]}
          />
        </div>
      </div>
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
            Entries={[humanitarian[5], humanitarian[1], humanitarian[0]]}
          />
        </div>
        <div>
          <TitleCard
            title={dataItem[9].title}
            description={dataItem[9].description}
            Entries={[policy[0], policy[3]]}
          />
        </div>
      </div>
    </div>

    //   <section className="mt-10">
    //   {items.map((data, index) => (
    //     <div key={index} className="">
    //       <h3 className="text-gray-600 font-semibold text-center text-2xl my-10">
    //         {data.title}
    //       </h3>
    //       <div className="flex justify-center w-full">
    //         <BasicResourcesCard
    //           themes={data.themes}
    //           filteredData={(
    //             data.themes
    //           )}
    //         />
    //       </div>
    //     </div>
    //   ))}
    // </section>
  );
};

export default BasicResources;
