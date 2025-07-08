import './App.css';
import Home from './components/Home';

import Dashboard from './components/dashboard/Dashboard';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar/NavBar';
import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const location = useLocation();
  const showLayout = location.pathname === "/home";
  const [searchCity, setSearchCity] = useState('');
   const { isAuthenticated, isLoading } = useAuth0();

    if (!isLoading && !isAuthenticated && location.pathname === "/home") {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="app-container">
      {showLayout && (
        <header className="app-header">
          <h1>WeatherNow 🌦️</h1>
          <p>Powered by OpenWeatherMap API</p>
        </header>
      )}

      {showLayout && (
        <Navbar onSearch={setSearchCity} />
      )}

      <main className="app-main">
        <Routes>
          <Route path="/home" element={<Home searchCity={searchCity} />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      {showLayout && (
        <footer className="app-footer">
          <p>&copy; {new Date().getFullYear()} WeatherNow. All rights reserved.</p>
        </footer>
      )}
    </div>
  );
}

export default App;
