import { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Background,
  Connection,
  Controls,
  EdgeChange,
  Edge,
  NodeChange,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

// import "./text-updater-node.css";

// const generateRandomPosition = () => ({
//   x: Math.random() * 800,
//   y: Math.random() * 600,
// });

const generateInitialPositions = (
  numItems: any,
  containerWidth: any,
  containerHeight: any
) => {
  const positions = [];
  const horizontalSpacing = 350; // Adjust horizontal spacing between nodes
  const verticalSpacing = 200; // Adjust vertical spacing between nodes

  const maxItemsPerRow = Math.floor(containerWidth / horizontalSpacing);
  const numRows = Math.ceil(numItems / maxItemsPerRow);

  let index = 0;
  for (let row = 0; row < numRows; row++) {
    const y = (row + 1) * (containerHeight / (numRows + 1));
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

const initialEdges = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    markerEnd: { type: "arrow" },
  },
  { id: "1-3", source: "2", target: "4" },
  { id: "1-4", source: "2", target: "5" },
  { id: "1-5", source: "3", target: "5" },
  { id: "1-6", source: "1", target: "3" },
  { id: "1-7", source: "1", target: "5" },
  { id: "1-8", source: "1", target: "6" },
  { id: "1-9", source: "1", target: "4" },
];

const initialNodes = [
  {
    id: "1",
    data: { label: "Hello" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    data: { label: "World" },
    position: { x: 0, y: 0 },
  },
  {
    id: "3",
    data: { label: "karera" },
    position: { x: 0, y: 0 },
  },
  {
    id: "4",
    data: { label: "olivier" },
    position: { x: 0, y: 0 },
  },
  {
    id: "5",
    data: { label: "Nkuru nziza karera" },
    position: { x: 0, y: 0 },
  },
  {
    id: "6",
    data: { label: "susu" },
    position: { x: 0, y: 0 },
  },
];

const Flow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  useEffect(() => {
    const containerWidth = 800; // Width of the container
    const containerHeight = 600; // Height of the container
    const positions = generateInitialPositions(
      initialNodes.length,
      containerWidth,
      containerHeight
    );

    setNodes((prevNodes) =>
      prevNodes.map((node, index) => ({
        ...node,
        position: positions[index],
      }))
    );
  }, []);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection: Edge | Connection) =>
      setEdges((eds) => addEdge(connection, eds)),
    [setEdges]
  );

  return (
    <div style={{ height: "50rem", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Flow;
