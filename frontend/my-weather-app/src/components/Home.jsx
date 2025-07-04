import React, { useEffect, useState } from 'react';
import WeatherCard from "./WeatherCardComponent/WeatherCard";


const Home = () => {
  const [weatherList, setWeatherList] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
  const fetchWeather = () => {
    fetch('http://localhost:8080/task/get-all')
      .then((res) => res.json())
      .then((data) => {
        setWeatherList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching weather:', error);
        setLoading(false);
      });
  };

  fetchWeather(); 

  // Auto refresh 
  const interval = setInterval(fetchWeather, 30000);
  return () => clearInterval(interval);
}, []);

  

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Weather Dashboard</h1>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {weatherList.map((item, index) => (
            <WeatherCard
              key={index}
              cityName={item.cityName}
              description={item.weatherDescription}
              temperature={item.temperature}
              timestamp={item.timestamp}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
