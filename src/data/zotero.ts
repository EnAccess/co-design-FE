import groupBy from "lodash.groupby";
import rawData from "../../public/zotero_data.json";
import { getLevel } from "@/utils/nodes";

function parseRelations(extra: string | null | undefined) {
  if (!extra?.includes("RELATES_TO:")) return [];
  return extra
    .split("RELATES_TO:")[1]
    .split("|")
    .map((item) => item.trim());
}

function parseTags(tags: { tag: string }[]) {
  const list: { key: string; value: string }[] = [];
  tags.forEach((tag) => {
    const [key, value] = tag.tag.split(":").map((item) => item.trim());
    list.push({ key, value });
  });
  const groupedList = groupBy(list, "key");

  const output: any = {};

  Object.keys(groupedList).forEach((key) => {
    output[key] = groupedList[key].map((item) => item.value || null);
  });
  return output;
}

function parseAuthors(creators: any[]) {
  return creators
    ? creators
        ?.filter((creator) => creator.creatorType === "author")
        .map((author) => {
          if (author.firstName && author.lastName) {
            return `${author.firstName} ${author.lastName}`;
          } else if (author.name) {
            return author.name;
          }
          return "";
        })
        .join("; ")
    : null;
}

function parseZotero() {
  const output = rawData.map(({ data }) => data);

  return output.map((rawEntry: any) => {
    const entry = {
      key: rawEntry.key,
      itemType: rawEntry.itemType,
      title: rawEntry.title,
      authors: parseAuthors(rawEntry.creators),
      url: rawEntry.url,
      websiteTitle: rawEntry.websiteTitle,
      note: rawEntry.abstractNote,
      language: rawEntry.language,
      date: rawEntry.date,
      dateAdded: rawEntry.dateAdded,
      dateModified: rawEntry.dateModified,
      accessDate: rawEntry.accessDate,
      PARSED_MANUAL_TAGS: parseTags(rawEntry.tags),
      PARSED_RELATES_TO: parseRelations(rawEntry.extra),
      tags: rawEntry.tags.map((tag: any) => tag?.tag).join("; "),
    }
    return {
      ...entry,
      coDesignLevel: Number(getLevel(entry) || -1),
    };
  }).sort((a, b) => b.coDesignLevel - a.coDesignLevel);
}
 


const zoteroData = parseZotero();

export default zoteroData;
