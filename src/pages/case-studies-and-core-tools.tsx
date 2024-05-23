import { getTools } from "@/data/case-studies";
import Group from "@/components/Group";
import HighlightMenuCard from "@/components/cards/HighlightMenu";
import { getHighlights } from "@/data/case-studies/highlight";

const caseStudiesAndCoreTools = ({ resources, highlights }: any) => {
  return (
    <section className="py-10 relative">
      <div className="absolute right-0 px-10 z-40">
        <HighlightMenuCard highlights={highlights} />
      </div>
      {resources?.map((data: any, index: any) => {
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

export async function getStaticProps() {
  const resources = await getTools();
  const highlights = await getHighlights();
  return {
    props: {
      resources,
      highlights,
    },
  };
}
