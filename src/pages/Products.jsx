import productsData from "../data/products";
import ProductCard from "../components/user/ProductCard";
import LayoutUser from "../components/user/LayoutUser";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Products() {
  const navigate = useNavigate();

  return (
    <LayoutUser>
      <section className="px-6 py-16 bg-gradient-to-b from-pink-50 via-pink-500 to-pink-50">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-10">
          Selamat Datang di Halaman Produk Kami
        </h1>
        <p className="text-gray-600 mb-10 text-center text-lg">
          Mari belanja produk pilihan untuk kenyamanan keluarga Anda, atau kebutuhan Anda yang belum berkeluarga, semua tersedia dalam satu tempat.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((item) => (
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
      </section>
    </LayoutUser>
  );
}