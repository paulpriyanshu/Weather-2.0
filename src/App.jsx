import { useEffect, useState, useRef } from 'react'
//import BasicInfo from './components/Cards/BasicInfo'

import './App.css'
import Background from './components/Bg/Background'
import BasicInfo from './components/Cards/BasicInfo'
import AdvInfo from './components/Cards/AdvInfo'
import Suggestions from './components/Cards/Suggestions'
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
  const [day,setday]=useState("")
  let [count,setcount]=useState(0)
  const [condition,setcondition]=useState("")

  const [timeData, setTimeData] = useState({ hour: 0, minute: 0, second: 0 });
  // let [hour,sethour]=useState(null)
  // let [min,setmin]=useState(null)
  // let [sec,setsec]=useState(null)
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
    so2:so2,
    day:day,
    condition:condition
    // hour:hour,
    // min:min,
    // sec:sec
    
  }

  const handlekewdown=(e)=>{
    if (e.key ==="Enter") {
      stopLocalTimeInterval()
      weatherdata()
      gettime()

  }

  }
  


   const weatherdata=async()=>{
    
    
    
    
      let weather= await fetch(`http://api.weatherapi.com/v1/current.json?key=6e9cf1a3f144498d8d5180456232509 &q=${cityname}&aqi=yes`,)
      .then(async(weather)=>{
      const weatherjson=await weather.json()

      console.log(weatherjson)
      setsendcityname(weatherjson.location.name+" , ")
      setcountry(weatherjson.location.country)
      settemp("Temperature : "+weatherjson.current.temp_c+" °C"+" / "+weatherjson.current.temp_f+" °F")
      //setpic(weatherjson.condition.icon)
      console.log(weatherjson.location.name)
      setco("CO Amount : "+weatherjson.current.air_quality.co)
      setno2("NO2 Amount : "+weatherjson.current.air_quality.no2)
      seto3("O3 Amount : "+weatherjson.current.air_quality.o3)
      setso2("SO2 Amount : "+weatherjson.current.air_quality.so2)
      setcondition("Clouds : "+weatherjson.current.cloud)
        setair("AIR QUALITY")
        
         
        
        
       
         
         
     
         
    })
     
      
      
      //console.log(titles)
      // setquery(results);
    
   
     
  
    
   }
 

const gettime=async()=>{
  const time=await fetch(`https://api.api-ninjas.com/v1/worldtime?city=${cityname}`,{
    method:"GET",
    headers:{
      "X-Api-Key":"ogeK1Mw8l/GH05zVLPiOYQ==yrEIVTml8tFQA4Qt"
    }
  })
 .then(async(time)=>{

    //clearInterval(increaseid)
    setcount(count++)
    const timedata=await time.json()
    // sethour(parseInt(timeData.hour))
    // setmin(parseInt(timeData.minute))
    // setsec(parseInt(timeData.second))
    setday(timedata.day_of_week)
    setTimeData({
      hour: parseInt(timedata.hour),
      minute: parseInt(timedata.minute),
      second: parseInt(timedata.second)
  });
    //console.log(hour)
    //console.log(hour)
    //console.log(hour+1)
    //console.log(typeof(hour))
    console.log(timedata)

  incrementTime()
// var increaseid=setInterval(incrementTime,1000)

  // if(cityname){
  //   clearInterval(increaseid)
  // }
 
// clearInterval(increaseid)
  //Set interval to increment time every second
  // const intervalId=setInterval(incrementTime, 1000);
  // return () => clearInterval(intervalId);
  
 })
}

const intervals=useRef({})

const incrementTime = () => {
  // Update seconds
  intervals.current=setInterval(() => {
    setTimeData(prevTime => {
      let updatedSecond = prevTime.second + 1;
      let updatedMinute = prevTime.minute;
      let updatedHour = prevTime.hour;
  
      if (updatedSecond === 60) {
          updatedSecond = 0;
          updatedMinute++;
      }
      if (updatedMinute === 60) {
          updatedMinute = 0;
          updatedHour++;
      }
      if (updatedHour === 24) {
          updatedHour = 0;
      }
    // Update state with new time values
    return {
      hour: updatedHour,
      minute: updatedMinute,
      second: updatedSecond
    };
   
    })
  
  }, 1000);
  
 


}
const stopLocalTimeInterval = () => {
  clearInterval(intervals.current);
};







//  useEffect(()=>{
//   gettime()
//  },[weatherdata])
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
    <div className="flex justify-center   relative top-20 z-50">
    <input  type='text' value={cityname} onKeyDown={handlekewdown} onChange={(e)=>setcityname(e.target.value)} placeholder="Search here" className="px-4 py-3 opacity-80 rounded-3xl outline-none w-1/2 "/> 
    </div>
    <div className="flex justify-center items-center  h-screen">
    
  
  <div style={{overflowWrap: 'break-word', wordWrap: 'break-word'}} className=" w-2/4  h-3/4  relative todo-container z-50  opacity-90 rounded-3xl shadow-md  cursor-auto">

        
        <div className='m-5'>
        
            <AdvInfo props={timeData} />
          
       
      </div>
      <div className=" m-5 " >
            <BasicInfo props={props} />
        </div>
      <div className='flex justify-end mr-6'>
        <Suggestions props={props} />
      </div>
</div>
    
    

    
    </div>
   
   
   

  </div>

    
      
     
     
     </>
  )
}

export default App
