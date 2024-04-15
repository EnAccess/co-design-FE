import React from "react";
import Block from "../components/Block";
import { filteredApproaches,filteredBasicTools } from "../data/basicTools/tools-resources";

const ToolsResources = () => {
  console.log('object',filteredBasicTools)
  return (
    <section className="mt-10 flex gap-5 px-8">
      <div className ="w-1/2 h-1/2">
      {filteredBasicTools.map((data: any, i: any) => 
            <Block
              key={`${data.title}-${i}`}
              title={data.title}
              description={data.description}
              entries={data.entries}
            />
         )}
      </div>
      <div className="flex flex-wrap gap-4 w-1/2 justify-end float-end">
        {filteredApproaches.map((data: any, i: any) => {
          return (
            <Block
              key={`${data.title}-${i}`}
              title={data.title}
              description={data.description}
              entries={data.Entries}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ToolsResources;
