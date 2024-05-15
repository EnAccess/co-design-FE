import React from "react";
import Block from "../components/cards/Block";
import tools from "../data/basic-tools";

const ToolsResources = () => {
  return (
    <section className="mt-10 flex gap-y-8 px-8 flex-wrap">
      {tools.map((data: any, i: any) =>
        <div key={`${data.title}-${i}`} className="w-1/2 px-4 h-1/2">
          <Block
            title={data.title}
            description={data.description}
            entries={data.entries}
          />
        </div>
      )}


    </section>
  );
};

export default ToolsResources;
