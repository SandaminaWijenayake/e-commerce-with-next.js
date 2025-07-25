import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
};

type CartState = {
  items: Record<string, CartItem>;
};

const initialState: CartState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id, ...rest } = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += rest.quantity;
      } else {
        state.items[id] = { id, ...rest };
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      delete state.items[action.payload];
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items[action.payload.id];
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
