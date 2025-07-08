
import { Link, useNavigate } from 'react-router-dom';
import { Cloud, Sun, CloudRain, Thermometer, Globe, Users, TrendingUp } from 'lucide-react';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';


const Dashboard = () => {
    
     const { loginWithRedirect, isAuthenticated , isLoading} = useAuth0();
     const navigate = useNavigate(); 

    useEffect(() => {
    if (!isLoading && isAuthenticated) {
      navigate('/home'); 
    }
  }, [isAuthenticated, isLoading, navigate]);

  return (
    <div className="min-vh-100" style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      <div 
        className="position-absolute"
        style={{
          width: '300px',
          height: '300px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '50%',
          top: '-150px',
          right: '-150px',
          animation: 'float 8s ease-in-out infinite'
        }}
      />
      <div 
        className="position-absolute"
        style={{
          width: '200px',
          height: '200px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '50%',
          bottom: '-100px',
          left: '-100px',
          animation: 'float 6s ease-in-out infinite reverse'
        }}
      />

      <div className="container py-5 position-relative">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-flex justify-content-center align-items-center mb-4">
            <Cloud className="text-white me-3" size={48} />
            <h1 className="display-2 fw-bold text-white mb-0" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.3)' }}>
              WeatherPro
            </h1>
          </div>
          <p className="lead text-white mb-4" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            Your ultimate weather companion with real-time updates from around the globe
          </p>
          
          {/* Action Buttons */}
          <div className="d-flex gap-3 justify-content-center mb-5">
           
            <button onClick={() => loginWithRedirect()}
              className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
              style={{
                borderRadius: '50px',
                borderWidth: '2px',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              Log In
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="row g-4 mb-5">
          <div className="col-md-4">
            <div 
              className="card h-100 border-0 text-center p-4"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(15px)',
                borderRadius: '20px',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="mb-3">
                <Thermometer className="text-white" size={48} />
              </div>
              <h4 className="text-white fw-bold mb-3">Real-time Data</h4>
              <p className="text-white-50">
                Get accurate, up-to-the-minute weather information from trusted sources worldwide
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div 
              className="card h-100 border-0 text-center p-4"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(15px)',
                borderRadius: '20px',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="mb-3">
                <Globe className="text-white" size={48} />
              </div>
              <h4 className="text-white fw-bold mb-3">Global Coverage</h4>
              <p className="text-white-50">
                Access weather data from thousands of cities and locations across the globe
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div 
              className="card h-100 border-0 text-center p-4"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(15px)',
                borderRadius: '20px',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div className="mb-3">
                <TrendingUp className="text-white" size={48} />
              </div>
              <h4 className="text-white fw-bold mb-3">Forecasts</h4>
              <p className="text-white-50">
                Plan ahead with detailed weather forecasts and trending patterns
              </p>
            </div>
          </div>
        </div>

        {/* Demo Weather Cards */}
        <div className="text-center mb-4">
          <h3 className="text-white fw-bold mb-4">Experience Live Weather Data</h3>
          <div className="row g-4">
            <div className="col-md-4">
              <div 
                className="card h-100 border-0 position-relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
                  borderRadius: '20px',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h5 className="text-dark fw-bold">New York</h5>
                    <Sun className="text-warning" size={32} />
                  </div>
                  <div className="display-5 fw-bold text-dark">22°C</div>
                  <small className="text-muted">Sunny</small>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div 
                className="card h-100 border-0 position-relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '20px',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h5 className="text-white fw-bold">London</h5>
                    <CloudRain className="text-white" size={32} />
                  </div>
                  <div className="display-5 fw-bold text-white">15°C</div>
                  <small className="text-white-50">Light Rain</small>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div 
                className="card h-100 border-0 position-relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)',
                  borderRadius: '20px',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h5 className="text-white fw-bold">Tokyo</h5>
                    <Cloud className="text-white" size={32} />
                  </div>
                  <div className="display-5 fw-bold text-white">18°C</div>
                  <small className="text-white-50">Cloudy</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to="/dashboard"
            className="btn btn-success btn-lg px-5 py-3 fw-bold text-decoration-none"
            style={{
              borderRadius: '50px',
              background: 'linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)',
              border: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 8px 25px rgba(0,0,0,0.2)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
            }}
          >
            View Live Dashboard
          </Link>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
        `
      }} />
    </div>
  );
};

export default Dashboard;