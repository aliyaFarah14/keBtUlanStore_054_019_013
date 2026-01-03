import { useState } from "react";
import productsData from "../data/products";
import AdminHeader from "../components/admin/AdminHeader";
import DataTable from "../components/admin/DataTable";
import ConfirmDeleteDialog from "../components/admin/ConfirmDeleteDialog";

export default function AdminDashboard() {
  const [products, setProducts] = useState(productsData);
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const openDeleteDialog = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleDelete = () => {
    setProducts((prev) => prev.filter((item) => item.id !== selectedId));
    setOpen(false);
    setSelectedId(null);
  };

  return (
    <div className="min-h-screen bg-pink-300 p-6">
      <AdminHeader />

      <div className="max-w-7xl mx-auto mt-6">
        <DataTable products={products} onDelete={openDeleteDialog} />
      </div>

      <ConfirmDeleteDialog
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
}
