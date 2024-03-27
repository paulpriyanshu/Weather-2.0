import React from 'react'

function Suggestions({props}) {
  // className="relative p-6 text-white z-99"
  return (
    
    <div style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} className="w-1/2 h-1/2 absolute z-50   todo-container bg-slate-300 rounded-3xl  overflow-hidden  shadow-2xl cursor-auto">
       <h1 className='px-5 py-2 text-6xl m-5 text-black-400 font-semibold '>{props.day}</h1>
      <h1 className='px-5 py-3 text-3xl m-5 text-black-400 font-semibold' >{props.condition}</h1>
    </div>
    
    
   
  )
}

export default Suggestions
