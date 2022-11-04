import React, { useEffect, useState } from 'react';
import './App.css';

interface WeatherInformation {
  summary: string
}

function App() {
  const [weatherData, setWeatherData] = useState<WeatherInformation[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("https://localhost:7187/api/WeatherForecast");
      const weatherResults = await response.json();
      setWeatherData(weatherResults)
    }
    getData();

  }, []);


  return (
    <div className="App">
      <h1>There are {weatherData.length} reports</h1>
      <ul>
        {weatherData.map(w => 
        <li>{w.summary}</li>
      )}
      </ul>
      
    </div>
  );
}

export default App;
