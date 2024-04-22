"use client";
import { parseEdges, parseNodes } from "@/utils/canvas";
import { useEffect, useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { NodeCard } from "./Node";
import { useSelectedEntries } from "@/hooks/useFilter";

const CONTAINER_HEIGHT = 800;
const CONTAINER_WIDTH = 1000;
const SINGLE_BLOCK_WIDTH = 3000;

const NodeTypes = {
  coDesign: NodeCard,
};

const CardCanvas = ({ data, blockHeight, columns }: any) => {
  const selectedEntries = useSelectedEntries(data);
  const [nodes, setNodes] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);
  useEffect(() => {
    setNodes(
      parseNodes(selectedEntries, {
        width: columns > 5 ? SINGLE_BLOCK_WIDTH : CONTAINER_WIDTH,
        height: CONTAINER_HEIGHT,
      })
    );
    setEdges(parseEdges(selectedEntries));
  }, [selectedEntries, columns]);

  return (
    <div
      style={{
        height: `${blockHeight * 20}rem`,
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
        fitView
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}
        panOnDrag={false}
        zoomOnScroll={false}
        draggable={false}
        preventScrolling={false}
        onInit={(instance) => setTimeout(() => instance.fitView(), 100)}
      ></ReactFlow>
    </div>
  );
};

export default CardCanvas;
