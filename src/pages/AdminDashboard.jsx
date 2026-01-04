import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigate
import AdminHeader from "../components/admin/AdminHeader";
import DataTable from "../components/admin/DataTable";
import ConfirmDeleteDialog from "../components/admin/ConfirmDeleteDialog";
import { ProductContext } from "../context/ProductContext";

export default function AdminDashboard() {
  const { products, deleteProduct } = useContext(ProductContext);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const navigate = useNavigate(); // untuk navigasi ke halaman edit

  const openDeleteDialog = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleDelete = () => {
    deleteProduct(selectedId);
    setOpen(false);
    setSelectedId(null);
  };

  // ✅ handler untuk tombol edit
  const handleEdit = (id) => {
    navigate(`/admin/edit-produk/${id}`);
  };

  return (
    <div className="min-h-screen bg-pink-300 p-6">
      <AdminHeader />

      <div className="max-w-7xl mx-auto mt-6">
        {/* TABEL */}
        <DataTable
          products={products}
          onDelete={openDeleteDialog}
          onEdit={handleEdit} // pass prop baru
        />
      </div>

      {/* DIALOG */}
      <ConfirmDeleteDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}