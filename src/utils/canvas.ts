import { CANVAS_CONTAINER_WIDTH, CANVAS_HORIZONTAL_SPACING, CANVAS_VERTICAL_SPACING } from "@/constants";
import { Entry } from "@/types/interfaces";
import groupBy from "lodash.groupby";

export const generateNode = (label: any) => ({
  id: label.key,
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
  id: `${source}-${target}-${index}-${subIndex}`,
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
  numItems: number,
  maxColumns = 4,
  lastY: number = 0,
) => {
  const positions = [];


  const initialRow = lastY ? Math.floor(lastY / CANVAS_VERTICAL_SPACING) : 0;

  const maxItemsPerRow = maxColumns;
  const numRows = Math.ceil(numItems / maxItemsPerRow);

  let index = 0;
  for (let row = 0; row < numRows; row++) {
    const y = (initialRow + row + 1) * CANVAS_VERTICAL_SPACING;
    const itemsInRow = Math.min(numItems - index, maxItemsPerRow);
    const rowWidth = itemsInRow * CANVAS_HORIZONTAL_SPACING;
    const startX = (CANVAS_CONTAINER_WIDTH - rowWidth) / 2;

    for (let col = 0; col < itemsInRow; col++) {
      const x = startX + col * CANVAS_HORIZONTAL_SPACING;
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
      generateEdge(element.key, targetId, index, subIndex)
    );
  });

export const parseNodes = (
  data: any[],
  maxColumns = 4
) => {
  const groupLevels = groupBy(data, "coDesignLevel");

  const list: any[] = [];

  let lastY = 0;

  Object.keys(groupLevels).sort((a: string | number, b: string | number) => Number(b) - Number(a)).forEach((key) => {
    const group = groupLevels[key];
    const positions = generateInitialPositions(
      group.length,
      maxColumns,
      lastY,
    );
    const nodes = group.map((card: any) => generateNode(card)).map((node, index) => ({
      ...node,
      position: positions[index],
    }));
    list.push(...nodes);
    lastY = positions[positions.length - 1]?.y || 0;
  });

  return list;
};

export const calculateRowAndColNumber = (entries: Entry[], maxColumns = 4) =>{
  const nodes = parseNodes(entries, maxColumns);

  const positions = nodes.map((node) => node.position);
  const rows = Object.keys(groupBy(positions, "y")).length;
  const columns = Object.keys(groupBy(positions, "x")).length;

  return {
    rows,
    columns: Math.min(columns, maxColumns),
  }
}

