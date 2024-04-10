export type Node = {
  id: string;
  title: string;
  description: string;
  edges: string[];
  highlighted: boolean;
};

export type Block = {
  title: string;
  description: string;
  size: string;
  borderType: "dotted" | "dashed" | "solid";
  backgroundColor: string;
  nodes: Node[];
};

export type Section = {
  title: string;
  blocks: Block[];
};
