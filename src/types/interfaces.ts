export interface ParsedManualTags {
  CORE_TOOLKIT?: boolean;
  ["CO-DESIGN LEVEL"]?: string;
  ["USEFUL FOR"]?: string[];
  ["PROJECT STEP"]?: string;
  ["CASE STUDY THEME"]?: string[] | string;
  ["SUPPORTING TOOLKIT"]?: string[] | string;
  ["CASE STUDY LEVEL"]?: string[] | string;
  ["CASE STUDY TECH"]?: string[] | string;
  THEME?: string[] | string;
  ACCESS?: string;
  TOOLS?: string;
}

export interface Entry {
  key: string;
  title: string;
  authors: string;
  notes: string;
  url: string;
  extra: string | null;
  tags: string;
  PARSED_MANUAL_TAGS: ParsedManualTags;
  PARSED_RELATES_TO?: string[];
  isBasicTool?: Boolean
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
