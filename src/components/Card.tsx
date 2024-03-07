import React from 'react'

const Card = ({text}: any) => {
  return (
    <div className="min-h-16 p-4 bg-pink-200 flex justify-center items-center" >
              <p className="text-xs text-center">{text}</p>
          </div>
  )
}

export default Card