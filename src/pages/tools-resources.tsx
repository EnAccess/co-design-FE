import React from "react";
import Block from "../components/Block";
import { filteredApproaches, filteredTools } from "../data/basicTools/tools-resources";

const ToolsResources = () => {
  return (
    <section className="mt-10 flex gap-5 px-8">
      <div className ="w-1/2 h-1/2">
      {filteredTools.map((data: any, i: any) => {
        console.log('adede',data.title)
        console.log('adede',data.description)
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
