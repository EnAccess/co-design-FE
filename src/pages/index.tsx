import Group from "@/components/Group";
import resources from "@/data/resources/advanced-resources";
// import Grou



const AdvancedResources = () => {
  return (
    <section className="py-10">
      {resources.map((data, index) => (
        <Group key={`advanced-resources-${data.title}-${index}`} data={data} />
      ))}
    </section>
  );
};

export default AdvancedResources;
