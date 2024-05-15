import { Block, Group } from "@/types/interfaces";
import { v4 as uuid } from 'uuid';

export const generateBlock = (parentId: string, name: any, description?: string) => ({
  id: uuid(),
  data: { label: name, description },
  position: { x: 0, y: 0 },
  className: 'border-2 border-dashed border-red-400',
  draggable: false,
  type: 'block',
  style: {
    width: 800,
    height: 1000,
  },
  parentId,
});

export const generateGroup = (name: any, position: any) => ({
  id: uuid(),
  data: { label: name },
  position,
  draggable: false,
  style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 800, height: 1100 },
  type: 'group',
});

export const parseGroups = (groups: Group[], container: { width: number, height: number }) => {

  const positions = generateInitialPositions(
    groups.length,
    container.width,
    container.height,
    container.width,

  );

  const nodes: any[] = [];
  const edges: any[] = [];

  groups.forEach((group, i) => {
    const groupNode = generateGroup(group.title, positions[i]);
    const blocks = parseBlocks(group.blocks, groupNode.id, container);
    nodes.push(groupNode, ...blocks.nodes);
    edges.push(...blocks.edges);
  });
  console.log({ edges, nodes })
  return { edges, nodes };
}


export const parseBlockData = (data: Block, groupId: string, position: any) => {
  const blockNode = {
    ...generateBlock(groupId, data.title, data.description),
    position,
  }
  const nodes = parseNodes(data.entries, {
    width: blockNode.style.width,
    height: blockNode.style.height,
  }).map((node) => ({
    ...node,
    parentId: blockNode.id,
  }));
  return [blockNode, ...nodes];
}

export const parseBlocks = (blocks: Block[], groupId: string, container: { width: number, height: number }, minY = 0) => {
  const positions = generateInitialPositions(
    blocks.length,
    container.width,
    container.height,
    850,
    1100,
    minY
  );
  const edges: any[] = [];
  const nodes: any[] = [];
  blocks.forEach((block, i) => {
    edges.push(...parseEdges(block.entries))
    nodes.push(...parseBlockData(block, groupId, positions[i]))
  })
  return { edges, nodes }
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
  },
  labelStyle: { color: "#4e5157" },
  marker: { color: "#000", border: "5" },
});

export const generateInitialPositions = (
  numItems: any,
  containerWidth: any,
  containerHeight: any,
  horizontalSpacing = 250,
  verticalSpacing = 200,
  minY = 0
) => {
  const positions = [];

  const maxItemsPerRow = Math.floor(containerWidth / horizontalSpacing);
  const numRows = Math.ceil(numItems / maxItemsPerRow);

  let index = 0;
  for (let row = 0; row < numRows; row++) {
    const y = ((row + 1) * verticalSpacing) + minY;
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
