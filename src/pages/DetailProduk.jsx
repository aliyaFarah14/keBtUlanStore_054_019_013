import { useParams, useNavigate } from "react-router-dom";
import productsData from "../data/products";
import LayoutUser from "../components/user/LayoutUser";
import { Button } from "@/components/ui/button";

export default function DetailProduk() {
  const { id } = useParams();
  const navigate = useNavigate();

  const produk = productsData.find(
    (item) => item.id.toString() === id
  );

  if (!produk) {
    return (
      <LayoutUser>
        <p className="text-center text-red-500">
          Produk tidak ditemukan
        </p>
      </LayoutUser>
    );
  }

  return (
    <LayoutUser>
      <div className="max-w-4xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        
        {/* Gambar */}
        <div className="bg-white rounded-xl p-6 shadow">
          <img
            src={produk.image}
            alt={produk.nama}
            className="w-full h-72 object-contain"
          />
        </div>

        {/* Info */}
        <div>
          <span className="text-sm text-gray-500">
            {produk.kategori}
          </span>

          <h1 className="text-3xl font-bold mt-2">
            {produk.nama}
          </h1>

          <p className="text-pink-600 text-2xl font-bold mt-4">
            Rp {produk.harga.toLocaleString("id-ID")}
          </p>

          <p className="text-gray-600 mt-4">
            {produk.deskripsi}
          </p>

          <div className="flex gap-4 mt-6">
            <Button onClick={() => navigate("/cart")}>
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
