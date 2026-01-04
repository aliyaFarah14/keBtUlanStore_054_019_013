import { useState } from "react";
import { useNavigate } from "react-router-dom";
import productsData from "../data/products";
import ProductCard from "../components/user/ProductCard";
import LayoutUser from "../components/user/LayoutUser";

export default function Home() {
  const [products] = useState(productsData);
  const navigate = useNavigate();
  const featuredProducts = products.slice(0, 4);

  return (
    <LayoutUser>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-pink-50 to-pink-400 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Temukan Perabotan Tempat Tinggal Anda
            </h1>

            <p className="text-gray-600 mb-10 text-lg">
              Lengkapi kebutuhan rumah Anda dengan produk berkualitas dan harga terjangkau di keBtUlan Store.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => navigate("/products")}
                className="bg-pink-600 text-white px-5 py-3 rounded-lg font-semibold shadow hover:bg-pink-500 transition">
                Lihat Produk
              </button>

              <button
                onClick={() => navigate("/cart")}
                className="border border-gray-300 px-5 py-3 rounded-lg font-semibold bg-white/70 hover:bg-gray-100 transition">
                Keranjang
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="bg-white rounded-2xl shadow-xl p-4">
            <img
              src="https://ix-marketing.imgix.net/how-it-works_design_auto-enhance2.png?auto=format,compress&w=1946"
              alt="Store Showcase"
              className="rounded-xl object-cover w-full h-[280px]"/>
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-16 border-t bg-gradient-to-r from-orange-50 via-pink-100 to-violet-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          <div>
            <div className="w-14 h-14 mx-auto bg-pink-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">📦</span>
            </div>
            <h3 className="font-semibold text-lg mb-1">Produk Berkualitas</h3>
            <p className="text-gray-600 text-sm">
              Hanya menjual produk original dengan kualitas terjamin
            </p>
          </div>

          <div>
            <div className="w-14 h-14 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="font-semibold text-lg mb-1">Pengiriman Cepat</h3>
            <p className="text-gray-600 text-sm">
              Proses pengiriman cepat ke seluruh Indonesia
            </p>
          </div>

          <div>
            <div className="w-14 h-14 mx-auto bg-violet-100 rounded-full flex items-center justify-center mb-3">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="font-semibold text-lg mb-1">Garansi Resmi</h3>
            <p className="text-gray-600 text-sm">
              Semua produk dilengkapi dengan garansi resmi
            </p>
          </div>

        </div>
      </section>

      {/* PRODUK */}
      <main className="max-w-7xl mx-auto px-6 pt-6 pb-20">
        <h2 className="text-2xl text-center font-bold mt-6 mb-6">Produk Pilihan</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {featuredProducts.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              nama={item.nama}
              harga={item.harga}
              image={item.image}
              kategori={item.kategori}
              onDetail={() => navigate(`/products/${item.id}`)}
              onTambah={() => navigate("/cart")}/>
          ))}
        </div>

        {/* CTA – Lihat Semua Produk */}
        <div className="mt-10 flex justify-center">
          <button onClick={() => navigate("/products")}
          className="bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold shadow 
          hover:bg-pink-500 active:scale-95 transition w-full sm:w-auto text-center"> 
          Lihat Semua Produk →
          </button>
        </div>
      </main>

    </LayoutUser>
  );
}