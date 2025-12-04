import React, { useState } from 'react';
import { MatchingAlgorithm } from '../matching/MatchingAlgorithm';

export default function MatchingDemo({ onTest }) {
  const [testData, setTestData] = useState({
    distance: 2. 3,
    weight: 3,
    weather: 'sunny',
    urgency: 'normal',
    orderValue: 45,
    customerPreference: 'balanced',
    timeOfDay: 'afternoon'
  });

  const handleTest = () => {
    const result = MatchingAlgorithm.selectMode(testData);
    onTest(result);
  };

  const handleChange = (field, value) => {
    setTestData({ ...testData, [field]: value });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4">Test Matching Algorithm</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Distance (km): {testData.distance}
          </label>
          <input
            type="range"
            min="0"
            max="20"
            step="0.1"
            value={testData. distance}
            onChange={(e) => handleChange('distance', parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Weight (kg): {testData.weight}
          </label>
          <input
            type="range"
            min="1"
            max="50"
            step="1"
            value={testData. weight}
            onChange={(e) => handleChange('weight', parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Weather</label>
          <select
            value={testData.weather}
            onChange={(e) => handleChange('weather', e.target. value)}
            className="w-full border-2 border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="sunny">Sunny</option>
            <option value="cloudy">Cloudy</option>
            <option value="light_rain">Light Rain</option>
            <option value="rain">Rain</option>
            <option value="snow">Snow</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Urgency</label>
          <select
            value={testData.urgency}
            onChange={(e) => handleChange('urgency', e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="low">Low</option>
            <option value="normal">Normal</option>
            <option value="high">High</option>
            <option value="emergency">Emergency</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Customer Preference</label>
          <select
            value={testData. customerPreference}
            onChange={(e) => handleChange('customerPreference', e.target.value)}
            className="w-full border-2 border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="eco">Eco-friendly</option>
            <option value="fast">Fast</option>
            <option value="cheap">Cheap</option>
            <option value="balanced">Balanced</option>
          </select>
        </div>

        <button
          onClick={handleTest}
          className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition"
        >
          Run Matching Algorithm
        </button>
      </div>
    </div>
  );
}