import React from "react";
import resources from "@/data/resources/basic-resources";
import Group from "@/components/cards/Group";
import Canvas from "@/components/Canvas";

const BasicResources = () => {
  console.log(resources);
  return (
    <section className="py-10">
      <Canvas data={resources} blockHeight={10} />
    </section>
  );
};

export default BasicResources;
