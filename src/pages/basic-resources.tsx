import React from "react";
import basicResources from "@/data/resources/basic-resources";
import Group from "@/components/Group";

export async function getStaticProps() {
  try {
    const resources = await basicResources();

    return {
      props: {
        resources,
      },
      revalidate: 100,
    };
  } catch (error) {
    console.error("Fetch error:", error);
    return {
      props: {
        resources: [],
        error: "Failed to fetch groups",
      },
    };
  }
}

const BasicResources = ({ resources, error }: any) => {
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <section className="py-10">
      {resources.map((data: any, index: any) => (
        <Group key={`basic-resources-${data.title}-${index}`} data={data} />
      ))}
    </section>
  );
};

export default BasicResources;
