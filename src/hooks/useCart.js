import { useContext, useCallback, useReducer } from 'react';

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
        };
      }
      return { ...state, items: [... state.items, { ...action.payload, qty: 1 }] };

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    case 'UPDATE_QTY':
      if (action.payload.qty <= 0) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id)
        };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        )
      };

    case 'CLEAR_CART':
      return { items: [], selectedStore: null };

    case 'SET_STORE':
      return { ...state, selectedStore: action.payload };

    default:
      return state;
  }
};

export const useCart = () => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    selectedStore: null
  });

  const addToCart = useCallback((product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  }, []);

  const removeFromCart = useCallback((productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  }, []);

  const updateQty = useCallback((productId, qty) => {
    dispatch({ type: 'UPDATE_QTY', payload: { id: productId, qty } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const setStore = useCallback((store) => {
    dispatch({ type: 'SET_STORE', payload: store });
  }, []);

  const cartTotal = state.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = state.items.length;
  const totalQty = state.items.reduce((sum, item) => sum + item.qty, 0);

  return {
    items: state.items,
    selectedStore: state.selectedStore,
    cartTotal,
    itemCount,
    totalQty,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    setStore
  };
};