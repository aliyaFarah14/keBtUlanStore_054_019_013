// Home.jsx
import { useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/user/ProductCard";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";

export default function Home() {
  const [products] = useState(productsData); // bisa juga pakai setProducts jika nanti mau update

  return (
    <>
    <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <h1 className="text-5xl/tight font-bold mb-6">Temukan Produk yang Keluarga Anda Butuhkan</h1>
          <p className="text-gray-600 text-xl mb-8">Lengkapi kebutuhan teknologi Anda dengan produk berkualitas dan harga terjangkau</p>
    </div>

      <Navbar />

      <main className="min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              nama={item.nama}
              harga={item.harga}
              image={item.image}
            />
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}