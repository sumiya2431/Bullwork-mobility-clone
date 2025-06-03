
import React, { useState } from "react";
import "../styles/TechnologySection.css";

import fieldImage from "../assets/techmain.webp";
import remoteImg from "../assets/image.png";
import drawWireImg from "../assets/image copy.png";
import bhaiAppImg from "../assets/image copy 2.png";
import app1 from "../assets/image copy 3.png";
import app2 from "../assets/image copy 4.png";
import app3 from "../assets/image copy 5.png";
import app4 from "../assets/image copy 6.png";


const imagesCarousel1 = [
  { src: app1, alt: "Tablet Screenshot 1" },
  { src: app2, alt: "Tablet Screenshot 2" },
];

const imagesCarousel2 = [
  { src: app3, alt: "Tablet Screenshot 3" },
  { src: app4, alt: "Tablet Screenshot 4" },
];

const TechnologySection = () => {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);

  const prevSlide = (setIndex, currentIndex, length) => {
    setIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
  };

  const nextSlide = (setIndex, currentIndex, length) => {
    setIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="tech-section">
      
      <div className="tech-image-full">
        <img src={fieldImage} alt="Technology Overview" />
      </div>

      <div className="tab-content">
        <h2>Unleash electric vehicle's true power with BHAI by your side</h2>
        <p>
          Experience the future of electric vehicles, seamlessly controlled via mobile app,
          featuring autonomous navigation guided by mission files.
        </p>
      </div>

      <div className="tech-video">
        <video autoPlay muted loop playsInline className="rounded-video">
          <source src="/images/techvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="control-section">
        <div className="control-container">
          <div className="control-text">
            <h3>Discover Bullwork's Control System</h3>
            <p>Bullwork offers a variety of unique control options tailored to their vehicles.</p>
          </div>
          <div className="control-image">
            <img src={remoteImg} alt="Remote Control" />
          </div>
        </div>
      </div>

      <div className="control-section reverse">
        <div className="control-container">
          <div className="control-text">
            <h3>Control through Draw-wire</h3>
            <p>The vehicle operates through a wired connection for easy manual control.</p>
          </div>
          <div className="control-image">
            <img src={drawWireImg} alt="Draw-wire Control" />
          </div>
        </div>
      </div>

      <div className="control-section">
        <div className="control-container">
          <div className="control-text">
            <h3>Control through BHAI App</h3>
            <p>Use the mobile app to control your vehicle remotely with automation features.</p>
          </div>
          <div className="control-image">
            <img src={bhaiAppImg} alt="BHAI App Interface" />
          </div>
        </div>
      </div>

      <div className="carousel-wrapper">
        <h3 className="carousel-heading">
          Elevate from action to insight – Track metrics, Optimize operations
        </h3>
        <div className="carousel-container">
          <button className="carousel-btn left" onClick={() => prevSlide(setIndex1, index1, imagesCarousel1.length)}>
            ‹
          </button>
          <div className="carousel-slider">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${index1 * 100}%)`,
                width: `${imagesCarousel1.length * 100}%`,
              }}
            >
              {imagesCarousel1.map((img, i) => (
                <div className="carousel-slide" key={i}>
                  <img src={img.src} alt={img.alt} className="carousel-image" />
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn right" onClick={() => nextSlide(setIndex1, index1, imagesCarousel1.length)}>
            ›
          </button>
        </div>
      </div>

      <div className="carousel-wrapper">
        <h3 className="carousel-heading">Real-Time Analytics and Live Streaming</h3>
        <p className="carousel-description">
          Stay informed with real-time updates on your vehicle's performance and live camera feeds.
        </p>
        <div className="carousel-container">
          <button className="carousel-btn left" onClick={() => prevSlide(setIndex2, index2, imagesCarousel2.length)}>
            ‹
          </button>
          <div className="carousel-slider">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${index2 * 100}%)`,
                width: `${imagesCarousel2.length * 100}%`,
              }}
            >
              {imagesCarousel2.map((img, i) => (
                <div className="carousel-slide" key={i}>
                  <img src={img.src} alt={img.alt} className="carousel-image" />
                </div>
              ))}
            </div>
          </div>
          <button className="carousel-btn right" onClick={() => nextSlide(setIndex2, index2, imagesCarousel2.length)}>
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
