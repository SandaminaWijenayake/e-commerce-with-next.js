// store/productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  id: number;
  name: string;
  brand: string;
  size: string;
  occasion: string;
  color: string;
  saleDiscount: number;
  price: number;
  rating: number;
  image: string;
};

type ProductState = {
  items: Product[];
};

const initialState: ProductState = {
  items: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
