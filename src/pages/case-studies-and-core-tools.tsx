import React from "react";
import data from "../../public/output.json";
const CaseStudiesAndCoreTools = () => {
  console.log(data);
  // Step 1: Filter entries with Core Toolkit
  const entriesWithCoreToolkit = data.filter(
    (entry) => entry.PARSED_MANUAL_TAGS.CORE_TOOLKIT
  );

  // Step 2: Categorize by CO_DESIGN_LEVEL using reduce
  const categorizeByCoDesignLevel = (entries: any[]) => {
    return entries.reduce(
      (acc, entry) => {
        const coDesignLevel = entry.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL;
        switch (coDesignLevel) {
          case "1":
            acc.level1.push(entry);
            break;
          case "2":
            acc.level2.push(entry);
            break;
          case "3":
            acc.level3.push(entry);
            break;
          default:
            console.log(`Unknown CO_DESIGN_LEVEL: ${coDesignLevel}`);
        }
        return acc;
      },
      { level1: [], level2: [], level3: [] }
    );
  };

  const categorizedEntries = categorizeByCoDesignLevel(entriesWithCoreToolkit);

  console.log(categorizedEntries);
  return (
    <div className="p-4 flex flex-col gap-4 text-sm">
      <div className="flex justify-between items-center gap-2">
        <div className="border-gray-300 border-2 border-dashed bg-gray-100">
          <h1 className="m-2">core tools</h1>
          <div>
            <div className="flex p-4 gap-4 flex-wrap">
              <div className="p-4 bg-[#e1d5e7]">karera olivier</div>
              <div className="p-4 bg-[#e1d5e7]">karera olivier</div>
              <div className="p-4 bg-[#e1d5e7]">karera olivier</div>
            </div>
            <div className="flex p-4 gap-4 flex-wrap">
              <div className="p-4 bg-[#ffe6cc]">karera olivier</div>
              <div className="p-4 bg-[#ffe6cc]">karera olivier</div>
              <div className="p-4 bg-[#ffe6cc]">karera olivier</div>
              <div className="p-4 bg-[#ffe6cc]">karera olivier</div>
            </div>
            <div className="flex p-4 gap-4 flex-wrap">
              <div className="p-4 bg-[#d5e8d4]">karera olivier</div>
              <div className="p-4 bg-[#d5e8d4]">karera olivier</div>
              <div className="p-4 bg-[#d5e8d4]">karera olivier</div>
            </div>
          </div>
        </div>{" "}
        <div>core tools</div>
      </div>
      <div>
        <div className="border-gray-300 border-2 border-dashed bg-gray-100">
          <h1 className="m-2">case studies</h1>
          <div>
            <div className="flex p-4 gap-4 flex-wrap">
              <div className="p-4 bg-[#e1d5e7]">karera olivier</div>
              <div className="p-4 bg-[#e1d5e7]">karera olivier</div>
              <div className="p-4 bg-[#e1d5e7]">karera olivier</div>
              <div className="p-4 bg-[#e1d5e7]">karera olivier</div>
              <div className="p-4 bg-[#e1d5e7]">karera olivier</div>
              <div className="p-4 bg-[#e1d5e7]">karera olivier</div>
            </div>
            <div className="flex p-4 gap-4 flex-wrap">
              <div className="p-4 bg-[#ffe6cc]">karera olivier</div>
              <div className="p-4 bg-[#ffe6cc]">karera olivier</div>
              <div className="p-4 bg-[#ffe6cc]">karera olivier</div>
              <div className="p-4 bg-[#ffe6cc]">karera olivier</div>
              <div className="p-4 bg-[#ffe6cc]">karera olivier</div>
              <div className="p-4 bg-[#ffe6cc]">karera olivier</div>
            </div>
            <div className="flex p-4 gap-4 flex-wrap">
              <div className="p-4 bg-[#d5e8d4]">karera olivier Nkurunziza</div>
              <div className="p-4 bg-[#d5e8d4]">karera olivier Nkurunziza</div>
              <div className="p-4 bg-[#d5e8d4]">karera olivier Nkurunziza</div>
              <div className="p-4 bg-[#d5e8d4]">karera olivier Nkurunziza</div>
              <div className="p-4 bg-[#d5e8d4]">karera olivier Nkurunziza</div>
              <div className="p-4 bg-[#d5e8d4]">karera olivier Nkurunziza</div>
              <div className="p-4 bg-[#d5e8d4]">karera olivier Nkurunziza</div>
              <div className="p-4 bg-[#d5e8d4]">karera olivier Nkurunziza</div>
              <div className="p-4 bg-[#d5e8d4]">karera olivier Nkurunziza</div>
              <div className="p-4 bg-[#d5e8d4]">karera olivier Nkurunziza</div>
              <div className="p-4 bg-[#d5e8d4]">karera olivier Nkurunziza</div>
              <div className="p-4 bg-[#d5e8d4]">karera olivier Nkurunziza</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesAndCoreTools;
