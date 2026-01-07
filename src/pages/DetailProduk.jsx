import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import LayoutUser from "../components/user/LayoutUser";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Skeleton } from "@/components/ui/skeleton";

export default function DetailProduk() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const [produk, setProduk] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProduk = async () => {
      try {
        const res = await fetch(`https://695c746e79f2f34749d43d5c.mockapi.io/product/${id}`);
        if (!res.ok) throw new Error("Produk tidak ditemukan");
        const data = await res.json();
        setProduk(data);
      } catch (err) {
        console.error(err);
        setError("Produk tidak ditemukan atau terjadi kesalahan.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduk();
  }, [id]);

  if (loading) {
    return (
      <LayoutUser>
        <div className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
          <Skeleton className="w-full h-72 rounded-xl" />
          <div className="space-y-4">
            <Skeleton className="h-6 w-1/3" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-12 w-32" />
          </div>
        </div>
      </LayoutUser>
    );
  }

  if (error || !produk) {
    return (
      <LayoutUser>
        <div className="text-center py-20">
          <p className="text-red-500 text-lg font-semibold">{error || "Produk tidak ditemukan."}</p>
          <Button className="mt-4" onClick={() => navigate(-1)}>Kembali</Button>
        </div>
      </LayoutUser>
    );
  }

  return (
    <LayoutUser>
      <div className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        
        {/* gambar */}
        <div className="bg-white rounded-xl p-6 shadow">
          <img
            src={produk.image || "/placeholder.png"}
            alt={produk.nama}
            className="w-full h-72 object-contain"
          />
        </div>

        {/* info */}
        <div>
          <span className="text-sm text-gray-500">
            {produk.kategori || "Kategori"}
          </span>

          <h1 className="text-3xl font-bold mt-2">
            {produk.nama}
          </h1>

          <p className="text-pink-600 text-2xl font-bold mt-4">
            Rp {Number(produk.harga).toLocaleString("id-ID")}
          </p>

          <p className="mt-4 text-sm font-semibold"> 
            Stok:<span className="ml-2 font-semibold text-gray-700">
              {produk.stock ?? 0} </span>
          </p>

          <p className="text-gray-600 mt-4">
            {produk.deskripsi || "Tidak ada deskripsi."}
          </p>

          <div className="flex gap-4 mt-6">
            <Button onClick={() => {
              addToCart(produk);
              navigate("/cart");
            }}>
              Tambah ke Cart
            </Button>

            <Button
              variant="outline"
              onClick={() => navigate(-1)}
            >
              Kembali
            </Button>
          </div>
        </div>
      </div>
    </LayoutUser>
  );
}
