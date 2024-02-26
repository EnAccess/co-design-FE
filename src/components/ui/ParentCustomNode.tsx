import React from 'react'
import { Position, Handle } from "reactflow";

export type NodeProps<T = any> = {
    id: string;
    data: T;
    dragHandle?: boolean;
    type?: string;
    selected?: boolean;
    isConnectable?: boolean;
    zIndex?: number;
    xPos: number;
    yPos: number;
    dragging: boolean;
    targetPosition?: Position;
    sourcePosition?: Position;
  };
const ParentCustomNode = ({data, isConnectable}: NodeProps) => {
  return (
    <div style={{width: data.width, height: data.height}} className='bg-gray-100 p-2 border-2 border-gray-400 border-dashed rounded-sm'>
        <Handle type="source" position={Position.Bottom} style={{width: 10, height: 10}} onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}/>
         <Handle type="target" position={Position.Top} style={{width: 10, height: 10}} onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}/>
    
        <div className='bg-yellow-300 flex justify-between items-center p-2'>
            <div className='w-1/2'>
                <h1>{data.title}</h1>
            </div>
            <div className='w-1/2'>
                <p className='text-xs text-center'>{data.description}</p>
            </div>

        </div>
    </div>
  )
}

export default ParentCustomNode