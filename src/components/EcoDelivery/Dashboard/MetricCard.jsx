import React from 'react';

export default function MetricCard({ label, value, subtitle, icon: Icon, color, trend }) {
  return (
    <div className={`bg-gradient-to-br ${color} text-white rounded-lg p-4 shadow-lg`}>
      <div className="flex justify-between items-start mb-2">
        <p className="text-sm opacity-80 font-medium">{label}</p>
        <Icon size={20} className="opacity-70" />
      </div>
      <p className="text-3xl font-bold mb-1">{value}</p>
      <p className="text-xs opacity-90">{subtitle}</p>
      {trend && (
        <div className={`text-xs mt-2 ${trend === 'up' ? 'text-green-200' : 'text-blue-200'}`}>
          {trend === 'up' ? '↑' : '↓'} Trending {trend}
        </div>
      )}
    </div>
  );
}