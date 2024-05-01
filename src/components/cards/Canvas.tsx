import { parseEdges, parseNodes } from "@/utils/canvas";
import { useMemo } from "react";
import ReactFlow, { ReactFlowProvider, useReactFlow } from "reactflow";
import "reactflow/dist/style.css";
import Group from "@/components/Group";
import entries from "../../../public/data.json";

const CONTAINER_HEIGHT = 800;
const CONTAINER_WIDTH = 1000;
const SINGLE_BLOCK_WIDTH = 3000;

const NodeTypes = {
  coDesign: Group,
};

const CardCanvas = ({ data }: { data: any }) => {
  const edges = useMemo(() => parseEdges(entries), [entries]);
  const nodes = data;
  console.log(nodes);
  // <ReactFlowProvider>
  <div
    style={{
      height: "100%",
      width: "100%",
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
    />
  </div>;
  // </ReactFlowProvider>;
};

export default CardCanvas;
