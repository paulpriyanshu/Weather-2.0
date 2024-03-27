import React from 'react'

function BasicInfo({props}) {
  // className="relative p-6 text-white z-99"
  return (
    
    <div style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} className=" w-2/5 h-1/2 absolute  todo-container  bg-slate-300   rounded-3xl  overflow-hidden  shadow-2xl cursor-auto">
      
      <div className="flex flex-col justify-center items-center relative h-96 z-50  ">  
      <div style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} className="w-9/12 h-1/3 todo-container bg-slate-200 rounded-3xl mb-2 overflow-hidden  shadow-2xl cursor-auto">
      <h1 className='px-2 py-3 text-3xl text-black-400 font-semibold'>{props.title+props.description}</h1>
      <h1 className='px-1 py-1 text-xl text-black-400 font-semibold' >{props.temperature}</h1>
      </div>
        
      <div style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} className="w-9/12 h-5/4 todo-container bg-slate-200  top-20 rounded-3xl  overflow-hidden  shadow-2xl cursor-auto">
      <h1 className='px-2 py-1 text-3xl text-black-400 font-semibold ' >{props.air}</h1>
        <h1 className='px-2 py-1 text-l text-black-800 font-semibold' >{props.co}</h1>
        <h1 className='px-2 py-1 text-l text-black-800 font-semibold' >{props.no2}</h1>
        <h1 className='px-2 py-1 text-l text-black-800 font-semibold' >{props.so2}</h1>
        <h1 className='px-2 py-1 text-l text-black-800 font-semibold' >{props.o3}</h1>
        
        </div>
      </div>
      
   
      
       

        
        
    </div>
    
    
   
  )
}

export default BasicInfo
