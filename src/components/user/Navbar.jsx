import { NavLink } from "react-router-dom";
import { Home, ShoppingCart, Package } from "lucide-react";

export default function Navbar() {
  const baseClass =
    "flex items-center space-x-1 relative transition hover:text-pink-200";

  const activeClass = "text-pink-300";

  return (
    <nav className="bg-pink-800 text-pink-50 fixed w-full top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Brand */}
        <NavLink to="/" className="text-xl font-extrabold tracking-wide">
          ke<span className="text-pink-300">Bt</span>Ulan Store
        </NavLink>

        {/* Menu */}
        <div className="flex space-x-8">

          {/* HOME */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : ""}`
            }
          >
            <Home size={18} />
            <span>Home</span>
          </NavLink>

          {/* PRODUCT */}
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : ""}`
            }
          >
            <Package size={18} />
            <span>Product</span>
          </NavLink>

          {/* CART */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : ""}`
            }
          >
            <ShoppingCart size={18} />
            <span>Cart</span>
          </NavLink>

        </div>
      </div>
    </nav>
  );
}
