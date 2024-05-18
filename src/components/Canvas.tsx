import { parseGroups } from "@/utils/canvas";
import { useCallback, useEffect, useMemo } from "react";
import ReactFlow, { useEdgesState, useNodesState } from "reactflow";
import "reactflow/dist/style.css";
import { NodeCard } from "./cards/Node";
import BlockCard from "./cards/Block";
import GroupCard from "./cards/Group";

const NodeTypes = {
  coDesign: NodeCard,
  block: BlockCard,
  group: GroupCard,
};

const Canvas = ({ data, blockHeight }: any) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const getWindowSize = () => {
    if (typeof window === "undefined") return { width: 1000, height: 800 };
    return { width: window.innerWidth, height: window.innerHeight };
  };

  const { initialEdges, initialNodes } = useMemo(() => {
    const { width, height } = getWindowSize();
    const output = parseGroups(data, {
      width,
      height,
    });
    return {
      initialEdges: output.edges,
      initialNodes: output.nodes,
    };
  }, [data]);

  const updateData = useCallback(() => {
    setEdges(initialEdges);
    setNodes(initialNodes);
  }, [initialEdges, initialNodes]);

  useEffect(() => {
    updateData();
  }, [updateData]);

  return (
    <div
      style={{
        height: `${blockHeight * 32}rem`,
        width: "auto",
        position: "relative",
        zIndex: 20,
        marginTop: 10,
        padding: 0,
      }}
      className="flex justify-center"
    >
      <ReactFlow
        nodes={nodes}
        nodeTypes={NodeTypes}
        edges={edges}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}
        panOnDrag={false}
        zoomOnScroll={false}
        draggable={false}
        preventScrolling={false}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
      ></ReactFlow>
    </div>
  );
};

export default Canvas;
