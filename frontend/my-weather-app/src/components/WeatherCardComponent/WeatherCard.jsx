import React from 'react';

const WeatherCard = ({ cityName, description, temperature, timestamp }) => {
  console.log(timestamp);
  
  return (
    <div
      className="card weather-card text-white border-0 shadow-lg h-100 position-relative overflow-hidden"
      style={{
        borderRadius: '1.2rem',
        background: 'linear-gradient(145deg, rgba(29,78,216,0.85), rgba(56,189,248,0.85))',
        backdropFilter: 'blur(10px)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.03)';
        e.currentTarget.style.boxShadow = '0 0 20px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 0 10px rgba(0,0,0,0.2)';
      }}
    >

      <div
        className="position-absolute rounded-circle bg-light opacity-10"
        style={{
          width: '100px',
          height: '100px',
          top: '-30px',
          right: '-30px',
          animation: 'float 5s ease-in-out infinite',
        }}
      />
      <div
        className="position-absolute rounded-circle bg-danger opacity-10"
        style={{
          width: '60px',
          height: '60px',
          bottom: '-20px',
          left: '-20px',
          animation: 'float 6s ease-in-out infinite reverse',
        }}
      />

      <div className="card-body position-relative p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title fw-bold text-truncate mb-0" style={{ textShadow: '1px 1px 4px #000' }}>
            {cityName}
          </h5>
          <span className="badge bg-light text-dark text-capitalize shadow-sm px-3 py-1">
            {description}
          </span>
        </div>

        <h1 className="display-4 fw-bold mb-3" style={{ textShadow: '2px 2px 5px rgba(0,0,0,0.4)' }}>
          {Math.round(temperature)}°C
        </h1>

        <hr className="border-light opacity-50" />

        <div className="d-flex align-items-center mt-3">
          <div
            className="me-2 bg-white"
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              animation: 'pulse 2s infinite',
            }}
          />
          
        </div>
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
        `}
      </style>
    </div>
  );
};

export default WeatherCard;
