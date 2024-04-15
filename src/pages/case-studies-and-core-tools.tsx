import Group from "@/components/Group";
import groups from "@/data/case-studies";
import HightlightCaseStudyDetails from "@/components/HightlightCaseStudyDetails";
import { levels } from "@/data/case-studies/levels";
import { technologies } from "@/data/case-studies/technologies";
const caseStudiesAndCoreTools = () => {
  return (
    <section className="py-10 relative">
      <div className="absolute right-0 px-10 z-40">
        <HightlightCaseStudyDetails
          technologies={technologies}
          levels={levels}
        />
      </div>
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
