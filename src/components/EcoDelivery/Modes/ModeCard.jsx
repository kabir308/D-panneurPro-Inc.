import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function ModeCard({ mode, isSelected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition border-2 ${
        isSelected ?  'border-indigo-500 bg-indigo-50' : 'border-gray-200'
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-4">
          <span className="text-5xl">{mode.emoji}</span>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{mode. name}</h3>
            <p className="text-sm text-gray-600 mt-1">{mode.description}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-green-600">${mode.profit. toFixed(2)}</p>
          <p className="text-xs text-gray-600 mt-1">Profit/livraison</p>
          <button className="mt-2 text-gray-400 hover:text-gray-600">
            {isSelected ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        <StatBox label="Distance" value={`${mode.maxDistance}km max`} icon="📍" />
        <StatBox label="Temps" value={mode.deliveryTime} icon="⏱️" />
        <StatBox label="CO2" value={`${mode.carbon} kg`} icon="🌱" />
        <StatBox label="Capacité" value={`${mode. maxWeight}kg`} icon="📦" />
      </div>

      {/* Expanded Details */}
      {