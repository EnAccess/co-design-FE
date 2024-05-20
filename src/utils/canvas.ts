import { Block, Group } from "@/types/interfaces";
import { v4 as uuid } from "uuid";

export const generateBlock = (
  parentId: string,
  name: any,
  description?: string
) => ({
  id: uuid(),
  data: { label: name, description },
  position: { x: 0, y: 0 },
  draggable: false,
  type: "block",
  style: {
    width:
      groupIndex == "1" && currentPath === "/case-studies-and-core-tools"
        ? 3100
        : 1060,
    height: currentPath === "/case-studies-and-core-tools" ? 800 : 1000,
    borderStyle: "dashed",
    borderColor: "#C8C8C8",
    borderWidth: "4px",
    padding: "10px",
  },
  parentId,
});

export const generateGroup = (name: any, position: any, height: any) => ({
  id: uuid(),
  data: { label: name },
  position,
  draggable: false,
  style: {
    backgroundColor: "ffffff",
    width: "100%",
    height: height,
    border: "none",
  },
  type: "group",
});

let baseRowHeightGroup = 1200;
let increaseGroupHeight = 0;
let currentPath = "";
let groupIndex = "";
const incrementGroupHeight = (value: any) => {
  increaseGroupHeight = increaseGroupHeight + value;
};
const groupPositions = (i: any, length: any) => {
  groupIndex = i;
  if (i === 0) baseRowHeightGroup = 1200;
  let rowHeight = baseRowHeightGroup;
  if (length > 3) {
    rowHeight *= Math.ceil(length / 3);
  }
  const y = increaseGroupHeight;
  incrementGroupHeight(rowHeight);
  return [{ x: 1, y }, rowHeight];
};

export const parseGroups = (
  groups: Group[],
  container: { width: number; height: number },
  pathName: string
) => {
  increaseGroupHeight = 0;
  const nodes: any[] = [];
  const edges: any[] = [];
  currentPath = pathName;
  groups.forEach((group, i) => {
    const blockCount = group.blocks.length;
    const [position, height] = groupPositions(i, blockCount);
    const groupNode = generateGroup(group.title, position, height);
    const blocks = parseBlocks(group.blocks, groupNode.id, container);
    nodes.push(groupNode, ...blocks.nodes);
    edges.push(...blocks.edges);
  });

  return { edges, nodes };
};

export const parseBlockData = (data: Block, groupId: string, position: any) => {
  const blockNode = {
    ...generateBlock(groupId, data.title, data.description),
    position,
  };
  const nodes = parseNodes(data.entries, {
    width: blockNode.style.width,
    height: blockNode.style.height,
  }).map((node) => ({
    ...node,
    parentId: blockNode.id,
  }));
  return [blockNode, ...nodes];
};

const blockPositions = (i: any) => {
  let x = 80;
  let y = 200;
  const columnWidth = 1080;
  const rowHeight = 1200;
  for (let j = 0; j < i; j++) {
    x += columnWidth;
    if (x >= 2251) {
      x = 80;
      y += rowHeight - 180;
    }
  }
  return { x, y };
};
export const parseBlocks = (
  blocks: Block[],
  groupId: string,
  container: { width: number; height: number },
  minY = 0
) => {
  const edges: any[] = [];
  const nodes: any[] = [];
  blocks.forEach((block, i) => {
    edges.push(...parseEdges(block.entries));
    nodes.push(...parseBlockData(block, groupId, blockPositions(i)));
  });
  return { edges, nodes };
};

export const generateNode = (label: any) => ({
  id: label.Key,
  data: label,
  position: { x: 0, y: 0 },
  draggable: false,
  type: "coDesign",
});

export const generateEdge = (
  source: string,
  target: string,
  index: number,
  subIndex: number
) => ({
  id: uuid(),
  source,
  target,
  markerEnd: { type: "arrowclosed", color: "#000" },
  type: "smoothstep",
  interactionWidth: 3,
  animated: false,
  style: {
    stroke: "#4e5157",
    strokeWidth: 2,
    strokeDasharray: "5",
    borderStyle: "dashed",
    borderColor: "#cbd5e0",
    borderWidth: "4px",
  },
  labelStyle: { color: "#4e5157" },
  marker: { color: "#000", border: "5" },
});

export const generateInitialPositions = (
  numItems: any,
  containerWidth: any,
  containerHeight: any
) => {
  const positions = [];
  const horizontalSpacing = 250;
  const verticalSpacing = 200;

  const maxItemsPerRow = Math.floor(containerWidth / horizontalSpacing);
  const numRows = Math.ceil(numItems / maxItemsPerRow);

  let index = 0;
  for (let row = 0; row < numRows; row++) {
    const y = (row + 1) * verticalSpacing;
    const itemsInRow = Math.min(numItems - index, maxItemsPerRow);
    const rowWidth = itemsInRow * horizontalSpacing;
    const startX = (containerWidth - rowWidth) / 2;

    for (let col = 0; col < itemsInRow; col++) {
      const x = startX + col * horizontalSpacing;
      positions.push({ x, y });
      index++;
    }
  }

  return positions;
};

export const parseEdges = (data: any[]) =>
  data.flatMap((element: any, index: any) => {
    if (!element || !element.PARSED_RELATES_TO?.length) return [];

    let targetIds = element.PARSED_RELATES_TO;

    return targetIds.map((targetId: any, subIndex: any) =>
      generateEdge(element.Key, targetId, index, subIndex)
    );
  });

export const parseNodes = (
  data: any[],
  container: {
    width: number;
    height: number;
  }
) => {
  const nodes = data.map((card: any) => generateNode(card));
  const positions = generateInitialPositions(
    nodes.length,
    container.width,
    container.height
  );
  return nodes.map((node, index) => ({
    ...node,
    position: positions[index],
  }));
};
