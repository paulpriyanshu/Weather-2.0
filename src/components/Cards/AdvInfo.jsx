import React from 'react'

function AdvInfo({props}) {
  // className="relative p-6 text-white z-99"
  return (
   
    <div style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} className=" w-full h-50 flex   justify-center todo-container rounded-3xl shadow-2xl overflow-hidden cursor-auto">
        <div className="flex justify-center m-5">
        <h1 className='px-2 py-5 text-9xl text-white font-semibold m-1'>{props.hour+" : "}</h1>
        <h1 className='px-2 py-5 text-9xl text-white font-semibold m-1'>{props.minute+" : "}</h1>
        <h1 className='px-2 py-5 text-9xl text-white font-semibold m-1'>{props.second}</h1>
        </div>
        
        {/* <h1 className='px-10 py-5 text-xl text-white font-semibold' >{props.temperature}</h1> */}

    </div>
  
    
   
  )
}

export default AdvInfo
