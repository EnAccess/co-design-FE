import groups from "@/data/case-studies";
import Group from "@/components/Group";
import HighlightCaseStudyDetails from "@/components/HightlightCaseStudyDetails";

const caseStudiesAndCoreTools = () => {
  return (
    <section className="py-10 relative">
      <div className="absolute right-0 px-10 z-40">
        <HighlightCaseStudyDetails />
      </div>
      {groups?.map((data, index) => {
        return (
          <Group
            key={`case-studies-and-core-tools-${data.title}-${index}`}
            data={data}
            minifiedHeader
          />
        );
      })}
    </section>
  );
};

export default caseStudiesAndCoreTools;
