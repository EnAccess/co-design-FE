import { Group } from "../../types/interfaces";
import { themes } from "./themes";

import groupBy from "lodash.groupby";

const rawGroups = groupBy(themes, 'group');
const groups: Group[] = Object.keys(rawGroups).map((group) => {
    return {
        title: group,
        blocks: rawGroups[group]
    };
}).sort((a, b) => a.title.localeCompare(b.title)) as unknown as Group[];

export default groups;
