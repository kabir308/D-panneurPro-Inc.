import React from 'react';
import { TrendingUp, Leaf, DollarSign, Users } from 'lucide-react';
import MetricCard from '../Common/MetricCard';
import ModeComparison from './ModeComparison';
import EnvironmentalImpact from './EnvironmentalImpact';

export default function DashboardView({ deliveryModes, environmentalData, financialData }) {
  const metrics = [
    {
      label: 'CO2 Réduit',
      value: '66%',
      subtitle: '825k kg/an',
      icon: Leaf,
      color: 'from-green-400 to-green-600',
      trend: 'up'
    },
    {
      label: 'Cost/Livraison',
      value: '$1.77',
      subtitle: 'vs $3.50',
      icon: DollarSign,
      color: 'from-blue-400 to-blue-600',
      trend: 'down'
    },
    {
      label: 'Profit/Liv',
      value: '$2. 22',
      subtitle: 'vs $0.49',
      icon: TrendingUp,
      color: 'from-purple-400 to-purple-600',
      trend: 'up'
    },
    {
      label: 'Arbres',
      value: '6K',
      subtitle: 'par an',
      icon: Leaf,
      color: 'from-orange-400 to-orange-600',
      trend: 'up'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, idx) => (
          <MetricCard key={idx} {... metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ModeComparison modes={deliveryModes} />
        <EnvironmentalImpact data={environmentalData} />
      </div>
    </div>
  );
}