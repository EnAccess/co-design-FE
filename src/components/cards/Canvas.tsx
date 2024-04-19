import { parseEdges, parseNodes } from "@/utils/canvas";
import { useMemo, useState } from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
import { NodeCard } from "./Node";
import { useSelectedEntries } from "@/hooks/useSelectedEntries";

const CONTAINER_HEIGHT = 800;
const CONTAINER_WIDTH = 1000;
const SINGLE_BLOCK_WIDTH = 3000;

const NodeTypes = {
  coDesign: NodeCard,
};

const CardCanvas = ({ data, blockHeight, columns }: any) => {
  const selectedEntries = useSelectedEntries(data);
  // console.log("dataaaaaaaaaaaaaaaa", selectedEntries);
  const initialEdges = useMemo(
    () => parseEdges(selectedEntries),
    [selectedEntries]
  );
  console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnn", initialEdges);
  const initialNodes = useMemo(
    () =>
      parseNodes(selectedEntries, {
        width: columns > 5 ? SINGLE_BLOCK_WIDTH : CONTAINER_WIDTH,
        height: CONTAINER_HEIGHT,
      }),
    [selectedEntries]
  );

  const [nodes, setNodes] = useState<any[]>(initialNodes);
  const [edges, setEdges] = useState<any[]>(initialEdges);

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
