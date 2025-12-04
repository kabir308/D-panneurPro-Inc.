import React, { useState, useEffect } from 'react';
import { Leaf, TrendingUp, DollarSign, Zap, Footprints, Target, Users, AlertCircle } from 'lucide-react';
import { MatchingAlgorithm } from '../matching/MatchingAlgorithm';
import { FinancialAnalytics } from '../analytics/FinancialAnalytics';
import { EnvironmentalAnalytics } from '../analytics/EnvironmentalAnalytics';
import { ecoModes } from '../config/ecoModes.config';
import MetricsGrid from './MetricsGrid';
import ModeComparison from './ModeComparison';
import FinancialProjection from './FinancialProjection';
import EnvironmentalImpact from './EnvironmentalImpact';
import MatchingDemo from './MatchingDemo';

export default function EcoDashboard() {
  const [selectedYear, setSelectedYear] = useState(3);
  const [matchingTest, setMatchingTest] = useState(null);

  const financialData = FinancialAnalytics.getFinancialProjection(selectedYear);
  const environmentalData = EnvironmentalAnalytics.getYearlyImpact(selectedYear);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50 p-6">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-green-900 flex items-center gap-3">
          <Leaf size={36} className="text-green-600" />
          EcoDelivery System Dashboard
        </h1>
        <p className="text-gray-600 mt-2">
          Multi-modal delivery optimization: Profit ✓ Ecology ✓ Community ✓
        </p>
      </header>

      {/* Year Selector */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <label className="font-bold text-gray-700 mr-4">Projection Year:</label>
        {[1, 2, 3].map(year => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-4 py-2 rounded-lg mr-2 font-semibold transition ${
              selectedYear === year
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Year {year}
          </button>
        ))}
      </div>

      {/* Metrics Grid */}
      <MetricsGrid financialData={financialData} environmentalData={environmentalData} />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <ModeComparison modes={ecoModes} />
        <FinancialProjection year={selectedYear} data={financialData} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <EnvironmentalImpact year={selectedYear} data={environmentalData} />
        <MatchingDemo onTest={setMatchingTest} />
      </div>

      {/* Matching Algorithm Results */}
      {matchingTest && (
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6 border-l-4 border-indigo-500">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Zap size={28} className="text-indigo-600" />
            Matching Algorithm Result
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-indigo-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Selected Mode</p>
              <p className="text-2xl font-bold text-indigo-600">{matchingTest.selectedMode}</p>
              <p className="text-xs text-gray-500 mt-2">Confidence: {(matchingTest.confidence * 100).toFixed(0)}%</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Est. Delivery Time</p>
              <p className="text-2xl font-bold text-green-600">{matchingTest.estimatedDeliveryTime} min</p>
              <p className="text-xs text-gray-500 mt-2">Cost: ${matchingTest.estimatedCost.toFixed(2)}</p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600 mb-1">Carbon Impact</p>
              <p className="text-2xl font-bold text-yellow-600">{matchingTest.carbonImpact} kg CO₂</p>
              <p className="text-xs text-gray-500 mt-2">Profit: ${matchingTest.estimatedProfit.toFixed(2)}</p>
            </div>
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg border-l-2 border-blue-500">
            <p className="text-sm text-blue-800">
              <strong>Reasoning:</strong> {matchingTest. reasoning}
            </p>
          </div>
        </div>
      )}

      {/* Detailed Mode Stats */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Target size={28} /> Mode Details & Economics
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ecoModes.map(mode => (
            <div key={mode.id} className="border-2 border-gray-200 rounded-lg p-4 hover:border-indigo-500 transition">
              <div className="text-5xl mb-3">{mode.emoji}</div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{mode.name}</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Distance</span>
                  <span className="font-bold">{mode.maxDistance} km</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Weight</span>
                  <span className="font-bold">{mode.maxWeight} kg</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cost/Delivery</span>
                  <span className="font-bold">${mode.costPerDelivery. toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Profit/Delivery</span>
                  <span className="font-bold text-green-600">${mode. profitPerDelivery.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Carbon</span>
                  <span className="font-bold">{mode.carbonPerDelivery} kg CO₂</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Orders/Hour</span>
                  <span className="font-bold">{mode.avgOrdersPerHour}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t-2">
                <p className="text-xs font-bold text-gray-600 mb-2">Target Recruitment</p>
                <div className="flex gap-2">
                  {Object.entries(mode.scaling).map(([year, count]) => (
                    <div key={year} className="bg-gray-100 px-2 py-1 rounded text-xs">
                      Y{year}: <strong>{count}</strong>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}