import { useState } from 'react';

export const useProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Lait 2L', barcode: '012345001', category: 'Laiterie', price: 4.99, stock: 12, minStock: 5, supplier: 'Lactalis', margin: 0.25, costPrice: 3.74, velocity: 8, trend: 'up' },
    { id: 2, name: 'Pain blanc', barcode: '012345002', category: 'Boulangerie', price: 2.49, stock: 8, minStock: 3, supplier: 'Local', margin: 0.35, costPrice: 1.84, velocity: 5, trend: 'stable' },
    { id: 3, name: 'Chips BBQ', barcode: '012345003', category: 'Snacks', price: 1.99, stock: 25, minStock: 10, supplier: 'Frito', margin: 0.40, costPrice: 1.19, velocity: 12, trend: 'up' },
    { id: 4, name: 'Coke 2L', barcode: '012345004', category: 'Boissons', price: 3.49, stock: 3, minStock: 8, supplier: 'Coca', margin: 0.22, costPrice: 2.72, velocity: 15, trend: 'down' },
    { id: 5, name: 'Café Melitta', barcode: '012345005', category: 'Café', price: 8.99, stock: 3, minStock: 5, supplier: 'Melitta', margin: 0.32, costPrice: 6.83, velocity: 3, trend: 'down' },
  ]);

  const updateProduct = (id, updates) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const getLowStockItems = () => products.filter(p => p.stock <= p.minStock);

  const getCategories = () => ['Tous', ...new Set(products.map(p => p.category))];

  return { products, setProducts, updateProduct, getLowStockItems, getCategories };
};