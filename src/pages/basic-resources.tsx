import React from "react";
import basicResources from "@/data/resources/basic-resources";
import Group from "@/components/Group";

const BasicResources = ({ resources }: any) => {
  return (
    <section className="py-10">
      {resources.map((data: any, index: any) => (
        <Group key={`basic-resources-${data.title}-${index}`} data={data} />
      ))}
    </section>
  );
};

export default BasicResources;

export async function getStaticProps() {
  const resources = await basicResources();
  return {
    props: {
      resources,
    },
  };
}
