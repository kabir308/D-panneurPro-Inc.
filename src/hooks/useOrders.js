import { useState, useCallback } from 'react';
import { ordersAPI } from '../services/api/ordersAPI';

export const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    try {
      const data = await ordersAPI.getHistory();
      setOrders(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const placeOrder = useCallback(async (orderData) => {
    setLoading(true);
    try {
      const newOrder = await ordersAPI.create(orderData);
      setOrders([newOrder, ...orders]);
      setError(null);
      return newOrder;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [orders]);

  const cancelOrder = useCallback(async (orderId) => {
    try {
      await ordersAPI. cancel(orderId);
      setOrders(orders.map(o => o.id === orderId ? { ...o, status: 'Cancelled' } : o));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, [orders]);

  const rateOrder = useCallback(async (orderId, rating, review) => {
    try {
      const up