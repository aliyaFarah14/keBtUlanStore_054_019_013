import { NavLink } from "react-router-dom";
import { Home, ShoppingCart, Boxes, User, Menu, X } from "lucide-react";
import CartBadge from "./CartBadge";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const baseClass = "flex items-center gap-2 transition hover:text-pink-200";
  const activeClass = "text-pink-300";

  return (
    <nav className="bg-pink-800 text-pink-50 fixed w-full top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center">

        {/* Logo */}
        <NavLink
          to="/" className="text-xl font-extrabold tracking-wide shrink-0">
          ke<span className="text-pink-300">Bt</span>Ulan Store
        </NavLink>

        {/* Tampilan menu untuk desktop */}
        <div className="hidden md:flex ml-auto space-x-8">
          <NavLink to="/" end className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`}>
            <Home size={18} />
            <span>Home</span>
          </NavLink>

          <NavLink to="/products" className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`}>
            <Boxes size={18} />
            <span>Product</span>
          </NavLink>

          <NavLink to="/cart" className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`}>
            <div className="relative flex items-center gap-2">
              <ShoppingCart size={18} />
              <span>Cart</span>
              <CartBadge />
            </div>
          </NavLink>

          <NavLink to="/login" className={({ isActive }) =>
            `${baseClass} ${isActive ? activeClass : ""}`}>
            <User size={18} />
            <span>Login</span>
          </NavLink>
        </div>

        {/* Tampilan menu untuk mobile */}
        <button
          className="md:hidden ml-auto p-2 rounded-md hover:bg-pink-700 transition"
          onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-pink-800 px-6 py-4 flex flex-col space-y-4">
          <NavLink onClick={() => setOpen(false)} to="/" end className={baseClass}>
            <Home size={18} />
            <span>Home</span>
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/products" className={baseClass}>
            <Boxes size={18} />
            <span>Product</span>
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/cart" className={baseClass}>
            <div className="relative flex items-center gap-2">
              <ShoppingCart size={18} />
              <span>Cart</span>
              <CartBadge />
            </div>
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/login" className={baseClass}>
            <User size={18} />
            <span>Login</span>
          </NavLink>
        </div>
      )}
    </nav>
  );
}
