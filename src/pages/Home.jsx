// Home.jsx
import { useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/user/ProductCard";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";

export default function Home() {
  const [products] = useState(productsData);

  return (
    <>
      {/* Navbar di paling atas */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-pink-300 py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center animate__animated animate__fadeInUp animate__delay-1s">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-500 mb-4">
            Temukan Produk yang Keluarga Anda Butuhkan
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Lengkapi kebutuhan teknologi Anda dengan produk berkualitas dan harga terjangkau
          </p>
        </div>
      </section>

      {/* Produk Section */}
      <main className="py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((item, index) => (
              <div
                key={item.id}
                className="animate__animated animate__fadeInUp"
                data-aos="fade-up"
                data-aos-delay={index * 100} 
                data-aos-once="true"
              >
                <ProductCard
                  nama={item.nama}
                  harga={item.harga}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}