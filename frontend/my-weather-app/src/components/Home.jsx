import React, { useEffect, useState } from 'react';
import WeatherCard from "./WeatherCardComponent/WeatherCard";
import { useAuth0 } from '@auth0/auth0-react';

const Home = ({ searchCity }) => {
  const [weatherList, setWeatherList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (isLoading || !isAuthenticated) return;

    const fetchWeather = () => {
      const api = "http://localhost:8080/task/get-all";

      getAccessTokenSilently()
        .then((token) => {
          return fetch(api, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        })
        .then((res) => {
          if (!res.ok) {
            throw new Error('Unauthorized or failed to fetch data');
          }
          return res.json();
        })
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
  }, [isAuthenticated, isLoading, getAccessTokenSilently]);

  const filteredWeatherList = weatherList.filter(item =>
    searchCity
      ? item.cityName.toLowerCase().includes(searchCity.toLowerCase())
      : true
  );

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
          <>
            {filteredWeatherList.length === 0 ? (
              <p className="text-center text-danger">No results found for "{searchCity}"</p>
            ) : (
              <div className="row g-4">
                {filteredWeatherList.map((item, index) => (
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
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
