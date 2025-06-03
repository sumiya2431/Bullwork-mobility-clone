import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const DieselSavingsCalculator = () => {
  const [hours, setHours] = useState(1000);

  const savingsPer1000Hours = 150000;
  const savingsPerHour = savingsPer1000Hours / 1000;

  const yearlySavings = Math.round(hours * savingsPerHour);
  const sevenYearSavings = yearlySavings * 7;

  const data = [
    { name: '1 Year', Savings: yearlySavings },
    { name: '7 Years', Savings: sevenYearSavings },
  ];

  const hourOptions = [500, 1000, 1500, 2000, 2500, 3000];

  return (
    <div className="bg-purple-50 rounded-2xl shadow-xl p-8 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-black text-center mb-20" >calculate your diesel savings</h1>
      <div className="grid md:grid-cols-2 gap-10 items-start">
       
        <div className="space-y-8">
    
          <div className="space-y-3">
            
            <h2 className="text-3xl font-bold text-purple-900">
            Our electric vehicles can significantly reduce your diesel expenses.
            </h2>
            <p className="text-gray-700 text-lg">
              Our easy-to-use calculator shows you just how much you'll keep in your pocket by going electric.
              Join the movement for a cleaner, greener future and start saving big.
            </p>
          </div>

          <div className="space-y-4 text-center">
            <h4 className="text-lg font-medium text-gray-800">
              How many hours does the Beast Electric tractor run in a year?
            </h4>
            <input
              type="range"
              min={500}
              max={3000}
              step={500}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="w-full h-2 rounded-lg bg-gray-300 accent-purple-800 cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-600">
              {hourOptions.map((val) => (
                <span key={val}>{val}</span>
              ))}
            </div>
            <p className="text-xs text-gray-500 italic">*Conditions apply</p>
          </div>
        </div>

        <div className="space-y-6">

          <div className="flex flex-col sm:flex-row gap-4 justify-center text-white">
            <div className="bg-purple-800 rounded-md px-4 py-3 text-center text-sm w-full sm:w-1/2 shadow">
              <h3 className="text-sm">Savings for 1 year</h3>
              <p className="text-xl font-semibold">₹{yearlySavings.toLocaleString()}</p>
            </div>
            <div className="bg-purple-800 rounded-md px-4 py-3 text-center text-sm w-full sm:w-1/2 shadow">
              <h3 className="text-sm">Savings for 7 years</h3>
              <p className="text-xl font-semibold">₹{sevenYearSavings.toLocaleString()}</p>
            </div>
          </div>

          <div className="h-96"> 
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis
                  tickFormatter={(v) => `₹${(v / 100000).toFixed(1)}L`}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                <Bar
                  dataKey="Savings"
                  fill="#4ade80"
                  radius={[6, 6, 0, 0]}
                  barSize={40} // Reduced bar width
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DieselSavingsCalculator;
