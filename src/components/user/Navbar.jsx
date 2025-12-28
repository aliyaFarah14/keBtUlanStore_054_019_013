import React, { useState, useEffect } from "react";
import { Home, ShoppingCart, Package } from "lucide-react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [cartPulse, setCartPulse] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCartClick = () => {
    setCartPulse(true);
    setTimeout(() => setCartPulse(false), 300);
  };

  return (
    <nav
      className={`sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0
      ${scrolled ? "bg-pink-900 shadow-xl" : "bg-pink-800"}
      text-pink-50`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Brand */}
        <h1 className="text-xl font-extrabold tracking-wide cursor-pointer">
          ke<span className="text-pink-300">Bt</span>Ulan Store
        </h1>

        {/* Menu */}
        <div className="flex items-center space-x-8">

          {/* Home */}
          <button
            onClick={() => setActive("Home")}
            className={`flex items-center space-x-1 relative transition
              ${active === "Home" ? "text-pink-300" : "hover:text-pink-200"}`}
          >
            <Home size={18} />
            <span>Home</span>

            {active === "Home" && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-pink-300 rounded-full" />
            )}
          </button>

          {/* Product */}
          <button
            onClick={() => setActive("Product")}
            className={`flex items-center space-x-1 relative transition
              ${active === "Product" ? "text-pink-300" : "hover:text-pink-200"}`}
          >
            <Package size={18} />
            <span>Product</span>

            {active === "Product" && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-pink-300 rounded-full" />
            )}
          </button>

          {/* Cart */}
          <button
            onClick={() => {
              setActive("Cart");
              handleCartClick();
            }}
            className={`relative flex items-center space-x-1 transition
              ${active === "Cart" ? "text-pink-300" : "hover:text-pink-200"}`}
          >
            <ShoppingCart
              size={18}
              className={cartPulse ? "animate-bounce" : ""}
            />
            <span>Cart</span>

            <span className="absolute -top-2 -right-3 bg-pink-300 text-pink-900 text-xs font-bold px-2 py-0.5 rounded-full">
              {/* jumlah item bisa ditempatkan di sini */}
            </span>

            {active === "Cart" && (
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-pink-300 rounded-full" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
