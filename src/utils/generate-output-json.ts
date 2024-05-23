const csvFilePath = "./public/data.csv";
import csv from "csvtojson";
import groupBy from "lodash.groupby";
import fs from "fs";
import relations from "../../public/output.json";

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
  if (Array.isArray(obj)) {
    return obj.map(cleanObject).filter((v) => v !== undefined && v !== null);
  } else if (obj !== null && typeof obj === "object") {
    return Object.entries(obj).reduce((acc: any, [key, value]) => {
      if (value === undefined) {
        acc[key] = null;
      } else if (value !== null && typeof value === "object") {
        acc[key] = cleanObject(value);
      } else {
        acc[key] = value;
      }
      return acc;
    }, {});
  }
  return obj;
}

export async function generateDataJson() {
  // load relationships from json
  const relatedData = new Map();
  relations.forEach((item: any) => {
    relatedData.set(item["Key"], item);
  });

  const jsonArray = await csv().fromFile(csvFilePath);
  const output = jsonArray.map((item: any) => {
    const manualTags = parseTags(item["Manual Tags"] || "");
    const autoTags = parseTags(item["Automatic Tags"] || "");
    const relations = relatedData.get(item["Key"])?.PARSED_RELATES_TO || [];
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
      PARSED_RELATES_TO: relations,
    });
  });

  return cleanObject(output);
}
