import { useState, useEffect } from "react";
import { useProducts } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/admin/AdminHeader";
import DataTable from "../components/admin/DataTable";
import ConfirmDeleteDialog from "../components/admin/ConfirmDeleteDialog";

export default function AdminDashboard() {
  const { products, deleteProduct, setAllProducts } = useProducts(); // ambil context
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true); // untuk loading state
  const navigate = useNavigate();

  // Fetch data dari API saat pertama kali load
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://695c746e79f2f34749d43d5c.mockapi.io/product");
        const data = await res.json();
        setAllProducts(data); // simpan di context
        setLoading(false);
      } catch (err) {
        console.error("Gagal ambil data:", err);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setAllProducts]);

  const openDeleteDialog = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleDelete = async () => {
    try {
      // Hapus di MockAPI
      await fetch(`https://695c746e79f2f34749d43d5c.mockapi.io/product/${selectedId}`, {
        method: "DELETE",
      });
      deleteProduct(selectedId); // hapus juga di state/context
      setOpen(false);
      setSelectedId(null);
    } catch (err) {
      console.error("Gagal hapus produk:", err);
    }
  };

  const handleEdit = (id) => {
    navigate(`/admin/edit-produk/${id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-lg">
        Loading data produk...
      </div>
    );
  }

  return (
    <div className="bg-pink-300 p-6 min-h-screen">
      <AdminHeader />

      <div className="max-w-7xl mx-auto mt-6 overflow-x-auto">
        <DataTable
          products={products}
          onDelete={openDeleteDialog}
          onEdit={handleEdit}
        />
      </div>

      <ConfirmDeleteDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
