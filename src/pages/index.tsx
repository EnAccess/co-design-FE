import Canvas from "@/components/Canvas";
import Group from "@/components/cards/Group";
import resources from "@/data/resources/advanced-resources";

const AdvancedResources = () => {
  return (
    <section className="py-10">
      <Canvas data={resources} blockHeight={10} />
    </section>
  );
};

export default AdvancedResources;
