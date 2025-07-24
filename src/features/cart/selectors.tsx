import { RootState } from "@/lib/store";

export const selectCartItems = (state: RootState) =>
  Object.values(state.cart.items);

export const selectCartTotal = (state: RootState) =>
  Object.values(state.cart.items).reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
