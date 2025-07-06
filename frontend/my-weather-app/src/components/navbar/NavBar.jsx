import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = ({ onSearch }) => {
  const { user, isAuthenticated, logout } = useAuth0();

  const handleSearch = (e) => {
    e.preventDefault();
    const city = e.target.elements.search.value;
    onSearch(city); // Pass search to App
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 py-3 shadow">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold fs-4">🌤️ WeatherNow</span>

        <form className="d-flex me-auto ms-3" onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            className="form-control me-2"
            placeholder="Search city..."
          />
          <button className="btn btn-light" type="submit">Search</button>
        </form>

        {isAuthenticated && user && (
          <div className="d-flex align-items-center gap-3">
            <div className="text-end text-white">
              <div className="fw-bold">{user.name}</div>
              <div className="small">{user.email}</div>
            </div>
            <img
              src={user.picture}
              alt="Profile"
              width={40}
              height={40}
              className="rounded-circle border border-white"
            />
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => logout({ returnTo: window.location.origin + "/dashboard" })}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
