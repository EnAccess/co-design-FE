import {
  generateEdge,
  generateInitialPositions,
  generateNode,
} from "@/utils/helpers";
import { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, {
  Background,
  Connection,
  EdgeChange,
  Edge,
  NodeChange,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import { NodeCard } from "./Node";

const CardCanvas = ({ data, blockHeight }: any) => {
  const initialEdges = data.flatMap((element: any, index: any) => {
    if (!element.Extra || element.Extra === null) return [];

    let targetIds = [];
    const match = element.Extra.match(/^RELATES_TO: (.+)$/);
    if (match) {
      targetIds = match[1].split(" | ");
    } else {
      targetIds.push(element.Extra);
    }

    return targetIds.map((targetId: any, subIndex: any) =>
      generateEdge(
        element.Key,
        targetId.startsWith("RELATES_TO: ") ? targetId.substring(12) : targetId,
        index,
        subIndex
      )
    );
  });

  const initialNodes = data.map((card: any) => generateNode(card));

  const [nodes, setNodes] = useState<any[]>(initialNodes);
  const [edges, setEdges] = useState<any[]>(initialEdges);

  const nodeTypes = useMemo(
    () => ({
      coDesign: NodeCard,
    }),
    []
  );
  useEffect(() => {
    const containerWidth = 800;
    const containerHeight = 600;
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
    <div
      style={{
        height: `${blockHeight !== undefined ? blockHeight * 40 : 40}rem`,
        width: "100%",
        position: "relative",
        zIndex: 20,
        margin: 0,
        padding: 0,
      }}
      className="flex justify-center"
    >
      <ReactFlow
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}
        panOnDrag={false}
        zoomOnScroll={false}
        draggable={false}
        preventScrolling={false}
        onInit={(instance) => setTimeout(() => instance.fitView(), 100)}
      >
        <Background
          color="#fff"
          style={{ backgroundColor: "rgb(243 244 246)" }}
        />
      </ReactFlow>
    </div>
  );
};

export default CardCanvas;
