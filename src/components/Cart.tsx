import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../lib/store";
import { removeFromCart, updateQuantity } from "../features/cart/cartSlice";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const cartItems = Object.values(items);

  const handleIncrease = (id: string, qty: number) => {
    dispatch(updateQuantity({ id, quantity: qty + 1 }));
  };

  const handleDecrease = (id: string, qty: number) => {
    if (qty > 1) {
      dispatch(updateQuantity({ id, quantity: qty - 1 }));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className=" lg:w-2/3 mx-auto">
      {cartItems.length === 0 ? (
        <p className="py-10 text-center text-gray-500">Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="
              flex flex-col sm:flex-col lg:flex-row 
              items-start lg:items-center 
              justify-between py-4 border-b w-full
            "
          >
            <div className="flex-1 order-2 lg:order-1 text-center lg:text-left mb-4 lg:mb-0 m-auto">
              <div className="font-medium text-lg mb-2">{item.name}</div>

              <div className="flex items-center mb-2">
                <button
                  onClick={() => handleDecrease(item.id, item.quantity)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  –
                </button>
                <span className="mx-2 w-6 text-center">{item.quantity}</span>
                <button
                  onClick={() => handleIncrease(item.id, item.quantity)}
                  className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  +
                </button>
              </div>

              <div className="font-semibold">
                ₹{(item.price * item.quantity).toFixed(2)}
              </div>
              <div
                onClick={() => handleRemove(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </div>
            </div>

            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="
                  order-1 lg:order-2 
                  w-full sm:w-full
                  object-cover rounded 
                  mb-4 lg:mb-0 md:w-8/12  m-auto lg:w-1/5
                "
              />
            )}
          </div>
        ))
      )}
    </div>
  );
}
