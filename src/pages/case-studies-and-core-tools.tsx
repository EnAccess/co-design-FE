/* eslint-disable react-hooks/rules-of-hooks */

import HightlightCaseStudyDetails from "@/components/HightlightCaseStudyDetails";
import { getEntryKeys, groups } from "@/data/case-studies";
import { useEffect, useState, useMemo } from "react";
import { useAppContext } from "@/contex";
import Group from "@/components/Group";

const caseStudiesAndCoreTools = () => {
  const { setEntryKeys } = useAppContext();

  const [hightlightedElement, setHightlightedElement] = useState<string>("");
  const entryKeysArray = useMemo(
    () => getEntryKeys(hightlightedElement),
    [hightlightedElement]
  );

  useEffect(() => {
    if (hightlightedElement) {
      setEntryKeys(entryKeysArray);
    }
  }, [hightlightedElement]);
  return (
    <section className="py-10 relative">
      <div className="absolute right-0 px-10 z-40">
        <HightlightCaseStudyDetails
          setHightlightedElement={setHightlightedElement}
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
