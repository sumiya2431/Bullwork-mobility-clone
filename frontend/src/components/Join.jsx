import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Join.css";

const Join = () => {
  return (
    <section className="join-section">
      <h2>JOIN THE BULLWORK FAMILY</h2>
      <div className="join-buttons">
        <Link to="/order" className="btn order-btn">Order</Link>
        <a href="https://bullworkmobility.com/demo" className="btn demo-btn" target="_blank" rel="noopener noreferrer">Book Demo</a>
      </div>
    </section>
  );
};

export default Join;
