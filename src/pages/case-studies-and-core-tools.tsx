/* eslint-disable react-hooks/rules-of-hooks */

import { getEntryKeys, groups } from "@/data/case-studies";
import { useEffect, useState, useMemo } from "react";
import { useAppContext } from "@/contex";
import Group from "@/components/Group";
import HighlightCaseStudyDetails from "@/components/HightlightCaseStudyDetails";

const caseStudiesAndCoreTools = () => {
  const [highlightedElement, setHighlightedElement] = useState<string>("");
  const { setEntryKeys } = useAppContext();

  const entryKeysArray = useMemo(
    () => getEntryKeys(highlightedElement),
    [highlightedElement]
  );

  useEffect(() => {
    setEntryKeys(entryKeysArray);
    setHighlightedElement("");
  }, [entryKeysArray]);
  return (
    <section className="py-10 relative">
      <div className="absolute right-0 px-10 z-40">
        <HighlightCaseStudyDetails
          setHighlightedElement={setHighlightedElement}
        />
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
