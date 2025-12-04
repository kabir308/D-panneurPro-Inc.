export const exportAIReport = (aiPredictions) => {
  if (!aiPredictions) {
    alert('Exécutez d\'abord les prédictions IA');
    return;
  }

  const report = `
╔════════════════════════════════════════════╗
║  DÉPANNEURPRO - RAPPORT IA                 ║
║  ${new Date().toLocaleDateString('fr-CA')}              ║
╚════════════════════════════════════════════╝

🤖 OPTIMISATION DU STOCK (IA)
════════════════════════════════════════════
${aiPredictions.stockOptimization.map(p => `
${p.name}
  Stock actuel: ${p.currentStock} unités
  Stock recommandé: ${p.recommendedStock} unités
  Risque: ${p.risk}
  Économies potentielles: $${p.savingsPotential}
`).join('')}

📊 PRÉVISIONS DE DEMANDE (7-30 JOURS)
════════════════════════════════════════════
${aiPredictions.demandForecasting.map(p => `
#${p.rank} ${p.product}
  Vitesse vente: ${p.velocity}/jour
  Prévision 7j: ${p.forecast7days} unités
  Prévision 30j: ${p.forecast30days} unités
  Tendance: ${p.trend} | Confiance: ${p.confidence}
`).join('')}
  `;

  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(report));
  element.setAttribute('download', `rapport-ia-${new Date().toISOString().split('T')[0]}.txt`);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};