import React from 'react';
import { MapPin, Clock, DollarSign } from 'lucide-react';

export default function ModeComparison({ modes }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <MapPin size={24} /> Mode Optimal par Distance
      </h3>
      <div className="space-y-3">
        {modes.map((mode) => (
          <div key={mode. id} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
            <div className="text-3xl">{mode.emoji}</div>
            <div className="flex-1">
              <p className="font-bold text-gray-900">{mode.name}</p>
              <p className="text-xs text-gray-600">
                {mode.range[0]}-{mode.range[1]}km • ${mode.profit. toFixed(2)} profit • {mode.avgOrders} cmd/h
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold text-green-600">${mode.profit.toFixed(2)}</p>
              <p className="text-xs text-gray-600">profit/cmd</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}