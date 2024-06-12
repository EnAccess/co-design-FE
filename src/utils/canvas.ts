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
      generateEdge(element.key, targetId, index, subIndex)
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
