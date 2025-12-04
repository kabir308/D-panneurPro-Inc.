import React from 'react';
import { Brain, Zap, Download, Package, TrendingUp, AlertTriangle } from 'lucide-react';
import StockOptimization from './StockOptimization';
import DemandForecasting from './DemandForecasting';
import ProfitAnalysis from './ProfitAnalysis';
import { exportAIReport } from '../../services/exportService';

export default function AIView({ aiPredictions, runAIPredictions }) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg p-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Brain size={28} /> Intelligence Artificielle
          </h2>
          <p className="text-purple-100">Prédictions, optimisations et recommandations en temps réel</p>
        </div>
        <button 
          onClick={runAIPredictions} 
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-purple-50 flex items-center gap-2"
        >
          <Zap size={20} /> Analyser
        </button>
      </div>

      {aiPredictions && (
        <div className="space-y-4">
          <button 
            onClick={() => exportAIReport(aiPredictions)} 
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"
          >
            <Download size={20} /> Exporter Rapport IA
          </button>

          <StockOptimization data={aiPredictions.stockOptimization} />
          <DemandForecasting data={aiPredictions.demandForecasting} />
          <ProfitAnalysis data={aiPredictions.profitAnalysis} />
        </div>
      )}
    </div>
  );
}