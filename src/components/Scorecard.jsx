import React from 'react'
import { Plus as IconPlus, Minus as IconMinus } from "lucide-react";

function Scorecard({teamName,teamScore,increaseScore,decreaseScore}) {
  return (
    <>
   
       <div className="w-auto md:w-1/3 my-4 rounded-lg border-4 border-blue-300 bg-white shadow-2xl">
            <h2 className="text-2xl md:text-3xl text-center text-blue-700 py-2 md:py-6">{teamName}</h2>
            <span className="flex justify-center text-4xl md:text-5xl my-6">{teamScore}</span>
            <div className="flex justify-around py-8 ">
              <button className="border-2 border-black rounded-2xl" onClick={decreaseScore}>
                <IconMinus />
              </button>
              <button className="border-2 border-black rounded-2xl" onClick={increaseScore}>
                <IconPlus />
              </button>
            </div>
          </div>
    
    </>
  )
}

export default Scorecard
