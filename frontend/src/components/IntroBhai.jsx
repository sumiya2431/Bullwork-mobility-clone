import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/IntroBhai.css";

const IntroBhai = () => {
  return (
    <div className="intro-wrapper">
      
      <div className="top-intro">
        <h2>INTRODUCING BHAI</h2>
        <p className="subtext">
          Bullwork's AI companion to make our vehicles smart and enhance productivity
        </p>
      </div>

      <div className="hero-container">
     
        <div className="phone-preview">
          <video
            className="video-player"
            src="https://www.bullworkmobility.com/videos/home_gcs.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="text-content">
          <h1 className="brand">bh.ai</h1>
          <h3>ONE APP TO RULE THEM ALL</h3>
          <ul className="features">
            <li>Vehicle data at your fingertips</li>
            <li>Control your machine with the app in real time</li>
            <li>Execute your autonomous missions and track your vehicle's progress</li>
          </ul>

          <Link to="/technology">
            <button className="explore-button">EXPLORE</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroBhai;





