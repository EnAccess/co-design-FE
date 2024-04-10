

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
import { CustomNode } from "./CustomNode";
import { generateEdge, generateNode, generateInitialPositions } from "@/utils/helper";
  
  const InformationCards = ({ Data }: any) => {
    const initialEdges = Data.flatMap((element: any, index: any) => {
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
  
    const initialNodes = Data.map((card: any) => generateNode(card));
  
    const [nodes, setNodes] = useState<any[]>(initialNodes);
    const [edges, setEdges] = useState<any[]>(initialEdges);
  
    const nodeTypes = useMemo(
      () => ({
        coDesign: CustomNode,
      }),
      []
    );
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
      <div
        style={{
          height: "100rem",
          width: "100%",
          position: "relative",
          zIndex: 20,
        }}
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
  
  export default InformationCards;