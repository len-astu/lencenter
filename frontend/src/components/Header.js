// src/components/Header.js
import React from 'react';
import '../styles/Header.scss'; // Create this file for Header-specific styles

const Header = ({ onNavClick, onLoginClick, isAuthenticated }) => {
  return (
    <header className="header">
      <div className="logo">Project Management</div>
      <nav>
        <ul className="nav-links">
          <li onClick={() => onNavClick('home')}>Home</li>
          <li onClick={() => onNavClick('projects')}>Projects</li>
          <li onClick={() => onNavClick('tasks')}>Tasks</li>
          <li onClick={() => onNavClick('team')}>Team</li>
          {isAuthenticated ? (
            <li onClick={() => onNavClick('profile')}>Profile</li>
          ) : (
            <li onClick={onLoginClick}>Login/Signup</li>
          )}
        </ul>
      </nav>
      <div className="hamburger" onClick={() => document.querySelector('.nav-links').classList.toggle('active')}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
