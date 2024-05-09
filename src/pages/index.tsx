import Group from "@/components/Group";
import resources from "@/data/resources/advanced-resources";
import { parseEdges } from "@/utils/canvas";
import { useCallback, useMemo } from "react";
import ReactFlow, {
  Connection,
  Edge,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import entries from "../../public/data.json";

// const Canvas = () => {
//   return (
//     <section className="py-10 z-30">
//       {resources.map((data, index) => (
//         <Group key={`advanced-resources-${data.title}-${index}`} data={data} />
//       ))}
//     </section>
//   );
// };
// const NodeTypes = {
//   coDesign: Canvas,
// };
const AdvancedResources = () => {
  // const initialEdges = useMemo(() => parseEdges(entries), [entries]) as any;
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  // const initialNodes = resources.map((data, index) => ({
  //   id: `id-${index}`,
  //   data: data,
  //   position: { x: 0, y: 0 },
  //   type: "coDesign",
  // }));

  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // const onConnect = useCallback((connection: Edge | Connection) => {
  //   setEdges((eds) => addEdge(connection, eds));
  // }, []);

  return (
    // <div className="h-[250rem] w-full relative mt-2.5 p-0 overflow-auto flex justify-center">
    // <ReactFlow
    //   nodes={nodes}
    //   edges={edges}
    //   nodeTypes={NodeTypes}
    //   onNodesChange={onNodesChange}
    //   onEdgesChange={onEdgesChange}
    //   zoomOnPinch={false}
    //   zoomOnDoubleClick={false}
    //   panOnScroll={false}
    //   panOnDrag={false}
    //   zoomOnScroll={false}
    //   draggable={false}
    //   preventScrolling={false}
    //   onConnect={onConnect}
    // >
    <section className="py-10">
      {resources.map((data, index) => (
        <Group key={`advanced-resources-${data.title}-${index}`} data={data} />
      ))}
    </section>
    // </ReactFlow>
    // </div>
  );
};

export default AdvancedResources;
