import Group from "@/components/Group";
import Resources from "../data/resources/advanced-resources";

export async function getStaticProps() {
  try {
    const resources = await Resources();

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

const AdvancedResources = ({ resources, error }: any) => {
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <section className="py-10">
      {resources.map((data: any, index: any) => (
        <Group key={`advanced-resources-${data.title}-${index}`} data={data} />
      ))}
    </section>
  );
};

export default AdvancedResources;
