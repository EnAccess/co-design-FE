import Group from "@/components/Group";
import HightlightCaseStudyDetails from "@/components/HightlightCaseStudyDetails";
import { groups } from "@/data/case-studies";
import { useState } from "react";

const caseStudiesAndCoreTools = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [element, setElement] = useState<string>("");
  console.log(element);
  return (
    <section className="py-10 relative">
      <div className="absolute right-0 px-10 z-40">
        <HightlightCaseStudyDetails setElement={setElement} />
      </div>
      {groups?.map((data, index) => {
        console.log(data);
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
