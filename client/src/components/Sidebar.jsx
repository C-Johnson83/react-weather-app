import React from 'react';
import '../sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar col-1 d-flex justify-content-center">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          <li className="nav-item mt-4">
            <a className="nav-link active" href="#">
              Search
            </a>
          </li>
          <li className="nav-item mt-3">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item mt-3">
            <a className="nav-link" href="#">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;