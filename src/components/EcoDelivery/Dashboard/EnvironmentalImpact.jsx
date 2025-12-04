import React from 'react';
import { Leaf, TrendingDown } from 'lucide-react';

export default function EnvironmentalImpact({ data }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
        <Leaf size={24} className="text-green-600" /> Impact Environnemental
      </h3>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between mb-2">
            <p className="text-sm font-bold text-gray-700">Avant (100% voiture)</p>
            <span className="text-xs text-red-600 font-bold">2.5 kg CO₂/liv</span>
          </div>
          <div className="bg-red-100 h-4 rounded-full overflow-hidden">
            <div className="bg-red-600 h-full w-full rounded-full"></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <p className="text-sm font-bold text-gray-700">Après (Multi-modal)</p>
            <span className="text-xs text-green-600 font-bold">0.85 kg CO₂/liv</span>
          </div>
          <div className="bg-green-100 h-4 rounded-full overflow-hidden">
            <div className="bg-green-600 h-full rounded-full" style={{ width: '34%' }}></div>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-600 p-3 rounded">
          <p className="font-bold text-green-700 flex items-center gap-2">
            <TrendingDown size={18} /> 66% Réduction CO₂
          </p>
          <p className="text-sm text-green-600 mt-1">= 6,000 arbres/an (équivalent carbone)</p>
          <p className="text-xs text-green-600 mt-2">
            Sur 500,000 livraisons/an = 825,000 kg CO₂ économisés
          </p>
        </div>
      </div>
    </div>
  );
}