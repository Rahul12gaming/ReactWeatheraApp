import axios from "axios"
import { useEffect, useState } from "react"
import img from '../assest/icons8-loading-circle.gif'

export const Home=()=>
{
    const [city,setCity]=useState('delhi')
    const [items,setItem]=useState({
        loading:false,
        data:{},
        erroe:false
    })
   

   const load=async(query='delhi')=>{
   
   if(!city)
   {
        alert('enter city first')
   }
   else
   {
    setItem({...items,loading:true})
    const res=await axios.get('https://api.openweathermap.org/data/2.5/weather',
    {
        params:{
            q:query,
            units:'metric',
            appid:'26f479b44290dfc68c7ab8354f3f17b8'
        }
    })
    console.log(res)
    setItem({data:(res.data),loading:false,error:false})
    console.log(items)
    setCity('')
   }
   
    // const res=await axios.get(`http://api.weatherapi.com/v1/current.json?key=ff0698769d7144d9803140248230907&q=${city}&aqi=no`)
    // console.log(res)
    // setItem({data:(res.data),loading:false,error:false})
    // setCity('')
    
  
}
  useEffect(()=>{
    load()
  },[])
    return (
        <>
        
        {items && items.data && items.data.main && (
            <div className="container">
                <div className="inner-container">
                    <span><input value={city} className="input" type='text' required onChange={(e)=>{
                        setCity(e.target.value)
                    }}/>
                    </span>
                </div>
                <button className="btn" onClick={()=>{
                    load(city)
                }}>search</button>
                 <div className="weather-content">
                    <p style={{margin:'0px',fontSize:'32px',fontWeight:600}}>{items.data.name}</p>
                    <p style={{margin:'0px',fontSize:'16px',color:'gray',fontWeight:700}}> {items.data.sys.country}</p>
                    <img src={`https://openweathermap.org/img/wn/${items.data.weather[0].icon}@2x.png`} className="icon"/>
                    <div>
                        <p style={{margin:'0px',fontSize:'52px',fontWeight:600}}>{Math.round(items.data.main.temp)} <sup><span className="degree"><sup>°</sup>C | <sup>°</sup>F</span></sup></p>
                        <p style={{margin:'0px',color:'gray',fontSize:'12px'}}>Preceptition : 20%</p>
                        <p style={{margin:'0px',color:'gray',fontSize:'12px'}}>Humidity: {items.data.main.humidity}</p>
                        <p style={{margin:'0px',color:'gray',fontSize:'12px'}}>Wind : {items.data.wind.speed}Km/hr</p>
                    </div>
                </div>
                
            </div>
        )}
        </>
    )
}




