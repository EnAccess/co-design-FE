import { Group } from "../../types/interfaces";
import { themes } from "./themes";

import groupBy from "lodash.groupby";

const filteredThemes = themes.map((theme)=> {
    const entries = theme.entries.filter((entry) => entry.PARSED_MANUAL_TAGS['BASIC RESOURCE']);
    return {
        ...theme,
        entries
    }
}).filter((theme) => theme.entries?.length > 0);

const rawGroups = groupBy(filteredThemes, 'group');
const groups: Group[] = Object.keys(rawGroups).map((group) => {
    return {
        title: group,
        blocks: rawGroups[group]
    };
}).sort((a, b) => a.title.localeCompare(b.title)) as unknown as Group[];

export default groups;
