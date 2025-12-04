import React from 'react';
import MetricsCard from './MetricsCard';

export default function DashboardView({ products, transactions, cart }) {
  const totalSales = transactions.reduce((sum, t) => sum + t.total, 0);
  const totalStockValue = products.reduce((sum, p) => sum + p.price * p.stock, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const lowStockItems = products.filter(p => p.stock <= p. minStock);

  const metrics = [
    { label: 'Ventes', value: `$${totalSales.toFixed(2)}`, color: 'from-green-400 to-green-600' },
    { label: 'Stock', value: `$${totalStockValue.toFixed(2)}`, color: 'from-purple-400 to-purple-600' },
    { label: 'Alertes', value: lowStockItems.length, color: lowStockItems.length > 0 ? 'from-red-400 to-red-600' : 'from-gray-400 to-gray-600' },
    { label: 'Transactions', value: transactions.length, color: 'from-blue-400 to-blue-600' },
    { label: 'Produits', value: products.length, color: 'from-orange-400 to-orange-600' }
  ];

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-5 gap-4">
        {metrics.map((metric, idx) => (
          <MetricsCard key={idx} {... metric} />
        ))}
      </div>
    </div>
  );
}