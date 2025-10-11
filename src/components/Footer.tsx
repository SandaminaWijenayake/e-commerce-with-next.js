"use client";
// import Link from "next/link";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div>
      <footer className="shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">ShopCo</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Discover quality products at unbeatable prices. We're committed
                to bringing you the best shopping experience with curated
                collections and exceptional service.
              </p>
              <div className="flex space-x-4 ">
                <a
                  href="#"
                  className="hover:text-[#f97415] transition-colors duration-200 text-gray-500 rounded p-1"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="hover:text-[#f97415] transition-colors duration-20 text-gray-500   rounded p-1"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="hover:text-[#f97415] transition-colors duration-200 text-gray-500  rounded p-1"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2 ">
                {[
                  { href: "/", label: "Home" },
                  { href: "/categories", label: "Categories" },
                  { href: "/about", label: "About Us" },
                  { href: "/contact", label: "Contact" },
                  { href: "/faq", label: "FAQ" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-500 hover:text-accent-warm transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold ">Customer Service</h3>
              <ul className="space-y-2 text-gray-500 ">
                {[
                  { href: "/shipping", label: "Shipping Info" },
                  { href: "/returns", label: "Returns" },
                  { href: "/warranty", label: "Warranty" },
                  { href: "/privacy", label: "Privacy Policy" },
                  { href: "/terms", label: "Terms of Service" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-gray-500  hover:text-accent-warm transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                Stay Connected
              </h3>
              <p className="text-gray-500  text-sm">
                Subscribe to get special offers and updates.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div>
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 w-full rounded-2xl border-[1px] border-gray-200 py-3 px-4 text-sm"
                    required
                  />
                </div>
                <button type="submit" className="w-full btn text-sm py-2">
                  Subscribe
                </button>
              </form>

              <div className="space-y-2 pt-4">
                <div className="flex items-center space-x-2 text-gray-500  text-sm">
                  <Phone className="h-4 w-4" />
                  <span>+94 71 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500  text-sm">
                  <Mail className="h-4 w-4" />
                  <span>hello@shopco.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500  text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>
                    123 Colombo 03 St, Malwaththa Read, Colombo Sri Lanka
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 text-center">
            <p className="text-gray-500  text-sm">
              © 2025 ShopCo. All rights reserved. built by Sandamina.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
