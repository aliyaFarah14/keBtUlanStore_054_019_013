import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader";
import ProductForm from "../components/admin/ProductForm";
import { useProducts } from "../context/ProductContext";

export default function TambahProduk() {
  const { addProduct } = useProducts();
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleAddProduct = (product) => {
    addProduct(product);
    setSuccess(true);
  };

  const handleTambahLagi = () => setSuccess(false);
  const handleSelesai = () => {
    setSuccess(false);
    navigate("/admin-dashboard");
  };

  return (
    <div className="min-h-screen bg-pink-300 p-6">
      <AdminHeader />
      <div className="max-w-2xl mx-auto mt-6 relative">
        <h2 className="text-xl font-bold mb-4">Tambah Produk Baru</h2>
        <button
          type="button"
          onClick={() => navigate("/admin-dashboard")}
          className="mb-4 bg-red-200 hover:bg-pink-400 text-red-800 px-4 py-2 rounded"
        >
          Kembali
        </button>

        <ProductForm onAdd={handleAddProduct} />

        {success && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-6 rounded shadow-lg border border-pink-400 w-80 text-center">
            <p className="mb-4 font-bold text-pink-600">Produk berhasil ditambahkan!</p>
            <div className="flex justify-between gap-4">
              <button
                onClick={handleTambahLagi}
                className="flex-1 bg-pink-300 hover:bg-pink-500 text-white py-2 rounded"
              >
                Tambah Lagi
              </button>
              <button
                onClick={handleSelesai}
                className="flex-1 bg-pink-300 hover:bg-pink-500 text-white py-2 rounded"
              >
                Selesai
              </button>
            </div>
          </div>
        )}
        {success && <div className="fixed inset-0 bg-black opacity-30 z-40"></div>}
      </div>
    </div>
  );
}
