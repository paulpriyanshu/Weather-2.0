import { useEffect, useState } from 'react'
//import BasicInfo from './components/Cards/BasicInfo'

import './App.css'
import Background from './components/Bg/Background'
import BasicInfo from './components/Cards/BasicInfo'
import AdvInfo from './components/Cards/AdvInfo'
//import Container from './components/Container/Container'

function App() {
  const [cityname, setcityname]=useState("")
  const [sendcityname, setsendcityname]=useState("")
  const [country, setcountry] = useState("")
  const [temp,settemp]=useState("")
  const [time,settime]=useState("")
  const [co,setco]=useState("")
  const [no2,setno2]=useState("")
  const [o3,seto3]=useState("")
  const [so2,setso2]=useState("")
  const [air,setair]=useState("")
  //setsendcityname(cityname)
  let props={
    title:sendcityname,
    description:country,
    temperature:temp,
    time:time,
    air:air,
    co:co,
    no2:no2,
    o3:o3,
    so2:so2
    
  }


   const weatherdata=async(e)=>{
    
    
    
    if (e.key ==="Enter") {
      let weather= await fetch(`http://api.weatherapi.com/v1/current.json?key=6e9cf1a3f144498d8d5180456232509 &q=${cityname}&aqi=yes`,)
      .then(async(weather)=>{
      const weatherjson=await weather.json()

      console.log(weatherjson)
      setsendcityname(weatherjson.location.name+" , ")
      setcountry(weatherjson.location.country)
      settemp("Temperature : "+weatherjson.current.temp_c+" °C"+" / "+weatherjson.current.temp_f+" °F")
     
      console.log(weatherjson.location.name)
      setco("CO Amount : "+weatherjson.current.air_quality.co)
      setno2("NO2 Amount : "+weatherjson.current.air_quality.no2)
      seto3("O3 Amount : "+weatherjson.current.air_quality.o3)
      setso2("SO2 Amount : "+weatherjson.current.air_quality.so2)
      
        setair("AIR QUALITY")
       
          const time=await fetch(`https://api.api-ninjas.com/v1/worldtime?city=${cityname}`,{
            method:"GET",
            headers:{
              "X-Api-Key":"h2E9syL0K2QpZXryrvPu0A==pSv3PcGw6FJF9nkV"
            }
          })
         .then(async(time)=>{
          
            const timedata=await time.json()
            settime(timedata.datetime)
            console.log(timedata)
         })
         
     
    
    })
     
      
      
      //console.log(titles)
      // setquery(results);
    }
     
  
    
   }
 
    //setInterval(gettime,100);
  //  useEffect(()=>{
  //   setcountry("");
  //   setcityname("")
  //   settemp("")
  //  },[])
       
   
   

  return (

  
    <>
  <div>
  <Background/>
    {/* <BasicInfo props={props}/> */}
    <div className="flex justify-center items-center h-screen">
    <div style={{width:1500,height:1000,overflowWrap: 'break-word', wordWrap: 'break-word'}} className="relative todo-container z-50 rounded-3xl shadow-md overflow-hidden cursor-auto">
    <div className="flex  justify-center m-5">
    <input  type='text' value={cityname} onKeyDown={weatherdata} onChange={(e)=>setcityname(e.target.value)} placeholder="Search here" className="px-4 py-3 opacity-80 rounded-3xl outline-none w-1/2 "/> 
    </div>
    <div className="flex flex-wrap ">
    <div className='m-10 opacity-70 border border-blue-400'>
    <AdvInfo props={props}/>
    </div>
    
   
    
    <div className="m-10 absolute right-1/2 opacity-70 ">
    <BasicInfo props={props}/>
    </div>
    </div>
    
    
    
    </div>
    </div>
   
   
   

  </div>

    
      
     
     
     </>
  )
}

export default App
