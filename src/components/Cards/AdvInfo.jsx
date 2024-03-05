import React from 'react'

function AdvInfo({props}) {
  // className="relative p-6 text-white z-99"
  return (
    <div className="flex justify-center h-screen m-2  absolute left-10 z-50">
    <div style={{width:500,height:200,overflowWrap: 'break-word', wordWrap: 'break-word'}} className=" todo-container bg-blue-400 border border-blue-600 rounded-3xl shadow-2xl overflow-hidden cursor-auto">
        <div className="flex justify-center m-5">
        <h1 className='px-10 py-5 text-4xl text-black-400 border border-blue-600  font-semibold'>{props.time}</h1>
        </div>
        
        {/* <h1 className='px-10 py-5 text-xl text-black-400 font-semibold' >{props.temperature}</h1> */}

    </div>
    </div>
    
   
  )
}

export default AdvInfo
