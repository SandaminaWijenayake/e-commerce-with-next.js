import { configureStore } from "@reduxjs/toolkit";
import productReducer, {
  heroImagesReducer,
} from "@/features/products/productSlice";
import cartReducer from "@/features/cart/cartSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      products: productReducer,
      cart: cartReducer,
      heroImages: heroImagesReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
