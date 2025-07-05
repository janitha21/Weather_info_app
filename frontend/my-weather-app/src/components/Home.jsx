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
    const interval = setInterval(fetchWeather, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
        <h1 className="text-center text-primary fw-bold mb-3 display-5">
          🌍 Weather Dashboard
        </h1>
        <p className="text-center text-muted mb-5 fs-5">
          Real-time weather updates for selected cities, refreshed every 30 seconds.
        </p>

        {loading ? (
          <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row g-4">
            {weatherList.map((item, index) => (
              <div className="col-12 col-sm-6 col-md-4" key={index}>
                <WeatherCard
                  cityName={item.cityName}
                  description={item.weatherDescription}
                  temperature={item.temperature}
                  timestamp={item.timestamp}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
