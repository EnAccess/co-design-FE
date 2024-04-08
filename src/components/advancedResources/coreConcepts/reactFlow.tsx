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
  Handle,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import { generateInitialPositions } from "../../../utils/helpers";
import Data from "../../../../public/output.json";
import { Entries } from "@/types/interfaces";
import Star from "@/components/icons/Star";
import classNames from "classnames";

const systemsApproachesToEnergyAccess = Data.filter((entry) =>
  entry.PARSED_MANUAL_TAGS?.THEME?.includes(
    "Systems Approaches to Energy Access"
  )
) as Entries;

const initialEdges = systemsApproachesToEnergyAccess.flatMap(
  (element, index) => {
    if (!element.Extra || element.Extra === null) return [];

    let targetIds = [];
    const match = element.Extra.match(/^RELATES_TO: (.+)$/);
    if (match) {
      targetIds = match[1].split(" | ");
    } else {
      targetIds.push(element.Extra);
    }

    return targetIds.map((targetId, i) => ({
      id: `${element.Key}${index}${i}`,
      source: element.Key,
      target: targetId.startsWith("RELATES_TO: ")
        ? targetId.substring(12)
        : targetId,
      markerEnd: { type: "arrow" },
    }));
  }
);
const generateNode = (label: any) => ({
  id: label.Key,
  data: label,
  position: { x: 0, y: 0 },
  draggable: false,
  type: "coDesign",
});

function CustomNode({ data, id }: any) {
  id = data.Key;
  const level = Array.isArray(data.PARSED_MANUAL_TAGS?.CO_DESIGN_LEVEL)
    ? data.PARSED_MANUAL_TAGS?.CO_DESIGN_LEVEL[0]
    : data.PARSED_MANUAL_TAGS?.CO_DESIGN_LEVEL;
  const bgColor: any = classNames({
    "bg-level-primary-0 border-level-secondary-0": level == 0,
    "bg-level-primary-1 border-level-secondary-1": level == 1,
    "bg-level-primary-2 border-level-secondary-2": level == 2,
    "bg-level-primary-3 border-level-secondary-3": level == 3,
  });
  return (
    <div className="group cursor-pointer">
      <Handle type="target" position={Position.Top} id={id} />

      <div
        className={`py-4 px-2 text-sm w-52 rounded-md border-solid border-2 hover:border-4 box-content hover:relative hover:border-purple-500 ${bgColor}`}
      >
        <div className="relative">
          {data.Title}
          {data.PARSED_MANUAL_TAGS?.ACCESS === "Institutional Access" ? (
            <div className="absolute -bottom-5 -right-5">
              <Star />
            </div>
          ) : (
            ""
          )}
          <div className="absolute hidden group-hover:block bg-white border p-4 mt-2 z-80">
            <p>Extra: {data.Extra}</p>
            <p>{data.Manual_Tags}</p>
          </div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} id={id} />
    </div>
  );
}

const initialNodes = systemsApproachesToEnergyAccess.map((card) => {
  return generateNode(card);
});
const Flow = () => {
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
        {/* <Controls  /> */}
      </ReactFlow>
    </div>
  );
};

export default Flow;
