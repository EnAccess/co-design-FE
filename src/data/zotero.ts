import groupBy from "lodash.groupby";
import rawData from "../../public/zotero_data.json";

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

  return output.map((entry: any) => {
    return {
      key: entry.key,
      itemType: entry.itemType,
      title: entry.title,
      authors: parseAuthors(entry.creators),
      url: entry.url,
      websiteTitle: entry.websiteTitle,
      note: entry.abstractNote,
      language: entry.language,
      date: entry.date,
      dateAdded: entry.dateAdded,
      dateModified: entry.dateModified,
      accessDate: entry.accessDate,
      PARSED_MANUAL_TAGS: parseTags(entry.tags),
      PARSED_RELATES_TO: parseRelations(entry.extra),
      tags: entry.tags.map((tag: any) => tag?.tag).join("; "),
    };
  });
}

const zoteroData = parseZotero();

export default zoteroData;
