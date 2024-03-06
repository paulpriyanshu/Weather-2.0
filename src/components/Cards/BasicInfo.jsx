import React from 'react'

function BasicInfo({props}) {
  // className="relative p-6 text-white z-99"
  return (
    <div className="flex justify-center h-screen m-2  absolute left-5 z-50">
    <div style={{width:600,height:700,overflowWrap: 'break-word', wordWrap: 'break-word'}} className=" todo-container bg-blue-400 rounded-3xl  overflow-hidden  shadow-2xl cursor-auto">
      
    <div className="flex flex-col relative left-20 top-10">  
      <div style={{width:400,height:200,overflowWrap: 'break-word', wordWrap: 'break-word'}} className="todo-container   bg-blue-300 rounded-3xl mb-5 overflow-hidden  shadow-2xl cursor-auto">
      <h1 className='px-5 py-5 text-3xl text-black-400 font-semibold'>{props.title+props.description}</h1>
      <h1 className='px-5 py-3 text-xl text-black-400 font-semibold' >{props.temperature}</h1>
      </div>
        
      <div style={{width:400,height:300,overflowWrap: 'break-word', wordWrap: 'break-word'}} className="todo-container bg-blue-300   top-20 rounded-3xl  overflow-hidden  shadow-2xl cursor-auto">
      <h1 className='px-10 py-3 text-3xl text-black-400 font-semibold' >{props.air}</h1>
        <h1 className='px-10 py-1 text-l text-black-800 font-semibold' >{props.co}</h1>
        <h1 className='px-10 py-1 text-l text-black-800 font-semibold' >{props.no2}</h1>
        <h1 className='px-10 py-1 text-l text-black-800 font-semibold' >{props.so2}</h1>
        <h1 className='px-10 py-1 text-l text-black-800 font-semibold' >{props.o3}</h1>
        
        </div>
      </div>
      
       

        
        
    </div>
    </div>
    
   
  )
}

export default BasicInfo
