import { approaches,basicTools} from ".";

export const filteredApproaches = approaches
  .map((approach) => {
    const Entries = approach.entries.filter(
      (entry) => entry.PARSED_MANUAL_TAGS["TOOLS"]
    );
    return {
      ...approach,
      Entries,
    };
  })
  .filter((approach) => approach.entries?.length > 0);


  

  export const filteredTools = basicTools
  .map((tools) => {
    const Entries = tools.entries.filter(
      (entry) => entry.PARSED_MANUAL_TAGS["BASIC TOOLS" ]
    );
    return {
      ...tools,
      Entries,
    };
  })
  .filter((tools) => tools.entries?.length > 0);






