import React from "react";
import tools from "../data/basic-tools";
import Canvas from "@/components/Canvas";

const ToolsResources = () => {
  return (
    <section className="mt-10">
      <Canvas data={tools} blockHeight={10} />
    </section>
  );
};

export default ToolsResources;
