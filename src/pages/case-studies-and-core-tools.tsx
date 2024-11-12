import groups from "@/data/case-studies";
import Group from "@/components/Group";
import HighlightMenuCard from "@/components/cards/HighlightMenu";

const caseStudiesAndCoreTools = () => {
  return (
    <section className="py-10 relative">
      <div className="absolute right-0 px-10 z-40">
        <HighlightMenuCard />
      </div>
      {groups?.map((data, index) => {
        console.log("tesss")
        return (
          <Group
            key={`case-studies-and-core-tools-${data.title}-${index}`}
            data={data}
            minifiedHeader
            maxColumns={10}
          />
        );
      })}
    </section>
  );
};

export default caseStudiesAndCoreTools;
