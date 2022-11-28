import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../type';

interface CartRemoveState {
  id: number | undefined;
}

const initialState: Product[] = [];

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      if (
        state.length === 0 ||
        state.filter((item) => item.id === action.payload.id).length === 0
      ) {
        state.push(action.payload);
      }
    },
    removeToCart: (state, action: PayloadAction<CartRemoveState>) => {
      if (state.some((item) => item.id === action.payload.id)) {
        return (state = state.filter((item) => item.id !== action.payload.id));
      }
    },
  },
});

export const { addToCart, removeToCart } = cartSlice.actions;
