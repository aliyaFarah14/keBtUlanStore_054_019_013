import { useState, useContext } from "react"; // ✅ tambahkan useState
import { useNavigate } from "react-router-dom"; // ✅ untuk navigasi
import AdminHeader from "../components/admin/AdminHeader";
import ProductForm from "../components/admin/ProductForm";
import { ProductContext } from "../context/ProductContext";

export default function TambahProduk() {
  const { addProduct } = useContext(ProductContext);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // ✅ hook navigasi

  const handleAddProduct = (product) => {
    addProduct(product);
    setSuccess(true); // tampilkan notifikasi
    setTimeout(() => setSuccess(false), 3000); // hilang 3 detik
  };

  return (
    <div className="min-h-screen bg-pink-300 p-6">
      <AdminHeader />
      <div className="max-w-2xl mx-auto mt-6 relative">
        <h2 className="text-xl font-bold mb-4">Tambah Produk Baru</h2>

        {/* Tombol Kembali */}
        <button
          type="button"
          onClick={() => navigate("/admin-dashboard")}
          className="mb-4 bg-red-200 hover:bg-pink-400 text-red-800 px-4 py-2 rounded"
        >
          Kembali
        </button>

        {/* Form Tambah Produk */}
        <ProductForm onAdd={handleAddProduct} />

        {/* Notifikasi sukses */}
        {success && (
          <div className="fixed top-4 right-4 bg-pink-500 text-white px-4 py-2 rounded shadow-lg z-50">
            Produk berhasil ditambahkan!
          </div>
        )}
      </div>
    </div>
  );
}
