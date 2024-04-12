import Group from "@/components/Group";
import resources from '@/data/resources/advanced-resources';

const AdvancedResources = () => {
  return (
    <section className="mt-10">
      {resources.map((data, index) => (
        <Group key={`advanced-resources-${data.title}-${index}`} data={data} />
      ))}
    </section>
  );
};

export default AdvancedResources;
