import Group from "@/components/Group";
import groups from '@/data/case-studies';

const BasicResources = () => {
  return <section className="mt-10">
    {groups?.map((data, index) => (
      <Group key={`advanced-resources-${data.title}-${index}`} data={data} />
    ))}
  </section>
};

export default BasicResources;
