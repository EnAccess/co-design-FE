/* eslint-disable react-hooks/rules-of-hooks */

import HightlightCaseStudyDetails from "@/components/HightlightCaseStudyDetails";
import { groups } from "@/data/case-studies";
import { useEffect, useState } from "react";
import { useAppContext } from "@/contex";
import Group from "@/components/Group";

const caseStudiesAndCoreTools = () => {
  const [element, setElement] = useState<string>("");
  const { setLevel } = useAppContext();
  const keyArray = groups.flatMap((group) =>
    group.blocks.flatMap((block) =>
      block.entries
        .filter(
          (entry) =>
            entry?.PARSED_MANUAL_TAGS?.["CASE STUDY LEVEL"]?.includes(
              element
            ) ||
            entry?.PARSED_MANUAL_TAGS?.["CASE STUDY TECH"]?.includes(element)
        )
        .map((entry) => entry.Key)
    )
  );
  useEffect(() => {
    if (element) {
      setLevel(keyArray);
    }
  }, [element]);
  console.log("element", keyArray);
  return (
    <section className="py-10 relative">
      <div className="absolute right-0 px-10 z-40">
        <HightlightCaseStudyDetails setElement={setElement} />
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
