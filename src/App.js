import React, { useState } from 'react';
import Templete from "./componenets/Templete";
import Greeting from "./componenets/Greeting";
import './componenets/css/style.css';
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const getBackgroundStyle = () => {
    if (!weatherData) return {};
    const weather = weatherData.weather[0].main;
    if (weather === 'Clear') {
      return { backgroundImage:"url(gifs/clear.jpg)"};
    } else if (weather === 'Clouds') {
      return { backgroundImage:"url(gifs/clouds.gif)" ,backgroundSize:"cover"};
    } else if (weather === 'Thunderstorm') {
      return { backgroundImage:"url(gifs/thunderstorm.gif)"  ,backgroundSize:"cover"};
    }else if (weather === 'Rain') {
      return { backgroundImage:"url(gifs/rain.gif)" ,backgroundSize:"cover"};
    } else if (weather === 'Snow') {
      return { backgroundImage:"url(gifs/snow.gif)" ,backgroundSize:"cover"};
    } 
    else {
      return {backgroundImage:"url(gifs/fog.gif)" ,backgroundSize:"cover"};
    }
  }
  return ( <div className='box' style={getBackgroundStyle()}>
    <Greeting />
    <Templete setWeatherData={setWeatherData}/>
  </div>
    
  );
}

export default App;