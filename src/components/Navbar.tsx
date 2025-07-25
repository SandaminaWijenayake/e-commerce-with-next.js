"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { selectCartItems } from "@/features/cart/selectors";
const variants = {
  init: {
    scaleX: 0.9,
    borderRadius: 12,
    y: 16,
    transformOrigin: "center top",
  },
  sticky: {
    scaleX: 1,
    borderRadius: 0,
    y: 0,
    transformOrigin: "center top",
  },
};

export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  // Grab all items in cart
  const cartItems = useSelector((state: RootState) => selectCartItems(state));
  // Compute total quantity
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handler = () => setSticky(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.div
      initial="init"
      animate={sticky ? "sticky" : "init"}
      variants={variants}
      transition={{ type: "spring", stiffness: 250, damping: 30 }}
      className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow-md"
      style={{ willChange: "transform, border-radius" }}
    >
      <nav className="mx-auto w-full max-w-[90%] flex justify-between items-center p-4">
        <Link href="/">
          <h2 className="cursor-pointer font-semibold text-xl">FitFlux</h2>
        </Link>
        <ul className="flex gap-6">
          {/* <Link href="/">
            <li className="cursor-pointer hover:underline">Home</li>
          </Link> */}
          <Link href="/cart">
            <div className="cursor-pointer hover:underline flex items-center gap-1 ">
              <ShoppingCartIcon className="h-6 w-6" />

              {totalCount > 0 && (
                <span
                  className="
                  
                  bg-red-500 text-white text-xs font-semibold 
                  rounded-full h-5 w-5 flex items-center justify-center
                "
                >
                  {totalCount}
                </span>
              )}
            </div>
          </Link>
        </ul>
      </nav>
    </motion.div>
  );
}
