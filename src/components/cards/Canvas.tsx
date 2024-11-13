import { parseEdges, parseNodes } from "@/utils/canvas";
import { useCallback, useEffect, useMemo } from "react";
import ReactFlow, { useEdgesState, useNodesState } from "reactflow";
import "reactflow/dist/style.css";
import { NodeCard } from "./Node";



const NodeTypes = {
  coDesign: NodeCard,
};

const CardCanvas = ({ data, blockHeight, columns }: any) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const updateData = useCallback(() => {
    setEdges(parseEdges(data));
    setNodes(
      parseNodes(data, columns)
    );
  }, [data, columns]);

  useEffect(() => {
    updateData();
  }, [updateData]);

  const fitViewConfig = useMemo(() => {
    return {
      maxZoom: 1,
      padding: 0.2,
    };
  }, []);

  return (
    <div
      style={{
        height: `${blockHeight * 6}rem`,
        maxHeight: `${blockHeight * 12.5}rem`,
        
        width: "auto",
        position: "relative",
        zIndex: 20,
        // marginTop: 10,
        padding: 0,
      }}
      className="flex justify-center "
    >

      <ReactFlow
        nodes={nodes}
        nodeTypes={NodeTypes}
        edges={edges}
        fitView
        fitViewOptions={fitViewConfig}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        panOnScroll={false}
        panOnDrag={false}
        zoomOnScroll={false}
        draggable={false}
        preventScrolling={false}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onInit={(instance) => setTimeout(() => instance.fitView(fitViewConfig), 100)}
      ></ReactFlow>
    </div>
  );
};

export default CardCanvas;
