

import React from "react";
import { useNavigate } from "react-router-dom"; 
import heroImage from "../assets/bwm1image.png";
import "../styles/HeroSection.css";

const HeroSection = () => {
  const navigate = useNavigate(); 

  const handleOrderClick = () => {
    navigate("/order");
  };

  return (
    <section className="hero-section">
      <div className="hero-image-wrapper">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>

      <div className="hero-content flex flex-col items-center text-center gap-6">
  <button
    className="order-button bg-[hsl(285,89%,25%)] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition"
    onClick={handleOrderClick}
  >
    ORDER NOW
  </button>

  <h1 className="hero-title text-2xl font-bold max-w-4xl">
    WE PROVIDE FULL STACK ELECTRIC AUTONOMOUS SOLUTIONS FOR CLEANER GREENER TOMORROW
  </h1>

  <div className="categories text-lg font-medium text-gray-700">
    Electric Tractors | Sprayers | Loaders | Bots
  </div>
</div>

    </section>
  );
};

export default HeroSection;
