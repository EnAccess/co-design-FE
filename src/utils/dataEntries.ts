import Data from "../../public/output.json";
import { Entries } from "@/types/interfaces";

export const systemEntries = Data.filter(
    (entry) =>
      entry.PARSED_MANUAL_TAGS.THEME === "Systems Approaches to Energy Access"
  ) as Entries;
  
 export const scale = Data.filter(
    (entry) =>
      entry.PARSED_MANUAL_TAGS["SUPPORTING TOOLKIT"] === "Scale & Replicability"
  ) as Entries;
  
  export const localization = Data.filter(
    (entry) => entry.PARSED_MANUAL_TAGS.THEME === "Localisation"
  ).filter(
    (entry) => entry.PARSED_MANUAL_TAGS.CO_DESIGN_LEVEL === "3"
  ) as Entries;
  
  export const decolonisation = Data.filter(
    (entry) => entry.PARSED_MANUAL_TAGS.THEME === "Decolonisation"
  ) as Entries;
  
  export const caseStudy = Data.filter(
    (entry) => entry.PARSED_MANUAL_TAGS.THEME == "Capacity Building & Sharing"
  ) as Entries;
  
  export const gender = Data.filter(
    (entry) =>
      entry.PARSED_MANUAL_TAGS.THEME === "Gender, Disability, & Inclusion"
  ) as Entries;
  
  export const humanitarian = Data.filter(
    (entry) => entry.PARSED_MANUAL_TAGS.THEME === "Humanitarian Principles?"
  ) as Entries;
  
  export const policy = Data.filter(
    (entry) => entry.PARSED_MANUAL_TAGS.THEME === "Policy"
  ) as Entries;