import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import BarcodeInput from './BarcodeInput';
import ScannedItemsList from './ScannedItemsList';

export default function InventoryScannerView({ products, setProducts }) {
  const [scannedItems, setScannedItems] = useState([]);
  const [scanBarcode, setScanBarcode] = useState('');

  const handleInventoryScan = (code) => {
    const product = products.find(p => p.barcode === code);
    if (product) {
      const existing = scannedItems.find(item => item.id === product.id);
      if (existing) {
        setScannedItems(scannedItems.map(item =>
          item.id === product. id ? { ...item, scannedQty: item.scannedQty + 1 } : item
        ));
      } else {
        setScannedItems([...scannedItems, { ... product, scannedQty: 1 }]);
      }
      setScanBarcode('');
    }
  };

  const finalizInventoryCount = () => {
    const discrepancies = scannedItems
      .map(item => ({
        ... item,
        systemStock: products.find(p => p.id === item.id)?.stock || 0,
        difference: item.scannedQty - (products.find(p => p. id === item.id)?.stock || 0),
      }))
      .filter(d => d.difference !== 0);

    setProducts(products.map(p => {
      const scanned = scannedItems.find(s => s.id === p.id);
      return scanned ? { ...p, stock: scanned.scannedQty } : p;
    }));

    alert(`Inventaire complété!\n\nDifférences: ${discrepancies.length}`);
    setScannedItems([]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg p-6 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Camera size={28} /> Scanner d'Inventaire
          </h2>
          <p className="text-blue-100">Comptage automatique physique vs système</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-lg shadow-lg p-6">
          <BarcodeInput 
            value={scanBarcode}
            onChange={setScanBarcode}
            onSubmit={() => handleInventoryScan(scanBarcode)}
            availableBarcodes={products.map(p => p.barcode)}
          />
          <ScannedItemsList 
            items={scannedItems}
            products={products}
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 h-fit">
          <h3 className="font-bold mb-4">Résumé</h3>
          <div className="space-y-3">
            <div className="bg-blue-50 p-3 rounded">
              <p className="text-sm text-gray-600">Articles scannés</p>
              <p className="text-2xl font-bold text-blue-600">{scannedItems.length}</p>
            </div>
            <button
              onClick={finalizInventoryCount}
              disabled={scannedItems.length === 0}
              className="w-full bg-green-600 text-white font-bold py-3 rounded-lg hover:bg-green-700 disabled:bg-gray-400"
            >
              ✓ Finaliser l'inventaire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}