import React, { useState } from 'react';
import ModeCard from './ModeCard';

export default function ModesDetailView({ deliveryModes }) {
  const [selectedMode, setSelectedMode] = useState(null);

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Modes de Livraison Détaillés</h2>
        <p className="text-gray-600">
          Chaque mode est optimisé pour une plage de distance spécifique.  
          Notre algorithme sélectionne automatiquement le meilleur mode. 
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {deliveryModes.map((mode) => (
          <ModeCard
            key={mode.id}
            mode={mode}
            isSelected={selectedMode?. id === mode.id}
            onSelect={() => setSelectedMode(selectedMode?.id === mode.id ?  null : mode)}
          />
        ))}
      </div>
    </div>
  );
}