import { useCallback, useEffect, useMemo, useState } from "react";
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
  useReactFlow,
  Handle,
  Position,
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

const generateNode = (id: string, label: string) => ({
  id,
  data: { label },
  position: { x: 0, y: 0 },
  draggable: false,
  type: "coDesign",
});

const cards = [
  "Hello",
  "World",
  "karera",
  "olivier",
  "Nkuru nziza karera",
  "susu",
  "Green",
  "John Doe",
  "Marketing",
];

const initialNodes = cards.map((card, index) =>
  generateNode((index + 1).toString(), card)
);

const generateEdge = (source: string, target: string) => ({
  id: `${source}-${target}`,
  source,
  target,
  markerEnd: { type: "arrow", color: "#000" },
});

const initialEdges = [
  { source: "2", target: "4" },
  { source: "2", target: "5" },
  { source: "3", target: "5" },
  { source: "1", target: "3" },
  { source: "1", target: "5" },
  { source: "1", target: "6" },
  { source: "1", target: "4" },
].map(({ source, target }) => generateEdge(source, target));

function CustomNode({ data, id }: any) {
  return (
    <>
      <Handle type="target" position={Position.Top} id={id} />
      <div className="flex min-w-32 items-center h-9 justify-center rounded-lg border-2 border-black hover:border-purple-500 bg-level-primary-3 border-level-secondary-3 font-semibold text-xs place-contetext-center cursor-pointer">
        <label htmlFor="text">{data.label}</label>
      </div>
      <Handle type="source" position={Position.Bottom} id={id} />
    </>
  );
}

const Flow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const nodeTypes = useMemo(() => ({ coDesign: CustomNode }), []);

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
    <div style={{ height: "50rem", width: "100%", position: "relative" }}>
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}
        panOnDrag={false}
        zoomOnScroll={false}
        draggable={false}
        preventScrolling={false}
        onInit={(instance) => setTimeout(() => instance.fitView(), 100)}
      >
        {/* <Background /> */}
      </ReactFlow>
    </div>
  );
};

export default Flow;
