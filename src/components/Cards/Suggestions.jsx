import React from 'react'

function Suggestions({props}) {
  // className="relative p-6 text-white z-99"

  const result =
    props.aqi >=1 && props.aqi < 50
    ? "Report : GOOD"
    : props.aqi >= 51 && props.aqi < 100
    ? "Report : MODERATE"
    : props.aqi >= 101 && props.aqi < 150
    ? "Report : MODERATELY UNHEALTHY"
    : props.aqi >= 151 && props.aqi < 200
    ? "Report : UNHEALTHY"
    : props.aqi>=201 && props.aqi<300
    ? "Report : VERY UNHEALTHY"
    :props.aqi>300
    ?"Report : HAZARDOUS"  
    :""
  
  return (
    <>
    <div style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} className="w-1/2 h-1/2 absolute z-50   todo-container bg-slate-300 rounded-3xl  overflow-hidden  shadow-2xl cursor-auto">
       <h1 className='px-5 py-2 text-6xl m-5 text-black-400 font-semibold '>{props.day}</h1>
      <h1 className='px-5 py-1 text-2xl m-5 text-black-400 font-semibold' >{props.condition}</h1>
      <h1 className='px-5 py-1 text-2xl m-5 text-black-400 font-semibold' >{props.aqi2}</h1>
      <h1 className='px-5 py-1 text-xl m-5 textblack-400 font-semibold' >{result}</h1>
    </div>
    
    </>
   
  )
}

export default Suggestions
