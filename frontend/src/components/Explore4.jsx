import { useLocation } from "react-router-dom";
import DieselSavings from "./DieselSavings";

import image1 from "/images/image copy 32.png";
import image2 from "/images/image copy 33.png";
import warriorVideo from "/images/tractor.mp4";

const Explore4 = () => {
  const { state } = useLocation();
  const product = state?.product || { name: "Vamana Pro" };

  return (
    <div className="p-6 space-y-12 bg-purple-50 min-h-screen">
     
      <img src={image1} alt="Bullwork Vamana Pro" className="w-full rounded-xl shadow-lg" />

   
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-purple-900">{product.name}</h1>
        <p className="text-xl text-purple-800">Introducing the Bullwork Autonomous Vamana Pro</p>
        <p className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg">
          The ultimate all-in-one unmanned ground vehicle (UGV) designed to handle any challenge. This versatile Agri-bot is built for multi-purpose use, effortlessly conquering terrains across construction sites, warehouses, and farms.
          <br /><br />
          Equipped with cutting-edge self-driving autonomous control, the Bullwork Vamana Mini Loader ensures smooth, hassle-free operations while delivering outstanding efficiency, dramatically reducing the need for manual labor.
          <br /><br />
          Step into the future of autonomous work with the advanced Bullwork Vamana Pro—your go-to solution for smart, reliable, and powerful performance.
        </p>
      </div>

     
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold text-purple-900">Features of Vamana Pro</h2>
        <img src={image2} alt="Features" className="w-full rounded-xl shadow-md max-w-5xl mx-auto" />
      </div>

      <div className="text-center space-y-2">
        <h3 className="text-xl font-semibold text-green-700">Charging Ahead with Zero Emissions</h3>
      </div>

      <div className="flex justify-center">
        <video autoPlay muted loop playsInline className="rounded-xl shadow-lg w-full max-w-4xl">
          <source src={warriorVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:rotate-1 transition duration-300">
          <h5 className="text-lg font-semibold text-purple-700">Implements – CAT 1N</h5>
          <p className="text-sm text-gray-600 mt-2">
            With CAT 1N attachments and onboard PTO options, it's a versatile choice for tackling all tasks as a mini tractor.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:rotate-1 transition duration-300">
          <h5 className="text-lg font-semibold text-purple-700">Travelling Speed – 10 km/h</h5>
          <p className="text-sm text-gray-600 mt-2">
            Delivers precise navigation, optimised route planning, and enhances location-based services.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg hover:rotate-1 transition duration-300">
          <h5 className="text-lg font-semibold text-purple-700">Motor Power – 20 kW</h5>
          <p className="text-sm text-gray-600 mt-2">
            Delivers high energy for movement, rotation, and tasks in vehicles and machinery, with easy maintenance.
          </p>
        </div>
      </div>

      <div className="pt-10">
        <DieselSavings />
      </div>
    </div>
  );
};

export default Explore4;
