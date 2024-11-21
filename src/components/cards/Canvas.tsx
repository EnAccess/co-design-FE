import { parseEdges, parseNodes } from "@/utils/canvas";
import { useCallback, useEffect, useLayoutEffect, useMemo } from "react";
import '@xyflow/react/dist/style.css';
 
import { NodeCard } from "./Node";


import {
  Background,
  ReactFlow,
  ReactFlowProvider,
  addEdge,
  Panel,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from '@xyflow/react';

import ELK from 'elkjs/lib/elk.bundled.js';

const elk = new ELK();

const elkOptions = {
  'elk.algorithm': 'layered',
  'elk.layered.spacing.nodeNodeBetweenLayers': '100',
  'elk.spacing.nodeNode': '80',
};
 

const NodeTypes = {
  coDesign: NodeCard,
};

const getLayoutedElements = (nodes: any, edges: any, options = {}) => {
  const filteredEdges = edges.filter((edge) => nodes.find((node) => node.id === edge.source)).filter((edge) => nodes.find((node) => node.id === edge.target))
  const graph = {
    id: 'root',
    layoutOptions: options,
    children: nodes.map((node) => ({
      ...node,
      targetPosition:  'top',
      sourcePosition: 'bottom',
      width: 300,
      height: 150,
    })),
    edges: filteredEdges,
  };
 
  return elk
    .layout(graph)
    .then((layoutedGraph: any) => ({
      nodes: layoutedGraph.children.map((node: any) => ({
        ...node,
        position: { x: node.x, y: node.y },
      })),
 
      edges: layoutedGraph.edges,
    }))
    .catch(console.error);
};
 


const LayoutFlow = ({ data, blockHeight, columns }: any) => {
  const [nodes, setNodes, onNodesChange] = useNodesState<any>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<any>([]);



  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [],
  );
  const onLayout = useCallback(
    ({direction, useInitialNodes = false }: any) => {
      const ns = (useInitialNodes ? parseNodes(data, columns) : nodes) || [];
      const es = (useInitialNodes ? parseEdges(data) : edges) || [];
 
      console.log(ns, es)

      getLayoutedElements(ns, es).then(
        ({ nodes: layoutedNodes, edges: layoutedEdges }: any) => {
          setNodes(layoutedNodes);
          setEdges(layoutedEdges);
 
        },
      );
    },
    [nodes, edges, data],
  );
 
  useLayoutEffect(() => {
    onLayout({ direction: 'DOWN', useInitialNodes: true });
  }, [data]);



  const fitViewConfig = useMemo(() => {
    return {
      maxZoom: 1,
      padding: 0.2,
    };
  }, []);

  return (
    <div
      style={{
        height: `${blockHeight * 15.5}rem`,
        maxHeight: `${blockHeight * 15.5}rem`,
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

const CardCanvas = ({ data, blockHeight, columns }: any) => (
  <ReactFlowProvider>
    <LayoutFlow data={data} blockHeight={blockHeight} columns={columns} />
  </ReactFlowProvider>
);


export default CardCanvas
