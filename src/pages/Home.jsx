import { useState } from "react";
import productsData from "../data/products";
import ProductCard from "../components/user/ProductCard";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";

export default function Home() {
  const [products] = useState(productsData);

  return (
    <>
      <Navbar />

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

      <Footer />
    </>
  );
}