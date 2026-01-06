import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://695c746e79f2f34749d43d5c.mockapi.io/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal ambil data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-10">Loading produk...</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          nama={item.nama}
          harga={item.harga}
          image={item.image}
          kategori={item.kategori}
          onDetail={() => console.log("Detail:", item)}
        />
      ))}
    </div>
  );
};

export default ProductList;
