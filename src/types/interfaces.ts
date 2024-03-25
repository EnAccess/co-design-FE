export interface ParsedManualTags {
  CORE_TOOLKIT?: boolean;
  CO_DESIGN_LEVEL?: string;
  ["USEFUL FOR"]?: string[];
  ["PROJECT STEP"]?: string;
  ["CASE STUDY THEME"]?: string[] | string;
  ["SUPPORTING TOOLKIT"]?: string[] | string;
  THEME?: string[] | string;
  ACCESS?: string;
  TOOLS?: string;
}

export interface Entry {
  Key: string;
  Title: string;
  Extra: string | null;
  Manual_Tags: string;
  PARSED_MANUAL_TAGS: ParsedManualTags;
  PARSED_RELATES_TO?: string[];
}

export type Entries = Entry[];
