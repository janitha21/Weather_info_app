import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './Navbar.css'; // External CSS

const Navbar = ({ onSearch }) => {
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    <nav className="navbar custom-navbar">
      <div className="container-fluid">
        <span className="navbar-brand custom-brand">🌤️ WeatherNow</span>

        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            name="search"
            className="form-control custom-search"
            placeholder="Search city..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        {/* Dropdown */}
        {isAuthenticated && user && (
          <div className="dropdown ms-3">
            <button
              className="btn custom-user-btn dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-list"></i> {user.email}
            </button>
            <ul className="dropdown-menu custom-dropdown shadow">
              <li className="dropdown-header">Quick Actions</li>
              <li><button className="dropdown-item"><i className="bi bi-house-door"></i> Home</button></li>
              <li><button className="dropdown-item"><i className="bi bi-gear"></i> Settings</button></li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <button
                  className="dropdown-item text-danger"
                  onClick={() => logout({ returnTo: window.location.origin + "/dashboard" })}
                >
                  <i className="bi bi-box-arrow-right"></i> Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
