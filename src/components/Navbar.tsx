"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppSelector } from "@/lib/hooks";
import { selectCartItems } from "@/features/cart/selectors";
import { RootState } from "@/lib/store";
import { shallowEqual } from "react-redux";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const cartItems = useAppSelector(
    (state: RootState) => selectCartItems(state),
    shallowEqual
  );
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white  shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between font-medium text-black items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl font-bold text-primary hover:text-accent-warm transition-colors duration-200"
            >
              ShopCo
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="link-nav px-3 py-2"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center">
            <Link
              href="/cart"
              className="relative p-2 text-foreground hover:text-accent-warm transition-colors duration-200 focus-ring rounded-lg"
              aria-label={`Shopping cart with ${totalCount} items`}
            >
              <ShoppingCartIcon className="h-6 w-6" />
              {totalCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-warm text-accent-warm-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalCount > 99 ? "99+" : totalCount}
                </span>
              )}
            </Link>

            <button
              className="md:hidden ml-4 p-2 text-foreground hover:text-accent-warm transition-colors duration-200 focus-ring rounded-lg"
              onClick={() => setIsMobileMenuOpen((o) => !o)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-border">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 text-base hover:text-accent-warm hover:bg-muted rounded-lg transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
