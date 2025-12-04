import React from 'react';

export default function MetricsCard({ label, value, color }) {
  return (
    <div className={`bg-gradient-to-br ${color} text-white rounded-lg p-4`}>
      <p className="text-xs opacity-80">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}