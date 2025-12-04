import React, { useState } from 'react';
import EcoDashboard from './modules/ecoDelivery/components/EcoDashboard';
import DépanneurProEcommerce from './pages/DépanneurProEcommerce';
import DepanneurProAI from './pages/DepanneurProAI';

export default function App() {
  const [activeApp, setActiveApp] = useState('eco');

  return (
    <div>
      {/* App Selector */}
      <div className="bg-gray-900 text-white p-4 flex gap-4">
        <button
          onClick={() => setActiveApp('eco')}
          className={`px-4 py-2 rounded ${activeApp === 'eco' ? 'bg-green-600' : 'bg-gray-700'}`}
        >
          🌱 Eco Delivery
        </button>
        <button
          onClick={() => setActiveApp('ecommerce')}
          className={`px-4 py-2 rounded ${activeApp === 'ecommerce' ? 'bg-indigo-600' : 'bg-gray-700'}`}
        >
          🚚 Livraison+
        </button>
        <button
          onClick={() => setActiveApp('ai')}
          className={`px-4 py-2 rounded ${activeApp === 'ai' ? 'bg-purple-600' : 'bg-gray-700'}`}
        >
          🤖 AI/Analytics
        </button>
      </div>

      {/* Content */}
      {activeApp === 'eco' && <EcoDashboard />}
      {activeApp === 'ecommerce' && <DépanneurProEcommerce />}
      {activeApp === 'ai' && <DepanneurProAI />}
    </div>
  );
}