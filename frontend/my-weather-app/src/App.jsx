import './App.css';
import Home from './components/Home';
import Dashboard from './components/dashboard/Dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>WeatherNow 🌦️</h1>
        <p>Powered by OpenWeatherMap API</p>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} WeatherNow. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
