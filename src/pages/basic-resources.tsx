import React from "react";
import resources from "@/data/resources/basic-resources";
import Group from "@/components/Group";

const BasicResources = () => {
  return (
    <section className="py-10">
      {resources.map((data, index) => (
        <Group key={`basic-resources-${data.title}-${index}`} data={data} />
      ))}
    </section>
  );
};

export default BasicResources;
