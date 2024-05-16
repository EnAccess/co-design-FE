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
  // className: "border-2 border-dashed border-red-400 pt-10",
  draggable: false,
  type: "block",
  style: {
    width: 1080,
    height: 1000,
    // backgroundColor: "#f3f4f6",
    borderStyle: "dashed",
    borderColor: "#cbd5e0",
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
    height: height - 50,
    border: "none",
  },
  type: "group",
});

const groupPositions = (i: any, length: any) => {
  const baseRowHeight = 2400;
  let rowHeight = baseRowHeight;
  if (length > 3) {
    rowHeight *= 2;
  }
  const y = 1 + (i % 3) * rowHeight;
  return [{ x: 1, y }, rowHeight];
};

export const parseGroups = (
  groups: Group[],
  container: { width: number; height: number }
) => {
  const nodes: any[] = [];
  const edges: any[] = [];

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
  let x = 10;
  let y = 200;
  const columnWidth = 1120;
  const rowHeight = 1200;
  for (let j = 0; j < i; j++) {
    x += columnWidth;
    if (x >= 2251) {
      x = 10;
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

// export const generateInitialPositions = (
//   numItems: any,
//   containerWidth: any,
//   containerHeight: any,
//   horizontalSpacing = 250,
//   verticalSpacing = 200,
//   minY = 0
// ) => {
//   const positions = [];

//   const maxItemsPerRow = Math.floor(containerWidth / horizontalSpacing);
//   const numRows = Math.ceil(numItems / maxItemsPerRow);

//   let index = 0;
//   for (let row = 0; row < numRows; row++) {
//     const y = (row + 1) * verticalSpacing + minY;
//     const itemsInRow = Math.min(numItems - index, maxItemsPerRow);
//     const rowWidth = itemsInRow * horizontalSpacing;
//     const startX = (containerWidth - rowWidth) / 2;

//     for (let col = 0; col < itemsInRow; col++) {
//       const x = startX + col * horizontalSpacing;
//       positions.push({ x, y });
//       index++;
//     }
//   }

//   return positions;
// };

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
