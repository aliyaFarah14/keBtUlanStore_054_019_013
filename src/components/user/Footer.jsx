const Footer = () => {
  return (
    <footer className="mt-32 bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand & Deskripsi */}
        <div>
          <h1 className="text-2xl font-bold mb-3">Kebtulan Store</h1>
          <p className="text-gray-600">
            Toko terpercaya untuk gadget, aksesoris, dan kebutuhan teknologi keluarga Anda.
          </p>
        </div>

        {/* Navigasi */}
        <div>
          <h3 className="font-semibold mb-3">Menu</h3>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#home">Home</a></li>
            <li><a href="#produk">Produk</a></li>
            <li><a href="#keranjang">Keranjang</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="font-semibold mb-3">Kontak</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Email: support@kebtulanshop.com</li>
            <li>WhatsApp: +62 812-5667-7890</li>
            <li>Yogyakarta, Indonesia</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t py-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Kebtulan Store — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
