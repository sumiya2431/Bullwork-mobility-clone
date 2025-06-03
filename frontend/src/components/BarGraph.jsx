import React, { useState } from 'react';

const BarGraph = () => {
  const [hours, setHours] = useState(2500);

  const dieselRatePerHour = 90;
  const electricityRatePerHour = 25;

  const dieselCost = hours * dieselRatePerHour;
  const electricityCost = hours * electricityRatePerHour;

  const maxHeight = 400;
  const maxCost = 4500 * dieselRatePerHour;
  const dieselHeight = (dieselCost / maxCost) * maxHeight;
  const electricityHeight = (electricityCost / maxCost) * maxHeight;

  return (
    <div className="flex flex-col items-center p-6 bg-purple-50 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">
        How many hours does the Warrior run in a year?
      </h2>

      <input
        type="range"
        min="2000"
        max="4500"
        step="100"
        value={hours}
        onChange={(e) => setHours(Number(e.target.value))}
        className="w-full mb-6 accent-purple-800"
      />
      <p className="mb-10 text-sm text-gray-700">Selected Hours: {hours}</p>

      <div className="flex items-end space-x-16 h-[420px]">
        <div className="text-center">
          <div
            style={{ height: `${dieselHeight}px` }}
            className="w-16 bg-red-500 rounded-t-md transition-all duration-500"
          ></div>
          <div className="mt-2 text-sm font-medium">₹{dieselCost.toLocaleString()}</div>
          <div className="mt-1 text-xs text-gray-600">Diesel Cost</div>
        </div>

        <div className="text-center">
          <div
            style={{ height: `${electricityHeight}px` }}
            className="w-16 bg-green-500 rounded-t-md transition-all duration-500"
          ></div>
          <div className="mt-2 text-sm font-medium">₹{electricityCost.toLocaleString()}</div>
          <div className="mt-1 text-xs text-gray-600">Electricity Cost</div>
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
