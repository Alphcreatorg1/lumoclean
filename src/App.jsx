import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <h1>LumoClean</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
      <header className="hero">
        <h2>Professional Solar Panel Cleaning</h2>
        <p>Boost performance. Extend lifespan. Stay efficient.</p>
        <a href="/contact" className="cta-button">Request a Quote</a>
      </header>
    </div>
  );
}