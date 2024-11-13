import React from "react";
import Block from "../components/Block";
import tools from "../data/basic-tools";

const ToolsResources = () => {
  return (
    <section className="mt-10 grid grid-cols-3 gap-y-8 px-8 flex-wrap ">
      {tools.map((data: any, i: any) => {
        return (
          <div
            key={`${data.title}-${i}`}
            className={`${
              data.title === "Basic Tools" ? "col-span-2 row-span-3 flex justify-center items-center" : ""
            }  px-4 `}
          >
            <Block
              title={data.title}
              description={data.description}
              entries={data.entries}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ToolsResources;
