import React, { useEffect, useState } from 'react';
import WeatherCard from "./WeatherCardComponent/WeatherCard";
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Home = ({ searchCity }) => {
  const [weatherList, setWeatherList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {

    console.log("Auth:", isAuthenticated, "Loading:", isLoading);

    if (isLoading) return;

    if (!isLoading && !isAuthenticated && location.pathname === "/home") {
      console.log("work");

      return <Navigate to="/dashboard" replace />;
    }


    const fetchWeather = () => {
      const api = "http://localhost:8080/city/get-all";

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
          alert('Access denied or invalid user. Redirecting to dashboard.');
          navigate('/dashboard');
        });
    };

    fetchWeather();

    const interval = setInterval(fetchWeather, 300000);
    return () => clearInterval(interval);
  }, [isAuthenticated, isLoading, getAccessTokenSilently, navigate]);

  const filteredWeatherList = weatherList.filter(item =>
    searchCity
      ? item.cityName.toLowerCase().includes(searchCity.toLowerCase())
      : true
  );

  return (
    <div className="min-vh-100 bg-light py-5">
      <div className="container">
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
