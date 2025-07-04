import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="app-container">
      
      <header className="app-header">
        <h1>WeatherNow 🌦️</h1>
        <p>Powered by OpenWeatherMap API</p>
      </header>

    
      <main className="app-main">
        <Home />
      </main>

     
      <footer className="app-footer">
        <p>&copy; {new Date().getFullYear()} WeatherNow. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;