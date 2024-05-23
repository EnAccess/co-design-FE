import { getThemes } from "./themes";
import groupBy from "lodash.groupby";
import { Group } from "../../types/interfaces";

async function getGroups() {
  const themes = await getThemes();

  const rawGroups = groupBy(themes, "group");
  const groups: Group[] = Object.keys(rawGroups)
    .map((group) => {
      return {
        title: group,
        blocks: rawGroups[group],
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title)) as unknown as Group[];

  return groups;
}

export default getGroups;
