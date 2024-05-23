import Group from "@/components/Group";
import advancedResources from "../data/resources/advanced-resources";

const AdvancedResources = ({ resources }: any) => {
  return (
    <section className="py-10">
      {resources.map((data: any, index: any) => (
        <Group key={`advanced-resources-${data.title}-${index}`} data={data} />
      ))}
    </section>
  );
};

export default AdvancedResources;

export async function getStaticProps() {
  const resources = await advancedResources();
  return {
    props: {
      resources,
    },
  };
}
