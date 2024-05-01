import Group from "@/components/Group";
import CardCanvas from "@/components/cards/Canvas";
import resources from "@/data/resources/advanced-resources";

const AdvancedResources = () => {
  return (
    <section className="py-10">
      {/* {resources.map((data, index) => (
        <Group key={`advanced-resources-${data.title}-${index}`} data={data} />
      ))} */}
      <CardCanvas
        key={`advanced-resources-${Math.random()}-${10}`}
        data={resources}
      />
      {/* {resources.map((data, index) => {
        return (
          
        );
      })} */}
    </section>
  );
};

export default AdvancedResources;
