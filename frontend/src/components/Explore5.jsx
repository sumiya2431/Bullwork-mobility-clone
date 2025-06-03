import { useLocation } from "react-router-dom";
import DieselSavings from "./DieselSavings";

import image1 from "/images/image copy 34.png";
import image2 from "/images/image copy 35.png";
import warriorVideo from "/images/ox.mp4";

const Explore5 = () => {
  const { state } = useLocation();
  const product = state?.product || { name: "0X-1" };

  return (
    <div className="p-6 space-y-12 bg-purple-50 min-h-screen">
      
      <img src={image1} alt="Bullwork 0X-1" className="w-full rounded-xl shadow-lg" />

      
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-purple-900">{product.name}</h1>
        <p className="text-xl text-purple-800">Introducing the Bullwork Manually Guided Vehicle (MGV)</p>
        <p className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg">
          The OX-1, crafted to streamline the handling of heavy materials with enhanced safety. Ideal for warehouses and manufacturing, it guarantees robustness and reliability.
          <br /><br />
          The Bullwork 0X-1 boasts intuitive controls for precise and secure operations. It includes sensors to prevent collisions, ensuring high safety standards.
          <br /><br />
          Our MGV 0X-1's sturdy and ergonomic design minimizes operational challenges, thereby enhancing productivity. Whether maneuvering through tight spaces or moving bulky items, this electric 0X-1 consistently delivers top-notch performance.
          <br /><br />
          It sets new benchmarks in safety and efficiency for material handling applications.
        </p>
      </div>

     
 
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-purple-900">Features of OX-1</h2>
        <img src={image2} alt="Features" className="w-full rounded-xl shadow-md max-w-5xl mx-auto" />
      </div>

      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-green-700">OX-1 Your Ultimate Material Handling Solution</h3>
      </div>

      <div className="flex justify-center">
        <video autoPlay muted loop playsInline className="rounded-xl shadow-lg w-full max-w-4xl">
          <source src={warriorVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:rotate-1 transition duration-300">
          <h5 className="text-lg font-semibold text-purple-700">Meccanum Wheel</h5>
          <p className="text-sm text-gray-600 mt-2">
            Facilitate omnidirectional movement, allows vehicles to move smoothly and precisely in any direction.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:rotate-1 transition duration-300">
          <h5 className="text-lg font-semibold text-purple-700">Swappable Battery</h5>
          <p className="text-sm text-gray-600 mt-2">
            Allows for quick and easy replacement of batteries, extending operational uptime without long charging times.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:rotate-1 transition duration-300">
          <h5 className="text-lg font-semibold text-purple-700">IP-65</h5>
          <p className="text-sm text-gray-600 mt-2">
            Provides protection against dust ingress and water, ensuring durability and reliability in challenging environments.
          </p>
        </div>
      </div>

      <div className="pt-10">
        <DieselSavings />
      </div>
    </div>
  );
};

export default Explore5;
