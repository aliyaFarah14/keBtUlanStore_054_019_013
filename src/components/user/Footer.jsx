import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-32 bg-pink-800 border-t text-gray-50">
      <div className="max-w-4xl mx-auto bg-pink-800 rounded-xl p-8 md:p-12 
      grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-10 md:gap-16">

        <div className="flex flex-col h-full">
          <h1 className="text-2xl font-bold mb-4">
            ke<span className="text-pink-300">Bt</span>Ulan Store
          </h1>
          <p className="text-gray-300">
            Toko terpercaya untuk perabotan anak kos ataupun rumah keluarga Anda.
          </p>
        </div>

        {/* Navigasi */}
        <div className="flex flex-col h-full">
          <h3 className="font-semibold mb-4">Menu</h3>

          <ul className="space-y-2 text-gray-300">
            <li>
              <NavLink to="/" className="hover:text-pink-400 transition">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className="hover:text-pink-400 transition">
                Product
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className="hover:text-pink-400 transition">
                Cart
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Kontak */}
        <div className="flex flex-col h-full md:pl-2">
          <h3 className="font-semibold mb-4">Kontak</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Email: kebtulanshop@gmail.com</li>
            <li>WhatsApp: +62 812-5667-1502</li>
            <li>Yogyakarta, Indonesia</li>
          </ul>
        </div>
      </div>

      <div className="border-t py-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} keBtUlan Store — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
