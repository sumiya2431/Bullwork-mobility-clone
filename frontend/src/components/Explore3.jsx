import { useLocation } from "react-router-dom";
import DieselSavings from "./DieselSavings";

import image1 from "/images/image copy 30.png";
import image2 from "/images/image copy 31.png";
import warriorVideo from "/images/glx.mp4";

const Explore3 = () => {
  const { state } = useLocation();
  const product = state?.product || { name: "GLX" };

  return (
    <div className="p-6 space-y-12 bg-purple-50 min-h-screen">
      {/* Header Image */}
      <img src={image1} alt="Bullwork GLX" className="w-full rounded-xl shadow-lg" />

      {/* Product Info */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-purple-900">{product.name}</h1>
        <p className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg">
          India's first-ever electric skid steer loader in Bengaluru, engineered for powerful performance in construction and industrial operations. Its compact design effortlessly navigates tight spaces where larger machines can't fit.
          <br /><br />
          The Bullwork electric loader leads the way in versatility and manoeuvrability, accommodating various attachments like grapplers, sweepers, or pallet forks.
          <br /><br />
          Whether you're moving materials, lifting loads, or clearing debris, the electric loader delivers efficiency and effectiveness with every task — all at minimum cost.
          <br /><br />
          Get ready for unmatched efficiency and high durability with the electric loader.
        </p>

      </div>

      
      {/* Features Image */}
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-purple-900 mb-10 mt-0">Features of GLX E-Loader</h2>
        <img src={image2} alt="Features" className="w-full rounded-xl shadow-md max-w-5xl mx-auto" />
      </div>

      {/* Emission Statement */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-green-700">Power up with the GLX E-Loader</h3>
      </div>

      {/* Video Section */}
      <div className="flex justify-center">
        <video autoPlay muted loop playsInline className="rounded-xl shadow-lg w-full max-w-4xl">
          <source src={warriorVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Flipping Info Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:rotate-1 transition duration-300">
          <h5 className="text-lg font-semibold text-purple-700">Battery Capacity – 14 kWh</h5>
          <p className="text-sm text-gray-600 mt-2">
            Boost productivity and operational ease in rugged environments with extended 5-year lifespan.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:rotate-1 transition duration-300">
          <h5 className="text-lg font-semibold text-purple-700">Onboard Telematics</h5>
          <p className="text-sm text-gray-600 mt-2">
            Stay updated on machine errors and service needs with the Bhai app for maintenance and efficient operation.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:rotate-1 transition duration-300">
          <h5 className="text-lg font-semibold text-purple-700">Peak Torque – 40 Nm</h5>
          <p className="text-sm text-gray-600 mt-2">
            Utilising maximum engine force at specific speeds allows it to efficiently tackle heavy-duty tasks such as lifting.
          </p>
        </div>
      </div>

      {/* Diesel Savings Section */}
      <div className="pt-10">
        <DieselSavings />
      </div>
    </div>
  );
};

export default Explore3;
