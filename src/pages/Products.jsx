import productsData from "../data/products";
import ProductCard from "../components/user/ProductCard";
import LayoutUser from "../components/user/LayoutUser";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();

  return (
    <LayoutUser>
      <section className="px-6 py-16">
        <h1 className="text-3xl font-bold text-pink-600 mb-8">
          Semua Produk
        </h1>

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
              onTambah={() => navigate("/cart")}
            />
          ))}
        </div>
      </section>
    </LayoutUser>
  );
}
