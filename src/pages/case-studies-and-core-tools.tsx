import groups from "@/data/case-studies";
import HighlightMenuCard from "@/components/cards/HighlightMenu";
import Canvas from "@/components/Canvas";

const caseStudiesAndCoreTools = () => {
  return (
    <section className="py-10 relative">
      <div className="absolute right-0 px-10 z-40">
        <HighlightMenuCard />
      </div>

      <Canvas data={groups} blockHeight={5} />
    </section>
  );
};

export default caseStudiesAndCoreTools;
