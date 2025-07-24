"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
            <li className="cursor-pointer hover:underline">Cart</li>
          </Link>
        </ul>
      </nav>
    </motion.div>
  );
}
