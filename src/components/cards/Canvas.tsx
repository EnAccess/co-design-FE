import { parseEdges, parseNodes } from "@/utils/canvas";
import { useCallback, useEffect, useMemo, useState } from "react";
import ReactFlow, { useEdgesState, useNodesState } from "reactflow";
import "reactflow/dist/style.css";
import { NodeCard } from "./Node";
// import entries from "../../../public/data.json";
import { themes } from "@/data/resources/themes";
import Block from "../Block";
import Group from "@/data/resources/advanced-resources";
import Header from "./Header";
import classNames from "classnames";

const CONTAINER_HEIGHT = 800;
const CONTAINER_WIDTH = 2800;
const SINGLE_BLOCK_WIDTH = 3000;

const NodeTypes = {
  coDesign: NodeCard,
};
const BlockTypes = {
  coDesign: Block,
};
const GroupTypes = {
  coDesign: Group,
};
const entries = themes.map((theme) => theme.entries).flat();
const CardCanvas = ({ blockHeight = 6, columns = 3 }: any) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const updateData = useCallback(() => {
    setEdges(parseEdges(entries));
    setNodes(
      parseNodes(entries, {
        width: columns > 5 ? SINGLE_BLOCK_WIDTH : CONTAINER_WIDTH,
        height: CONTAINER_HEIGHT,
      })
    );
  }, [entries, columns]);

  const entr = [
    ...nodes,
    {
      id: "2a",
      data: {
        label: <Header title="karera" description="karera" />,
      },
      position: { x: 10, y: 50 },
      style: {
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        width: 980,
        height: CONTAINER_HEIGHT,
      },
    },
    {
      id: "2b",
      data: {
        label: <Header title="karera" description="karera" minified={false} />,
      },
      position: { x: 1020, y: 50 },
      style: {
        backgroundColor: "#f3f4f6",
        borderStyle: "dashed",
        borderColor: "#cbd5e0",
        borderWidth: "4px",
        width: 980,
        height: CONTAINER_HEIGHT,
      },
    },
    {
      id: "2c",
      data: {
        label: <Header title="karera" description="karera" />,
      },
      position: { x: 2050, y: 50 },
      style: {
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        width: 980,
        height: CONTAINER_HEIGHT,
      },
    },
  ];
  useEffect(() => {
    updateData();
  }, [updateData]);

  return (
    <div
      style={{
        height: `${blockHeight * 20}rem`,
        width: "100%",
        position: "relative",
        zIndex: 20,
        marginTop: 10,
        padding: 0,
      }}
      className="flex justify-center"
    >
      <ReactFlow
        nodes={entr}
        nodeTypes={{ ...NodeTypes }}
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

export default CardCanvas;
