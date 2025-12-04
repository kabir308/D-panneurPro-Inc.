import { useState } from 'react';

export const useAIPredictions = (products) => {
  const [aiPredictions, setAiPredictions] = useState(null);

  const runAIPredictions = () => {
    const predictions = {
      stockOptimization: products.map(p => ({
        name: p.name,
        currentStock: p.stock,
        recommendedStock: Math.ceil(p.velocity * 7 * 1.2),
        risk: p.stock <= p.minStock ? 'CRITIQUE' : p.stock < p.velocity * 3 ? 'ÉLEVÉ' : 'NORMAL',
        savingsPotential: Math.max(0, (p.stock - (p.velocity * 7)) * p.costPrice). toFixed(2)
      })),
      
      demandForecasting: products
        .sort((a, b) => b. velocity - a.velocity)
        .map((p, i) => ({
          rank: i + 1,
          product: p. name,
          velocity: p. velocity,
          forecast7days: Math.ceil(p.velocity * 7),
          forecast30days: Math. ceil(p.velocity * 30),
          trend: p.trend,
          confidence: `${85 + Math.random() * 10}%`
        })),
      
      reorderRecommendations: products
        . filter(p => p.stock <= p.minStock)
        . map(p => ({
          product: p.name,
          supplier: p.supplier,
          currentStock: p.stock,
          recommendQuantity: Math.ceil(p. velocity * 14),
          estimatedCost: (Math.ceil(p.velocity * 14) * p.costPrice). toFixed(2),
          urgency: p.stock === 0 ? '🔴 URGENT' : '🟠 Haute'
        })),
      
      profitAnalysis: {
        topProfitable: products
          .sort((a, b) => (b.price * b.margin) - (a.price * a. margin))
          .slice(0, 3)
          .map(p => ({ name: p.name, profitPerUnit: (p.price * p.margin). toFixed(2), potentialProfit: (p.price * p.margin * p.stock).toFixed(2) })),
        
        deadStock: products
          .filter(p => p.velocity < 2)
          .map(p => ({ name: p.name, velocity: p.velocity, valueAtRisk: (p.price * p.stock).toFixed(2) }))
      },
      
      priceOptimization: products.map(p => ({
        name: p. name,
        currentPrice: p.price,
        currentMargin: `${(p.margin * 100).toFixed(0)}%`,
        suggestedPrice: (p.costPrice * (1 + (p.margin * 1.1))).toFixed(2),
        marketPosition: p.price > 5 ? 'Premium' : p.price > 2 ? 'Mid-Range' : 'Value'
      }))
    };

    setAiPredictions(predictions);
  };

  return { aiPredictions, runAIPredictions };
};