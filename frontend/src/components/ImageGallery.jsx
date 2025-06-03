import React from 'react';
import '../styles/ImageGallery.css';

const ImageGallery = () => {
  return (
    <div className="gallery-container">
      <div className="image-card">
        <img src="/images/image copy 2.png" alt="Greener Bharat Tractor" />
      </div>

      <div className="text-block">
        <h1>Showcasing the Innovation</h1>
        <p>Bullwork's Electric Vehicles at Major Events</p>
      </div>

      <div className="image-card">
        <img src="/images/image copy.png" alt="Bullwork Innovation Event" />
      </div>
    </div>
  );
};

export default ImageGallery;
