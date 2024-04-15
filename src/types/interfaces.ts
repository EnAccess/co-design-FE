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
  Author: string;
  Notes: string;
  Url: string;
  Extra: string | null;
  Manual_Tags: string;
  PARSED_MANUAL_TAGS: ParsedManualTags;
  PARSED_RELATES_TO?: string[];
}

export type Entries = Entry[];

export interface NavLink {
  text: string;
  link: string;
  title: string;
}
export interface LevelEntries {
  level1: Entries;
  level2: Entries;
  level3: Entries;
}

export interface Block {
  title: string;
  description?: string;
  entries: Entries;
}

export interface Group {
  title?: string;
  blocks: Block[];
}
