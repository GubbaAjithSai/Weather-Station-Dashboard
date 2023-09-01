import React,{useState,useEffect} from "react";
import './css/style.css';

const Templete =  ({ setWeatherData }) => {  
  const [city,setCity]=useState("Hyderabad");
  const [data,setData]=useState(null);
  const [search,setSearch]=useState("");
  const [flag,setFlag]=useState("");

  useEffect(()=>{
    const fetchApi=async ()=>{
      const url="https://api.openweathermap.org/data/2.5/weather?q=" +city +"&units=metric&appid=fb9eb80a828aa9ec15f92dcdc683f40a"
      try {
        const url="https://api.openweathermap.org/data/2.5/weather?q=" +city +"&units=metric&appid=fb9eb80a828aa9ec15f92dcdc683f40a"
        const res=await fetch(url);
        const resJson=await res.json();
        if (resJson.cod === "404" ) {
            setData(null);
            setFlag("City not found")
        }else if(resJson.cod === "404" ){
          setData(null);
          setFlag("Rate limit reached")
        } 
        else {
            setData(resJson);
            setWeatherData(resJson)
        }
    } catch (error) {
        console.error(error);
    }
}
    fetchApi();
  },[city])

  const clicked=()=>{
    setCity(search)
  }

  const handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      clicked();
    }
  }

  return <>
    <div className="container">
        <div className="search">
            <input className="searchbar" type="text" placeholder="Search" onChange={(e)=>{setSearch(e.target.value)}} onKeyDown={handleKeyPress}/>
            
            <button onClick={clicked}>
                <img src="search.png" alt="search" />
            </button>
        </div>
        {!data ? (<div className="nodata"><h2>{flag}</h2></div>):(<div>
          <div className="weather">
            <h2 id="city">{data.name}</h2>
            <h1 id="tem">{data.main.temp} °c</h1>
            <div className="flex">
                <img src={"https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"} alt={data.weather[0].description} className="icon" />
                <p id="description">{data.weather[0].description}</p>
            </div>
            <p id="pressure">Pressure :{data.main.pressure} hPa</p>
            <p id="humidity">Humidity :{data.main.humidity} %</p>
            <p id="wind">Wind speed :{data.wind.speed} m/s</p>
        </div>
        </div>)}
    </div>
  </>
};

export default Templete;