import { NavLink } from "react-router-dom";
import { Home, ShoppingCart, Boxes, User } from "lucide-react";
import CartBadge from "./CartBadge";

export default function Navbar() {
  const baseClass =
    "flex items-center gap-2 relative transition hover:text-pink-200";
  const activeClass = "text-pink-300";

  return (
    <nav className="bg-pink-800 text-pink-50 fixed w-full top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <NavLink to="/" className="text-xl font-extrabold tracking-wide">
          ke<span className="text-pink-300">Bt</span>Ulan Store
        </NavLink>

        {/* Menu */}
        <div className="flex space-x-8">

          {/* Home */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : ""}`
            }>
            <Home size={18} />
            <span>Home</span>
          </NavLink>

          {/* Product */}
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : ""}`
            }>
            <Boxes size={18} />
            <span>Product</span>
          </NavLink>

          {/* Cart */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : ""}`
            }>
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
      </div>
    </nav>
  );
}