const csvFilePath = "./public/data.csv";
import csv from "csvtojson";
import groupBy from "lodash.groupby";

function removeEmptyFields(obj: any) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v));
}

function parseTags(tags: any) {
  const list = tags
    .split(";")
    .map((el: any) => el.trim())
    .filter((item: any) => item)
    .map((line: any) => {
      const [key, value] = line.split(":");
      return {
        key: key.trim(),
        value: value?.trim() || value,
      };
    });
  const groupedList = groupBy(list, "key");

  const output: any = {};

  Object.keys(groupedList).forEach((key) => {
    output[key] = groupedList[key].map((item: any) => item.value);
  });
  return output;
}

function cleanObject(obj: any): any {
  if (obj === null || obj === undefined) return obj;

  if (Array.isArray(obj))
    return obj.map(cleanObject).filter((v) => v !== undefined && v !== null);

  if (typeof obj === "object") {
    return Object.entries(obj).reduce((acc: any, [key, value]) => {
      value === undefined ? (acc[key] = null) : (acc[key] = cleanObject(value));
      return acc;
    }, {});
  }

  return obj;
}

function parseExtraField(row: any) {
  const extraField = row.Extra;
  if (extraField) {
    const strippedValue = extraField.replace("RELATES_TO: ", "");
    const parsedRelatesTo = strippedValue
      .split("|")
      .map((item: any) => item.trim());
    row.PARSED_RELATES_TO = parsedRelatesTo;
  } else {
    row.PARSED_RELATES_TO = [];
  }
}

export async function generateDataJson() {
  const jsonArray = await csv().fromFile(csvFilePath);
  const output = jsonArray.map((item: any) => {
    const manualTags = parseTags(item["Manual Tags"] || "");
    const autoTags = parseTags(item["Automatic Tags"] || "");
    parseExtraField(item);
    const level = manualTags["CO-DESIGN LEVEL"] || [];
    delete manualTags["CO-DESIGN LEVEL"];

    manualTags["CO_DESIGN_LEVEL"] = level;
    const coreToolKits = manualTags["CORE TOOLKIT"];
    if (coreToolKits) {
      manualTags["CORE_TOOLKIT"] = coreToolKits;
      delete manualTags["CORE TOOLKIT"];
    }
    return cleanObject({
      ...removeEmptyFields(item),
      PARSED_MANUAL_TAGS: removeEmptyFields(manualTags),
      PARSED_AUTOMATIC_TAGS: removeEmptyFields(autoTags),
    });
  });

  return cleanObject(output);
}
