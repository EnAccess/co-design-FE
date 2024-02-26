import {useCallback, useState} from "react";
import Reactflow, { applyEdgeChanges, applyNodeChanges } from "reactflow";
import "reactflow/dist/style.css";
import { Header } from "@/components/Header";
import ParentCustomNode from "@/components/ui/ParentCustomNode";
const initialNodes = [
    {
        id: '1',
        type: 'header',
        position: {x: 0, y: 0},
        data: {},
    },
    {
        id: '2',
        type: 'customParent',
        position: {x: 200, y: 300},
        data: {width: 700, height: 500, title: 'BASIC TOOLS', description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the'},
    },
    {
        id: '3',
        type: 'customParent',
        position: {x: 1200, y: 250},
        data: {width: 400, height: 400, title: 'Technical Approaches TOOLS', description: 'Technical Approaches engage with energy systems and services through a technical lens. We have chosen to only include technical approaches which also integrate the wider socio-cultural, environmental, and financial context'},
    },
    {
        id: '4',
        type: 'customParent',
        position: {x: 1150, y: 700},
        data: {width: 600, height: 400, title: 'BASIC Multidisciplinary Approaches', description: 'Multidisciplinary approaches blend different disciplines to approach problems from multiple perspectives'},
    },
    {
        id: '5',
        type: 'customParent',
        position: {x: 1200, y: 1150},
        data: {width: 500, height: 400, title: 'BASIC Multidisciplinary Approaches', description: 'Multidisciplinary approaches blend different disciplines to approach problems from multiple perspectives'},
    }, 
    {
        id: '6',
        type: 'customParent',
        position: {x: 100, y: 1000},
        data: {width: 600, height: 400, title: 'BASIC Behaviour Change Approaches Approaches', description: 'BCA’s look to understand and unlock the how, why, and when of energy system and service adoption from an end-user or individual perspective.'},
    },
    {
        id: '7',
        type: 'customParent',
        position: {x: 500, y: 1500},
        data: {width: 600, height: 300, title: 'BASIC Human-Centered Design & Design Thinking', description: 'Human-Centered Design & Design Thinking combine to produce a problem solving methodology which captures the wishes of a centralised user group and encourages significant ideation.'},
    },

]

const initialEdges = [
    {
        id: 'node3->node-2', source: '3', target: '2', type: 'step'
    },
    {
        id: 'node2->node-7', source: '2', target: '7', type: 'step'
    },
    {
        id: 'node3->node-7', source: '3', target: '7', type: 'step'
    }
]

const nodeTypes = {
    header: Header,
    customParent: ParentCustomNode
}
const Tools = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const onNodesChanges = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), [setNodes]);
    const onEdgesChanges = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),[setEdges]);
  return(
    <div style={{width: 1900, height: 1900}}>
   <Reactflow nodeTypes = {nodeTypes} nodes={nodes} onNodesChange={onNodesChanges} edges={edges} onEdgesChange={onEdgesChanges}>
  </Reactflow>
    </div>
  )
}

export default Tools