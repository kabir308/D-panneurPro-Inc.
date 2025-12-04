import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
});

// Products API
export const productAPI = {
  getAll: () => apiClient.get('/products'),
  getById: (id) => apiClient. get(`/products/${id}`),
  create: (data) => apiClient.post('/products', data),
  update: (id, data) => apiClient. put(`/products/${id}`, data),
  delete: (id) => apiClient.delete(`/products/${id}`),
  getLowStock: () => apiClient.get('/products/low-stock'),
};

// Inventory API
export const inventoryAPI = {
  getMovements: () => apiClient.get('/inventory/movements'),
  adjust: (data) => apiClient.post('/inventory/adjust', data),
  count: (data) => apiClient. post('/inventory/count', data),
};

// Sales API
export const salesAPI = {
  checkout: (data) => apiClient. post('/sales/checkout', data),
  getHistory: () => apiClient.get('/sales/history'),
  getById: (id) => apiClient. get(`/sales/${id}`),
};

// AI API
export const aiAPI = {
  runPredictions: () => apiClient.post('/ai/predictions'),
  getRecommendations: () => apiClient.get('/ai/recommendations'),
};

export default apiClient;