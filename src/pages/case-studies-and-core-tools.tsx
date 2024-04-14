import Group from "@/components/Group";
import groups from "@/data/case-studies";

const caseStudiesAndCoreTools = () => {
  return (
    <section className="py-10">
      {groups?.map((data, index) => (
        <Group
          key={`case-studies-and-core-tools-${data.title}-${index}`}
          data={data}
          caseStudy={true}
        />
      ))}
    </section>
  );
};

export default caseStudiesAndCoreTools;
